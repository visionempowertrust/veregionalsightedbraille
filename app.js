const lessons = [
  {
    title: "Vowels and Reading Order",
    summary: "Learn independent Kannada vowels and how Bharati Braille writes vowels after consonants.",
    icon: "⠁",
    time: "25 min",
    level: "Start here"
  },
  {
    title: "Consonants: ಕ to ಙ",
    summary: "Practice the velar row with dot patterns, Kannada print, and sound labels.",
    icon: "⠅",
    time: "20 min",
    level: "Letters"
  },
  {
    title: "Consonants: ಚ to ಞ",
    summary: "Recognize the palatal row and compare similar-looking braille cells.",
    icon: "⠉",
    time: "20 min",
    level: "Letters"
  },
  {
    title: "Consonants: ಟ to ಣ",
    summary: "Build confidence with retroflex sounds and their Bharati Braille cells.",
    icon: "⠾",
    time: "25 min",
    level: "Letters"
  },
  {
    title: "Consonants: ತ to ನ",
    summary: "Read the dental row and distinguish ತ, ಥ, ದ, ಧ, and ನ.",
    icon: "⠞",
    time: "25 min",
    level: "Letters"
  },
  {
    title: "Consonants: ಪ to ಹ",
    summary: "Finish common consonants, semivowels, liquids, sibilants, and ಹ.",
    icon: "⠏",
    time: "35 min",
    level: "Letters"
  },
  {
    title: "Halant, Anusvara, Visarga",
    summary: "See how vowel cancellation and syllable codas are represented in braille.",
    icon: "⠈",
    time: "20 min",
    level: "Marks"
  },
  {
    title: "Words and Sentences",
    summary: "Read short Kannada words, numbers, punctuation, and mixed review drills.",
    icon: "⠎",
    time: "40 min",
    level: "Practice"
  }
];

const chart = [
  ["ಅ", "a", "⠁", "1", "vowel"], ["ಆ", "aa", "⠜", "345", "vowel"],
  ["ಇ", "i", "⠊", "24", "vowel"], ["ಈ", "ii", "⠔", "35", "vowel"],
  ["ಉ", "u", "⠥", "136", "vowel"], ["ಊ", "uu", "⠳", "1256", "vowel"],
  ["ಎ", "e", "⠢", "26", "vowel"], ["ಏ", "ee", "⠑", "15", "vowel"],
  ["ಐ", "ai", "⠌", "34", "vowel"], ["ಒ", "o", "⠭", "1346", "vowel"],
  ["ಓ", "oo", "⠕", "135", "vowel"], ["ಔ", "au", "⠪", "246", "vowel"],
  ["ಋ", "r vocalic", "⠐⠗", "5, 1235", "vowel"],

  ["ಕ", "ka", "⠅", "13", "consonant"], ["ಖ", "kha", "⠨", "46", "consonant"],
  ["ಗ", "ga", "⠛", "1245", "consonant"], ["ಘ", "gha", "⠣", "126", "consonant"],
  ["ಙ", "nga", "⠬", "346", "consonant"], ["ಚ", "cha", "⠉", "14", "consonant"],
  ["ಛ", "chha", "⠡", "16", "consonant"], ["ಜ", "ja", "⠚", "245", "consonant"],
  ["ಝ", "jha", "⠴", "356", "consonant"], ["ಞ", "nya", "⠒", "25", "consonant"],
  ["ಟ", "tta", "⠾", "23456", "consonant"], ["ಠ", "ttha", "⠺", "2456", "consonant"],
  ["ಡ", "dda", "⠫", "1246", "consonant"], ["ಢ", "ddha", "⠿", "123456", "consonant"],
  ["ಣ", "nna", "⠼", "3456", "consonant"], ["ತ", "ta", "⠞", "2345", "consonant"],
  ["ಥ", "tha", "⠹", "1456", "consonant"], ["ದ", "da", "⠙", "145", "consonant"],
  ["ಧ", "dha", "⠮", "2346", "consonant"], ["ನ", "na", "⠝", "1345", "consonant"],
  ["ಪ", "pa", "⠏", "1234", "consonant"], ["ಫ", "pha", "⠖", "235", "consonant"],
  ["ಬ", "ba", "⠃", "12", "consonant"], ["ಭ", "bha", "⠘", "45", "consonant"],
  ["ಮ", "ma", "⠍", "134", "consonant"], ["ಯ", "ya", "⠽", "13456", "consonant"],
  ["ರ", "ra", "⠗", "1235", "consonant"], ["ಲ", "la", "⠇", "123", "consonant"],
  ["ಳ", "lla", "⠸", "456", "consonant"], ["ವ", "va", "⠧", "1236", "consonant"],
  ["ಶ", "sha", "⠩", "146", "consonant"], ["ಷ", "ssa", "⠯", "12346", "consonant"],
  ["ಸ", "sa", "⠎", "234", "consonant"], ["ಹ", "ha", "⠓", "125", "consonant"],
  ["ಕ್ಷ", "ksha", "⠟", "12345", "consonant"],

  ["್", "halant", "⠈", "4", "mark"], ["ಂ", "anusvara", "⠂", "2", "mark"],
  ["ಃ", "visarga", "⠃", "12", "mark"], ["೯", "number sign + 9", "⠼⠊", "3456, 24", "mark"]
];

