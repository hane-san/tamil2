(() => {
  "use strict";

  const freezeArray = values => Object.freeze([...(values || [])]);
  const freezeObject = value => Object.freeze({ ...value });

  function patchSections(sections, patches = {}) {
    return freezeArray((sections || []).map(section => {
      const patch = patches[section.heading];
      if (!patch) return section;
      return Object.freeze({
        ...section,
        ...patch,
        paragraphs: freezeArray(patch.paragraphs || section.paragraphs),
        note: patch.note ? freezeObject(patch.note) : section.note
      });
    }));
  }

  const sectionPatches = {
    B: {
      "i- は話し手側、a- は離れた側、e- は未知": {
        heading: "語の最初の i- は話し手側、a- は離れた側、e- は未知",
        takeaway: "<span class=\"ta-inline\" lang=\"ta\">இது / அது / எது</span> <span class=\"roman-inline\">(itu / atu / etu)</span> を、話し手側・離れた側・未知という三列で比べます。"
      }
    },
    C: {
      "数字そのものより、後ろに何を置いたかを読む": {
        paragraphs: [
          "同じ数詞でも、数える対象によって後ろが変わります。物を数えるときは数詞＋名詞、人の人数を言うときは <span class=\"ta-inline\" lang=\"ta\">பேர்</span> <span class=\"roman-inline\">(pēr)</span> を使います。",
          "したがって『三』だけを覚えるのではなく、<span class=\"ta-inline\" lang=\"ta\">மூணு டிக்கெட்</span> <span class=\"roman-inline\">(mūṇu ṭikkeṭ)</span> と <span class=\"ta-inline\" lang=\"ta\">மூணு பேர்</span> <span class=\"roman-inline\">(mūṇu pēr)</span> のように、数える対象まで一緒に読みます。"
        ]
      }
    },
    F: {
      "右端の இருக்கு が、過去の出来事を現在へつなぐ": {
        paragraphs: [
          "<span class=\"ta-inline\" lang=\"ta\">பாத்திருக்கேன்</span> <span class=\"roman-inline\">(pātt-irukk-ēṉ)</span> は、基底では『見て＋いる』の連結です。ただし、表面形にない母音を structuredRoman へ足しません。教材表示は <span class=\"roman-inline\">pātt-irukk-ēṉ</span> とし、基底分析は別欄へ置きます。",
          "経験として読むか、結果が今に残ると読むかは、<span class=\"ta-inline\" lang=\"ta\">முன்பே</span>『以前に』や <span class=\"ta-inline\" lang=\"ta\">எங்கேயோ</span>『どこかで』などの時間・場所と文脈から判断します。"
        ]
      }
    },
    G: {
      "迂言的使役は、不定詞＋வை で原因を追加する": {
        heading: "不定詞＋வை で、『誰かにさせる／何かがそうさせる』を作る",
        paragraphs: [
          "まず元の動作を不定詞にし、その後ろへ வை 系を置きます。右端の <span class=\"ta-inline\" lang=\"ta\">வைக்கறாங்க</span> が時制と人物を示します。",
          "本補講の基本例では <span class=\"ta-inline\" lang=\"ta\">குழந்தையை</span> のように、動作をさせられる相手を対格で示します。ただし、すべての使役構文の格を一つの規則へまとめません。"
        ]
      },
      "நில்／நிறுத்து、ஓடு／ஓட்டு は頻出の語彙対として覚える": {
        paragraphs: [
          "形が近くても、自動詞と他動詞では、文に必要な人・物の数と格が違います。<span class=\"ta-inline\" lang=\"ta\">ஓடு</span> は主体自身が走り、<span class=\"ta-inline\" lang=\"ta\">ஓட்டு</span> は行為者が車などを動かします。",
          "強い動詞・弱い動詞と他動性には傾向がありますが、未登録の動詞から新しい形を自動生成する規則にはしません。"
        ]
      },
      "起きる、勉強させる、笑わせる": {
        heading: "自分で起きる、人が勉強させる、映画が笑わせる",
        takeaway: "<span class=\"ta-inline\" lang=\"ta\">எழுந்தது / படிக்க வைக்கறாங்க / சிரிக்க வைக்குது</span> を、自発的な変化・人による使役・物による原因の三つに分けます。"
      }
    },
    H: {
      "-க்கோ は再帰代名詞ではなく、主体への関わりを加える補助動詞系": {
        heading: "-க்கோ は『自分』という代名詞ではなく、動作を自分側へ引き寄せる",
        paragraphs: [
          "自分用に確保する、最後までやっておくなど、動作が主体自身に関わる意味を加えます（自己関与）。ただし、いつも明確な利益だけを表すわけではありません。",
          "Spoken Tamilでは <span class=\"ta-inline\" lang=\"ta\">தான்</span> を日本語の『自分』へ機械置換しません。自己関与は、動詞と -க்கோ 系の組み合わせから読みます。"
        ]
      },
      "-ப்படு 受け身は、形式的な読解層へ置く": {
        paragraphs: [
          "掲示・説明・報道などでは -ப்படு 系を見かけますが、日常会話で英語や日本語の受け身をすべてこの形へ変換しません。",
          "行為者を言う必要がなければ、会話では自動詞、状態変化、または『誰かがした』とだけ示す能動文を先に検討します。"
        ]
      }
    }
  };

  function patchSupplement(supplement) {
    const common = {
      ...supplement,
      readSections: patchSections(supplement.readSections, sectionPatches[supplement.code])
    };

    if (supplement.code === "A") {
      return Object.freeze({
        ...common,
        navTitle: "主要人称の過去・未来",
        title: "第8課の時制と第14課の主要人称を組み合わせる",
        deck: "一人称で学んだ過去・未来を、丁寧な聞き手、敬意ある第三者、人間複数へ広げます。未監査の人称形を一度に埋めず、போ『行く』一語で時制の骨格と人物語尾を縦に比べます。",
        entryQuestion: "『私は行った』から、『あなたは行った』『その方は行くだろう』へ、時制の骨格と人物語尾のどちらを替える？"
      });
    }

    return Object.freeze(common);
  }

  const currentSupplements = window.TAMIL_SUPPLEMENTS_V42 || [];
  window.TAMIL_SUPPLEMENTS_V42 = freezeArray(currentSupplements.map(patchSupplement));

  const catalog = window.TAMIL_SUPPLEMENT_CATALOG_V42;
  if (catalog) {
    const supplements = catalog.supplements.map(item => Object.freeze({
      ...item,
      title: item.code === "A" ? "主要人称で過去・未来を動かす" : item.title,
      status: "プレビュー"
    }));
    window.TAMIL_SUPPLEMENT_CATALOG_V42 = Object.freeze({
      ...catalog,
      version: "4.7.0-preview",
      supplements: freezeArray(supplements)
    });
  }

  window.TAMIL_JAPANESE_COPY_AUDIT_V47 = Object.freeze({
    version: "4.7-preview",
    scope: "補講A〜Hの日本語説明・見出し・表示ラベル",
    preservedFields: freezeArray([
      "targetTamil",
      "ttsText",
      "orthographicRoman",
      "structuredRoman",
      "pronunciationRoman",
      "katakana",
      "meaningJa",
      "morphemes",
      "quiz answers",
      "progress keys"
    ]),
    decisions: freezeArray([
      "未監査の人称を含まない補講Aを『全人称』ではなく『主要人称』と表示する",
      "初学者向け本文では専門語を残しつつ、先に日常語で意味を示す",
      "英語の drafting 表示を日本語の『プレビュー』へ置き換える",
      "ネイティブ音声・韻律・地域横断的自然さの未承認状態は維持する"
    ])
  });
})();
