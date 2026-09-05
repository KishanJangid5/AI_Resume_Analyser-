<div align="center">
🎯 AI Resume Analyzer
Intelligent Keyword Matcher & Resume Optimization Studio

A full-stack recruitment-tech app that simulates real-world Applicant Tracking Systems — parsing resumes, scoring ATS compatibility, closing keyword gaps, and generating a recruiter-ready optimized resume with full AI prompt transparency.

React TypeScript Node.js TailwindCSS Gemini License

</div>
✨ Highlights
	
🔁 3-Step Workflow	Intake & Parsing → ATS Audit & Scoring → AI Optimization & Prompt Reveal
📊 0–100 ATS Score Engine	Circular gauge, sub-scores, and an actionable improvement plan
🛡️ Zero-Fabrication Guarantee	Anti-hallucination prompting — no invented roles, employers, or dates
🔍 Full Prompt Transparency	Every system & user prompt used to optimize your resume is revealed and copyable
⚙️ Deterministic Fallback Engine	80+ competency dictionary keeps the app fully functional even if the AI API is down
🖥️ See It In Action

Step 1 — Upload & Inputs Resume (PDF / PNG / JPG / raw text) and target job posting are ingested side-by-side, with live word/character counts and quick-start role presets.

Step 2 — ATS Match Analysis A circular ATS gauge (e.g. 59/100), an executive assessment, and a categorized improvement plan are generated instantly.

Step 3 — Keyword Match Spectrum Missing vs. matched keywords surface as searchable, color-coded chips — ready for one-click optimization.

Step 4 — Optimized Resume & Diff Score jumps from 59% → 92% (+33%), with a clear breakdown of skills added, keywords woven in, and summary evolution.

Step 5 — Side-by-Side Resume Comparison Original and AI-optimized resumes render in parallel with live ATS scores, so every change is fully traceable back to the source.

🏗️ Architecture
Client Browser (React + TS + Vite + Tailwind)
        │  Multipart Upload / JSON POST        ▲  JSON Responses
        ▼                                       │
   Node.js Express Server — 0.0.0.0:3000
        │                    │                  │
  /api/convert         /api/analyze        /api/optimize
   pdf-parse           Gemini 3.7 Flash    Gemini 3.7 Flash
   OCR (Tesseract)     + Heuristic         + Heuristic
   Binary regex        Fallback Engine     Optimization
🧰 Architecture & Tech Stack
Layer	Technologies	Role / Responsibility
Frontend	React 19, TypeScript, TailwindCSS v4, Lucide React, Motion, Canvas-Confetti	Dark-themed dashboard, animated ATS score rings, step-by-step workflow
Backend	Express 4, Vite Middleware, Multer	API routing, in-memory file parsing, dev server integration
AI Engine	Google GenAI SDK (@google/genai, gemini-3.7-flash)	Structured JSON analysis and anti-hallucinatory resume optimization
OCR & Parsing	pdf-parse, tesseract.js, pdf-lib, jsPDF	PDF text extraction, OCR on image uploads, client-side ATS PDF generation
Fallback Engine	atsEngine.ts	Deterministic heuristic engine — zero downtime without an API key or during rate limits
🎨 Design System — Elegant Dark
Element	Spec	Purpose
Base Background	
#0A0A0A	Deep carbon, high contrast, low eye fatigue
Container Surface	
#1A1A1A + border-white/10	Flat, non-nested card depth
Primary Accent	
#E10600 (Crimson)	CTAs, critical keywords, active steps
Success Accent	
#10B981 (Emerald)	Matched keywords, score boosts
Warning Accent	
#F59E0B (Amber)	Secondary recommendations
📂 Directory Structure
ai-resume-analyzer/
├── server.ts                       # Express server entry point (port 3000 + Vite middleware)
├── server/
│   ├── gemini.ts                   # Gemini client singleton
│   ├── pdfParser.ts                # PDF text extraction via pdf-parse
│   ├── ocrParser.ts                # OCR text extraction via Tesseract.js
│   ├── atsEngine.ts                # Fallback ATS keyword scoring and heuristic engine
│   └── routes/
│       ├── convert.ts              # POST /api/convert-and-parse
│       ├── analyze.ts              # POST /api/analyze
│       └── optimize.ts             # POST /api/optimize
├── src/
│   ├── App.tsx                     # Main application orchestrator & state manager
│   ├── types.ts                    # TypeScript interfaces
│   ├── data/
│   │   └── sampleData.ts           # Pre-built role scenarios
│   └── components/
│       ├── Navbar.tsx              # Navigation bar with sample loader and score indicators
│       ├── UploadZone.tsx          # File upload, text paste, and JD input forms
│       ├── AnalysisPage.tsx        # Score breakdown, sub-scores, and keyword badges
│       ├── ATSScoreRing.tsx        # Animated SVG radial gauge for ATS score
│       ├── KeywordTags.tsx         # Matched & missing keyword chips
│       ├── OptimizedResumePage.tsx # Side-by-side resume view with jsPDF export
│       └── PromptRevealPanel.tsx   # System and user prompt viewer
├── .env.example                    # Environment variables template
└── vite.config.ts                  # Vite configuration
🔄 How It Works
Upload & Extraction — Upload a resume as PDF or image (PNG/JPG/WEBP), paste raw text, or pick a preloaded scenario. OCR handles image-based files.
ATS Scoring — The analysis engine scores the resume against the target job description across 4 pillars: Skills Match, Experience Relevance, Keyword Density, and Formatting Clarity.
Resume Optimization — The rewriter naturally injects missing high-value keywords and strengthens bullet points while strictly preserving real employment facts, company names, and dates.
PDF Export — Generate and download a recruiter-ready, ATS-compliant PDF directly from the browser.
🔐 AI Prompt Architecture & Reveal Panel

