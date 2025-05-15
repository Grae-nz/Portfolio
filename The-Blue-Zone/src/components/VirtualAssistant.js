"use client";

import { useState } from "react";

export default function VirtualAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="bg-white border-4 border-[#0070C0] rounded-lg shadow-lg w-80 h-96 flex flex-col relative">
          
          {/* Close button */}
          <button onClick={() => setOpen(false)}
            className="absolute top-1 right-2 text-white text-xl font-bold z-10 hover:text-[#00B0F0] transition-colors duration-200 cursor-pointer">×
          </button>

          {/* Assistant Header */}
          <div className="bg-[#0070C0] text-white text-center py-2">
            <h2 className="text-lg font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}> Virtual Assistant</h2>
          </div>

          {/* AI display chat */}
          <div className="flex-1 overflow-y-auto border-b p-2 text-sm">
            <p>"Sometimes Graeme is right, sometimes"</p>
            <p>Arsenie Sarmiento - 15:58, 3/05/2025</p>
          </div>

          {/* User chat bar entry */}
          <input
            type="text"
            placeholder="Type your message..."
            className="mt-2 mx-2 mb-3 border border-[#0070C0] rounded px-2 py-1 focus:outline-none"
          />
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
