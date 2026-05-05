import { LESSONS } from "@/lib/objectives";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return LESSONS.map((l) => ({ id: l.id }));
}

export default async function LessonPage({ params }: Props) {
  const { id } = await params;
  const lesson = LESSONS.find((l) => l.id === id);
  if (!lesson) notFound();

  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
      {/* Back link */}
      <Link
        href="/learn"
        className="self-start text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
      >
        ← All lessons
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{lesson.icon}</span>
          <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
            {lesson.session}
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">{lesson.topic}</h1>
        <p className="text-slate-500 text-base leading-relaxed">{lesson.description}</p>
      </div>

      {/* Objectives */}
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
          {lesson.objectives.length} Learning Objectives
        </h2>
        <div className="flex flex-col gap-1">
          {lesson.objectives.map((obj, i) => (
            <a
              key={obj.id}
              href={`#${obj.id}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all text-sm font-medium text-slate-700 hover:text-indigo-700"
            >
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              {obj.title}
            </a>
          ))}
        </div>
      </div>

      {/* Objective explanations */}
      <div className="flex flex-col gap-6">
        {lesson.objectives.map((obj, i) => (
          <div
            key={obj.id}
            id={obj.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-3 scroll-mt-6"
          >
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <h3 className="text-base font-bold text-slate-800 leading-snug">{obj.title}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-10">{obj.explanation}</p>
          </div>
        ))}
      </div>

      {/* Footer nav */}
      <div className="flex gap-3 pt-2 border-t border-slate-200">
        <Link
          href="/flashcards"
          className="flex-1 py-3 text-center rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors"
        >
          Study flashcards →
        </Link>
        <Link
          href="/quiz"
          className="flex-1 py-3 text-center rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          Take the quiz →
        </Link>
      </div>
    </div>
  );
}
