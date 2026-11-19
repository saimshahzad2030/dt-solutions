import React from "react";
import { Mail, Clock, Linkedin, Twitter, Github } from "lucide-react";
import { companyData } from "@/data/company";

export function TopBar() {
  return (
    <div className="hidden lg:block bg-[#07132b] text-[#a0aec0] text-xs border-b border-white/10 relative z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Left contact & operating hours */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#5e6fb5]" />
              <a
                href={`mailto:${companyData.email}`}
                className="hover:text-white transition-colors"
              >
                {companyData.email}
              </a>
            </div>

            <div className="flex items-center gap-2 border-l border-white/10 pl-6">
              <Clock className="w-3.5 h-3.5 text-[#ee6196]" />
              <span>Office Hours: {companyData.operatingHours}</span>
            </div>
          </div>

          {/* Right positioning summary & socials */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-3 py-0.5 rounded-full border border-white/10 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ee6196]" />
              <span>Government Tech · FinTech · Enterprise Systems</span>
            </div>

            <div className="flex items-center space-x-3 pl-4 border-l border-white/10">
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              {companyData.socials.twitter && (
                <a
                  href={companyData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              )}
              {companyData.socials.github && (
                <a
                  href={companyData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
