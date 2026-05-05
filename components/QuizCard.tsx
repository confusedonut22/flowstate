"use client";

import { useState } from "react";
import type { Question } from "@/lib/questions";

type Props = {
  question: Question;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
};

type AnswerState = "unanswered" | "correct" | "wrong";

export default function QuizCard({ question, index, total, onAnswer }: Props) {
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [selected, setSelected] = useState<string | null>(null);

  const choices = question.choices ?? [];

  function handleSelect(choice: string) {
    if (answerState !== "unanswered") return;
    setSelected(choice);
    setAnswerState(choice === question.answer ? "correct" : "wrong");
  }

  function choiceClass(choice: string): string {
    const base = "w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all duration-150 ";
    if (answerState === "unanswered") {
      return base + "border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 text-slate-700 cursor-pointer";
    }
    if (choice === question.answer) {
      return base + "border-emerald-500 bg-emerald-50 text-emerald-800";
    }
    if (choice === selected) {
      return base + "border-red-400 bg-red-50 text-red-700";
    }
    return base + "border-slate-100 bg-slate-50 text-slate-400 cursor-default";
  }

  return (
    <div className="flex flex-col gap-5 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>Question {index + 1} of {total}</span>
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
            disabled={answerState !== "unanswered"}
            className={choiceClass(choice)}
          >
            <span className="flex items-center gap-3">
              {answerState !== "unanswered" && choice === question.answer && (
                <span className="text-emerald-600 font-bold">✓</span>
              )}
              {answerState !== "unanswered" && choice === selected && choice !== question.answer && (
                <span className="text-red-500 font-bold">✗</span>
              )}
              {choice}
            </span>
          </button>
        ))}
      </div>

      {/* Feedback + Next button */}
      {answerState !== "unanswered" && (
        <div className="flex flex-col gap-3">
          <div
            className={`text-center py-3 rounded-xl font-semibold text-sm ${
              answerState === "correct"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {answerState === "correct"
              ? "Correct!"
              : `Incorrect — correct answer: ${question.answer}`}
          </div>
          <button
            onClick={() => onAnswer(answerState === "correct")}
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            {index + 1 === total ? "See results →" : "Next question →"}
          </button>
        </div>
      )}
    </div>
  );
}
