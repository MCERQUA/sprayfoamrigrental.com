# QA — sprayfoamrigrental.com

## Angle validation
Real-business-name check cleared cleanly (no collision). "Spray foam rig rental" confirmed a
real, searched category via 96 keywords researched (top: "spray foam machine" 1,600/mo,
"spray foam equipment rental" 1,300/mo, "spray foam rig" / "spray foam rig for sale" 1,000/mo
each — buy-intent volume equal to rental-intent volume, which validated Rent vs. Buy as the
flagship pillar). 7 real competitors reviewed individually; site framed as an honest educational
guide, never a rental marketplace — verified no marketplace/booking language ("browse," "book,"
"reserve," "available in your area") anywhere in shipped copy.

## Pre-existing archived folder
`/workspace/Websites/sprayfoamrigrental.com.donotbuild/` investigated before build start:
palette hue ~208-211° (blue, violates zero-blue rule), framed as an active rental-matching
service CCA has no verified operation of. Flagged to the management-session operator as a
non-blocking FYI; treated as reference-only, not reused.

## Build & gate results
- `pnpm install` — clean, `next@15.3.9` / `react@19.2.0` / `react-dom@19.2.0` pinned exactly.
- `pnpm run build` — GREEN on first attempt AND on final re-verification after cleanup.
  Fixed one real pre-build scaffold bug: `next.config.ts` was missing `output: "export"`,
  `images.unoptimized: true`, and the `@next/mdx` wrapper — would have blocked static export.
- Placeholder sweep — clean (only legitimate HTML `placeholder=` form attributes matched).
- Competitor-name leak grep — clean (no real competitor domain names in shipped src/public).
- `pre-deploy-content-check.sh` — FAILED once on scrim-decay in two `.stitch-pages/*.html`
  REFERENCE files (not the deployed React pages): home.html's hero gradient decayed to a
  transparent top stop, and a decorative (non-text-bearing) image tile in both home.html and
  rent-vs-buy.html used a 20%-opacity overlay. Confirmed via markup inspection that no actual
  text sat at the weak point in either case, but raised both to ≥50% per the gate's literal
  rule and established prior-build precedent. Re-ran → PASS (exit 0), re-verified again at
  final commit.

## Images
8 real Gemini-generated images, RGB-scanned (avgR > avgB on all 8, wide margin, no blue-cast).
Image fork caught and self-corrected two quality issues before finalizing: gibberish AI-
hallucinated text on a gauge close-up, and a fabricated logo decal + visible driver silhouette
on the delivery-rig photo.

## Stitch
3 real screens generated and downloaded (home, rent-vs-buy, what-to-check-before-you-rent),
verified via `ls .stitch-pages/*.html`. Font-enum finding: `BITTER`/`SOURCE_SANS_PRO` are not
valid `create_design_system` enum values (errored); `SPACE_GROTESK`/`WORK_SANS` worked as a
fallback for the Stitch metadata only — the real site correctly uses Bitter/Source Sans 3 via
`next/font/google`.

## Fork discipline
3 hard-scoped forks (research; image generation + pillar pages run concurrently with non-
overlapping scopes). All 3 confirmed no shared component or out-of-scope file was modified.
Zero concurrency incidents.

## Visual QA (playwright-cli)
Desktop (1440x900) and mobile (390x844), Home + Rent vs. Buy pages. Zero console errors beyond
expected dev-mode noise. Confirmed sticky mobile Call/Get Matched bar. A full-page screenshot
initially looked like it had "empty" bands below the hero — confirmed via targeted scroll-
position screenshots that this was the expected Framer Motion `whileInView` + full-page-
screenshot interaction (content not yet in viewport at capture time), not a real defect; content
renders correctly once scrolled into view.

## Lockfile hygiene
`pnpm-lock.yaml` only, `pnpm-workspace.yaml` has `packages: ["."]` (not `[]`) from initial
scaffold, `.gitignore` excludes `package-lock.json`.
