// ─── Clippy — Portfolio RAG Chatbot ─────────────────────────────────────────

// ─── Knowledge Base ──────────────────────────────────────────────────────────
const KNOWLEDGE = [
  // ── Identity ──
  {
    tags: ["who","mira","about","name","person","you","introduce","yourself","portfolio"],
    q: "Who is Mira?",
    a: "Hi! I'm Mira — a Computer Engineering graduate from the University of Toronto (Class of 2025) with an Engineering Business certificate from Rotman. I'm based in Toronto, ON and currently open to work in software engineering, data engineering, product management, and tech consulting."
  },
  {
    tags: ["degree","education","school","university","uoft","toronto","study","graduate","engineering"],
    q: "What is Mira's education?",
    a: "Mira graduated from the University of Toronto in 2025 with a degree in Computer Engineering from the Edward S. Rogers Sr. Department of Electrical and Computer Engineering. She also completed a Business certificate through the Rotman School of Management."
  },
  {
    tags: ["open","work","hire","hiring","job","available","seeking","looking","opportunity","role","position"],
    q: "Is Mira open to work?",
    a: "Yes! Mira is actively open to work. She's seeking roles in software engineering, data engineering, product management, and tech consulting. Feel free to reach out via email or LinkedIn!"
  },
  {
    tags: ["contact","email","linkedin","github","reach","connect","message","social"],
    q: "How can I contact Mira?",
    a: "You can reach Mira at namira11kamal@gmail.com, connect on LinkedIn at www.linkedin.com/in/namirakamal , or check out her code on GitHub at github.com/nekkomira. She's based in Toronto, ON and is always happy to chat!"
  },
  {
    tags: ["location","city","toronto","canada","based","live","where"],
    q: "Where is Mira based?",
    a: "Mira is based in Toronto, Ontario, Canada."
  },
  {
    tags: ["interest","hobby","passion","love","like","enjoy","fun","outside","personal"],
    q: "What are Mira's interests?",
    a: "Mira is passionate about AI/ML (especially agentic systems and RAG), design, and Women in Tech. Outside of tech she's involved with Islamic Relief as Director of Events and Engineers Without Borders."
  },
  {
    tags: ["leadership","volunteer","extracurricular","club","islamic","relief","ewb","engineers","borders","community"],
    q: "What leadership roles has Mira held?",
    a: "Mira is the Director of Events at Islamic Relief Canada and is involved with Engineers Without Borders (EWB). Both roles reflect her commitment to community impact alongside her technical career."
  },

  // ── Skills ──
  {
    tags: ["skill","skills","tech","stack","language","know","expertise","proficient","tools","technologies"],
    q: "What are Mira's technical skills?",
    a: "Mira's core skills include: Python & Data Engineering, React / FastAPI / Firebase, Azure (ADF, Databricks), Power BI / SQL / PostgreSQL, ML/AI with PyTorch and HuggingFace, Figma / Product / UX, and C++ / Embedded systems."
  },
  {
    tags: ["python","data","engineering","pipeline","etl"],
    q: "What data engineering skills does Mira have?",
    a: "Mira is highly proficient in Python and data engineering (92%). She has hands-on experience building ETL pipelines with Azure Data Factory, Databricks, PostgreSQL, and Power BI from her Ontario Public Service internships."
  },
  {
    tags: ["machine","learning","ml","ai","pytorch","huggingface","tensorflow","deep","neural","model"],
    q: "What ML/AI skills does Mira have?",
    a: "Mira has strong ML/AI skills (82%) including PyTorch, HuggingFace Transformers, TensorFlow, CNNs, ANNs, and RAG systems. She's applied these in her ASPIRE capstone project and the APS360 toxicity predictor."
  },
  {
    tags: ["react","frontend","web","fastapi","firebase","fullstack","full-stack","javascript"],
    q: "What web development skills does Mira have?",
    a: "Mira is proficient in full-stack development (88%) using React for frontends and FastAPI for Python backends, with Firebase for real-time data and auth. She built ASPIRE — an end-to-end AI web app — using this stack."
  },
  {
    tags: ["azure","cloud","databricks","adf","power","bi","microsoft","aws","gcp"],
    q: "What cloud skills does Mira have?",
    a: "Mira has strong cloud experience (85%) with Azure Data Factory, Databricks, and Power BI from her OPS internships. She's also working with AWS Bedrock and GCP Vertex AI in her SmartSearch AI project."
  },
  {
    tags: ["sql","database","postgresql","postgres","postgis","query"],
    q: "What database skills does Mira have?",
    a: "Mira is proficient in SQL, PostgreSQL, and PostGIS (84%). She's used these in the GIS Scunt Mapper project and her OPS internships for data pipelines and analytics."
  },
  {
    tags: ["rag","retrieval","augmented","generation","vector","chromadb","embedding","llm","genai","generative"],
    q: "Does Mira have RAG or GenAI experience?",
    a: "Yes! Mira is currently building SmartSearch AI — a full-stack RAG application using ChromaDB, AWS Bedrock (Claude Sonnet), GCP Vertex AI, and local open-source models like LLaMA 3 and Mistral via Ollama. She's also fine-tuned Mistral using QLoRA/PEFT."
  },

  // ── Projects ──
  {
    tags: ["project","projects","built","work","portfolio","what","made","created"],
    q: "What projects has Mira built?",
    a: "Mira has built 5 main projects: (1) ASPIRE — AI Interview Coach (Distinction Award capstone), (2) Scunt Mapper — C++ GIS mapping software (Top 4/90 teams, A+), (3) ML Toxicity Predictor — deep learning on brain scans, (4) SmartSearch AI — a full-stack RAG application in progress, and (5) Ontario Public Service internship work across 3 government ministries."
  },
  {
    tags: ["aspire","interview","coach","capstone","distinction","star","nlp","speech"],
    q: "Tell me about ASPIRE.",
    a: "ASPIRE is Mira's UofT Computer Engineering capstone project — an AI-powered interview coaching platform. It uses FastAPI, React, PostgreSQL, Firebase, HuggingFace NLP, and Azure Speech-to-Text to evaluate spoken interview responses against the STAR framework. It achieved 93% F1 score and sub-200ms response times, and was awarded Distinction at the ECE Capstone Design Fair."
  },
  {
    tags: ["gis","scunt","mapper","openstreetmap","osm","cpp","dijkstra","pathfinding","routing","frosh","scavenger"],
    q: "Tell me about the GIS Scunt Mapper.",
    a: "Scunt Mapper is a C++ GIS application built for ECE297 at UofT. Designed around the engineering Frosh Week scavenger hunt, it lets users navigate multi-stop routes using real OpenStreetMap data. It implements Multi-target Dijkstra, 2-opt local search, and simulated annealing. It placed Top 4 out of 90 teams and earned an A+."
  },
  {
    tags: ["toxicity","olfactory","brain","scan","mice","mouse","cnn","ann","aps360","deep","learning","neural"],
    q: "Tell me about the ML Toxicity Predictor.",
    a: "This APS360 project predicts chemical odorant toxicity from olfactory bulb brain scans of mice. Mira built the ML pipeline: data preprocessing, baseline classifiers (SVM, Random Forest, Naive Bayes), and a primary CNN+ANN model in PyTorch. The final model achieved 71% validation accuracy, outperforming the Random Forest baseline by ~6%."
  },
  {
    tags: ["smartsearch","smart","search","rag","llama","mistral","bedrock","vertex","docker","ecs","qlora","peft","fine","tuning"],
    q: "Tell me about SmartSearch AI.",
    a: "SmartSearch AI is Mira's current personal project — a full-stack RAG application where users upload documents and ask natural language questions. It uses FastAPI, ChromaDB, AWS Bedrock (Claude Sonnet), GCP Vertex AI, and local models via Ollama. Mira also fine-tuned Mistral using QLoRA/PEFT and deployed to AWS ECS/ECR with GitHub Actions CI/CD."
  },
  {
    tags: ["ontario","public","service","ops","government","internship","coop","co-op","ministry"],
    q: "Tell me about Mira's Ontario Public Service experience.",
    a: "Mira completed 3 internships with the Ontario Public Service: (1) MPBDSP (2024) — reduced manual testing 40% by automating ADF pipeline validation, improved Databricks throughput 25%. (2) MTO (2023) — built an ML Resume Ranker on Azure, created Power BI dashboards. (3) MCSS (2022) — led a Chrome migration for 3,000+ case workers, reduced testing time 60% with Selenium automation."
  },

  // ── Experience ──
  {
    tags: ["experience","internship","work","coop","job","employment","history","background"],
    q: "What work experience does Mira have?",
    a: "Mira has 3 software engineering internships with the Ontario Public Service: MPBDSP (2024), Ministry of Transportation (2023), and Ministry of Children, Community & Social Services (2022). Her work spans data engineering, ML applications, Power BI dashboards, and test automation."
  },
  {
    tags: ["award","distinction","achievement","prize","recognition","top","honour","honor","won","winning"],
    q: "What awards has Mira won?",
    a: "Mira's notable achievements include: Distinction Award at the UofT ECE Capstone Design Fair for ASPIRE, and Top 4 out of 90 teams (A+) for the Scunt Mapper GIS project in ECE297."
  },
  {
    tags: ["resume","cv","download","pdf"],
    q: "Can I download Mira's resume?",
    a: "Mira's resume is available on request — reach out at namira11kamal@gmail.com or via LinkedIn and she'll send it right over!"
  },
  {
    tags: ["certificate","rotman","business","mba"],
    q: "What is Mira's business certificate?",
    a: "Mira completed an Engineering Business certificate through the Rotman School of Management at UofT. It gave her business and product thinking context to complement her engineering background."
  },
];

