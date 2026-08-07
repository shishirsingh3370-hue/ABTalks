"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function SubmissionForm({ draftText }: { draftText: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(draftText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-300">GitHub Repository or Commit URL</label>
        <input 
          type="url" 
          placeholder="https://github.com/..."
          className="w-full bg-neutral-950 border border-neutral-700 hover:border-neutral-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-neutral-200 transition-colors placeholder:text-neutral-600" 
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-neutral-300">LinkedIn Post URL</label>
          <button 
            onClick={handleCopy}
            className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md border border-amber-400/20"
          >
            {copied ? (
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Copied!
              </span>
            ) : (
              <span>✨ Generate LinkedIn Post Draft</span>
            )}
          </button>
        </div>
        <input 
          type="url" 
          placeholder="https://linkedin.com/posts/..."
          className="w-full bg-neutral-950 border border-neutral-700 hover:border-neutral-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-neutral-200 transition-colors placeholder:text-neutral-600" 
        />
      </div>
    </div>
  );
}
