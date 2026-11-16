# Campaign Creative Assets

Every image used in a paid campaign lives in this folder, in git, so the exact creative that
ran can always be traced back to a commit.

## Why here

Meta's Media library is a black box: it keeps the bytes, not the history. When an ad is paused,
renamed or duplicated six months from now, nobody can tell which poster version ran. Git can.
Each image is committed with the campaign it belongs to, and the commit message carries the
ad IDs.

## Folder layout

```
marketing/campaigns/
  ceh-v13/                 # CEH v13 programme, all campaigns
    <creative>.png
  <programme-slug>/        # one folder per programme when new creatives appear
  manifest.md              # creative index: file, size, campaigns, ad IDs
```

## Naming

`<programme>-<track-or-hook>-<variant>.<ext>`

Examples:

- `ceh-v13-tracks-comparison.png`
- `ceh-v13-dm-details.png`
- `ceh-v13-training-only.png`
- `ceh-v13-with-certification.png`

Lowercase, hyphens, no dates or "final" in the name — the commit records the date. If a poster is
re-cut, add a suffix (`-v2`) rather than overwriting the old file, so the running ad still matches
a commit.

## Specifications

| Placement | Size | Notes |
|---|---|---|
| Feed (recommended) | 1080 × 1350 px (4:5) | Highest reach for the money |
| Feed square | 1080 × 1080 px | Only if the artwork is genuinely square |
| Stories / Reels | 1080 × 1920 px (9:16) | Keep text inside the middle 1080 × 1420 safe area |
| File | PNG or JPG, under 8 MB | Under 1 MB keeps uploads fast |

Meta no longer penalises text-heavy images, but a poster whose text is unreadable on a 360 px
wide phone screen still wastes spend. Check it at thumbnail size before uploading.

## Adding a creative

1. Put the file in the programme folder with the naming convention above.
2. Add a row to `manifest.md` with size, campaign, ad set, ad ID and date first used.
3. Commit on its own, message form: `assets(ceh-v13): add <creative> for <campaign>`.
4. Upload the same file to Meta's Media library.

## Handling large files

Keep each file under 5 MB. If creatives start exceeding that (video especially), add Git LFS
before committing them — do not commit a 40 MB video to plain git and force-push it out later.
