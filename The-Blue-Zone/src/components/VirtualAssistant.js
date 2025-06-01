"use client";

import { useState } from "react";

export default function VirtualAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="bg-white border-4 border-[#0070C0] rounded-lg shadow-lg w-100 h-120 flex flex-col relative overflow-hidden">
          
          {/* Close button (over iframe) */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-3 text-white text-xl font-bold z-20 hover:text-[#00B0F0] transition-colors duration-200 cursor-pointer bg-[#0070C0] rounded-full w-7 h-7 flex items-center justify-center"
            title="Close chat"
          >
            ×
          </button>

          {/* Assistant Header */}
          <div className="bg-[#0070C0] text-white text-center py-2 z-10">
            <h2 className="text-lg font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Virtual Assistant
            </h2>
          </div>

          {/* Copilot Agent*/}
          <iframe
            src="https://copilotstudio.microsoft.com/environments/Default-ef475ff3-7cd1-4fa3-ba77-f63824f7c37c/bots/cr4d1_prostateCancerBuddy1/webchat?__version__=2"
            title="Prostate Copilot"
            className="flex-1 border-none"
          ></iframe>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-orange-400 text-white p-4 rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition duration-200 cursor-pointer"
        >
          💬
        </button>
      )}
    </div>
  );
}
