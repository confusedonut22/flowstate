"use client";

import { useState } from "react";
import { MNEMONICS } from "@/lib/mnemonics";
import { TOPICS } from "@/lib/questions";

const TOPIC_COLORS: Record<string, string> = {
  "Motor Starting": "bg-rose-100 text-rose-700",
  "Solid-State Devices & Motor Control": "bg-purple-100 text-purple-700",
  "Motor Overload Protection": "bg-amber-100 text-amber-700",
  "Solid-State Relays": "bg-cyan-100 text-cyan-700",
  "Class I Hazardous Locations": "bg-red-100 text-red-700",
  "Transformer Protection": "bg-emerald-100 text-emerald-700",
  "Motor Disconnect Sizing": "bg-sky-100 text-sky-700",
  "Motor Control Centers": "bg-indigo-100 text-indigo-700",
  "Motor Branch Circuits": "bg-violet-100 text-violet-700",
  "Class II Hazardous Locations": "bg-orange-100 text-orange-700",
  "DC Motors & Generators": "bg-teal-100 text-teal-700",
  "Class III & Intrinsically Safe Systems": "bg-lime-100 text-lime-700",
  "Photoelectric & Proximity Sensors": "bg-blue-100 text-blue-700",
  "ESD & General": "bg-yellow-100 text-yellow-700",
};

export default function MnemonicsPage() {
  const [activeTopic, setActiveTopic] = useState<string>("All");
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [revealAll, setRevealAll] = useState(false);

  const filtered =
    activeTopic === "All"
      ? MNEMONICS
      : MNEMONICS.filter((m) => m.topic === activeTopic);

  function toggleReveal(id: number) {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function handleRevealAll() {
    if (revealAll) {
      setRevealed(new Set());
      setRevealAll(false);
    } else {
      setRevealed(new Set(filtered.map((m) => m.questionId)));
      setRevealAll(true);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Mnemonics</h1>
          <p className="text-slate-500">
            Memory tricks for all {MNEMONICS.length} flashcard answers. Tap a card to reveal the hook.
          </p>
        </div>
        <button
          onClick={handleRevealAll}
          className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shrink-0"
        >
          {revealAll ? "Hide all" : "Reveal all"}
        </button>
      </div>

      {/* Topic filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => { setActiveTopic("All"); setRevealAll(false); setRevealed(new Set()); }}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            activeTopic === "All"
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-slate-600 border-slate-200 hover:border-indigo-400"
          }`}
        >
          All ({MNEMONICS.length})
        </button>
        {TOPICS.map((topic) => {
          const count = MNEMONICS.filter((m) => m.topic === topic).length;
          if (count === 0) return null;
          const colorClass = TOPIC_COLORS[topic] ?? "bg-slate-100 text-slate-600";
          return (
            <button
              key={topic}
              onClick={() => { setActiveTopic(topic); setRevealAll(false); setRevealed(new Set()); }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeTopic === topic
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : `${colorClass} border-transparent hover:border-indigo-400`
              }`}
            >
              {topic.length > 20 ? topic.split(" ")[0] + "…" : topic} ({count})
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {filtered.map((m) => {
          const isRevealed = revealAll || revealed.has(m.questionId);
          const tagColor = TOPIC_COLORS[m.topic] ?? "bg-slate-100 text-slate-600";

          return (
            <div
              key={m.questionId}
              className={`rounded-2xl border bg-white shadow-sm overflow-hidden transition-all cursor-pointer ${
                isRevealed ? "border-indigo-200" : "border-slate-200"
              }`}
              onClick={() => toggleReveal(m.questionId)}
            >
              <div className="p-5 flex flex-col gap-3">
                {/* Topic tag + Q number */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor}`}>
                    {m.topic}
                  </span>
                  <span className="text-xs text-slate-400">Q{m.questionId}</span>
                </div>

                {/* Question */}
                <p className="text-sm font-medium text-slate-800 leading-relaxed">{m.question}</p>

                {/* Mnemonic — always visible */}
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-indigo-500 mb-1">🧠 Mnemonic</p>
                  <p className="text-sm font-medium text-indigo-900">{m.mnemonic}</p>
                </div>

                {/* Answer + hook — revealed on tap */}
                {isRevealed ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2">
                      <span className="text-xs font-semibold text-emerald-600">Answer:</span>
                      <span className="text-sm font-bold text-emerald-800">{m.answer}</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                      <p className="text-xs font-semibold text-slate-400 mb-1">Why it works</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{m.hook}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 text-center py-1">
                    Tap to reveal answer &amp; explanation →
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
