"use client";

import { useState } from "react";
import { MATH_PROBLEMS, MATH_CATEGORIES } from "@/lib/math";

const CATEGORY_COLORS: Record<string, string> = {
  "Motor Overload Protection": "bg-amber-100 text-amber-800 border-amber-200",
  "Motor Disconnect Sizing": "bg-sky-100 text-sky-800 border-sky-200",
  "Motor Branch Circuits": "bg-violet-100 text-violet-800 border-violet-200",
  "Transformer Protection": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Motor Starting": "bg-rose-100 text-rose-800 border-rose-200",
};

const STEP_COLORS = [
  "bg-indigo-600",
  "bg-indigo-500",
  "bg-indigo-400",
  "bg-indigo-300",
  "bg-indigo-200",
];

export default function MathPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = ["All", ...MATH_CATEGORIES];
  const filtered =
    activeCategory === "All"
      ? MATH_PROBLEMS
      : MATH_PROBLEMS.filter((p) => p.topic === activeCategory);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Math Breakdowns</h1>
        <p className="text-slate-500">
          Step-by-step solutions for every calculation problem — formulas, NEC references, and worked examples.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-slate-600 border-slate-200 hover:border-indigo-400 hover:text-indigo-600"
            }`}
          >
            {cat === "All" ? `All (${MATH_PROBLEMS.length})` : cat}
          </button>
        ))}
      </div>

      {/* Problems */}
      <div className="flex flex-col gap-4">
        {filtered.map((problem) => {
          const isOpen = expandedId === problem.id;
          const tagClass = CATEGORY_COLORS[problem.topic] ?? "bg-slate-100 text-slate-600 border-slate-200";

          return (
            <div
              key={problem.id}
              className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all ${
                isOpen ? "border-indigo-300" : "border-slate-200"
              }`}
            >
              {/* Header — always visible */}
              <button
                className="w-full text-left p-5 flex items-start justify-between gap-4"
                onClick={() => setExpandedId(isOpen ? null : problem.id)}
              >
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${tagClass}`}>
                      {problem.topic}
                    </span>
                    <span className="text-xs text-slate-400">{problem.necReference}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-base leading-snug">{problem.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{problem.question}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded font-mono">
                      {problem.formula}
                    </code>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-indigo-700 font-bold text-sm bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                    {problem.answer}
                  </span>
                  <span className="text-slate-400 text-xs">{isOpen ? "▲ hide" : "▼ show steps"}</span>
                </div>
              </button>

              {/* Steps — expanded */}
              {isOpen && (
                <div className="border-t border-slate-100 px-5 pb-5 pt-4 flex flex-col gap-3">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Step-by-step solution
                  </p>
                  {problem.steps.map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 ${
                          STEP_COLORS[i] ?? "bg-indigo-200"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-xs font-semibold text-slate-500">{step.label}</p>
                        <code className="text-sm font-mono text-slate-800 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          {step.expression}
                        </code>
                        {step.note && (
                          <p className="text-xs text-slate-400 italic">{step.note}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Tip */}
                  <div className="mt-2 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-semibold text-amber-700 mb-1">💡 Exam tip</p>
                    <p className="text-sm text-amber-800">{problem.tip}</p>
                  </div>

                  {/* Final answer */}
                  <div className="flex items-center gap-3 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                    <span className="text-indigo-700 font-semibold text-sm">Answer:</span>
                    <span className="text-indigo-900 font-bold text-base">{problem.answer}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
