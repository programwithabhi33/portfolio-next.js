import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./home/Navbar";
import Footer from "./[components]/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek | Full Stack Developer",
  description: "Computer science passionate, full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
