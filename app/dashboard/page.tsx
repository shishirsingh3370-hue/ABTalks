import Link from "next/link";
import { ArrowLeft, Shield, Trophy, CheckCircle2 } from "lucide-react";
import mockData from "@/data/mockData.json";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full p-6">
      <header className="flex items-center justify-between mb-8">
        <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h2 className="font-semibold text-lg tracking-tight">Dashboard</h2>
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
            <Trophy className="w-4 h-4 text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" />
            <span>{mockData.leaderboardRank}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center backdrop-blur-md">
          <span className="text-3xl font-bold mb-1 tracking-tight">{mockData.currentStreak}</span>
          <span className="text-xs text-neutral-400 uppercase tracking-wider">Day Streak</span>
        </div>
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
          {mockData.gracePeriodActive && (
            <div className="absolute top-0 w-full h-1 bg-red-500/50" />
          )}
          <div className="flex items-center gap-2 text-3xl font-bold mb-1">
            <Shield className="w-6 h-6 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]" />
            {mockData.streakShieldsAvailable}
          </div>
          <span className="text-xs text-neutral-400 uppercase tracking-wider">Shields</span>
        </div>
      </div>

      {mockData.gracePeriodActive && (
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mb-8 text-sm text-orange-200">
          🌙 Late-Night Grace Active: Submissions until 2:00 AM preserve your streak.
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-neutral-400 tracking-tight">Challenge Progress</h3>
          <span className="text-sm text-neutral-400">
            {mockData.currentStreak} / {mockData.targetDays} Days
          </span>
        </div>
        <div className="w-full bg-neutral-900 rounded-full h-2.5 border border-neutral-800">
          <div 
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${mockData.completionPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-neutral-900/60 border border-neutral-800 backdrop-blur-md p-5 rounded-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-wider uppercase mb-1 block text-neutral-400">Today • Day {mockData.currentDayTask.dayNumber}</span>
            <h4 className="font-semibold text-lg mb-4 text-white tracking-tight">{mockData.currentDayTask.title}</h4>
            <Link 
              href={`/day/${mockData.currentDayTask.dayNumber}`}
              className="block w-full bg-neutral-100 hover:bg-white text-neutral-950 font-bold text-lg text-center py-4 rounded-xl shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] transition-all active:scale-[0.98]"
            >
              Open Day {mockData.currentDayTask.dayNumber} Challenge &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-3">
        <h3 className="text-sm font-semibold text-neutral-400">Past Submissions</h3>
      </div>
      <div className="space-y-3 pb-8">
        {[
          { day: 11, title: "Design System Tokens" },
          { day: 10, title: "Auth Flow Mockups" },
          { day: 9, title: "Database Schema" }
        ].map((task) => (
          <div key={task.day} className="bg-neutral-900/30 border border-neutral-800/50 rounded-xl p-4 flex items-center justify-between opacity-70">
            <div>
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider block mb-1">Day {task.day}</span>
              <p className="font-medium text-neutral-200">{task.title}</p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
