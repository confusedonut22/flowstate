"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";
import type { Question } from "@/lib/questions";

const ROUND_SIZE = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRound(pool: Question[]): { round: Question[]; remaining: Question[] } {
  // Refill pool when running low
  const src = pool.length >= ROUND_SIZE ? pool : [...pool, ...shuffle(questions)];
  return { round: src.slice(0, ROUND_SIZE), remaining: src.slice(ROUND_SIZE) };
}

type RoundState = {
  round: Question[];
  bank: string[];   // words still in the bank
  pool: Question[]; // upcoming questions
  placements: Record<number, string>;
  selected: string | null;
  checked: boolean;
  roundNum: number;
};

function createInitialState(): RoundState {
  const { round, remaining } = pickRound(shuffle(questions));
  return {
    round,
    bank: shuffle(round.map((q) => q.answer)),
    pool: remaining,
    placements: {},
    selected: null,
    checked: false,
    roundNum: 1,
  };
}

export default function WordBankPage() {
  const [s, setS] = useState<RoundState>(createInitialState);

  const allPlaced = s.round.every((q) => s.placements[q.id] !== undefined);
  const correctCount = s.checked
    ? s.round.filter((q) => s.placements[q.id] === q.answer).length
    : 0;

  function handleBankClick(word: string) {
    if (s.checked) return;
    setS((prev) => ({ ...prev, selected: prev.selected === word ? null : word }));
  }

  function handleSlotClick(questionId: number) {
    if (s.checked) return;
    const existing = s.placements[questionId];

    if (existing) {
      // Return word to bank
      setS((prev) => ({
        ...prev,
        bank: shuffle([...prev.bank, existing]),
        placements: Object.fromEntries(
          Object.entries(prev.placements).filter(([k]) => Number(k) !== questionId),
        ),
        selected: null,
      }));
      return;
    }

    if (!s.selected) return;

    // Place selected word into slot
    setS((prev) => ({
      ...prev,
      bank: prev.bank.filter((w) => w !== prev.selected),
      placements: { ...prev.placements, [questionId]: prev.selected! },
      selected: null,
    }));
  }

  function handleCheck() {
    setS((prev) => ({ ...prev, checked: true, selected: null }));
  }

  function handleNext() {
    const { round, remaining } = pickRound(s.pool);
    setS((prev) => ({
      round,
      bank: shuffle(round.map((q) => q.answer)),
      pool: remaining,
      placements: {},
      selected: null,
      checked: false,
      roundNum: prev.roundNum + 1,
    }));
  }

  // ── Style helpers ─────────────────────────────────────────────────────────

  function slotClass(questionId: number): string {
    const placed = s.placements[questionId];
    const base = "inline-flex items-center justify-center min-w-[90px] max-w-[240px] px-3 py-1 mx-1 rounded-lg border-2 text-sm font-semibold transition-all cursor-pointer select-none align-middle ";

    if (!placed) {
      return base + (s.selected
        ? "border-indigo-400 bg-indigo-50 text-indigo-400 border-dashed"
        : "border-slate-300 bg-slate-50 text-slate-300 border-dashed");
    }
    if (!s.checked) return base + "border-indigo-500 bg-indigo-100 text-indigo-800";

    const correct = s.round.find((q) => q.id === questionId)?.answer;
    return placed === correct
      ? base + "border-emerald-500 bg-emerald-100 text-emerald-800"
      : base + "border-red-400 bg-red-100 text-red-700";
  }

  function bankWordClass(word: string): string {
    const base = "px-3 py-2 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer select-none ";
    return s.selected === word
      ? base + "border-indigo-600 bg-indigo-600 text-white shadow-md scale-105"
      : base + "border-slate-200 bg-white text-slate-700 hover:border-indigo-400 hover:bg-indigo-50";
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-1">Word Bank</h1>
          <p className="text-slate-500 text-sm">
            Round {s.roundNum} · Select a word, then click a blank to place it. Click a placed word to swap it back.
          </p>
        </div>
        <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full shrink-0">
          {Object.keys(s.placements).length} / {ROUND_SIZE}
        </span>
      </div>

      {/* Word bank */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-3">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          Word Bank
          {s.selected && (
            <span className="text-indigo-500 normal-case font-normal text-xs">
              → now click a blank below
            </span>
          )}
        </p>
        {s.bank.length === 0 && !s.checked ? (
          <p className="text-sm text-slate-400 italic">All words placed — check your answers!</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {s.bank.map((word) => (
              <button key={word} onClick={() => handleBankClick(word)} className={bankWordClass(word)}>
                {word}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Questions */}
      <div className="flex flex-col gap-3">
        {s.round.map((q, i) => {
          const parts = q.question.split("______");
          const hasBlank = parts.length > 1;
          const placed = s.placements[q.id];
          const isCorrect = s.checked && placed === q.answer;
          const isWrong = s.checked && placed !== undefined && placed !== q.answer;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border p-5 transition-all ${
                s.checked
                  ? isCorrect ? "border-emerald-300" : isWrong ? "border-red-300" : "border-slate-200"
                  : "border-slate-200"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Number badge */}
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                  s.checked
                    ? isCorrect ? "bg-emerald-500 text-white"
                    : isWrong   ? "bg-red-400 text-white"
                    : "bg-slate-200 text-slate-500"
                  : "bg-indigo-100 text-indigo-700"
                }`}>
                  {s.checked ? (isCorrect ? "✓" : isWrong ? "✗" : i + 1) : i + 1}
                </span>

                <div className="flex-1 min-w-0">
                  {/* Question text with inline blank */}
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {hasBlank ? (
                      <>
                        {parts[0]}
                        <button onClick={() => handleSlotClick(q.id)} className={slotClass(q.id)}>
                          {placed ?? "______"}
                        </button>
                        {parts.slice(1).join("")}
                      </>
                    ) : (
                      <>
                        {q.question}{" "}
                        <button onClick={() => handleSlotClick(q.id)} className={slotClass(q.id)}>
                          {placed ?? "______"}
                        </button>
                      </>
                    )}
                  </p>

                  {/* Correct answer revealed on wrong */}
                  {isWrong && (
                    <p className="text-xs text-emerald-700 font-semibold mt-2">
                      ✓ {q.answer}
                    </p>
                  )}

                  <span className="inline-block mt-2 text-xs bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full">
                    {q.topic}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom action */}
      <div className="pb-6">
        {!s.checked ? (
          <button
            onClick={handleCheck}
            disabled={!allPlaced}
            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {allPlaced
              ? "Check answers ✓"
              : `${ROUND_SIZE - Object.keys(s.placements).length} blank${ROUND_SIZE - Object.keys(s.placements).length !== 1 ? "s" : ""} remaining`}
          </button>
        ) : (
          <div className="flex flex-col gap-3">
            <div className={`text-center py-4 rounded-xl font-bold text-lg ${
              correctCount === ROUND_SIZE ? "bg-emerald-100 text-emerald-700"
              : correctCount >= 7        ? "bg-amber-100 text-amber-700"
              : "bg-red-100 text-red-700"
            }`}>
              {correctCount === ROUND_SIZE
                ? `🏆 Perfect — ${correctCount} / ${ROUND_SIZE}!`
                : `${correctCount} / ${ROUND_SIZE} correct`}
            </div>
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-colors"
            >
              Next 10 →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
