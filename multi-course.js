const brailleMap = {
  a: "⠁", aa: "⠜", i: "⠊", ii: "⠔", u: "⠥", uu: "⠳", e: "⠢", ee: "⠑", ai: "⠌", o: "⠭", oo: "⠕", au: "⠪", rVowel: "⠐⠗",
  k: "⠅", kh: "⠨", g: "⠛", gh: "⠣", ng: "⠬", ch: "⠉", chh: "⠡", j: "⠚", jh: "⠴", ny: "⠒",
  tt: "⠾", tth: "⠺", dd: "⠫", ddh: "⠿", nn: "⠼", t: "⠞", th: "⠹", d: "⠙", dh: "⠮", n: "⠝",
  p: "⠏", ph: "⠖", b: "⠃", bh: "⠘", m: "⠍", y: "⠽", r: "⠗", l: "⠇", ll: "⠸", v: "⠧",
  sh: "⠩", ssh: "⠯", s: "⠎", h: "⠓", ksh: "⠟", virama: "⠈", anusvara: "⠂", visarga: "⠃"
};

const languageData = {
  tamil: {
    name: "Tamil", sample: "தமிழ் பிரெயில் கற்போம்", blank: "⠀", virama: "்", anusvara: "ஂ", visarga: "ஃ",
    vowels: [["அ", "a"], ["ஆ", "aa"], ["இ", "i"], ["ஈ", "ii"], ["உ", "u"], ["ஊ", "uu"], ["எ", "e"], ["ஏ", "ee"], ["ஐ", "ai"], ["ஒ", "o"], ["ஓ", "oo"], ["ஔ", "au"]],
    signs: [["ா", "aa"], ["ி", "i"], ["ீ", "ii"], ["ு", "u"], ["ூ", "uu"], ["ெ", "e"], ["ே", "ee"], ["ை", "ai"], ["ொ", "o"], ["ோ", "oo"], ["ௌ", "au"]],
    rows: [
      { title: "Consonants: க to ங", items: [["க", "k"], ["ங", "ng"]] },
      { title: "Consonants: ச to ஞ", items: [["ச", "ch"], ["ஜ", "j"], ["ஞ", "ny"]] },
      { title: "Consonants: ட to ண", items: [["ட", "tt"], ["ண", "nn"]] },
      { title: "Consonants: த to ந", items: [["த", "t"], ["ந", "n"], ["ன", "n"]] },
      { title: "Consonants: ப to ஹ", items: [["ப", "p"], ["ம", "m"], ["ய", "y"], ["ர", "r"], ["ல", "l"], ["ள", "ll"], ["ழ", "ll"], ["வ", "v"], ["ற", "r"], ["ஶ", "sh"], ["ஷ", "ssh"], ["ஸ", "s"], ["ஹ", "h"]] }
    ]
  },
  hindi: {
    name: "Hindi", sample: "हिन्दी ब्रेल सीखें", virama: "्", anusvara: "ं", visarga: "ः",
    vowels: [["अ", "a"], ["आ", "aa"], ["इ", "i"], ["ई", "ii"], ["उ", "u"], ["ऊ", "uu"], ["ए", "ee"], ["ऐ", "ai"], ["ओ", "oo"], ["औ", "au"], ["ऋ", "rVowel"]],
    signs: [["ा", "aa"], ["ि", "i"], ["ी", "ii"], ["ु", "u"], ["ू", "uu"], ["े", "ee"], ["ै", "ai"], ["ो", "oo"], ["ौ", "au"], ["ृ", "rVowel"]],
    rows: standardRows("क ख ग घ ङ|च छ ज झ ञ|ट ठ ड ढ ण|त थ द ध न|प फ ब भ म य र ल व श ष स ह", ["क्ष"])
  },
  malayalam: {
    name: "Malayalam", sample: "മലയാളം ബ്രെയിൽ പഠനം", virama: "്", anusvara: "ം", visarga: "ഃ",
    vowels: [["അ", "a"], ["ആ", "aa"], ["ഇ", "i"], ["ഈ", "ii"], ["ഉ", "u"], ["ഊ", "uu"], ["എ", "e"], ["ഏ", "ee"], ["ഐ", "ai"], ["ഒ", "o"], ["ഓ", "oo"], ["ഔ", "au"], ["ഋ", "rVowel"]],
    signs: [["ാ", "aa"], ["ി", "i"], ["ീ", "ii"], ["ു", "u"], ["ൂ", "uu"], ["െ", "e"], ["േ", "ee"], ["ൈ", "ai"], ["ൊ", "o"], ["ോ", "oo"], ["ൗ", "au"], ["ൃ", "rVowel"]],
    rows: standardRows("ക ഖ ഗ ഘ ങ|ച ഛ ജ ഝ ഞ|ട ഠ ഡ ഢ ണ|ത ഥ ദ ധ ന|പ ഫ ബ ഭ മ യ ര ല ള വ ശ ഷ സ ഹ", ["ക്ഷ"])
  },
  telugu: {
    name: "Telugu", sample: "తెలుగు బ్రెయిల్ అభ్యాసం", virama: "్", anusvara: "ం", visarga: "ః",
    vowels: [["అ", "a"], ["ఆ", "aa"], ["ఇ", "i"], ["ఈ", "ii"], ["ఉ", "u"], ["ఊ", "uu"], ["ఎ", "e"], ["ఏ", "ee"], ["ఐ", "ai"], ["ఒ", "o"], ["ఓ", "oo"], ["ఔ", "au"], ["ఋ", "rVowel"]],
    signs: [["ా", "aa"], ["ి", "i"], ["ీ", "ii"], ["ు", "u"], ["ూ", "uu"], ["ె", "e"], ["ే", "ee"], ["ై", "ai"], ["ొ", "o"], ["ో", "oo"], ["ౌ", "au"], ["ృ", "rVowel"]],
    rows: standardRows("క ఖ గ ఘ ఙ|చ ఛ జ ఝ ఞ|ట ఠ డ ఢ ణ|త థ ద ధ న|ప ఫ బ భ మ య ర ల ళ వ శ ష స హ", ["క్ష"])
  },
  odia: {
    name: "Odia", sample: "ଓଡ଼ିଆ ବ୍ରେଲ ଶିକ୍ଷା", virama: "୍", anusvara: "ଂ", visarga: "ଃ",
    vowels: [["ଅ", "a"], ["ଆ", "aa"], ["ଇ", "i"], ["ଈ", "ii"], ["ଉ", "u"], ["ଊ", "uu"], ["ଏ", "ee"], ["ଐ", "ai"], ["ଓ", "oo"], ["ଔ", "au"], ["ଋ", "rVowel"]],
    signs: [["ା", "aa"], ["ି", "i"], ["ୀ", "ii"], ["ୁ", "u"], ["ୂ", "uu"], ["େ", "ee"], ["ୈ", "ai"], ["ୋ", "oo"], ["ୌ", "au"], ["ୃ", "rVowel"]],
    rows: standardRows("କ ଖ ଗ ଘ ଙ|ଚ ଛ ଜ ଝ ଞ|ଟ ଠ ଡ ଢ ଣ|ତ ଥ ଦ ଧ ନ|ପ ଫ ବ ଭ ମ ଯ ର ଲ ଳ ୱ ଶ ଷ ସ ହ", ["କ୍ଷ"])
  },
  bengali: {
    name: "Bengali", sample: "বাংলা ব্রেইল শেখা", virama: "্", anusvara: "ং", visarga: "ঃ",
    vowels: [["অ", "a"], ["আ", "aa"], ["ই", "i"], ["ঈ", "ii"], ["উ", "u"], ["ঊ", "uu"], ["এ", "ee"], ["ঐ", "ai"], ["ও", "oo"], ["ঔ", "au"], ["ঋ", "rVowel"]],
    signs: [["া", "aa"], ["ি", "i"], ["ী", "ii"], ["ু", "u"], ["ূ", "uu"], ["ে", "ee"], ["ৈ", "ai"], ["ো", "oo"], ["ৌ", "au"], ["ৃ", "rVowel"]],
    rows: standardRows("ক খ গ ঘ ঙ|চ ছ জ ঝ ঞ|ট ঠ ড ঢ ণ|ত থ দ ধ ন|প ফ ব ভ ম য র ল শ ষ স হ", ["ক্ষ"])
  },
  marathi: {
    name: "Marathi", sample: "मराठी ब्रेल शिकूया", virama: "्", anusvara: "ं", visarga: "ः",
    vowels: [["अ", "a"], ["आ", "aa"], ["इ", "i"], ["ई", "ii"], ["उ", "u"], ["ऊ", "uu"], ["ए", "ee"], ["ऐ", "ai"], ["ओ", "oo"], ["औ", "au"], ["ऋ", "rVowel"]],
    signs: [["ा", "aa"], ["ि", "i"], ["ी", "ii"], ["ु", "u"], ["ू", "uu"], ["े", "ee"], ["ै", "ai"], ["ो", "oo"], ["ौ", "au"], ["ृ", "rVowel"]],
    rows: standardRows("क ख ग घ ङ|च छ ज झ ञ|ट ठ ड ढ ण|त थ द ध न|प फ ब भ म य र ल ळ व श ष स ह", ["क्ष"])
  },
  gujarati: {
    name: "Gujarati", sample: "ગુજરાતી બ્રેઇલ શીખીએ", virama: "્", anusvara: "ં", visarga: "ઃ",
    vowels: [["અ", "a"], ["આ", "aa"], ["ઇ", "i"], ["ઈ", "ii"], ["ઉ", "u"], ["ઊ", "uu"], ["એ", "ee"], ["ઐ", "ai"], ["ઓ", "oo"], ["ઔ", "au"], ["ઋ", "rVowel"]],
    signs: [["ા", "aa"], ["િ", "i"], ["ી", "ii"], ["ુ", "u"], ["ૂ", "uu"], ["ે", "ee"], ["ૈ", "ai"], ["ો", "oo"], ["ૌ", "au"], ["ૃ", "rVowel"]],
    rows: standardRows("ક ખ ગ ઘ ઙ|ચ છ જ ઝ ઞ|ટ ઠ ડ ઢ ણ|ત થ દ ધ ન|પ ફ બ ભ મ ય ર લ ળ વ શ ષ સ હ", ["ક્ષ"])
  }
};

