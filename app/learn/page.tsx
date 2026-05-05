import Link from "next/link";
import { LESSONS } from "@/lib/objectives";

const SESSION_COLORS: Record<string, string> = {
  "Session 7": "bg-indigo-100 text-indigo-700",
  "Session 8a": "bg-emerald-100 text-emerald-700",
};

export default function LearnPage() {
  const session7 = LESSONS.filter((l) => l.session === "Session 7");
  const session8a = LESSONS.filter((l) => l.session === "Session 8a");

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Learning Objectives</h1>
        <p className="text-slate-500">
          Select a lesson to review its objectives and explanations.
        </p>
      </div>

      <Section title="Session 7" lessons={session7} colorClass={SESSION_COLORS["Session 7"]} />
      <Section title="Session 8a" lessons={session8a} colorClass={SESSION_COLORS["Session 8a"]} />
    </div>
  );
}

function Section({
  title,
  lessons,
  colorClass,
}: {
  title: string;
  lessons: typeof LESSONS;
  colorClass: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
          {title}
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/learn/${lesson.id}`} className="group">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-3 hover:border-indigo-400 hover:shadow-md transition-all h-full">
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl">{lesson.icon}</span>
                <span className="text-xs text-slate-400 mt-1">{lesson.objectives.length} objectives</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors mb-1">
                  {lesson.topic}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{lesson.description}</p>
              </div>
              <span className="text-indigo-600 text-sm font-medium group-hover:underline mt-auto">
                Study objectives →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
