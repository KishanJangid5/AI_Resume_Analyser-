# AI Resume Analyzer

AI Resume Analyzer is a full-stack web application designed to help job seekers optimize their resumes for Applicant Tracking Systems (ATS). By leveraging Google Gemini 3.7 Flash, OCR processing, and a deterministic offline fallback engine, the app provides real-time ATS scoring, keyword gap analysis, AI-powered resume rewriting, and PDF exports.

---

## 🏗️ Architecture & Tech Stack

| Layer | Technologies | Role / Responsibility |
| :--- | :--- | :--- |
| **Frontend** | React 19, TypeScript, TailwindCSS v4, Lucide React, Motion | Dark-themed dashboard, animated ATS score rings, and step-by-step workflow. |
| **Backend** | Express 4, Vite Middleware, Multer | API routing, file parsing, and development Vite server integration. |
| **AI Engine** | Google GenAI SDK (`@google/genai`, `gemini-3.7-flash`) | Structured JSON analysis and anti-hallucinatory resume optimization. |
| **OCR & Parsing** | `pdf-parse`, `tesseract.js`, `pdf-lib`, `jsPDF` | PDF text extraction, OCR on image uploads (PNG/JPG/WEBP), and client-side ATS PDF generation. |
| **Fallback Engine** | `atsEngine.ts` | Deterministic heuristic engine ensuring full application functionality without an API key or during rate limits. |

---

## 📂 Directory Structure

```text
ai-resume-analyzer/
├── server.ts                    # Express server entry point (port 3000 + Vite middleware)
├── server/
│   ├── gemini.ts                # Gemini client singleton
│   ├── pdfParser.ts             # PDF text extraction via pdf-parse
│   ├── ocrParser.ts             # OCR text extraction via Tesseract.js
│   ├── atsEngine.ts             # Fallback ATS keyword scoring and heuristic engine
│   └── routes/
│       ├── convert.ts           # POST /api/convert-and-parse
│       ├── analyze.ts           # POST /api/analyze
│       └── optimize.ts          # POST /api/optimize
├── src/
│   ├── App.tsx                  # Main application orchestrator & state manager
│   ├── types.ts                 # TypeScript interfaces
│   ├── data/
│   │   └── sampleData.ts        # Pre-built role scenarios
│   └── components/
│       ├── Navbar.tsx           # Navigation bar with sample loader and score indicators
│       ├── UploadZone.tsx       # File upload, text paste, and JD input forms
│       ├── AnalysisPage.tsx     # Score breakdown, sub-scores, and keyword badges
│       ├── ATSScoreRing.tsx     # Animated SVG radial gauge for ATS score
│       ├── KeywordTags.tsx      # Matched & missing keyword chips
│       ├── OptimizedResumePage.tsx # Side-by-side resume view with jsPDF export
│       └── PromptRevealPanel.tsx   # System and user prompt viewer
├── .env.example                 # Environment variables template
└── vite.config.ts               # Vite configuration



🔄 How It Works
Upload & Extraction: Upload a resume in PDF or image format (PNG/JPG/WEBP), paste raw text, or select a preloaded scenario. OCR handles image-based files.

ATS Scoring: The analysis engine evaluates the resume against the target Job Description across 4 pillars: Skills Match, Experience Relevance, Keyword Density, and Formatting Clarity.

Resume Optimization: The rewriter injects missing high-value keywords and strengthens bullet points while strictly preserving existing employment facts, company names, and dates.

PDF Export: Generate and download a recruiter-ready, ATS-compliant PDF directly from the browser.
