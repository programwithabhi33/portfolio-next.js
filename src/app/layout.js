import "./globals.css";

export const metadata = {
  title: "Abhishek | Full Stack Developer - Backend-focused",
  description:
    "Backend-focused full-stack developer building web applications and scalable APIs with Laravel, PHP, Node.js, React, MySQL, Docker, and Linux. Familiar with AI-assisted development, Claude Code, prompt design, MCP concepts, and LLM fundamentals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
