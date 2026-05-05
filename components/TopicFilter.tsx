"use client";

import { TOPICS } from "@/lib/questions";

type Props = {
  selected: string[];
  onChange: (topics: string[]) => void;
};

export default function TopicFilter({ selected, onChange }: Props) {
  const allSelected = selected.length === TOPICS.length;

  function toggleAll() {
    onChange(allSelected ? [] : [...TOPICS]);
  }

  function toggle(topic: string) {
    if (selected.includes(topic)) {
      onChange(selected.filter((t) => t !== topic));
    } else {
      onChange([...selected, topic]);
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-slate-800">Filter by Topic</h2>
        <button
          onClick={toggleAll}
          className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
        >
          {allSelected ? "Deselect all" : "Select all"}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {TOPICS.map((topic) => {
          const active = selected.includes(topic);
          return (
            <button
              key={topic}
              onClick={() => toggle(topic)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                active
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-slate-600 border-slate-200 hover:border-indigo-400"
              }`}
            >
              {topic}
            </button>
          );
        })}
      </div>
    </div>
  );
}
