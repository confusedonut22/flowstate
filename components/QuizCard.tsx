"use client";

import { useState } from "react";
import type { Question } from "@/lib/questions";

type Props = {
  question: Question;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
};

type AnswerState = "unanswered" | "wrong" | "corrected" | "correct";

export default function QuizCard({ question, index, total, onAnswer }: Props) {
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [firstPick, setFirstPick] = useState<string | null>(null);

  const choices = question.choices ?? [];
  const isLocked = answerState === "correct" || answerState === "corrected";

  function handleSelect(choice: string) {
    if (isLocked) return;
    // Block re-clicking the already-wrong choice
    if (answerState === "wrong" && choice === firstPick) return;

    const isRight = choice === question.answer;

    if (answerState === "unanswered") {
      setFirstPick(choice);
      setAnswerState(isRight ? "correct" : "wrong");
    } else if (answerState === "wrong") {
      // Only the correct answer unlocks Next at this point
      if (isRight) setAnswerState("corrected");
    }
  }

  function choiceClass(choice: string): string {
    const base =
      "w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all duration-150 ";

    if (answerState === "unanswered") {
      return (
        base +
        "border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 text-slate-700 cursor-pointer"
      );
    }

    const isCorrect = choice === question.answer;
    const isWrongPick = choice === firstPick && choice !== question.answer;

    if (isCorrect && (answerState === "correct" || answerState === "corrected")) {
      return base + "border-emerald-500 bg-emerald-50 text-emerald-800";
    }
    if (isWrongPick) {
      return base + "border-red-400 bg-red-50 text-red-700 cursor-default";
    }

    // "wrong" state — correct answer pulses to guide the user; others are still clickable
    if (answerState === "wrong") {
      if (isCorrect) {
        return (
          base +
          "border-emerald-400 bg-emerald-50 text-emerald-700 cursor-pointer animate-pulse"
        );
      }
      return (
        base +
        "border-slate-200 bg-white text-slate-600 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer"
      );
    }

    return base + "border-slate-100 bg-slate-50 text-slate-400 cursor-default";
  }

  const showNext = answerState === "correct" || answerState === "corrected";
  const gotItFirstTry = answerState === "correct";

  return (
    <div className="flex flex-col gap-5 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>
          Question {index + 1} of {total}
        </span>
        <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">
          {question.topic}
        </span>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <p className="text-lg font-medium text-slate-800 leading-relaxed">
          {question.question}
        </p>
      </div>

      {/* Choices */}
      <div className="flex flex-col gap-3">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleSelect(choice)}
            disabled={isLocked || (answerState === "wrong" && choice === firstPick)}
            className={choiceClass(choice)}
          >
            <span className="flex items-center gap-3">
              {(answerState === "correct" || answerState === "corrected") &&
                choice === question.answer && (
                  <span className="text-emerald-600 font-bold">✓</span>
                )}
              {choice === firstPick && choice !== question.answer && (
                <span className="text-red-500 font-bold">✗</span>
              )}
              {choice}
            </span>
          </button>
        ))}
      </div>

      {/* Feedback banner */}
      {answerState !== "unanswered" && (
        <div className="flex flex-col gap-3">
          {answerState === "wrong" && (
            <div className="text-center py-3 rounded-xl font-semibold text-sm bg-red-100 text-red-700">
              Incorrect — now select the correct answer to continue
            </div>
          )}
          {answerState === "corrected" && (
            <div className="text-center py-3 rounded-xl font-semibold text-sm bg-amber-100 text-amber-700">
              Got it on the second try — this one will repeat at the end
            </div>
          )}
          {answerState === "correct" && (
            <div className="text-center py-3 rounded-xl font-semibold text-sm bg-emerald-100 text-emerald-700">
              Correct! ✓
            </div>
          )}

          {showNext && (
            <button
              onClick={() => onAnswer(gotItFirstTry)}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
              {index + 1 === total ? "See results →" : "Next question →"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
