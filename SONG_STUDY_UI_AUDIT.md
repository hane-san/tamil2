# Song study UI — 2026-10-17

## Purpose and scope

The ten-song course now starts with a one-line listening workspace. Learners can keep their own music playing, reveal the translation, inspect the original explanation for the selected line, and return to listening. Existing lyric text, romanisation, kana, translation, grammar tables, review questions and uncertainty annotations in all 60 fragments are preserved.

The library, ten lesson shells, learning map and basic bridge share controls, focus styles, display settings, typography and responsive rules. The separate twenty-lesson textbook remains linked and its curriculum data is unchanged.

## Shared behaviour

- `songs/reader.js` replaces the old `song.js` entry path, ensuring an already installed worker cannot serve the previous core from its query-insensitive asset cache. It prepares accessible vocabulary tables and Tamil TTS targets, preserves Tamil/roman spacing, atomically inserts lesson fragments and offers retry after failure. Navigation links containing Tamil no longer trigger TTS.
- `songs/study.js` uses the loaded original `.line` nodes as the listening source. The original nodes get stable `lyric-N` anchors. The selected line resets translation reveal, supports previous/next and direct selection, and links to its original detailed explanation. Switching modes preserves the Spotify iframe. Deep links open the appropriate mode and resolve after the shared workspace is inserted.
- The library supports NFKC-normalised text search, film filters, empty results and resuming the latest song. A saved first line is a valid resume position.
- Each song has a specific listening focus and three explanatory contrasts. Shared plain-language guidance covers cases, finite/infinitive/conjunctive forms, noun modification, literal/natural translation and register distinctions.
- Self-checks and a 3,000-character note support deliberate review. They are self-reports, not automatic claims of mastery.
- `tamil-song-study-v1` stores per-song line, selected Spotify track, self-checks and note. `tamil-song-display-v1` stores display and speech preferences. All storage access is guarded; unavailable storage does not prevent study. Textbook/supplement progress keys remain independent.
- Spotify only accepts HTTPS `open.spotify.com` track links with a 22-character ID, including locale and embed variants. No credentials or API tokens are collected. No Spotify iframe loads on initial visit; previously saved tracks also require an explicit click. Search links include the song and film so the user can choose the recording.
- TTS exposes slow/normal rate and stop, reports missing Tamil voices and playback failures, and retains the local speaking highlight without stale completion clearing a newer utterance. It is explicitly distinguished from the original song recording.
- Font enlargement, independently hiding lyric kana/romanisation, labelled form controls, keyboard focus, live statuses and 44px minimum controls apply throughout the shared interface. Print displays the detailed reader rather than the interaction panel.

## Cache and validation consistency

The service worker now caches navigations by requested URL, returns a clear 503 page for uncached offline navigation, respects `no-store`, preserves asset query versions, and avoids caching failed responses. Cache cleanup only removes this application's `tamil2-` caches. The worker refresh is requested when a previous registration exists; the song UI does not install a worker or require installation.

Curriculum validators now read `textbook.html`, the actual textbook entry. CI no longer overwrites the song entry with the textbook to run these checks. `npm test` includes the song checks and works directly from the checkout.

## Validation

- `npm test`: song shell checks (377 assertions), ten-lesson reader regressions, study flows, service-worker cache tests, and all existing textbook, transcription, supplement, practice and DOM checks.
- New interaction checks cover source lyric reuse, translation reveal reset, mode/line navigation, per-song persistence, grammar deep links, player preservation, invalid Spotify origins/types, explicit saved-player loading, blocked storage, failed fragment loads, library search and a saved first-line resume.
- Chromium: 94 layout cases: all ten lessons in both modes at 320, 390, 768 and 1280 CSS pixels; the library, learning map and bridge at those four widths; enlarged text at 320px with translation, grammar help and review details open. Checked root width and visible content bounds.
- Browser flow checks: immediate navigation to the selected explanation with a 100px header clearance, returning to that line, reload persistence, and no uncaught JavaScript errors.
- Google Fonts requests were blocked during browser QA; screenshots use installed font fallbacks. No new runtime dependencies were added.

## Limits

Lyrics are learning excerpts, with repeated passages sometimes omitted. There are no verified timestamps, automatic lyric synchronisation or A/B audio looping. Spotify full playback and regional/account restrictions are controlled by Spotify; authenticated playback was not verified with the user's account. Device TTS voice quality, iPhone gestures and native audio behaviour require a physical device. These checks do not constitute native linguistic or pronunciation approval.