// ─── Scoring Engine ───────────────────────────────────────────────────────────
function tokenize(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1);
}

const STOPWORDS = new Set([
  'the','a','an','is','are','was','were','be','been','being','have','has','had',
  'do','does','did','will','would','could','should','may','might','can','shall',
  'to','of','in','for','on','with','at','by','from','about','as','it','this',
  'that','and','or','but','not','what','who','how','when','where','why','me',
  'my','you','your','tell','know','give','please','hey','hi','hello'
]);

function getKeywords(text) {
  return tokenize(text).filter(w => !STOPWORDS.has(w));
}

function score(query, entry) {
  const qKeywords = getKeywords(query);
  let s = 0;

  // Tag matching (high weight)
  for (const kw of qKeywords) {
    for (const tag of entry.tags) {
      if (tag === kw) { s += 3; break; }
      if (tag.includes(kw) || kw.includes(tag)) { s += 1.5; break; }
    }
  }

  // Answer text overlap (lower weight)
  const aTokens = tokenize(entry.a + ' ' + entry.q);
  for (const kw of qKeywords) {
    if (aTokens.includes(kw)) s += 0.5;
  }

  // Boost for multi-word matches
  const queryStr = qKeywords.join(' ');
  for (const tag of entry.tags) {
    if (queryStr.includes(tag) && tag.length > 4) s += 2;
  }

  return s;
}