function standardRows(serialized, clusters = []) {
  const keys = [
    ["k", "kh", "g", "gh", "ng"],
    ["ch", "chh", "j", "jh", "ny"],
    ["tt", "tth", "dd", "ddh", "nn"],
    ["t", "th", "d", "dh", "n"],
    ["p", "ph", "b", "bh", "m", "y", "r", "l", "ll", "v", "sh", "ssh", "s", "h"]
  ];
  return serialized.split("|").map((row, index) => ({
    title: index === 4 ? "Consonants: remaining common letters" : `Consonants: ${row.split(" ")[0]} to ${row.split(" ").slice(-1)[0]}`,
    items: row.split(" ").map((letter, letterIndex) => [letter, keys[index][letterIndex]])
  })).concat(clusters.map((cluster) => ({ title: `Conjunct: ${cluster}`, items: [[cluster, "ksh"]] })));
}

const courseKey = document.body.dataset.course;
const course = languageData[courseKey] || languageData.hindi;
const chart = buildChart(course);
const vowelSigns = Object.fromEntries(course.signs);
const directMap = Object.fromEntries(chart.map(([print, , braille]) => [print, braille]));
const consonants = new Set(chart.filter((item) => item[4] === "consonant").map(([print]) => print));
const digits = { "0": "⠼⠚", "1": "⠼⠁", "2": "⠼⠃", "3": "⠼⠉", "4": "⠼⠙", "5": "⠼⠑", "6": "⠼⠋", "7": "⠼⠛", "8": "⠼⠓", "9": "⠼⠊" };
const punctuation = { ",": "⠂", ";": "⠆", ":": "⠒", ".": "⠲", "?": "⠦", "!": "⠖", "-": "⠤" };
const lessons = buildLessons(course);
const quizState = new Map();
const cellState = new Map();