Whenever optimization meaningfully improves the ATS score, the exact prompt architecture is exposed to the user — turning the tool into a prompt-engineering learning aid as well as a resume optimizer.

#	Component	Purpose
1	System Persona	Positions the LLM as an elite ATS resume writer & career strategist across Workday, Greenhouse, Taleo, and Lever
2	Anti-Hallucination	Hard-forbids invented employers, fabricated degrees, or synthetic project milestones — real experience only
3	JSON Schema	Structured output enforcement enables reliable diff parsing and verifiable, side-by-side improvements
Master Prompt Templates (server-side only)

Prompt A — ATS Analysis

You are an expert ATS resume screener and career coach. Compare the
RESUME against the JOB DESCRIPTION. Return ONLY valid JSON:
{ ats_score, missing_keywords[], matched_keywords[], summary,
  improvement_suggestions[] }

Prompt B — Resume Optimization

You are an expert resume writer specializing in ATS optimization.
Rewrite the RESUME to better match the JOB DESCRIPTION, naturally
incorporating the MISSING KEYWORDS where truthful and relevant.
Do not fabricate roles, companies, or dates. Preserve resume structure.
Return ONLY valid JSON:
{ optimized_resume, new_ats_score, changes:
  { skills_added[], keywords_integrated[], summary_change } }
🛡️ Reliability & Non-Functional Safeguards
✅ Deterministic heuristic fallback engine (80+ competency dictionary) guarantees zero downtime if the AI API is rate-limited or unavailable
✅ Server-side API keys — never exposed client-side; every AI call is routed through the backend
✅ File validation — type/size checks (up to 10MB) with graceful retry on malformed AI JSON responses
✅ Polished loading states across upload → conversion → OCR → analysis → generation
🚀 Getting Started
bash
# Clone the repository
git clone https://github.com/<your-username>/ai-resume-analyzer.git
cd ai-resume-analyzer

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Google GenAI API key to .env

# Run the development server
npm run dev

The app will be available at http://localhost:3000.

🧪 Tech Badges Summary

React 19 · TypeScript · Vite · Tailwind CSS v4 · Node.js / Express 4 · Google GenAI SDK · Gemini 3.7 Flash · Tesseract.js OCR · pdf-parse · pdf-lib · jsPDF

<div align="center">

Built with React · Express · Gemini

⭐ If you find this project useful, consider giving it a star!

</div>
