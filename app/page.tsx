import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-neutral-950 text-white relative pb-32">
      <main className="flex-1 p-6 pt-12 flex flex-col justify-center relative z-10">
        
        <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 mb-6 self-start">
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 rounded-full bg-neutral-600 border border-neutral-900" />
            <div className="w-5 h-5 rounded-full bg-neutral-500 border border-neutral-900" />
            <div className="w-5 h-5 rounded-full bg-neutral-400 border border-neutral-900" />
          </div>
          <span className="text-xs text-neutral-300">Join 1,200+ students shipping tonight.</span>
        </div>

        <div className="mb-12">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-extrabold text-5xl tracking-tighter leading-[1.1]">
            Code Daily.<br />Get Hired.
          </h1>
          <p className="text-neutral-400 text-base mt-4">
            The ultimate 60-day proof-of-work challenge for developers.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl blur-xl opacity-50"></div>
          <div className="relative bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md">
            <div className="flex items-start gap-4">
              <span className="text-xl drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">🔥</span>
              <p className="text-neutral-200 font-medium text-lg leading-tight">Pick a track & build daily</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl">💻</span>
              <p className="text-neutral-200 font-medium text-lg leading-tight">Submit GitHub & LinkedIn proof</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl">🚀</span>
              <p className="text-neutral-200 font-medium text-lg leading-tight">Get noticed by top recruiters</p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-3 mt-12">
          <div className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-4 flex flex-col items-start">
            <span className="text-2xl font-black text-amber-500 tracking-tighter">60</span>
            <span className="text-xs font-medium text-neutral-400 mt-1">Daily Projects</span>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-4 flex flex-col items-start">
            <span className="text-2xl font-black text-amber-500 tracking-tighter">100%</span>
            <span className="text-xs font-medium text-neutral-400 mt-1">Actionable Proof</span>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-4 flex flex-col items-start">
            <span className="text-2xl font-black text-amber-500 tracking-tighter">Top 1%</span>
            <span className="text-xs font-medium text-neutral-400 mt-1">Developer Rank</span>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-4 flex flex-col items-start">
            <span className="text-2xl font-black text-amber-500 tracking-tighter">Resume</span>
            <span className="text-xs font-medium text-neutral-400 mt-1">Ready Portfolio</span>
          </div>
        </div>

        <div className="w-full text-center mt-10 pb-24">
          <span className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2026 ABTalks. Built for the grind.</span>
        </div>
      </main>

      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-neutral-950 via-neutral-950 to-transparent z-20 pointer-events-none">
        <Link 
          href="/dashboard"
          className="flex items-center justify-center w-full bg-neutral-100 hover:bg-white text-neutral-950 font-bold text-lg py-4 rounded-xl shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] transition-all active:scale-[0.98] pointer-events-auto"
        >
          Start the 60-Day Challenge
        </Link>
      </div>
    </div>
  );
}
