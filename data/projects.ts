export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Sahaj",
    description:
      "Offline-first full-stack web app for Indian government scheme discovery and legal rights guidance. Fine-tuned Gemma 4 via Ollama, served via FastAPI with a React frontend and voice input.",
    tags: ["Python", "FastAPI", "React", "Gemma 4", "Ollama", "Docker"],
    link: "https://github.com/Smriti-netizen/Sahaj",
  },
  {
    title: "RAG Pipeline",
    description:
      "Enterprise RAG web app with role-based access control — employees query internal documents by department using natural language.",
    tags: ["Python", "RAG", "FastAPI", "Docker"],
    link: "https://github.com/Smriti-netizen/RagPipeline",
  },
  {
    title: "PFine",
    description:
      "Plant disease diagnosis Android app built during Amazon ML Summer School — TensorFlow Lite model with Kotlin UI and camera/gallery input.",
    tags: ["Kotlin", "TensorFlow Lite", "Python", "Android"],
    link: "https://github.com/Smriti-netizen/PFine",
  },
  {
    title: "InsuranceAgent",
    description:
      "Multimodal claim verification pipeline for HackerRank Orchestrate — decoupled perception-policy split with Groq vision and deterministic Python guardrails.",
    tags: ["Python", "VLM", "Groq", "LangGraph"],
    link: "https://github.com/Smriti-netizen/HackerrankOrchestrateHackathonJune-26-VLM-submission",
  },
  {
    title: "Multi-Agent CSV Analyst",
    description:
      "Upload any CSV, ask questions in plain English, and get a verified Markdown report — four LangGraph agents write, execute, analyze, and fact-check.",
    tags: ["LangGraph", "Gemini", "Streamlit", "Python"],
    link: "https://github.com/Smriti-netizen/MutliAgentCSVAnalyst",
  },
  {
    title: "VishRaksh",
    description:
      "AI-powered snakebite triage assistant — PaliGemma 2 describes wounds from images; MedGemma produces patient- or doctor-oriented clinical guidance.",
    tags: ["PaliGemma", "MedGemma", "Gradio", "Python"],
    link: "https://github.com/Smriti-netizen/VishRaksh",
  },
  {
    title: "Witter",
    description:
      "A social microblogging project exploring real-time feeds, posts, and user interactions.",
    tags: ["Full Stack", "Web App"],
    link: "https://github.com/Smriti-netizen/Witter",
  },
  {
    title: "QuizApp",
    description:
      "Kotlin quiz app for pre-schoolers — general knowledge across science, history, and more with instant feedback and scoring.",
    tags: ["Kotlin", "Android", "Education"],
    link: "https://github.com/Smriti-netizen/QuizApp",
  },
];
