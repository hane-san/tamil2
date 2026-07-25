(() => {
  "use strict";

  const lessons = window.TAMIL_LESSONS_V30 || [];
  const additions = new Map([
    [1, {
      kicker: "SHORT READING",
      heading: "三文をつないで、名詞の姿を追う",
      paragraphs: [
        "辞書形、場所形、数詞つき名詞を短く読み、右端に何が付いたかを見つけます。",
        "<span class=\"ta-inline\" lang=\"ta\">இது வீடு.</span><br><span class=\"ta-inline\" lang=\"ta\">வீட்டுல தண்ணி இருக்கு.</span><br><span class=\"ta-inline\" lang=\"ta\">ரெண்டு புத்தகம் இருக்கு.</span>"
      ],
      miniReading: { ids: ["l1-01", "l1-03", "l1-05"] }
    }],
    [2, {
      kicker: "SHORT READING",
      heading: "三文で、主語・対象・経験者を替える",
      paragraphs: [
        "一人称の形が、文の中の役割に合わせて நான்・என்னை・எனக்கு と替わる流れを読みます。",
        "<span class=\"ta-inline\" lang=\"ta\">நான் ரவி.</span><br><span class=\"ta-inline\" lang=\"ta\">என்னை கூப்பிடுங்க.</span><br><span class=\"ta-inline\" lang=\"ta\">எனக்கு அது பிடிக்கும்.</span>"
      ],
      miniReading: { ids: ["l2-01", "l2-05", "l2-10"] }
    }]
  ]);

  for (const lesson of lessons) {
    const section = additions.get(lesson.number);
    if (section && !lesson.readSections.some(item => item.kicker === "SHORT READING")) {
      lesson.readSections.push(section);
    }
  }
})();