function buildChart(data) {
  const vowels = data.vowels.map(([print, key]) => [print, key, brailleMap[key], dotsFor(brailleMap[key]), "vowel"]);
  const consonants = data.rows.flatMap((row) => row.items.map(([print, key]) => [print, key, brailleMap[key], dotsFor(brailleMap[key]), "consonant"]));
  const marks = [[data.virama, "halant", brailleMap.virama, "4", "mark"], [data.anusvara, "anusvara", brailleMap.anusvara, "2", "mark"], [data.visarga, "visarga", brailleMap.visarga, "12", "mark"]];
  return [...vowels, ...consonants, ...marks];
}

function buildLessons(data) {
  const firstConsonant = data.rows[0].items[0][0];
  const firstRow = data.rows[0].items.slice(0, 2).map(([letter]) => letter);
  const vowelFocus = [...data.vowels.map(([letter]) => letter), firstConsonant, ...firstRow];
  return [
    {
      slug: "vowels-reading-order",
      title: "Vowels and Reading Order",
      summary: `Learn independent ${data.name} vowels and vowel signs in Bharati Braille order.`,
      icon: "⠁",
      time: "25 min",
      introduction: `${data.name} print combines consonants with vowel signs. In Bharati Braille sight reading, learners read the consonant cell and then the vowel cell in spoken order.`,
      objectives: [`Recognize common ${data.name} vowel cells.`, "Read consonant plus vowel in spoken order.", "Use six-dot cells to compare similar vowel patterns."],
      focus: vowelFocus,
      practiceSets: [
        { title: "Vowel warm-up", instruction: "Read each vowel cell aloud.", items: data.vowels.map(([letter]) => letter) },
        { title: "Vowel signs", instruction: "Read the base consonant first, then the vowel.", items: data.signs.slice(0, 10).map(([sign]) => `${firstConsonant}${sign}`) },
        { title: "Mixed syllables", instruction: "Practice short syllables in braille order.", items: data.signs.slice(0, 8).map(([sign], index) => `${firstRow[index % firstRow.length]}${sign}`) }
      ]
    },
    ...data.rows.map((row, index) => makeRowLesson(data, row, index)),
    makeMarksLesson(data),
    makeWordsLesson(data)
  ];
}

