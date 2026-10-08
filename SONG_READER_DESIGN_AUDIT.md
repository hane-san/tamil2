# Song reader design — 2026-10-09

## Changes
- Quiet paper palette with peacock green, ink blue, brass and restrained rose.
- Japanese explanation paragraphs use a serif face; controls, headings and vocabulary records keep sans-serif faces. Tamil fallbacks now also cover Tamil outside custom `t` elements.
- 47 manually selected markers identify complete grammar assertions, distinctions and caution points. Existing emphasis remains.
- Narrow screens show each table record vertically, retaining original column names and explicit table accessibility roles.
- Long romanisation, Tamil, source lyrics and morphology flows wrap inside their container. Root horizontal overflow and sideways overscroll are constrained; vertical scrolling and pinch zoom remain available.
- Audio selection receives a local highlight with no transform. Finishing an older utterance cannot clear a new selection, including replay of the same word.
- Removed the course index's old inline CSS override so the index and lessons share the same design.
- Cache version updated to 20261009-15.

## Preservation and validation
- All 60 lesson fragments retain exactly the same DOM text as the previous version.
- Existing full npm test suite and song shell validator passed.
- Reader regression checks passed across ten lessons: asynchronous loading, deep-link scrolling, table labels, click/keyboard audio and replay selection.
- Chromium rendering checked all ten lessons at 320, 390, 768 and 1280 CSS pixels. Index, learning map and supplementary notes checked at narrow and desktop widths.
- Four pages also checked at 320 pixels with enlarged root text and open details. No root horizontal scroll or out-of-viewport content boxes in the 53 layout cases.
- Browser QA uses the same Noto families from locally supplied Fontsource packages because the Google Fonts endpoint is unavailable in this execution environment. These QA dependencies are outside the repository.
- Native iOS/Android gesture behaviour and native voice quality remain device-level checks; the browser tests do not claim those were verified.
