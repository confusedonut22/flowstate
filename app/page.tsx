import Link from "next/link";
import { questions, TOPICS } from "@/lib/questions";
import { LESSONS } from "@/lib/objectives";

const TOPIC_ICONS: Record<string, string> = {
  "Motor Starting": "⚡",
  "Solid-State Devices & Motor Control": "🔌",
  "Motor Overload Protection": "🛡️",
  "Solid-State Relays": "🔄",
  "Class I Hazardous Locations": "🔥",
  "Transformer Protection": "🔋",
  "Motor Disconnect Sizing": "🔧",
  "Motor Control Centers": "🏭",
  "Motor Branch Circuits": "📐",
  "Class II Hazardous Locations": "💨",
  "DC Motors & Generators": "⚙️",
  "Class III & Intrinsically Safe Systems": "🔒",
  "Photoelectric & Proximity Sensors": "👁️",
  "ESD & General": "⚠️",
};

export default function HomePage() {
  const multipleChoiceCount = questions.filter((q) => q.choices).length;

  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <div className="text-center py-4">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3 drop-shadow-sm">
          JATC Book 4 · Sessions 7 &amp; 8a
        </h1>
        <p className="text-slate-600 text-lg max-w-xl mx-auto font-medium">
          Motor control, NEC code, hazardous locations, transformer protection,
          and more — {questions.length} questions across {TOPICS.length} topics.
        </p>
      </div>

      {/* Mode cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Link href="/flashcards" className="group">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-4 hover:border-indigo-400 hover:shadow-md transition-all">
            <div className="text-4xl">🃏</div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors">
                Flashcards
              </h2>
              <p className="text-sm text-slate-500">
                Flip through all {questions.length} cards. Tap to reveal the
                answer. Filter by topic.
              </p>
            </div>
            <span className="text-indigo-600 text-sm font-medium group-hover:underline">
              Start studying →
            </span>
          </div>
        </Link>

        <Link href="/quiz" className="group">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-4 hover:border-indigo-400 hover:shadow-md transition-all">
            <div className="text-4xl">📝</div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors">
                Multiple Choice Quiz
              </h2>
              <p className="text-sm text-slate-500">
                {multipleChoiceCount} questions with answer choices. Track your
                score and review mistakes.
              </p>
            </div>
            <span className="text-indigo-600 text-sm font-medium group-hover:underline">
              Take the quiz →
            </span>
          </div>
        </Link>

        <Link href="/learn" className="group">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-4 hover:border-indigo-400 hover:shadow-md transition-all">
            <div className="text-4xl">📖</div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors">
                Learning Objectives
              </h2>
              <p className="text-sm text-slate-500">
                {LESSONS.length} lessons with objectives and full explanations
                for each topic.
              </p>
            </div>
            <span className="text-indigo-600 text-sm font-medium group-hover:underline">
              Study objectives →
            </span>
          </div>
        </Link>
      </div>

      {/* Topic overview */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Topics Covered
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TOPICS.map((topic) => {
            const count = questions.filter((q) => q.topic === topic).length;
            return (
              <div
                key={topic}
                className="bg-white rounded-xl border border-slate-200 px-4 py-3 flex items-center justify-between"
              >
                <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <span>{TOPIC_ICONS[topic] ?? "📌"}</span>
                  {topic}
                </span>
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-center text-xs text-slate-400">
        JATC Local Union 26 · Washington, D.C. · Book 4 Sessions 7 &amp; 8a
      </p>
    </div>
  );
}