function makeRowLesson(data, row, index) {
  const letters = row.items.map(([letter]) => letter);
  const signs = data.signs.slice(0, 5).map(([sign]) => sign);
  return {
    slug: `row-${index + 1}`,
    title: row.title,
    summary: `Practice ${data.name} letters in this consonant group.`,
    icon: brailleMap[row.items[0][1]] || "⠅",
    time: index === 4 ? "35 min" : "25 min",
    introduction: `This workshop introduces ${letters.join(", ")}. Practice the row as a family, then mix the letters with vowels for sight reading.`,
    objectives: [`Recognize ${letters.slice(0, 5).join(", ")} by sight.`, "Compare nearby six-dot patterns.", "Read short syllables without pausing at every cell."],
    focus: letters,
    practiceSets: [
      { title: "Row read", instruction: "Read the row forward and backward.", items: [...letters, ...letters.slice().reverse()] },
      { title: "Pair contrast", instruction: "Compare nearby letters.", items: letters.slice(0, -1).map((letter, letterIndex) => `${letter} / ${letters[letterIndex + 1]}`) },
      { title: "Syllable builder", instruction: "Read consonant plus vowel.", items: letters.slice(0, 5).flatMap((letter) => signs.slice(0, 2).map((sign) => `${letter}${sign}`)) }
    ]
  };
}

