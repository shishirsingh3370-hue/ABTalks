"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import mockData from "@/data/mockData.json";
import SubmissionForm from "./SubmissionForm";
import { useState, use } from "react";
import { useRouter } from "next/navigation";

export default function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  // Normally we would fetch the specific day's data using id
  // For the scaffold, we just read from mockData
  const task = mockData.currentDayTask;

  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = (e?: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Stop the browser from refreshing the page
    if (e) e.preventDefault(); 
    
    // 2. Basic validation to ensure they actually typed something
    if (!githubUrl || !linkedinUrl) {
      alert("You must provide both links.");
      return;
    }
  
    // 3. Trigger the loading state
    setIsSubmitting(true);
  
    // 4. Simulate a network request, then explicitly route to dashboard
    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="flex flex-col h-full bg-neutral-950">
      <header className="flex items-center p-6 border-b border-neutral-900">
        <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
          <span>&larr;</span>
          <span>Back to Dashboard</span>
        </Link>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-100 leading-snug mb-3">
            Day {task.dayNumber}: {task.title}
          </h1>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {task.description}
          </p>
        </div>

        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl backdrop-blur-md p-5">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 tracking-tight">
            <CheckCircle2 className="w-5 h-5 text-neutral-500" />
            Requirements
          </h3>
          <ul className="space-y-3">
            {task.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border border-neutral-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 border-b border-neutral-900 pb-2 tracking-tight">Proof of Work</h3>
          <SubmissionForm 
            draftText={task.linkedInDraft} 
            githubUrl={githubUrl}
            setGithubUrl={setGithubUrl}
            linkedinUrl={linkedinUrl}
            setLinkedinUrl={setLinkedinUrl}
          />
        </div>
      </div>

      <div className="p-6 border-t border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
        <button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full bg-neutral-100 hover:bg-white text-neutral-950 font-bold text-lg py-4 rounded-xl shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] transition-all active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? "Submitting..." : "Submit Proof of Work"}
        </button>
      </div>
    </div>
  );
}
