"""Regenerate docs/cyberbodha-whatsapp-campaign.docx from its markdown source.

    cd docs/builders && python render_whatsapp_campaign.py
"""
from datetime import datetime
from pathlib import Path

from docx_renderer import render

DOCS = Path(__file__).resolve().parent.parent

METADATA = {
    "title": "CyberBodha — Click-to-WhatsApp Campaign (CEH v13)",
    "subject": (
        "Build specification for a click-to-WhatsApp campaign: objective, ad set settings, "
        "creative copy, reply scripts, prerequisites and blockers"
    ),
    "author": "CyberBodha Ads",
    "category": "Marketing / Paid Social / WhatsApp Campaign",
    "comments": (
        "Ad account 1503896524973147 · Portfolio 1457794117413274 · Page 1457789564080396 · "
        "WhatsApp Business +91 90638 09271 · WABA 1373813987705146"
    ),
    "keywords": (
        "CyberBodha; CEH v13; Hyderabad; click to WhatsApp; CTWA; Meta Ads; Engagement objective; "
        "messaging ads; conversations; instant forms; lead generation; INR; WhatsApp Business app"
    ),
    "language": "en-IN",
}


if __name__ == "__main__":
    render(
        DOCS / "cyberbodha-whatsapp-campaign.md",
        DOCS / "cyberbodha-whatsapp-campaign.docx",
        metadata=METADATA,
        footer_text="CyberBodha · Click-to-WhatsApp Campaign · 16 November 2026",
        created=datetime(2026, 11, 16, 10, 0),
    )