function makeMarksLesson(data) {
  const sample = data.rows[0].items[0][0];
  return {
    slug: "marks",
    title: "Halant, Anusvara, Visarga",
    summary: "Practice common marks used with syllables.",
    icon: "⠈",
    time: "20 min",
    introduction: `This workshop introduces the ${data.name} halant, anusvara, and visarga signs as sight-reading signals.`,
    objectives: ["Identify common marks.", "Read a consonant with halant.", "Notice when a mark changes the syllable sound."],
    focus: [data.virama, data.anusvara, data.visarga, sample],
    practiceSets: [
      { title: "Mark recognition", instruction: "Name each mark.", items: [data.virama, data.anusvara, data.visarga] },
      { title: "Halant practice", instruction: "Read the halant signal with the consonant.", items: [`${sample}${data.virama}`, `${data.rows[3].items[0][0]}${data.virama}`, `${data.rows[4].items[0][0]}${data.virama}`] },
      { title: "Mixed marks", instruction: "Tell which mark appears.", items: [`${sample}${data.anusvara}`, `${sample}${data.visarga}`, `${sample}${data.virama}`] }
    ]
  };
}

function makeWordsLesson(data) {
  const sampleItems = data.sample.split(" ");
  return {
    slug: "words-sentences",
    title: "Words and Sentences",
    summary: `Read short ${data.name} words, numbers, and punctuation.`,
    icon: "⠎",
    time: "40 min",
    introduction: `The final workshop moves from cells to short ${data.name} reading lines.`,
    objectives: ["Read short words using learned cells.", "Recognize numbers with the number sign.", "Practice punctuation in short lines."],
    focus: [...sampleItems, "1", "2", "3", ".", "?"],
    practiceSets: [
      { title: "Short words", instruction: "Read one word at a time.", items: sampleItems },
      { title: "Numbers", instruction: "Read the number sign before each digit.", items: ["1", "2", "3", "10", "25"] },
      { title: "Sentence lines", instruction: "Read slowly, then repeat.", items: [`${sampleItems[0]}.`, `${sampleItems.join(" ")}.`] }
    ]
  };
}

