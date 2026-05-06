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
  // Track the wrong questions from the *previous* round for the retry results screen
  const [prevWrong, setPrevWrong] = useState<Question[]>([]);
  const [isRetryRound, setIsRetryRound] = useState(false);

  const available = useMemo(
    () =>
      getMultipleChoiceQuestions().filter((q) =>
        selectedTopics.includes(q.topic),
      ),
    [selectedTopics],
  );

  function startQuiz(questions?: Question[]) {
    const src = questions ?? available;
    setDeck(shuffle(src));
    setIndex(0);
    setAnswered(0);
    setCorrect(0);
    setWrong([]);
    setIsRetryRound(false);
    setQuizState("running");
  }

  function retryWrong() {
    setPrevWrong(wrong);
    const src = wrong;
    setDeck(shuffle(src));
    setIndex(0);
    setAnswered(0);
    setCorrect(0);
    setWrong([]);
    setIsRetryRound(true);
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

  // ── Setup ──────────────────────────────────────────────────────────────────
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
            onClick={() => startQuiz()}
            disabled={available.length === 0}
            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Start Quiz →
          </button>
        </div>
      </div>
    );
  }

  // ── Results ────────────────────────────────────────────────────────────────
  if (quizState === "done") {
    const pct = Math.round((correct / deck.length) * 100);
    const grade =
      pct >= 90
        ? "Excellent!"
        : pct >= 75
        ? "Good job!"
        : pct >= 60
        ? "Keep studying."
        : "More review needed.";

    return (
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center flex flex-col gap-4">
          {isRetryRound && (
            <p className="text-xs font-semibold text-amber-600 bg-amber-50 rounded-full px-3 py-1 self-center">
              Retry round — {deck.length} missed {deck.length === 1 ? "question" : "questions"}
            </p>
          )}
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

          <div className="flex flex-col gap-3 mt-2">
            {/* Retry wrong — primary CTA when there are missed questions */}
            {wrong.length > 0 && (
              <button
                onClick={retryWrong}
                className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
              >
                🔁 Retry {wrong.length} missed {wrong.length === 1 ? "question" : "questions"}
              </button>
            )}
            {wrong.length === 0 && (
              <div className="py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-sm">
                🏆 No missed questions — perfect round!
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => startQuiz()}
                className="flex-1 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
              >
                Retake full quiz
              </button>
              <button
                onClick={() => setQuizState("setup")}
                className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
              >
                Change topics
              </button>
            </div>
          </div>
        </div>

        {/* Missed this round */}
        {wrong.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-slate-800">
              Missed this round — {wrong.length} {wrong.length === 1 ? "question" : "questions"}
            </h3>
            {wrong.map((q) => (
              <div key={q.id} className="bg-white rounded-xl border border-red-200 p-5">
                <p className="text-sm text-slate-700 mb-2">{q.question}</p>
                <p className="text-sm font-semibold text-emerald-700">✓ {q.answer}</p>
              </div>
            ))}
          </div>
        )}

        {/* Previously missed (shown after a retry round) */}
        {isRetryRound && wrong.length === 0 && prevWrong.length > 0 && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
            <p className="text-emerald-700 font-semibold">
              You cleared all {prevWrong.length} previously missed {prevWrong.length === 1 ? "question" : "questions"}!
            </p>
          </div>
        )}

        <Link href="/flashcards" className="text-center text-sm text-indigo-600 hover:underline">
          Study with flashcards →
        </Link>
      </div>
    );
  }

  // ── Running ────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">
          {isRetryRound ? "Retry — Missed Questions" : "Quiz"}
        </h1>
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
