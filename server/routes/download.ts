import { RequestHandler } from "express";
import * as fs from "fs";
import * as path from "path";

export const handleProjectDownload: RequestHandler = (req, res) => {
  try {
    // For demonstration purposes, we'll create a simplified project structure
    // In a real application, you might use a library like 'archiver' to create actual zip files

    const projectData = {
      "package.json": JSON.stringify(
        {
          name: "portfolio-project",
          version: "1.0.0",
          description: "Modern IT Software Engineer Portfolio",
          main: "index.js",
          scripts: {
            dev: "vite",
            build: "npm run build:client && npm run build:server",
            start: "node dist/server/node-build.mjs",
          },
          dependencies: {
            react: "^18.3.1",
            "react-dom": "^18.3.1",
            "react-router-dom": "^6.26.2",
            express: "^4.18.2",
            typescript: "^5.5.3",
          },
          author: "Arun Balasubramanian",
          license: "MIT",
        },
        null,
        2,
      ),

      "README.md": `# Portfolio Project

## Modern IT Software Engineer Portfolio

A stunning, responsive portfolio website built with React, TypeScript, and Express.

### Features
- Dark/Light theme toggle
- Responsive design
- Contact form with email integration
- Resume download functionality
- Project showcase with detailed views
- Skills section with tabs
- Professional styling

### Tech Stack
- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Routing**: React Router 6
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React

### Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open http://localhost:8080

### Project Structure
\`\`\`
client/          # React frontend
├── components/  # Reusable components
├── pages/       # Route components
├── contexts/    # React contexts
└── global.css   # Global styles

server/          # Express backend
├── routes/      # API routes
└── index.ts     # Server setup
\`\`\`

### Author
Alexander Chen - Full Stack Developer
`,

      "client/App.tsx": `import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import PortfolioLayout from "./components/PortfolioLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PortfolioLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PortfolioLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}`,

      "server/index.ts": `import express from "express";
import cors from "cors";

export function createServer() {
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  
  app.get("/api/ping", (req, res) => {
    res.json({ message: "Portfolio API is running!" });
  });
  
  return app;
}`,

      ".gitignore": `node_modules/
dist/
.env
.DS_Store
*.log`,

      "tailwind.config.js": `module.exports = {
  content: ["./client/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          accent: "hsl(142 86% 28%)",
          bg: "hsl(var(--portfolio-bg))",
          card: "hsl(var(--portfolio-card))",
          text: "hsl(var(--portfolio-text))",
        },
      },
    },
  },
  plugins: [],
};`,
    };

    // Create a simple text-based "zip" content
    let zipContent = "PORTFOLIO PROJECT FILES\n";
    zipContent += "========================\n\n";

    for (const [filename, content] of Object.entries(projectData)) {
      zipContent += `\n--- ${filename} ---\n`;
      zipContent += content;
      zipContent += "\n\n";
    }

    // Set headers for file download
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="portfolio-project.zip"',
    );

    // Send the "zip" content
    res.send(zipContent);
  } catch (error) {
    console.error("Project download error:", error);
    res.status(500).json({ error: "Failed to download project" });
  }
};