function dotsFor(braille) {
  return [...braille].filter(isBrailleChar).map((char) => brailleDotNumbers(char).join("")).join(", ");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function isBrailleChar(char) {
  const code = char.codePointAt(0);
  return code >= 0x2800 && code <= 0x283f;
}

function brailleDotNumbers(char) {
  const mask = char.codePointAt(0) - 0x2800;
  return [1, 2, 3, 4, 5, 6].filter((dot) => mask & (1 << (dot - 1)));
}

function renderBrailleCell(char) {
  const activeDots = brailleDotNumbers(char);
  return `<span class="visual-braille-cell" role="img" aria-label="dots ${activeDots.join("-")}">${[1, 2, 3, 4, 5, 6].map((dot) => `<span class="visual-braille-dot${activeDots.includes(dot) ? " active" : ""}" data-dot="${dot}"></span>`).join("")}</span>`;
}

function renderBrailleCells(value) {
  return [...String(value)].map((char) => {
    if (isBrailleChar(char)) return renderBrailleCell(char);
    if (char === " ") return `<span class="visual-braille-space" aria-hidden="true"></span>`;
    if (char === "\n") return "<br>";
    return `<span class="visual-braille-text">${escapeHtml(char)}</span>`;
  }).join("");
}

function renderStaticBraille() {
  document.querySelectorAll("[data-braille-render]").forEach((element) => {
    element.innerHTML = renderBrailleCells(element.dataset.brailleRender);
  });
}

const lessonGrid = document.querySelector("#lessonGrid");
const workshopDetails = document.querySelector("#workshopDetails");
const summaryModal = document.querySelector("#summaryModal");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryBody = document.querySelector("#summaryBody");
const closeSummary = document.querySelector("#closeSummary");
const chartGrid = document.querySelector("#chartGrid");
const chartButtons = document.querySelectorAll("[data-chart-filter]");
const textInput = document.querySelector("#kannadaInput");
const brailleOutput = document.querySelector("#brailleOutput");

function setupPageText() {
  document.title = `${course.name} Braille by Sight`;
  setText("#brandName", `${course.name} Braille by Sight`);
  setText("#hero-title", `Learn ${course.name} Braille by seeing`);
  setText("#heroCopy", `A workshop-style page for sighted learners who want to recognize ${course.name} Bharati Braille cells.`);
  setText("#pathCopy", "Start with vowels and common consonants, then move to marks, words, and short reading drills.");
  setText("#workshopCopy", "Each workshop introduces one cell at a time, then gives focused practice for the same section.");
  setText("#chartTitle", `${course.name} letters and braille cells`);
  setText("#chartCopy", "Bharati Braille writes vowel signs as full braille letters after the consonant sound.");
  setText("#sandboxLabel", `${course.name} print`);
  setText("#sandboxCopy", `Type ${course.name} text to see a learning-oriented braille rendering.`);
  setText("#footerName", `${course.name} Braille by Sight`);
  const workshopCount = document.querySelector(".stats strong");
  if (workshopCount) workshopCount.textContent = lessons.length;
  textInput.value = course.sample;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderLessons() {
  lessonGrid.innerHTML = lessons.map((lesson) => `
    <article class="workshop-card" id="card-${lesson.slug}">
      <span class="workshop-icon" aria-hidden="true">${renderBrailleCells(lesson.icon)}</span>
      <div><h3>${lesson.title}</h3><p>${lesson.summary}</p></div>
      <div class="workshop-meta"><a href="#${lesson.slug}">Practice</a><span>${lesson.practiceSets.length} sets</span></div>
    </article>
  `).join("");
}

function renderWorkshopDetails() {
  workshopDetails.innerHTML = lessons.map((lesson, index) => `
    <article class="workshop-detail" id="${lesson.slug}">
      <div class="workshop-detail-header"><div><p class="eyebrow">Workshop ${index + 1}</p><h3>${lesson.title}</h3><p>${lesson.introduction}</p></div><div class="workshop-badge" aria-hidden="true"><span>${renderBrailleCells(lesson.icon)}</span><strong>${lesson.time}</strong></div></div>
      <div class="lesson-two-column"><section><h4>Learning goals</h4><ul class="objective-list">${lesson.objectives.map((objective) => `<li>${objective}</li>`).join("")}</ul></section><section class="cell-stepper" data-cell-stepper="${lesson.slug}" aria-live="polite"><div class="cell-stepper-heading"><h4>Learn one cell at a time</h4><span class="cell-step-count"></span></div><div class="cell-step-card"><span class="cell-step-print"></span><span class="cell-step-braille"></span><span class="cell-step-note"></span></div><div class="step-controls"><button class="button secondary dark-text" type="button" data-prev-cell="${lesson.slug}">Previous</button><button class="button primary" type="button" data-next-cell="${lesson.slug}">Next</button></div></section></div>
      <button class="button summary-button" type="button" data-summary="${lesson.slug}">Workshop summary</button>
      <section class="section-quiz" data-workshop-quiz="${lesson.slug}" aria-live="polite"><div class="section-quiz-copy"><h4>Practice this workshop</h4><p>Use Previous and Next to move through this workshop's practice pool.</p></div><div class="section-quiz-panel"><div class="section-quiz-prompt"><span class="section-quiz-braille"></span><span class="section-quiz-help"></span></div><div class="section-quiz-choices"></div><div class="section-quiz-footer"><p class="section-quiz-feedback">Choose an answer to begin.</p><div class="step-controls"><button class="button secondary dark-text" type="button" data-prev-workshop="${lesson.slug}">Previous</button><button class="button primary" type="button" data-next-workshop="${lesson.slug}">Next</button></div></div></div></section>
    </article>
  `).join("");
}

function renderChart(filter = "all") {
  chartGrid.innerHTML = chart.filter((item) => filter === "all" || item[4] === filter).map(([print, label, braille, dots, group]) => `
    <article class="chart-card" data-group="${group}"><span class="chart-braille" aria-label="Braille ${dots}">${renderBrailleCells(braille)}</span><div><h3>${print}</h3><p>${label}</p><p>dots ${dots}</p></div></article>
  `).join("");
}

function renderCellStep(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  const stepper = workshopDetails.querySelector(`[data-cell-stepper="${slug}"]`);
  const index = cellState.get(slug) || 0;
  if (!lesson || !stepper) return;
  const item = lesson.focus[index];
  stepper.querySelector(".cell-step-count").textContent = `${index + 1} of ${lesson.focus.length}`;
  stepper.querySelector(".cell-step-print").textContent = item;
  stepper.querySelector(".cell-step-braille").innerHTML = renderBrailleCells(translateText(item));
  stepper.querySelector(".cell-step-note").textContent = "Read the print, then name the braille cell.";
  stepper.querySelector("[data-prev-cell]").disabled = index === 0;
  stepper.querySelector("[data-next-cell]").disabled = index === lesson.focus.length - 1;
}

function moveCellStep(slug, direction) {
  const lesson = lessons.find((item) => item.slug === slug);
  const current = cellState.get(slug) || 0;
  cellState.set(slug, Math.min(Math.max(current + direction, 0), lesson.focus.length - 1));
  renderCellStep(slug);
}

function setupCellSteppers() {
  lessons.forEach((lesson) => {
    cellState.set(lesson.slug, 0);
    renderCellStep(lesson.slug);
  });
}

function getWorkshopPool(lesson) {
  const items = [...lesson.focus, ...lesson.practiceSets.flatMap((set) => set.items)];
  const unique = [...new Set(items)].filter((item) => !item.includes("/") && item.trim()).map((print) => ({ print, braille: translateText(print) })).filter((item) => item.braille !== item.print);
  return unique.length >= 4 ? unique : chart.filter((item) => item[4] !== "mark").map(([print, , braille]) => ({ print, braille }));
}

function buildOptions(pool, answer, index) {
  const distractors = pool.filter((item) => item.print !== answer.print);
  const rotated = [...distractors.slice(index), ...distractors.slice(0, index)];
  return [answer, ...rotated.slice(0, 3)].sort(() => Math.random() - 0.5);
}

function renderWorkshopQuestion(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  const quiz = workshopDetails.querySelector(`[data-workshop-quiz="${slug}"]`);
  let state = quizState.get(slug);
  if (!state) {
    state = { pool: getWorkshopPool(lesson), index: 0 };
    quizState.set(slug, state);
  }
  const answer = state.pool[state.index];
  quiz.querySelector(".section-quiz-braille").innerHTML = renderBrailleCells(answer.braille);
  quiz.querySelector(".section-quiz-help").textContent = `Question ${state.index + 1} of ${state.pool.length}`;
  quiz.querySelector(".section-quiz-feedback").textContent = "Choose an answer to begin.";
  quiz.querySelector(".section-quiz-choices").innerHTML = buildOptions(state.pool, answer, state.index).map((item) => `<button type="button" data-workshop-answer="${slug}" data-answer="${item.print}">${item.print}</button>`).join("");
  quiz.querySelector("[data-prev-workshop]").disabled = state.index === 0;
  quiz.querySelector("[data-next-workshop]").disabled = state.index === state.pool.length - 1;
}

function moveWorkshopQuestion(slug, direction) {
  const state = quizState.get(slug);
  state.index = Math.min(Math.max(state.index + direction, 0), state.pool.length - 1);
  renderWorkshopQuestion(slug);
}

function answerWorkshopQuestion(button) {
  const slug = button.dataset.workshopAnswer;
  const state = quizState.get(slug);
  const quiz = button.closest(".section-quiz");
  const answer = state.pool[state.index];
  const correct = button.dataset.answer === answer.print;
  [...quiz.querySelectorAll("[data-workshop-answer]")].forEach((choice) => {
    choice.disabled = true;
    if (choice.dataset.answer === answer.print) choice.classList.add("correct");
  });
  if (!correct) button.classList.add("incorrect");
  quiz.querySelector(".section-quiz-feedback").textContent = correct ? `Correct: ${answer.print}.` : `Not quite. This is ${answer.print}.`;
}

function setupWorkshopQuizzes() {
  lessons.forEach((lesson) => renderWorkshopQuestion(lesson.slug));
}

function renderSummary(lesson) {
  summaryTitle.textContent = lesson.title;
  summaryBody.innerHTML = `<section><h3>Learning goals</h3><ul class="objective-list">${lesson.objectives.map((objective) => `<li>${objective}</li>`).join("")}</ul></section><section><h3>Practice sets</h3><div class="practice-set-grid">${lesson.practiceSets.map((set) => `<section class="practice-set"><h4>${set.title}</h4><p>${set.instruction}</p><div class="drill-list">${set.items.map((item) => `<span class="drill-chip"><strong>${item}</strong><em>${renderBrailleCells(translateText(item))}</em></span>`).join("")}</div></section>`).join("")}</div></section>`;
}

function openSummary(slug) {
  const lesson = lessons.find((item) => item.slug === slug);
  renderSummary(lesson);
  summaryModal.hidden = false;
  closeSummary.focus();
}

function closeSummaryModal() {
  summaryModal.hidden = true;
}

function translateText(input) {
  let output = "";
  const chars = [...input];
  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index];
    const next = chars[index + 1];
    const next2 = chars[index + 2];
    const ksh = chart.find(([print, label]) => label === "ksh" && print === `${char}${next}${next2}`);
    if (ksh) {
      output += ksh[2];
      index += 2;
      continue;
    }
    if (consonants.has(char) && next === course.virama) {
      output += `${brailleMap.virama}${directMap[char]}`;
      index += 1;
      continue;
    }
    if (consonants.has(char) && vowelSigns[next]) {
      output += `${directMap[char]}${brailleMap[vowelSigns[next]]}`;
      index += 1;
      continue;
    }
    if (vowelSigns[char]) {
      output += brailleMap[vowelSigns[char]];
      continue;
    }
    output += directMap[char] || digits[char] || punctuation[char] || char;
  }
  return output;
}

