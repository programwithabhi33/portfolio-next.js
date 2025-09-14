import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./home/Navbar";
import ReduxProvider from "./ReduxProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
});

export const metadata = {
  title: "Abhishek | Full Stack Developer",
  description: "Computer science passionate, full stack developer",
};

export default function RootLayout({ children }) {
  console.log("Root Layout")
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
