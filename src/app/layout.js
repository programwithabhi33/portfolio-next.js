import "./globals.css";

export const metadata = {
  title: "Abhishek | Full Stack Developer",
  description:
    "Full Stack Developer — React, TailwindCSS, Laravel, Node.js, MySQL, MongoDB, Docker. I build scalable APIs and backend systems with clean architecture and modern DevOps workflows with strong frontend understanding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
