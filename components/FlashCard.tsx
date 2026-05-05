"use client";

import { useState } from "react";
import type { Question } from "@/lib/questions";

type Props = {
  question: Question;
  index: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
};

export default function FlashCard({ question, index, total, onNext, onPrev }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="w-full flex items-center justify-between text-sm text-slate-500">
        <span>Card {index + 1} of {total}</span>
        <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">
          {question.topic}
        </span>
      </div>

      {/* Card */}
      <div
        className="w-full cursor-pointer"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        aria-label={flipped ? "Show question" : "Reveal answer"}
        style={{ minHeight: "220px" }}
      >
        {!flipped ? (
          <div className="rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col items-center justify-center p-8 text-center" style={{ minHeight: "220px" }}>
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">Question</p>
            <p className="text-lg font-medium text-slate-800 leading-relaxed">
              {question.question}
            </p>
            <p className="mt-6 text-xs text-slate-400">Tap to reveal answer</p>
          </div>
        ) : (
          <div className="rounded-2xl bg-indigo-600 border border-indigo-500 shadow-md flex flex-col items-center justify-center p-8 text-center" style={{ minHeight: "220px" }}>
            <p className="text-xs uppercase tracking-widest text-indigo-200 mb-4">Answer</p>
            <p className="text-2xl font-bold text-white leading-relaxed">
              {question.answer}
            </p>
            {question.choices && (
              <p className="mt-4 text-xs text-indigo-200">
                Options: {question.choices.join(" · ")}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-4 w-full">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={onNext}
          disabled={index === total - 1}
          className="flex-1 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