function updateSandbox() {
  brailleOutput.innerHTML = renderBrailleCells(translateText(textInput.value));
}

if (courseKey) {
  chartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      chartButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderChart(button.dataset.chartFilter);
    });
  });

  workshopDetails.addEventListener("click", (event) => {
    const summaryButton = event.target.closest("[data-summary]");
    if (summaryButton) return openSummary(summaryButton.dataset.summary);
    const prevCellButton = event.target.closest("[data-prev-cell]");
    if (prevCellButton) return moveCellStep(prevCellButton.dataset.prevCell, -1);
    const nextCellButton = event.target.closest("[data-next-cell]");
    if (nextCellButton) return moveCellStep(nextCellButton.dataset.nextCell, 1);
    const answerButton = event.target.closest("[data-workshop-answer]");
    if (answerButton) return answerWorkshopQuestion(answerButton);
    const prevButton = event.target.closest("[data-prev-workshop]");
    if (prevButton) return moveWorkshopQuestion(prevButton.dataset.prevWorkshop, -1);
    const nextButton = event.target.closest("[data-next-workshop]");
    if (nextButton) return moveWorkshopQuestion(nextButton.dataset.nextWorkshop, 1);
  });

  closeSummary.addEventListener("click", closeSummaryModal);
  summaryModal.addEventListener("click", (event) => {
    if (event.target === summaryModal) closeSummaryModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !summaryModal.hidden) closeSummaryModal();
  });
  textInput.addEventListener("input", updateSandbox);

  setupPageText();
  renderLessons();
  renderWorkshopDetails();
  renderStaticBraille();
  setupCellSteppers();
  setupWorkshopQuizzes();
  renderChart();
  updateSandbox();
} else {
  renderStaticBraille();
}
