"use client";

import { useState, useMemo } from "react";
import { questions, TOPICS } from "@/lib/questions";
import FlashCard from "@/components/FlashCard";
import TopicFilter from "@/components/TopicFilter";
import ProgressBar from "@/components/ProgressBar";

export default function FlashcardsPage() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([...TOPICS]);
  const [index, setIndex] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  const filtered = useMemo(
    () => questions.filter((q) => selectedTopics.includes(q.topic)),
    [selectedTopics],
  );

  function handleTopicsChange(topics: string[]) {
    setSelectedTopics(topics);
    setIndex(0);
  }

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <button
          onClick={() => setShowFilter((v) => !v)}
          className="self-start text-sm text-indigo-600 hover:text-indigo-800 font-medium"
        >
          ⚙ Filter topics
        </button>
        {showFilter && (
          <TopicFilter selected={selectedTopics} onChange={handleTopicsChange} />
        )}
        <div className="text-center py-20 text-slate-500">
          No topics selected. Enable at least one topic above.
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Flashcards</h1>
        <button
          onClick={() => setShowFilter((v) => !v)}
          className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
        >
          {showFilter ? "Hide filters" : "⚙ Filter topics"}
        </button>
      </div>

      {showFilter && (
        <TopicFilter selected={selectedTopics} onChange={handleTopicsChange} />
      )}

      <ProgressBar current={index + 1} total={filtered.length} />

      <FlashCard
        key={filtered[index].id}
        question={filtered[index]}
        index={index}
        total={filtered.length}
        onNext={() => setIndex((i) => Math.min(i + 1, filtered.length - 1))}
        onPrev={() => setIndex((i) => Math.max(i - 1, 0))}
      />

      {/* Jump to random card */}
      <div className="text-center">
        <button
          onClick={() => setIndex(Math.floor(Math.random() * filtered.length))}
          className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          🔀 Random card
        </button>
      </div>
    </div>
  );
}
