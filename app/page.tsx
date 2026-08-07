import Link from "next/link";
import { ArrowRight } from "lucide-react";
import mockData from "@/data/mockData.json";

export default function Home() {
  return (
    <div className="flex flex-col h-full p-6 space-y-8">
      <div className="flex-1 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter">
          ABTalks <br /> 60-Day Challenge
        </h1>
        <p className="text-neutral-400">
          Welcome back, {mockData.studentName}. You are currently on Day {mockData.currentDayTask.dayNumber} of the challenge.
        </p>
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-neutral-400">Current Streak</span>
            <span className="text-sm font-medium text-orange-500">🔥 {mockData.currentStreak} Days</span>
          </div>
          <div className="w-full bg-neutral-950 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full" 
              style={{ width: `${mockData.completionPercentage}%` }}
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <Link 
          href="/dashboard"
          className="flex items-center justify-between w-full bg-neutral-100 text-neutral-950 p-4 rounded-xl font-medium"
        >
          <span>Go to Dashboard</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link 
          href={`/day/${mockData.currentDayTask.dayNumber}`}
          className="flex items-center justify-between w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded-xl font-medium"
        >
          <span>Today's Task</span>
          <ArrowRight className="w-5 h-5 text-neutral-500" />
        </Link>
      </div>
    </div>
  );
}
