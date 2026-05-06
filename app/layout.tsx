import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JATC Quiz – Local Union 26",
  description:
    "Interactive flashcards and multiple-choice quiz for JATC Book 4 Sessions 7 & 8a — Motor Control, NEC Hazardous Locations, Transformer Protection, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-slate-50 min-h-screen`} style={{ colorScheme: "light" }}>
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-indigo-700 text-lg tracking-tight">
              JATC Quiz
            </Link>
            <nav className="flex gap-1 flex-wrap">
              <Link href="/learn" className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">Learn</Link>
              <Link href="/math" className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">Math</Link>
              <Link href="/mnemonics" className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">Mnemonics</Link>
              <Link href="/flashcards" className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">Flashcards</Link>
              <Link href="/quiz" className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">Quiz</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-10 bg-slate-50 min-h-[calc(100vh-56px)]">{children}</main>
      </body>
    </html>
  );
}
