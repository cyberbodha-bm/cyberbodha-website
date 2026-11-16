"""Markdown to DOCX renderer for the CyberBodha campaign documents.

Supports the subset of markdown these docs use: #/##/### headings, tables, fenced code blocks,
block quotes, bullet lists, check lists and numbered lists, with **bold** and `code` inline.

Usage from another script:

    from docx_renderer import render
    render("cyberbodha-master-playbook.md", "cyberbodha-master-playbook.docx", metadata={...})

Requires: pip install python-docx
"""
import re
from datetime import datetime
from pathlib import Path

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

ACCENT = RGBColor(0x1F, 0x4E, 0x79)
CODE_BG = "F2F2F2"
TABLE_HEADER_FILL = "1F4E79"


def shade(paragraph, fill):
    p_pr = paragraph._p.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:fill"), fill)
    p_pr.append(shd)


def add_inline(paragraph, text, bold=False):
    """Handle **bold** and `code` inline markup."""
    for token in re.split(r"(\*\*.+?\*\*|`[^`]+`)", text):
        if not token:
            continue
        if token.startswith("**") and token.endswith("**"):
            run = paragraph.add_run(token[2:-2])
            run.bold = True
        elif token.startswith("`") and token.endswith("`"):
            run = paragraph.add_run(token[1:-1])
            run.font.name = "Consolas"
            run.font.size = Pt(9)
        else:
            run = paragraph.add_run(token)
            if bold:
                run.bold = True
    return paragraph


def build_table(doc, rows):
    header, body = rows[0], rows[1:]
    table = doc.add_table(rows=1, cols=len(header))
    table.style = "Table Grid"
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = True

    for i, cell_text in enumerate(header):
        cell = table.rows[0].cells[i]
        cell.text = ""
        para = cell.paragraphs[0]
        run = para.add_run(cell_text.replace("**", ""))
        run.bold = True
        run.font.size = Pt(9)
        run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        tc_pr = cell._tc.get_or_add_tcPr()
        shd = OxmlElement("w:shd")
        shd.set(qn("w:val"), "clear")
        shd.set(qn("w:fill"), TABLE_HEADER_FILL)
        tc_pr.append(shd)

    for row in body:
        cells = table.add_row().cells
        for i, value in enumerate(row[: len(header)]):
            cells[i].text = ""
            para = cells[i].paragraphs[0]
            add_inline(para, value)
            for run in para.runs:
                run.font.size = Pt(9)

    doc.add_paragraph()
    return table


def add_footer(doc, text):
    section = doc.sections[0]
    para = section.footer.paragraphs[0]
    para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = para.add_run(f"{text} · Page ")
    run.font.size = Pt(8)
    run.font.color.rgb = RGBColor(0x77, 0x77, 0x77)

    fld = OxmlElement("w:fldSimple")
    fld.set(qn("w:instr"), "PAGE")
    para._p.append(fld)


def _style_document(doc):
    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(10.5)
    normal.paragraph_format.space_after = Pt(6)

    for name, size in (("Heading 1", 20), ("Heading 2", 14), ("Heading 3", 12)):
        style = doc.styles[name]
        style.font.name = "Calibri"
        style.font.size = Pt(size)
        style.font.color.rgb = ACCENT

    section = doc.sections[0]
    section.left_margin = Cm(2.0)
    section.right_margin = Cm(2.0)
    section.top_margin = Cm(2.0)
    section.bottom_margin = Cm(2.0)


def render(src, out, metadata=None, footer_text="CyberBodha", created=None):
    """Render markdown `src` to DOCX `out` and apply the supplied core properties."""
    src, out = Path(src), Path(out)
    lines = src.read_text(encoding="utf-8").splitlines()

    doc = Document()
    _style_document(doc)
    add_footer(doc, footer_text)

    i = 0
    in_code = False
    code_buffer = []
    table_buffer = []
    first_h1 = True

    def flush_table():
        nonlocal table_buffer
        if table_buffer:
            build_table(doc, table_buffer)
            table_buffer = []

    def flush_code():
        nonlocal code_buffer
        if not code_buffer:
            return
        para = doc.add_paragraph()
        para.paragraph_format.left_indent = Cm(0.4)
        para.paragraph_format.space_before = Pt(4)
        para.paragraph_format.space_after = Pt(8)
        shade(para, CODE_BG)
        run = para.add_run("\n".join(code_buffer))
        run.font.name = "Consolas"
        run.font.size = Pt(9)
        code_buffer = []

    while i < len(lines):
        line = lines[i]

        if line.strip().startswith("```"):
            if in_code:
                flush_code()
                in_code = False
            else:
                flush_table()
                in_code = True
            i += 1
            continue

        if in_code:
            code_buffer.append(line)
            i += 1
            continue

        if line.strip().startswith("|"):
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if not all(re.fullmatch(r":?-{2,}:?", c) for c in cells):
                table_buffer.append(cells)
            i += 1
            continue
        else:
            flush_table()

        if not line.strip():
            i += 1
            continue

        if line.startswith("# "):
            title = line[2:].strip()
            if first_h1:
                para = doc.add_paragraph()
                para.alignment = WD_ALIGN_PARAGRAPH.CENTER
                run = para.add_run(title)
                run.bold = True
                run.font.size = Pt(26)
                run.font.color.rgb = ACCENT
                para.paragraph_format.space_after = Pt(4)
                first_h1 = False
            else:
                doc.add_heading(title, level=1)
        elif line.startswith("## "):
            doc.add_heading(line[3:].strip(), level=2)
        elif line.startswith("### "):
            doc.add_heading(line[4:].strip(), level=3)
        elif line.startswith("---"):
            pass
        elif line.startswith("> "):
            para = doc.add_paragraph(style="Intense Quote")
            add_inline(para, line[2:].strip())
            for run in para.runs:
                run.font.size = Pt(9.5)
        elif re.match(r"^\s*-\s*\[[ x]\]", line):
            text = re.sub(r"^\s*-\s*\[[ x]\]\s*", "", line)
            para = doc.add_paragraph(style="List Bullet")
            add_inline(para, "☐  " + text)
        elif re.match(r"^\s*[-*]\s", line):
            text = re.sub(r"^\s*[-*]\s", "", line)
            para = doc.add_paragraph(style="List Bullet")
            add_inline(para, text)
        elif re.match(r"^\s*\d+\.\s", line):
            text = re.sub(r"^\s*\d+\.\s", "", line)
            para = doc.add_paragraph(style="List Number")
            add_inline(para, text)
        else:
            para = doc.add_paragraph()
            add_inline(para, line.strip())

        i += 1

    flush_table()
    flush_code()

    meta = metadata or {}
    core = doc.core_properties
    core.title = meta.get("title", src.stem)
    core.subject = meta.get("subject", "")
    core.author = meta.get("author", "CyberBodha Ads")
    core.last_modified_by = meta.get("author", "CyberBodha Ads")
    core.category = meta.get("category", "")
    core.comments = meta.get("comments", "")
    core.keywords = meta.get("keywords", "")
    core.language = meta.get("language", "en-IN")
    stamp = created or datetime(2026, 11, 16, 12, 0)
    core.created = stamp
    core.modified = stamp
    core.revision = int(meta.get("revision", 1))

    doc.save(out)
    print(f"written: {out} ({out.stat().st_size} bytes)")
    return out
