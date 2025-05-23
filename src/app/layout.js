import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next  Hero",
    template: "%s | Next Hero",
  },
  description: "Super Powerful Next Website",
  other: {
    keyword: "Next.js, React.js, Javascript, Next Hero",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Navbar />
        </div>
        <div className=" m-12">{children}</div>
        <div>
          <footer className="bg-emerald-700">This is footer</footer>
        </div>
      </body>
    </html>
  );
}
