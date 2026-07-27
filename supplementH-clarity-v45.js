(() => {
  "use strict";

  const supplement = (window.TAMIL_SUPPLEMENTS_V42 || []).find(item => item.code === "H");
  if (!supplement) throw new Error("supplement H clarity overlay requires supplement H data");

  const section = supplement.readSections.find(item => item.kicker === "実際に使う");
  if (!section) throw new Error("supplement H agent-visibility reading section is missing");

  section.takeaway = "<span class=\"ta-inline\" lang=\"ta\">யாரோ திறந்தாங்க / திறந்துடுச்சு / நான் திறந்தேன்</span> <span class=\"roman-inline\">(yār-ō tiṟant-āṅka / tiṟantuṭuccu / nāṉ tiṟant-ēṉ)</span> は、行為者の見せ方が違います。";
})();