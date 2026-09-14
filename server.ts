import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import convertRouter from "./server/routes/convert.js";
import analyzeRouter from "./server/routes/analyze.js";
import optimizeRouter from "./server/routes/optimize.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json({ limit: "25mb" }));
  app.use(express.urlencoded({ extended: true, limit: "25mb" }));

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "AI Resume Analyzer API",
    });
  });

  app.use("/api/convert-and-parse", convertRouter);
  app.use("/api/analyze", analyzeRouter);
  app.use("/api/optimize", optimizeRouter);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AI Resume Analyzer server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
