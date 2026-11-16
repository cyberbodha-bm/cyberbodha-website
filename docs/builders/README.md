# Document builders

The campaign documents in `docs/` are generated from their markdown sources, so the DOCX files are
never hand-edited. Regenerate them after changing a `.md`.

## Requirements

```bash
pip install python-docx
```

## Regenerate

```bash
cd docs/builders
python render_master_playbook.py
python render_whatsapp_campaign.py
```

Each script writes the DOCX one level up (`docs/`), overwriting the previous file, and applies the
document metadata: title, subject, author, category, comments (asset IDs), keywords and language.

## Files

| File | Purpose |
|---|---|
| `docx_renderer.py` | Markdown to DOCX renderer. Headings, tables, fenced code, quotes, bullet/check/numbered lists, `**bold**` and `` `code` `` inline. Applies page footer and core properties. |
| `render_master_playbook.py` | Builds `docs/cyberbodha-master-playbook.docx` from `docs/cyberbodha-master-playbook.md`. |
| `render_whatsapp_campaign.py` | Builds `docs/cyberbodha-whatsapp-campaign.docx` from `docs/cyberbodha-whatsapp-campaign.md`. |

## Editing rules

- Change the markdown, never the DOCX. A DOCX edit is lost on the next regeneration.
- Keep tables pipe-aligned. Content rows must not contain an unescaped `|` — write ` / ` instead,
  because the renderer splits on the first level of pipes.
- The first `# ` heading is rendered as the cover title; everything else follows heading levels.

## Using the renderer elsewhere

```python
from docx_renderer import render

render(
    "my-doc.md",
    "my-doc.docx",
    metadata={"title": "My document", "author": "CyberBodha Ads", "language": "en-IN"},
    footer_text="CyberBodha · My document · 16 November 2026",
)
```
