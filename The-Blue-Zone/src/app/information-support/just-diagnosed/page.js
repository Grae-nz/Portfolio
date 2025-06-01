"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const treatmentOptions = {
  all: [
    {
      stage: "Stage 1",
      options: [
        "Active Surveillance: Recommended for patients with low-risk cancer.",
        "Hormone Therapy: Can be used in this stage."
      ]
    },
    {
      stage: "Stage 2",
      options: [
        "Active Surveillance: Selected patients may be suitable for this option.",
        "Radical Prostatectomy: Surgical removal of the prostate.",
        "Brachytherapy Low Dose: For T2a with hormone therapy 6 months prior and IMRT to reduce damage to normal tissue.",
        "Hormone Therapy: Can be used in this stage."
      ]
    },
    {
      stage: "Stage 3",
      options: [
        "IMRT (Intensity-Modulated Radiation Therapy): Usually combined with hormone therapy.",
        "Hormone Therapy: Can be used in this stage."
      ]
    },
    {
      stage: "Stage 4",
      options: [
        "IMRT (Intensity-Modulated Radiation Therapy): Usually combined with hormone therapy.",
        "Hormone Therapy: Can be used in this stage.",
        "Chemotherapy: Selected patients may benefit from this treatment.",
        "Radium 223 (Ra223): For treating bone metastases in selected patients."
      ]
    }
  ],
  stage1: ["Active Surveillance: Recommended for patients with low-risk cancer.", "Hormone Therapy: Can be used in this stage."],
  stage2: [
    "Active Surveillance: Selected patients may be suitable for this option.",
    "Radical Prostatectomy: Surgical removal of the prostate.",
    "Brachytherapy Low Dose: For T2a with hormone therapy 6 months prior and IMRT to reduce damage to normal tissue.",
    "Hormone Therapy: Can be used in this stage."
  ],
  stage3: [
    "IMRT (Intensity-Modulated Radiation Therapy): Usually combined with hormone therapy.",
    "Hormone Therapy: Can be used in this stage."
  ],
  stage4: [
    "IMRT (Intensity-Modulated Radiation Therapy): Usually combined with hormone therapy.",
    "Hormone Therapy: Can be used in this stage.",
    "Chemotherapy: Selected patients may benefit from this treatment.",
    "Radium 223 (Ra223): For treating bone metastases in selected patients."
  ]
};

export default function JustDiagnosed() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  const content = useMemo(() => {
    if (category === "all") return treatmentOptions.all;
    return treatmentOptions[category];
  }, [category]);

  return (
    <main>
      {/* Page header and image */}
      <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="md:w-1/2 space-y-4 md:pl-8">
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Just Diagnosed</h1>
          <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Find treatment options based on your stage</h2>
          <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Choose a stage to learn what treatments may be suitable. Always speak with your healthcare provider for individual advice.
          </h3>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
          <img src="/images/justdiagnosed.png" alt="Just Diagnosed" className="w-full h-full object-cover rounded-lg"/>
        </div>
      </div>

      {/* Page content */}
      <div className="bg-white text-black max-w-6xl mx-auto px-4 py-12 space-y-16" style={{ fontFamily: 'Open Sans, sans-serif' }}>
        
        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {['all', 'stage1', 'stage2', 'stage3', 'stage4'].map((cat) => (
            <a key={cat}
              href={`?category=${cat}`}
              className={`px-4 py-2 rounded shadow-md transition-colors duration-200 ${
                category === cat
                  ? 'bg-[#00B0F0] text-white font-bold border-none'
                  : 'bg-white text-black font-normal border border-black'
              }`}
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {cat === 'all' ? 'All' : `Stage ${cat.slice(-1)}`}
            </a>
          ))}
        </div>
        {category === 'all' ? (
          content.map((section, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-md p-6 space-y-2"
            >
              <h2 className="text-xl font-bold text-[#0070C0]">{section.stage}</h2>
              <ul className="list-disc list-inside space-y-2">
                {section.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="bg-gray-50 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-[#0070C0] mb-4">
              {`Stage ${category.slice(-1)}`}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {content.map((opt, i) => <li key={i}>{opt}</li>)}
            </ul>
          </div>
        )}

        {/* consult */}
        <p className="italic mt-6 text-gray-700 text-base text-center max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          For more detailed and personalized treatment options, it is essential to consult with a healthcare practitioner.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl text-[#0070C0] font-bold mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}> Want to Learn More?</h2>
          <ul className="list-disc list-inside text-blue-600 underline">
            <li><a href="#" target="_blank">Determining suitable Prostate cancer treatment options – Prostate Matters (PDF)</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
