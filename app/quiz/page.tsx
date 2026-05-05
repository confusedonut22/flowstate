"use client";

import { useState, useMemo } from "react";
import { getMultipleChoiceQuestions, TOPICS } from "@/lib/questions";
import type { Question } from "@/lib/questions";
import QuizCard from "@/components/QuizCard";
import TopicFilter from "@/components/TopicFilter";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";

type QuizState = "setup" | "running" | "done";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function QuizPage() {
  const [quizState, setQuizState] = useState<QuizState>("setup");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([...TOPICS]);
  const [deck, setDeck] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState<Question[]>([]);

  const available = useMemo(
    () =>
      getMultipleChoiceQuestions().filter((q) =>
        selectedTopics.includes(q.topic),
      ),
    [selectedTopics],
  );

  function startQuiz() {
    setDeck(shuffle(available));
    setIndex(0);
    setAnswered(0);
    setCorrect(0);
    setWrong([]);
    setQuizState("running");
  }

  function handleAnswer(isCorrect: boolean) {
    if (!isCorrect) setWrong((w) => [...w, deck[index]]);
    if (isCorrect) setCorrect((c) => c + 1);
    setAnswered((a) => a + 1);

    if (index + 1 >= deck.length) {
      setQuizState("done");
    } else {
      setIndex((i) => i + 1);
    }
  }

  if (quizState === "setup") {
    return (
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-slate-900">Multiple Choice Quiz</h1>
        <TopicFilter selected={selectedTopics} onChange={setSelectedTopics} />
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4">
          <p className="text-slate-600 text-sm">
            <strong>{available.length}</strong> questions selected across{" "}
            <strong>{selectedTopics.length}</strong> topics.
          </p>
          <button
            onClick={startQuiz}
            disabled={available.length === 0}
            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Start Quiz →
          </button>
        </div>
      </div>
    );
  }

  if (quizState === "done") {
    const pct = Math.round((correct / deck.length) * 100);
    const grade =
      pct >= 90 ? "Excellent!" : pct >= 75 ? "Good job!" : pct >= 60 ? "Keep studying." : "More review needed.";

    return (
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center flex flex-col gap-4">
          <div className="text-6xl">{pct >= 75 ? "🎉" : "📚"}</div>
          <h2 className="text-3xl font-extrabold text-slate-900">{grade}</h2>
          <p className="text-slate-500">
            You scored{" "}
            <span className="font-bold text-slate-800">
              {correct} / {deck.length}
            </span>{" "}
            ({pct}%)
          </p>
          <div className="w-full bg-slate-100 rounded-full h-3 my-2">
            <div
              className={`h-3 rounded-full transition-all ${pct >= 75 ? "bg-emerald-500" : "bg-amber-500"}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex gap-3 mt-2">
            <button
              onClick={startQuiz}
              className="flex-1 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => setQuizState("setup")}
              className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
            >
              Change Topics
            </button>
          </div>
        </div>

        {wrong.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-slate-800">
              Review — {wrong.length} missed {wrong.length === 1 ? "question" : "questions"}
            </h3>
            {wrong.map((q) => (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-red-200 p-5"
              >
                <p className="text-sm text-slate-700 mb-2">{q.question}</p>
                <p className="text-sm font-semibold text-emerald-700">
                  ✓ {q.answer}
                </p>
              </div>
            ))}
          </div>
        )}

        <Link
          href="/flashcards"
          className="text-center text-sm text-indigo-600 hover:underline"
        >
          Study with flashcards →
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Quiz</h1>
        <span className="text-sm text-slate-500">
          Score: {correct} / {answered}
        </span>
      </div>

      <ProgressBar current={index} total={deck.length} />

      <QuizCard
        key={deck[index].id}
        question={deck[index]}
        index={index}
        total={deck.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
