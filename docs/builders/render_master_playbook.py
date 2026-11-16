"""Regenerate docs/cyberbodha-master-playbook.docx from its markdown source.

    cd docs/builders && python render_master_playbook.py
"""
from datetime import datetime
from pathlib import Path

from docx_renderer import render

DOCS = Path(__file__).resolve().parent.parent

METADATA = {
    "title": "CyberBodha — Website, Meta Campaigns & Git Playbook",
    "subject": (
        "Operating document: live website and SEO state, git and deployment process, all four Meta "
        "campaigns with settings and IDs, campaign image storage, and the payment-to-activation runbook"
    ),
    "author": "CyberBodha Ads",
    "category": "Operations / Marketing / Web & Paid Social",
    "comments": (
        "Ad account 1503896524973147 · Portfolio 1457794117413274 · Page 1457789564080396 · "
        "Pixel 29155674314074371 · WhatsApp +91 90638 09271 · Repo cyberbodha-bm/cyberbodha-website · "
        "Cloudflare Worker cyberbodha-learning-academy · D1 cyberbodha-leads"
    ),
    "keywords": (
        "CyberBodha; CEH v13; Hyderabad; cybersecurity training; Meta Ads; click to WhatsApp; "
        "instant forms; retargeting; campaign IDs; SEO; canonical; JSON-LD; Open Graph; "
        "Cloudflare Workers; D1; TanStack Start; git; deployment; campaign images; INR"
    ),
    "language": "en-IN",
}


if __name__ == "__main__":
    render(
        DOCS / "cyberbodha-master-playbook.md",
        DOCS / "cyberbodha-master-playbook.docx",
        metadata=METADATA,
        footer_text="CyberBodha · Website, Meta Campaigns & Git Playbook · 16 November 2026",
        created=datetime(2026, 11, 16, 12, 0),
    )
