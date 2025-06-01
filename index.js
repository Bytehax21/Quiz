

const questions = [
  {
    q: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Programming Unit"],
    answer: "Central Processing Unit"
  },
  {
    q: "Which language is used for web pages?",
    options: ["Python", "HTML", "C++"],
    answer: "HTML"
  },
  {
    q: "What does RAM stand for?",
    options: ["Random Access Memory", "Run All Memory", "Read Access Machine"],
    answer: "Random Access Memory"
  },
  {
    q: "Which of these is a programming language?",
    options: ["HTTP", "Java", "Wi-Fi"],
    answer: "Java"
  },
  {
    q: "What does OS stand for?",
    options: ["Operating System", "Open Software", "Order Service"],
    answer: "Operating System"
  },
  {
    q: "Which one is an input device?",
    options: ["Monitor", "Keyboard", "Speaker"],
    answer: "Keyboard"
  },
  {
    q: "Which one is a storage device?",
    options: ["Printer", "Hard Drive", "Router"],
    answer: "Hard Drive"
  },
  {
    q: "What is the full form of URL?",
    options: ["Uniform Resource Locator", "Unified Record Line", "User Reference Link"],
    answer: "Uniform Resource Locator"
  },
  {
    q: "Which is used to style web pages?",
    options: ["CSS", "SQL", "PHP"],
    answer: "CSS"
  },
  {
    q: "What does 'bug' mean in coding?",
    options: ["Animal in code", "Typing mistake", "Error in program"],
    answer: "Error in program"
  }
];

let i = 0;
let score = 0;

function load() {
  const q = questions[i];
  document.getElementById("question").innerText = q.q;
  document.getElementById("opt1").value = q.options[0];
  document.getElementById("label1").innerText = q.options[0];
  document.getElementById("opt2").value = q.options[1];
  document.getElementById("label2").innerText = q.options[1];
  document.getElementById("opt3").value = q.options[2];
  document.getElementById("label3").innerText = q.options[2];

  document.getElementsByName("opt").forEach(opt => opt.checked = false);
}

function next() {
  const selected = document.querySelector('input[name="opt"]:checked');
  if (!selected) {
    alert("Please pick an option!");
    return;
  }

  if (selected.value === questions[i].answer) {
    score++;
  }

  i++;
  if (i < questions.length) {
    load();
  } else {
    document.getElementById("question").innerText = "Quiz Done!";
    document.getElementById("result").innerText = "Score: " + score + " / " + questions.length;
    document.getElementById("nextBtn").style.display = "none"; // Hide Next button
    document.getElementById("restartBtn").style.display = "block"; // Show Restart button
    document.getElementsByName("opt").forEach(opt => opt.style.display = "none");
    document.getElementById("label1").style.display = "none";
    document.getElementById("label2").style.display = "none";
    document.getElementById("label3").style.display = "none";
  }
}

function restart() {
  i = 0;
  score = 0;
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "block";
  document.getElementsByName("opt").forEach(opt => opt.style.display = "inline");
  document.getElementById("label1").style.display = "inline";
  document.getElementById("label2").style.display = "inline";
  document.getElementById("label3").style.display = "inline";
  document.getElementById("result").innerText = "";
  load();
}

load();