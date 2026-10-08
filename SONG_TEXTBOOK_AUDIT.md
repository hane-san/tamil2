# Song textbook audit — 2026-10-08

## Scope and preservation
- Completed song lesson 10 using the user-provided Sarvam Thaalamayam source.
- Full provided text retained in `songs/10-source.txt` and a source toggle.
- Existing lessons 1–9: all 245 lyric display blocks preserved (DOM text comparison against 812a1f5).
- Existing 9 lessons increased from 107,252 to 119,776 text characters before final supplemental navigation.
- Existing theme, detailed word tables and grammar explanations retained.

## Findings and implemented sequence
1. Sentence structure, four verb roles, oblique stems, sound distinctions.
2. Types of negation, result versus tense, polar and content questions.
3. Demonstratives, person versus tense, quotation, infinitive/AVP + paaru.
4. Inclusive/exclusive pronouns, agreement, past stems versus temporal meaning.
5. Conditional/concessive logic, experiencer dative.
6. Relative clauses, infinitive selection, transitivity.
7. Negative modifier/link/command/finite distinctions and scope.
8. Ability/permission/necessity/desire/prohibition, polite commands, quoted conditions.
9. Spatial relations, nominalised people, permission and invitation.
10. -um consolidation, temporal relations, independent sentence production.

Every lesson now has foundations after the title and cumulative explanation practice after the song. Cross-course map links directly to each foundation. Supplement adds numbers/quantity/time, possession, comparison, reason/purpose and progressive versus habitual aspect.

## Corrected explanations
- siriccaale uses conditional siriccaal + ee, retaining l.
- sikkumaa question marker is aa, not maa.
- puuttiruccu is not confidently derived as a universal irukku contraction.
- vaazha paaru and vaazhndhu paaru have different complements.
- Lesson 10 unresolved spellings remain marked, not silently normalised.

## Validation
- npm ci and full npm test passed (legacy validators use textbook.html as index, matching CI; song-first index restored).
- Song validator passed 313 assertions including lesson 10.
- Ten assembled lessons: no duplicate IDs or missing internal anchors.
- Runtime checks: sequential fetch, deep-link scroll, Tamil click and keyboard speech dispatch.
- Native voice quality and real mobile rendering not verified: browser binary download failed in this environment.

## Limits and next learning targets
This is a substantial grammar/reading foundation, not a guarantee of conversational proficiency from songs alone. The learning map explicitly includes transfer tasks and identifies script practice, natural-speed listening and live interaction as additional work. Sources are linked on the map and supplementary page.
