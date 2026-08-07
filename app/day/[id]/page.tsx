import Link from "next/link";
import { ArrowLeft, CheckCircle2, Copy } from "lucide-react";
import mockData from "@/data/mockData.json";

export default async function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Normally we would fetch the specific day's data using id
  // For the scaffold, we just read from mockData
  const task = mockData.currentDayTask;

  return (
    <div className="flex flex-col h-full bg-neutral-950">
      <header className="flex items-center justify-between p-6 border-b border-neutral-900">
        <Link href="/dashboard" className="text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="text-center">
          <span className="text-xs text-orange-500 font-bold uppercase tracking-wider block">Day {task.dayNumber}</span>
          <span className="text-sm font-medium text-neutral-300">{task.track}</span>
        </div>
        <div className="w-6" />
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-3">{task.title}</h1>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {task.description}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-neutral-500" />
            Requirements
          </h3>
          <ul className="space-y-3">
            {task.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-3 bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <div className="w-5 h-5 rounded-full border border-neutral-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">LinkedIn Update</h3>
          <div className="bg-[#0A66C2]/10 border border-[#0A66C2]/20 rounded-xl p-4 relative">
            <p className="text-sm text-neutral-300 pr-8">{task.linkedInDraft}</p>
            <button className="absolute top-4 right-4 text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 border-t border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-colors">
          Submit Day {task.dayNumber} Update
        </button>
      </div>
    </div>
  );
}