function findBestAnswer(query) {
  if (!query.trim()) return null;

  const scored = KNOWLEDGE.map(entry => ({
    entry,
    score: score(query, entry)
  })).sort((a, b) => b.score - a.score);

  const best = scored[0];

  if (best.score < 1) {
    return "Hmm, I'm not sure about that one! Try asking me about Mira's projects, skills, experience, education, or how to contact her. It looks like you need some help! 📎";
  }

  return best.entry.a;
}

// ─── Clippy UI ────────────────────────────────────────────────────────────────
const CLIPPY_TIPS = [
  "It looks like you're viewing a portfolio. Would you like help?",
  "Hi! I'm Clippy. Ask me anything about Mira!",
  "Did you know Mira won a Distinction Award for her capstone?",
  "Try asking: 'What projects has Mira built?'",
  "Try asking: 'What are Mira's skills?'",
  "Try asking: 'Is Mira open to work?'",
  "Try asking: 'Tell me about ASPIRE'",
];

let clippyTipIdx = 0;
let clippyTypingInterval = null;
let clippyIdleTimer = null;

function initClippy() {
  clippyIdleTimer = setInterval(() => {
    const input = document.getElementById('clippy-input');
    if (input && input.value === '') {
      clippyTipIdx = (clippyTipIdx + 1) % CLIPPY_TIPS.length;
      clippyTypeBubble(CLIPPY_TIPS[clippyTipIdx]);
    }
  }, 20000);

  setTimeout(() => clippyTypeBubble(CLIPPY_TIPS[0]), 1200);
}

function clippyTypeBubble(text) {
  const bubble = document.getElementById('clippy-bubble-text');
  if (!bubble) {
    setTimeout(() => clippyTypeBubble(text), 300);
    return;
  }

  clearInterval(clippyTypingInterval);
  bubble.textContent = '';
  let i = 0;
  clippyTypingInterval = setInterval(() => {
    bubble.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(clippyTypingInterval);
  }, 30);
}

function clippyAsk() {
  const input = document.getElementById('clippy-input');
  const q = input.value.trim();
  if (!q) return;

  clippyTypeBubble('Hmm, let me check my notes...');

  setTimeout(() => {
    const answer = findBestAnswer(q);
    clippyTypeBubble(answer);
  }, 600);

  const history = document.getElementById('clippy-history');
  if (history) {
    const userMsg = document.createElement('div');
    userMsg.className = 'clippy-user-msg';
    userMsg.textContent = '> ' + q;
    history.appendChild(userMsg);
    history.scrollTop = history.scrollHeight;
  }

  input.value = '';
}

function clippyKeydown(e) {
  if (e.key === 'Enter') clippyAsk();
}