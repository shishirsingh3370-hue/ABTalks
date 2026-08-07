import Link from "next/link";
import { ArrowLeft, Shield, Trophy } from "lucide-react";
import mockData from "@/data/mockData.json";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full p-6">
      <header className="flex items-center justify-between mb-8">
        <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h2 className="font-semibold text-lg">Dashboard</h2>
        <div className="w-6" /> {/* spacer */}
      </header>

      <div className="flex items-center gap-4 mb-8">
        <img 
          src={mockData.avatarUrl} 
          alt={mockData.studentName} 
          className="w-16 h-16 rounded-full bg-neutral-800"
        />
        <div>
          <h1 className="text-xl font-bold">{mockData.studentName}</h1>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>{mockData.leaderboardRank}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold mb-1">{mockData.currentStreak}</span>
          <span className="text-xs text-neutral-500 uppercase tracking-wider">Day Streak</span>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          {mockData.gracePeriodActive && (
            <div className="absolute top-0 w-full h-1 bg-red-500/50" />
          )}
          <div className="flex items-center gap-2 text-3xl font-bold mb-1">
            <Shield className="w-6 h-6 text-blue-400" />
            {mockData.streakShieldsAvailable}
          </div>
          <span className="text-xs text-neutral-500 uppercase tracking-wider">Shields</span>
        </div>
      </div>

      <h3 className="font-medium text-neutral-400 mb-4">Challenge Progress</h3>
      <div className="space-y-4">
        <Link 
          href={`/day/${mockData.currentDayTask.dayNumber}`}
          className="block bg-neutral-100 text-neutral-950 p-5 rounded-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-wider uppercase mb-1 block opacity-60">Today • Day {mockData.currentDayTask.dayNumber}</span>
            <h4 className="font-semibold text-lg">{mockData.currentDayTask.title}</h4>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
        </Link>
      </div>
    </div>
  );
}