const vowelSigns = {
  "ಾ": "ಆ", "ಿ": "ಇ", "ೀ": "ಈ", "ು": "ಉ", "ೂ": "ಊ", "ೆ": "ಎ", "ೇ": "ಏ",
  "ೈ": "ಐ", "ೊ": "ಒ", "ೋ": "ಓ", "ೌ": "ಔ", "ೃ": "ಋ"
};

const directMap = Object.fromEntries(chart.map(([print, , braille]) => [print, braille]));
const consonants = new Set(chart.filter((item) => item[4] === "consonant").map(([print]) => print));
const digits = {
  "0": "⠼⠚", "1": "⠼⠁", "2": "⠼⠃", "3": "⠼⠉", "4": "⠼⠙",
  "5": "⠼⠑", "6": "⠼⠋", "7": "⠼⠛", "8": "⠼⠓", "9": "⠼⠊",
  "೦": "⠼⠚", "೧": "⠼⠁", "೨": "⠼⠃", "೩": "⠼⠉", "೪": "⠼⠙",
  "೫": "⠼⠑", "೬": "⠼⠋", "೭": "⠼⠛", "೮": "⠼⠓", "೯": "⠼⠊"
};
const punctuation = { ",": "⠂", ";": "⠆", ":": "⠒", ".": "⠲", "?": "⠦", "!": "⠖", "-": "⠤" };

const lessonGrid = document.querySelector("#lessonGrid");
const chartGrid = document.querySelector("#chartGrid");
const chartButtons = document.querySelectorAll("[data-chart-filter]");
const quizBraille = document.querySelector("#quizBraille");
const quizDots = document.querySelector("#quizDots");
const choices = document.querySelector("#choices");
const quizFeedback = document.querySelector("#quizFeedback");
const nextQuestion = document.querySelector("#nextQuestion");
const kannadaInput = document.querySelector("#kannadaInput");
const brailleOutput = document.querySelector("#brailleOutput");

let currentQuestion;

function renderLessons() {
  lessonGrid.innerHTML = lessons.map((lesson) => `
    <article class="workshop-card">
      <span class="workshop-icon" aria-hidden="true">${lesson.icon}</span>
      <div>
        <h3>${lesson.title}</h3>
        <p>${lesson.summary}</p>
      </div>
      <div class="workshop-meta">
        <span>${lesson.level}</span>
        <span>${lesson.time}</span>
      </div>
    </article>
  `).join("");
}

function renderChart(filter = "all") {
  chartGrid.innerHTML = chart
    .filter((item) => filter === "all" || item[4] === filter)
    .map(([print, label, braille, dots, group]) => `
      <article class="chart-card" data-group="${group}">
        <span class="chart-braille" aria-hidden="true">${braille}</span>
        <div>
          <h3>${print}</h3>
          <p>${label}</p>
          <p>dots ${dots}</p>
        </div>
      </article>
    `).join("");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function makeQuestion() {
  const pool = chart.filter((item) => item[4] !== "mark" && item[2].length === 1);
  currentQuestion = pool[Math.floor(Math.random() * pool.length)];
  const options = shuffle([
    currentQuestion,
    ...shuffle(pool.filter((item) => item[0] !== currentQuestion[0])).slice(0, 3)
  ]);

  quizBraille.textContent = currentQuestion[2];
  quizDots.textContent = `dots ${currentQuestion[3]}`;
  quizFeedback.textContent = "Choose the matching Kannada symbol.";
  choices.innerHTML = options.map((item) => `
    <button type="button" data-answer="${item[0]}" aria-label="${item[1]}">${item[0]}</button>
  `).join("");
}

function answerQuestion(event) {
  const button = event.target.closest("button");
  if (!button) return;

  const isCorrect = button.dataset.answer === currentQuestion[0];
  [...choices.querySelectorAll("button")].forEach((choice) => {
    choice.disabled = true;
    if (choice.dataset.answer === currentQuestion[0]) choice.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("incorrect");
  quizFeedback.textContent = isCorrect
    ? `Correct: ${currentQuestion[0]} is ${currentQuestion[1]}.`
    : `Not quite. This cell is ${currentQuestion[0]} (${currentQuestion[1]}).`;
}

function translateKannada(input) {
  let output = "";
  const chars = [...input];

  for (let index = 0; index < chars.length; index += 1) {
    const char = chars[index];
    const next = chars[index + 1];

    if (char === "ಕ" && next === "್" && chars[index + 2] === "ಷ") {
      output += directMap["ಕ್ಷ"];
      index += 2;
      continue;
    }

    if (consonants.has(char) && next === "್") {
      output += `${directMap["್"]}${directMap[char]}`;
      index += 1;
      continue;
    }

    if (consonants.has(char) && vowelSigns[next]) {
      output += `${directMap[char]}${directMap[vowelSigns[next]]}`;
      index += 1;
      continue;
    }

    if (vowelSigns[char]) {
      output += directMap[vowelSigns[char]];
      continue;
    }

    output += directMap[char] || digits[char] || punctuation[char] || char;
  }

  return output;
}

function updateSandbox() {
  brailleOutput.textContent = translateKannada(kannadaInput.value);
}

chartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chartButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderChart(button.dataset.chartFilter);
  });
});

choices.addEventListener("click", answerQuestion);
nextQuestion.addEventListener("click", makeQuestion);
kannadaInput.addEventListener("input", updateSandbox);

renderLessons();
renderChart();
makeQuestion();
updateSandbox();
