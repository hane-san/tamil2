(() => {
  "use strict";

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const SOURCES = [
  "TAMIL-INTEGRATED-v2.0-rc.1 §§23-25,31-32",
  "PREDICATE-ENGINE-v1.1 §§1.2,3,4",
  "TAMIL-GRAMMAR-GARDEN Lesson 20",
  "SCHIFFMAN-SPOKEN-TAMIL: conditionals, causal, purposive and temporal clauses"
];
  const make = input => E({ ...input, sourceRefs: SOURCES, confidence: input.confidence ?? C("B", "B", "C", "B") });

  const examples = [
  {
    "id": "l20-01",
    "targetTamil": "நேரம் இருந்தா படம் பாக்கலாம்.",
    "structuredRoman": "nēram irunt-ā paṭam pākka-lām.",
    "pronunciationRoman": "nēram irundā paḍam pākkalām.",
    "katakana": "ネーラム イルンダー パダム パーッカラーム。",
    "meaningJa": "時間があれば映画を見ましょう。",
    "literalJapanese": "時間＋あれば＋映画＋見ましょう",
    "morphemes": [
      {"surfaceTamil":"நேரம்","gloss":"時間"},
      {"surfaceTamil":"இருந்தா","gloss":"あれば・条件"},
      {"surfaceTamil":"படம் பாக்கலாம்","gloss":"映画を見ましょう"}
    ],
    "grammarNote": "-ஆ が条件節を閉じます。最後の有限述語 பாக்கலாம் を先に確保してから、左側を「時間があれば」と読みます。",
    "vocabulary": ["நேரம்","இருந்தா","படம்","பாக்கலாம்"],
    "audioGroup": "lesson20-core",
    "featured": true,
    "counterparts": [{"primaryRegister":"LT-WR","targetTamil":"நேரம் இருந்தால் படம் பார்க்கலாம்.","note":"現代文語・保守的表記"}]
  },
  {
    "id": "l20-02",
    "targetTamil": "மழை பெய்தாலும் நான் போவேன்.",
    "structuredRoman": "maḻai peyt-ālum nāṉ pō-v-ēṉ.",
    "pronunciationRoman": "maḻai peidālum nān pōvēn.",
    "katakana": "マライ ペイダールム ナーン ポーヴェーン。",
    "meaningJa": "雨が降っても私は行きます。",
    "literalJapanese": "雨＋降っても＋私＋行きます",
    "morphemes": [
      {"surfaceTamil":"மழை","gloss":"雨"},
      {"surfaceTamil":"பெய்தாலும்","gloss":"降っても・譲歩"},
      {"surfaceTamil":"நான் போவேன்","gloss":"私は行きます"}
    ],
    "grammarNote": "-ஆலும் は「〜ても」。条件が成立しても主節の決定が変わらない譲歩を表します。",
    "vocabulary": ["மழை","பெய்தாலும்","நான்","போவேன்"],
    "audioGroup": "lesson20-core",
    "featured": true,
    "counterparts": [{"primaryRegister":"LT-WR","targetTamil":"மழை பெய்தாலும் நான் போவேன்.","note":"書記形と表面が近い例"}]
  },
  {
    "id": "l20-03",
    "targetTamil": "வேலை இருக்கறதால இன்னிக்கு வர முடியாது.",
    "structuredRoman": "vēlai irukkaṟa-t-āla iṉṉikku vara muṭiyātu.",
    "pronunciationRoman": "vēlai irukkaradāla innikku vara muḍiyādu.",
    "katakana": "ヴェーライ イルッカラダーラ インニック ヴァラ ムディヤードゥ。",
    "meaningJa": "仕事があるので今日は来られません。",
    "literalJapanese": "仕事＋あることによって／ので＋今日＋来る＋できません",
    "morphemes": [
      {"surfaceTamil":"வேலை இருக்கறதால","gloss":"仕事があるので・理由"},
      {"surfaceTamil":"இன்னிக்கு","gloss":"今日"},
      {"surfaceTamil":"வர முடியாது","gloss":"来ることができません"}
    ],
    "grammarNote": "名詞化 இருக்கறது に原因・手段の -ஆல が付き、表面形 இருக்கறதால となります。主節は வர முடியாது。",
    "vocabulary": ["வேலை","இருக்கறதால","இன்னிக்கு","வர","முடியாது"],
    "audioGroup": "lesson20-core",
    "featured": true,
    "counterparts": [{"primaryRegister":"LT-WR","targetTamil":"வேலை இருப்பதால் இன்று வர முடியாது.","note":"現代文語・保守的表記"}]
  },
  {
    "id": "l20-04",
    "targetTamil": "நண்பர் வர்றப்போ நாம போகலாம்.",
    "structuredRoman": "naṇpar varṟa-ppō nāma pōka-lām.",
    "pronunciationRoman": "naṇbar varrappō nāma pōgalām.",
    "katakana": "ナンバル ヴァッラッポー ナーマ ポーガラーム。",
    "meaningJa": "友達が来るとき／来たら、私たちは行きましょう。",
    "literalJapanese": "友達＋来るとき＋私たち・包括＋行きましょう",
    "morphemes": [
      {"surfaceTamil":"நண்பர் வர்றப்போ","gloss":"友達が来るとき／来たら"},
      {"surfaceTamil":"நாம","gloss":"私たち・聞き手を含む"},
      {"surfaceTamil":"போகலாம்","gloss":"行きましょう"}
    ],
    "grammarNote": "-ப்போ は時間の「〜とき」。未来場面では日本語の「〜たら」に近く読めることもあります。",
    "vocabulary": ["நண்பர்","வர்றப்போ","நாம","போகலாம்"],
    "audioGroup": "lesson20-core",
    "featured": true,
    "counterparts": [{"primaryRegister":"LT-WR","targetTamil":"நண்பர் வரும்போது நாம் போகலாம்.","note":"現代文語・保守的表記"}]
  },
  {
    "id": "l20-05",
    "targetTamil": "படம் பாக்கறதுக்காக தியேட்டருக்கு போறேன்.",
    "structuredRoman": "paṭam pākkaṟa-t-ukkāka tiyēṭṭar-ukku pōṟ-ēṉ.",
    "pronunciationRoman": "paḍam pākkaradukkāga tiyēṭṭarukku pōrēn.",
    "katakana": "パダム パーッカラドゥッカーガ ティエーッタルック ポーレーン。",
    "meaningJa": "映画を見るために映画館へ行きます。",
    "literalJapanese": "映画＋見ることのために＋映画館へ＋行きます・私",
    "morphemes": [
      {"surfaceTamil":"படம் பாக்கறதுக்காக","gloss":"映画を見るために・目的"},
      {"surfaceTamil":"தியேட்டருக்கு","gloss":"映画館へ"},
      {"surfaceTamil":"போறேன்","gloss":"行きます・私"}
    ],
    "grammarNote": "名詞化＋-க்காக が目的節を作ります。第18課の பாக்கறதுக்கு より、目的を明示します。",
    "vocabulary": ["படம்","பாக்கறதுக்காக","தியேட்டருக்கு","போறேன்"],
    "audioGroup": "lesson20-core",
    "featured": true
  },
  {
    "id": "l20-06",
    "targetTamil": "பஸ் வரலனா ஆட்டோல போகலாம்.",
    "structuredRoman": "pas vara-la-ṉā āṭṭō-la pōka-lām.",
    "pronunciationRoman": "bas varalanā āṭṭōla pōgalām.",
    "katakana": "バス ヴァララナー アーットーラ ポーガラーム。",
    "meaningJa": "バスが来なければオートで行きましょう。",
    "literalJapanese": "バス＋来ないなら＋オートで＋行きましょう",
    "morphemes": [
      {"surfaceTamil":"பஸ் வரலனா","gloss":"バスが来なければ・否定条件"},
      {"surfaceTamil":"ஆட்டோல","gloss":"オートで"},
      {"surfaceTamil":"போகலாம்","gloss":"行きましょう"}
    ],
    "grammarNote": "否定形 வரல に条件 -னா が続く実用的な否定条件です。肯定の வந்தா／இருந்தா と対比します。",
    "vocabulary": ["பஸ்","வரலனா","ஆட்டோல","போகலாம்"],
    "audioGroup": "lesson20-bank",
    "featured": false
  },
  {
    "id": "l20-07",
    "targetTamil": "மழை பெய்தா நாம உள்ளே இருக்கலாம்.",
    "structuredRoman": "maḻai peyt-ā nāma uḷḷē irukka-lām.",
    "pronunciationRoman": "maḻai peidā nāma uḷḷē irukkalām.",
    "katakana": "マライ ペイダー ナーマ ウッレー イルッカラーム。",
    "meaningJa": "雨が降ったら、私たちは中にいましょう。",
    "literalJapanese": "雨＋降ったら＋私たち・包括＋中で＋いましょう",
    "morphemes": [
      {"surfaceTamil":"மழை பெய்தா","gloss":"雨が降ったら"},
      {"surfaceTamil":"நாம","gloss":"私たち・包括"},
      {"surfaceTamil":"உள்ளே இருக்கலாம்","gloss":"中にいましょう"}
    ],
    "grammarNote": "条件節の主語と主節の主語は同じでなくても構いません。節末の -ஆ で境界を見ます。",
    "vocabulary": ["மழை","பெய்தா","நாம","உள்ளே","இருக்கலாம்"],
    "audioGroup": "lesson20-bank",
    "featured": false
  },
  {
    "id": "l20-08",
    "targetTamil": "மழை நின்ன அப்புறம் கடற்கரைக்கு போகலாம்.",
    "structuredRoman": "maḻai niṉṉa appuṟam kaṭaṟkarai-kku pōka-lām.",
    "pronunciationRoman": "maḻai ninna appuram kaḍarkaraikku pōgalām.",
    "katakana": "マライ ニンナ アップラム カダルカライック ポーガラーム。",
    "meaningJa": "雨が止んだ後で海岸へ行きましょう。",
    "literalJapanese": "雨＋止んだ＋後で＋海岸へ＋行きましょう",
    "morphemes": [
      {"surfaceTamil":"மழை நின்ன அப்புறம்","gloss":"雨が止んだ後で"},
      {"surfaceTamil":"கடற்கரைக்கு","gloss":"海岸へ"},
      {"surfaceTamil":"போகலாம்","gloss":"行きましょう"}
    ],
    "grammarNote": "過去連体形 நின்ன の後ろに அப்புறம்「後で」を置き、時間の順序を示します。",
    "vocabulary": ["மழை","நின்ன","அப்புறம்","கடற்கரைக்கு","போகலாம்"],
    "audioGroup": "lesson20-bank",
    "featured": false,
    "counterparts": [{"primaryRegister":"LT-WR","targetTamil":"மழை நின்ற பிறகு கடற்கரைக்கு போகலாம்.","note":"現代文語・保守的表記"}]
  },
  {
    "id": "l20-09",
    "targetTamil": "படம் ஆரம்பிக்கறதுக்கு முன்னாடி டிக்கெட் வாங்கணும்.",
    "structuredRoman": "paṭam ārampikkaṟa-t-ukku muṉṉāṭi ṭikkeṭ vāṅka-ṇum.",
    "pronunciationRoman": "paḍam ārambikkaradukku munnāḍi ṭikkeṭ vāngaṇum.",
    "katakana": "パダム アーランビッカラドゥック ムンナーディ ティッケトゥ ヴァーンガヌム。",
    "meaningJa": "映画が始まる前に切符を買う必要があります。",
    "literalJapanese": "映画＋始まることに＋前に＋切符＋買う必要",
    "morphemes": [
      {"surfaceTamil":"படம் ஆரம்பிக்கறதுக்கு முன்னாடி","gloss":"映画が始まる前に"},
      {"surfaceTamil":"டிக்கெட்","gloss":"切符"},
      {"surfaceTamil":"வாங்கணும்","gloss":"買う必要があります"}
    ],
    "grammarNote": "名詞化＋与格の後ろに முன்னாடி を置くと「〜する前に」という時間句になります。",
    "vocabulary": ["படம்","ஆரம்பிக்கறதுக்கு","முன்னாடி","டிக்கெட்","வாங்கணும்"],
    "audioGroup": "lesson20-bank",
    "featured": false
  },
  {
    "id": "l20-10",
    "targetTamil": "படம் முடிஞ்ச அப்புறம் சாப்பிடலாம்.",
    "structuredRoman": "paṭam muṭiñca appuṟam cāppiṭa-lām.",
    "pronunciationRoman": "paḍam muḍinja appuram sāppiḍalām.",
    "katakana": "パダム ムディンジャ アップラム サーッピダラーム。",
    "meaningJa": "映画が終わった後で食べましょう。",
    "literalJapanese": "映画＋終わった＋後で＋食べましょう",
    "morphemes": [
      {"surfaceTamil":"படம் முடிஞ்ச அப்புறம்","gloss":"映画が終わった後で"},
      {"surfaceTamil":"சாப்பிடலாம்","gloss":"食べましょう"}
    ],
    "grammarNote": "முடிஞ்ச は過去連体形、அப்புறம் はその後の時間を示します。",
    "vocabulary": ["படம்","முடிஞ்ச","அப்புறம்","சாப்பிடலாம்"],
    "audioGroup": "lesson20-bank",
    "featured": false
  },
  {
    "id": "l20-11",
    "targetTamil": "நண்பர் வர்ற வரை இங்கே காத்திருக்கலாம்.",
    "structuredRoman": "naṇpar varṟa varai iṅkē kāttirukka-lām.",
    "pronunciationRoman": "naṇbar varra varai ingē kāttirukkalām.",
    "katakana": "ナンバル ヴァッラ ヴァライ インゲー カーッティルッカラーム。",
    "meaningJa": "友達が来るまで、ここで待ちましょう。",
    "literalJapanese": "友達＋来る＋まで＋ここで＋待ちましょう",
    "morphemes": [
      {"surfaceTamil":"நண்பர் வர்ற வரை","gloss":"友達が来るまで"},
      {"surfaceTamil":"இங்கே","gloss":"ここで"},
      {"surfaceTamil":"காத்திருக்கலாம்","gloss":"待ちましょう"}
    ],
    "grammarNote": "第5課の வரை は場所だけでなく、節の後ろで時間の終点も示せます。",
    "vocabulary": ["நண்பர்","வர்ற","வரை","இங்கே","காத்திருக்கலாம்"],
    "audioGroup": "lesson20-bank",
    "featured": false
  },
  {
    "id": "l20-12",
    "targetTamil": "சென்னைக்கு வந்தப்போ மழை பெய்தது.",
    "structuredRoman": "ceṉṉai-kku vanta-ppō maḻai peyta-tu.",
    "pronunciationRoman": "sennaikku vandappō maḻai peidadu.",
    "katakana": "センナイック ヴァンダッポー マライ ペイダドゥ。",
    "meaningJa": "チェンナイへ来たとき、雨が降りました。",
    "literalJapanese": "チェンナイへ＋来たとき＋雨＋降りました",
    "morphemes": [
      {"surfaceTamil":"சென்னைக்கு வந்தப்போ","gloss":"チェンナイへ来たとき"},
      {"surfaceTamil":"மழை பெய்தது","gloss":"雨が降りました"}
    ],
    "grammarNote": "過去連体形 வந்த＋-ப்போ で過去の時間枠を作ります。最後の பெய்தது が主節の出来事です。",
    "vocabulary": ["சென்னைக்கு","வந்தப்போ","மழை","பெய்தது"],
    "audioGroup": "lesson20-bank",
    "featured": false
  }
].map(make);

  const patterns = [
  {"id":"l20-form-iruntaa","targetTamil":"இருந்தா","structuredRoman":"irunt-ā","pronunciationRoman":"irundā","katakana":"イルンダー","meaningJa":"あれば","literalJapanese":"ある・条件","morphemes":[],"grammarNote":"条件節を閉じ、主節が成立する条件を示す。","vocabulary":["இருந்தா"],"audioGroup":"l20-forms","featured":false,"kind":"条件","group":"節末","note":"条件節を閉じ、主節が成立する条件を示す。"},
  {"id":"l20-form-peytaa","targetTamil":"பெய்தா","structuredRoman":"peyt-ā","pronunciationRoman":"peidā","katakana":"ペイダー","meaningJa":"降ったら","literalJapanese":"降る・条件","morphemes":[],"grammarNote":"出来事が起きたら主節へ進む条件。","vocabulary":["பெய்தா"],"audioGroup":"l20-forms","featured":false,"kind":"条件","group":"節末","note":"出来事が起きたら主節へ進む条件。"},
  {"id":"l20-form-peytaalum","targetTamil":"பெய்தாலும்","structuredRoman":"peyt-ālum","pronunciationRoman":"peidālum","katakana":"ペイダールム","meaningJa":"降っても","literalJapanese":"降る・譲歩","morphemes":[],"grammarNote":"条件が成立しても主節の決定が変わらない。","vocabulary":["பெய்தாலும்"],"audioGroup":"l20-forms","featured":false,"kind":"譲歩","group":"節末","note":"条件が成立しても主節の決定が変わらない。"},
  {"id":"l20-form-irukkarataala","targetTamil":"இருக்கறதால","structuredRoman":"irukkaṟa-t-āla","pronunciationRoman":"irukkaradāla","katakana":"イルッカラダーラ","meaningJa":"あるので","literalJapanese":"あること＋理由","morphemes":[],"grammarNote":"名詞化＋-ஆலで理由を示す口語の完成形。","vocabulary":["இருக்கறதால"],"audioGroup":"l20-forms","featured":false,"kind":"理由","group":"節末","note":"名詞化＋-ஆலで理由を示す口語の完成形。"},
  {"id":"l20-form-paakkaratukkaaka","targetTamil":"பாக்கறதுக்காக","structuredRoman":"pākkaṟa-t-ukkāka","pronunciationRoman":"pākkaradukkāga","katakana":"パーッカラドゥッカーガ","meaningJa":"見るために","literalJapanese":"見ること＋目的","morphemes":[],"grammarNote":"名詞化＋-க்காகで目的を明示する。","vocabulary":["பாக்கறதுக்காக"],"audioGroup":"l20-forms","featured":false,"kind":"目的","group":"節末","note":"名詞化＋-க்காகで目的を明示する。"},
  {"id":"l20-form-varrappoo","targetTamil":"வர்றப்போ","structuredRoman":"varṟa-ppō","pronunciationRoman":"varrappō","katakana":"ヴァッラッポー","meaningJa":"来るとき","literalJapanese":"来る・非過去連体＋とき","morphemes":[],"grammarNote":"同時・近い未来の時間枠。文脈で「来たら」にも近づく。","vocabulary":["வர்றப்போ"],"audioGroup":"l20-forms","featured":false,"kind":"時間","group":"節末","note":"同時・近い未来の時間枠。文脈で「来たら」にも近づく。"},
  {"id":"l20-form-munnaati","targetTamil":"முன்னாடி","structuredRoman":"muṉṉāṭi","pronunciationRoman":"munnāḍi","katakana":"ムンナーディ","meaningJa":"前に","literalJapanese":"前・時間","morphemes":[],"grammarNote":"名詞化＋与格などの後ろに置き「〜する前に」を作る。","vocabulary":["முன்னாடி"],"audioGroup":"l20-forms","featured":false,"kind":"前","group":"時間語","note":"名詞化＋与格などの後ろに置き「〜する前に」を作る。"},
  {"id":"l20-form-appuram","targetTamil":"அப்புறம்","structuredRoman":"appuṟam","pronunciationRoman":"appuram","katakana":"アップラム","meaningJa":"後で","literalJapanese":"後・時間","morphemes":[],"grammarNote":"過去連体形の後ろに置き「〜した後で」を作る。","vocabulary":["அப்புறம்"],"audioGroup":"l20-forms","featured":false,"kind":"後","group":"時間語","note":"過去連体形の後ろに置き「〜した後で」を作る。"},
  {"id":"l20-form-varai","targetTamil":"வரை","structuredRoman":"varai","pronunciationRoman":"varai","katakana":"ヴァライ","meaningJa":"〜まで","literalJapanese":"終点","morphemes":[],"grammarNote":"節の後ろで時間の終点を示す。","vocabulary":["வரை"],"audioGroup":"l20-forms","featured":false,"kind":"終点","group":"時間語","note":"節の後ろで時間の終点を示す。"},
  {"id":"l20-form-varalanaa","targetTamil":"வரலனா","structuredRoman":"vara-la-ṉā","pronunciationRoman":"varalanā","katakana":"ヴァララナー","meaningJa":"来なければ","literalJapanese":"来る＋否定＋条件","morphemes":[],"grammarNote":"口語否定に条件が続く実用形。","vocabulary":["வரலனா"],"audioGroup":"l20-forms","featured":false,"kind":"否定条件","group":"節末","note":"口語否定に条件が続く実用形。"}
].map(make);

  const lesson = {
    id: "lesson20-v40",
    number: 20,
    navTitle: "条件・理由・目的・時間",
    title: "最後の有限述語を先に確保し、手前の小さな節を役割別に切る",
    tamilTitle: "இருந்தா · பெய்தாலும் · இருக்கறதால · பாக்கறதுக்காக · வர்றப்போ",
    deck: "長い文を最初から逐語訳せず、最後の有限述語を見つけてから、左側を条件・譲歩・理由・目的・時間の節へ分けます。",
    targets: ["条件 -ஆ","譲歩 -ஆலும்","理由 -தால","目的 -க்காக","時間 -ப்போ／முன்னாடி／அப்புறம்／வரை"],
    criticalPoints: [
      "長文では最初に最後の有限述語を探す。<span class=\"ta-inline\" lang=\"ta\">நேரம் இருந்தா படம் பாக்கலாம்</span> <span class=\"roman-inline\">(nēram irunt-ā paṭam pākka-lām)</span> なら主節は பாக்கலாம்。",
      "<span class=\"ta-inline\" lang=\"ta\">-ஆ / -ஆலும் / -தால / -க்காக</span> <span class=\"roman-inline\">(-ā / -ālum / -tāla / -kkāka)</span> を、条件・譲歩・理由・目的の節末標識として区別する。",
      "<span class=\"ta-inline\" lang=\"ta\">-ப்போ / முன்னாடி / அப்புறம் / வரை</span> <span class=\"roman-inline\">(-ppō / muṉṉāṭi / appuṟam / varai)</span> は時間関係。条件と時間が近づく場合も、最後の主節から意味を確定する。"
    ],
    readSections: [
      {"kicker":"まず結論","heading":"長文は最後の有限述語から読み、左へ戻って節を切る","takeaway":"<span class=\"ta-inline\" lang=\"ta\">நேரம் இருந்தா படம் பாக்கலாம்</span> <span class=\"roman-inline\">(nēram irunt-ā paṭam pākka-lām)</span> では、まず <span class=\"ta-inline\" lang=\"ta\">பாக்கலாம்</span> <span class=\"roman-inline\">(pākka-lām)</span> を主節として確保します。","paragraphs":["第20課の文は長く見えますが、基本は「小さな節＋最後の主節」です。最初に <span class=\"ta-inline\" lang=\"ta\">முடியாது / போகலாம் / போவேன்</span> <span class=\"roman-inline\">(muṭiyātu / pōka-lām / pō-v-ēṉ)</span> など、文を完成させる最後の述語を探します。","次に左へ戻り、<span class=\"ta-inline\" lang=\"ta\">இருந்தா</span> <span class=\"roman-inline\">(irunt-ā)</span> や <span class=\"ta-inline\" lang=\"ta\">இருக்கறதால</span> <span class=\"roman-inline\">(irukkaṟa-t-āla)</span> などの節末を見つけます。逐語訳より、箱の役割を先に決める方が安定します。"]},
      {"kicker":"形を読む","heading":"条件と譲歩は、主節が成立する前提の扱いを変える","takeaway":"<span class=\"ta-inline\" lang=\"ta\">இருந்தா</span> <span class=\"roman-inline\">(irunt-ā)</span> は「もしあれば」、<span class=\"ta-inline\" lang=\"ta\">பெய்தாலும்</span> <span class=\"roman-inline\">(peyt-ālum)</span> は「降っても」です。","paragraphs":["<span class=\"ta-inline\" lang=\"ta\">-ஆ</span> <span class=\"roman-inline\">(-ā)</span> は条件を作ります。<span class=\"ta-inline\" lang=\"ta\">மழை பெய்தா நாம உள்ளே இருக்கலாம்</span> <span class=\"roman-inline\">(maḻai peyt-ā nāma uḷḷē irukka-lām)</span> は「雨が降ったら、中にいよう」です。","<span class=\"ta-inline\" lang=\"ta\">-ஆலும்</span> <span class=\"roman-inline\">(-ālum)</span> は譲歩です。<span class=\"ta-inline\" lang=\"ta\">மழை பெய்தாலும் நான் போவேன்</span> <span class=\"roman-inline\">(maḻai peyt-ālum nāṉ pō-v-ēṉ)</span> は、雨が降る条件でも行く決定が変わらないことを示します。"]},
      {"kicker":"なぜ？","heading":"理由と目的は、前の節が後ろの行為とどう結びつくかを示す","takeaway":"<span class=\"ta-inline\" lang=\"ta\">இருக்கறதால</span> <span class=\"roman-inline\">(irukkaṟa-t-āla)</span> は理由、<span class=\"ta-inline\" lang=\"ta\">பாக்கறதுக்காக</span> <span class=\"roman-inline\">(pākkaṟa-t-ukkāka)</span> は目的です。","paragraphs":["<span class=\"ta-inline\" lang=\"ta\">வேலை இருக்கறதால இன்னிக்கு வர முடியாது</span> <span class=\"roman-inline\">(vēlai irukkaṟa-t-āla iṉṉikku vara muṭiyātu)</span> では、仕事があることが来られない理由です。","<span class=\"ta-inline\" lang=\"ta\">படம் பாக்கறதுக்காக தியேட்டருக்கு போறேன்</span> <span class=\"roman-inline\">(paṭam pākkaṟa-t-ukkāka tiyēṭṭar-ukku pōṟ-ēṉ)</span> では、映画を見ることが映画館へ行く目的です。理由と目的を日本語の「ため」で一括しません。"]},
      {"kicker":"実際に使う","heading":"旅行の順序は、前・後・とき・までで組み立てる","takeaway":"<span class=\"ta-inline\" lang=\"ta\">முன்னாடி / அப்புறம் / -ப்போ / வரை</span> <span class=\"roman-inline\">(muṉṉāṭi / appuṟam / -ppō / varai)</span> を時間の地図として使います。","paragraphs":["<span class=\"ta-inline\" lang=\"ta\">படம் ஆரம்பிக்கறதுக்கு முன்னாடி</span> <span class=\"roman-inline\">(paṭam ārampikkaṟa-t-ukku muṉṉāṭi)</span> は「映画が始まる前に」、<span class=\"ta-inline\" lang=\"ta\">படம் முடிஞ்ச அப்புறம்</span> <span class=\"roman-inline\">(paṭam muṭiñca appuṟam)</span> は「映画が終わった後で」です。","<span class=\"ta-inline\" lang=\"ta\">நண்பர் வர்றப்போ</span> <span class=\"roman-inline\">(naṇpar varṟa-ppō)</span> は「友達が来るとき」、<span class=\"ta-inline\" lang=\"ta\">நண்பர் வர்ற வரை</span> <span class=\"roman-inline\">(naṇpar varṟa varai)</span> は「友達が来るまで」。時間の位置と終点を区別します。"]},
      {"kicker":"混ぜない","heading":"条件・時間、理由・目的は日本語訳だけで決めない","takeaway":"<span class=\"ta-inline\" lang=\"ta\">வர்றப்போ</span> <span class=\"roman-inline\">(varṟa-ppō)</span> は時間ですが、未来の場面では日本語で「来たら」と訳すことがあります。","paragraphs":["日本語訳が「〜たら」でも、形が <span class=\"ta-inline\" lang=\"ta\">-ப்போ</span> <span class=\"roman-inline\">(-ppō)</span> なら時間の「とき」が中心です。形が <span class=\"ta-inline\" lang=\"ta\">-ஆ</span> <span class=\"roman-inline\">(-ā)</span> なら条件です。訳語ではなく節末を見ます。","<span class=\"ta-inline\" lang=\"ta\">-தால</span> <span class=\"roman-inline\">(-tāla)</span> は原因・理由、<span class=\"ta-inline\" lang=\"ta\">-க்காக</span> <span class=\"roman-inline\">(-kkāka)</span> は目的です。どちらも日本語で「〜のため」と訳せる場合がありますが、前後の因果方向が違います。"],"note":{"tone":"pink","title":"この課の最重要ミス","body":"長い文を左端から逐語訳し、最後の有限述語を確認しないまま前半の役割を決めない。"}},
      {"kicker":"3文で復習","heading":"条件・理由・時間を、最後の主節へ結び直す","takeaway":"<span class=\"ta-inline\" lang=\"ta\">இருந்தா / இருக்கறதால / வர்றப்போ</span> <span class=\"roman-inline\">(irunt-ā / irukkaṟa-t-āla / varṟa-ppō)</span> の役割を見分けます。","paragraphs":["<span class=\"ta-inline\" lang=\"ta\">நேரம் இருந்தா படம் பாக்கலாம்.</span> <span class=\"roman-inline\">(nēram irunt-ā paṭam pākka-lām.)</span><br><span class=\"reading-ja\">時間があれば映画を見ましょう。</span><br><br><span class=\"ta-inline\" lang=\"ta\">வேலை இருக்கறதால இன்னிக்கு வர முடியாது.</span> <span class=\"roman-inline\">(vēlai irukkaṟa-t-āla iṉṉikku vara muṭiyātu.)</span><br><span class=\"reading-ja\">仕事があるので今日は来られません。</span><br><br><span class=\"ta-inline\" lang=\"ta\">நண்பர் வர்றப்போ நாம போகலாம்.</span> <span class=\"roman-inline\">(naṇpar varṟa-ppō nāma pōka-lām.)</span><br><span class=\"reading-ja\">友達が来るとき／来たら、行きましょう。</span>"],"miniReading":{"intro":"条件・理由・時間の三つを、最後の有限述語から読み戻します。","ids":["l20-01","l20-03","l20-04"]}}
    ],
    formConfig: Object.freeze({mode:"grammar",title:"条件・譲歩・理由・目的・時間の節末を照合する",intro:"節末標識を先に見つけ、主節との関係を一枚で整理します。",checkpoint:"最後の有限述語を確保し、前の節を条件・理由・目的・時間へ分類できれば合格です。",patterns:Object.freeze(patterns)}),
    quiz: [
      {"focus":"形態分解","q":"<span class=\"ta-inline\" lang=\"ta\">இருக்கறதால</span> <span class=\"roman-inline\">(irukkaṟa-t-āla)</span> はどう読む？","options":["あること＋理由の -ஆல","ある・一人称単数","ある＋引用標識","ある＋禁止"],"answer":0,"feedback":"<span class=\"ta-inline\" lang=\"ta\">இருக்கறது</span> <span class=\"roman-inline\">(irukkaṟa-tu)</span> の名詞化に -ஆல が付き、表面形 <span class=\"ta-inline\" lang=\"ta\">இருக்கறதால</span> <span class=\"roman-inline\">(irukkaṟa-t-āla)</span> になります。","rule":"-தாலを見たら、前の内容が理由になっていないか確認する。","tags":["正解","人称との混同","引用との混同","禁止との混同"]},
      {"focus":"機能選択","q":"<span class=\"ta-inline\" lang=\"ta\">மழை பெய்தாலும்</span> <span class=\"roman-inline\">(maḻai peyt-ālum)</span> の -ஆலும் は？","options":["雨が降っても、という譲歩","雨が降ったら、という単純条件","雨が降ったので、という理由","雨が降るために、という目的"],"answer":0,"feedback":"-ஆலும் は、条件が成立しても主節の決定が変わらない「〜ても」を示します。","rule":"-ஆலும்は条件ではなく、条件を認めた上での譲歩。","tags":["正解","条件との混同","理由との混同","目的との混同"]},
      {"focus":"実用場面","q":"「バスが来なければオートで行きましょう」に合う文は？","options":["<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் வரலனா ஆட்டோல போகலாம்.</span><span class=\"quiz-option-roman\">pas vara-la-ṉā āṭṭō-la pōka-lām.</span><span class=\"quiz-option-ja\">バスが来なければオートで行きましょう</span>","<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் வர்றப்போ ஆட்டோல போகலாம்.</span><span class=\"quiz-option-roman\">pas varṟa-ppō āṭṭō-la pōka-lām.</span><span class=\"quiz-option-ja\">バスが来るときオートで行きましょう</span>","<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் வர்ற வரை ஆட்டோல போகலாம்.</span><span class=\"quiz-option-roman\">pas varṟa varai āṭṭō-la pōka-lām.</span><span class=\"quiz-option-ja\">バスが来るまでオートで行きましょう</span>","<span class=\"quiz-option-ta\" lang=\"ta\">பஸ் வராதுன்னு சொன்னாங்க.</span><span class=\"quiz-option-roman\">pas var-ātu-ṉṉu coṉṉ-āṅka.</span><span class=\"quiz-option-ja\">バスが来ないと言われました</span>"],"answer":0,"feedback":"<span class=\"ta-inline\" lang=\"ta\">வரலனா</span> <span class=\"roman-inline\">(vara-la-ṉā)</span> が「来なければ」という否定条件です。","rule":"否定条件は口語否定＋-னாの完成形を場面ごとに覚える。","tags":["正解","時間との混同","終点との混同","引用との混同"]},
      {"focus":"混同防止","q":"<span class=\"ta-inline\" lang=\"ta\">இருக்கறதால</span> <span class=\"roman-inline\">(irukkaṟa-t-āla)</span> と <span class=\"ta-inline\" lang=\"ta\">பாக்கறதுக்காக</span> <span class=\"roman-inline\">(pākkaṟa-t-ukkāka)</span> の違いは？","options":["前者は理由、後者は目的","前者は目的、後者は理由","前者は条件、後者は時間","どちらも引用"],"answer":0,"feedback":"仕事がある「ので」は理由、映画を見る「ために」は目的です。日本語の「ため」だけで一括しません。","rule":"-தாலは原因から結果へ、-க்காகは目標へ向かう目的。","tags":["正解","方向逆転","条件・時間との混同","引用との混同"]},
      {"focus":"総合復習","q":"<span class=\"ta-inline\" lang=\"ta\">படம் ஆரம்பிக்கறதுக்கு முன்னாடி டிக்கெட் வாங்கணும்</span> <span class=\"roman-inline\">(paṭam ārampikkaṟa-t-ukku muṉṉāṭi ṭikkeṭ vāṅka-ṇum)</span> を読むとき、最初に確保する部分は？","options":["最後の வாங்கணும்「買う必要がある」","最初の படம்「映画」だけ","முன்னாடி「前に」だけ","ஆரம்பிக்கறதுக்கு「始まることに」だけ"],"answer":0,"feedback":"最後の வாங்கணும் が主節です。その後で左へ戻り、映画が始まる前という時間句を切り出します。","rule":"長文は最後の有限述語→節末標識→残りの名詞句の順で解体する。","tags":["正解","語彙だけ","時間語だけ","従属節だけ"]}
    ],
    heroExample: examples[0],
    examples: Object.freeze(examples)
  };

  lesson.targets = Object.freeze(lesson.targets);
  lesson.criticalPoints = Object.freeze(lesson.criticalPoints);
  lesson.readSections = Object.freeze(lesson.readSections);
  lesson.formConfig = Object.freeze(lesson.formConfig);
  lesson.quiz = Object.freeze(lesson.quiz);
  window.TAMIL_LESSONS_V30 = window.TAMIL_LESSONS_V30 || [];
  window.TAMIL_LESSONS_V30.push(Object.freeze(lesson));
})();
