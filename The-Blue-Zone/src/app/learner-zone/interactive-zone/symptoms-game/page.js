"use client";
import { useState } from "react";

export default function SymptomsGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showNext, setShowNext] = useState(false);

  const questions = [
    {
      person: {
        name: "Paul",
        age: 60,
        lifestyle: "Drinks regularly, not active",
        image: "/images/paul.png",
      },
      symptoms: ["Difficulty urinating", "Pelvic Pain"],
      question: "What would you recommend?",
      options: ["Wait and monitor", "Visit a doctor", "Emergency Referral"],
      answer: "Visit a doctor",
    },
    {
      person: {
        name: "Mike",
        age: 40,
        lifestyle: "Active, non-smoker",
        image: "/images/mike.png",
      },
      symptoms: ["Frequent urination at night", "Back pain"],
      question: "What would you recommend?",
      options: ["Wait and monitor", "Visit a doctor", "Emergency Referral"],
      answer: "Wait and monitor",
    },
  ];

  const current = questions[currentQuestion];

  const handleSelect = (option) => {
    setSelectedAnswer(option);
    if (option === current.answer) {
      setFeedback("Correct!");
      setShowNext(true);
    } else {
      setFeedback("Try again");
      setShowNext(false);
    }
  };

  const handleNext = () => {
    setSelectedAnswer("");
    setFeedback("");
    setShowNext(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="text-black py-16 px-4 bg-black min-h-screen" style={{ fontFamily: "Open Sans, sans-serif" }}>
      <div className="mb-8 text-center">
        <a href="/learner-zone/interactive-zone"
          className="inline-block bg-[#00B0F0] text-white font-bold px-6 py-2 rounded-full shadow hover:bg-[#0070C0] transition duration-300"> ← Return to Interactive Zone
        </a>
      </div>

      <main className="max-w-lg mx-auto border-4 border-[#0070C0] rounded-xl shadow-xl">
        
        {/* Header */}
        <div className="bg-[#0070C0] text-white text-center py-3">
          <h1 className="text-2xl font-bold">Symptoms Game</h1>
        </div>

        {/* Question Section */}
        <div className="bg-white p-6 space-y-4 rounded-b-xl">
          {/* Person Info and Symptoms */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
            {/* Person Info */}
            <div className="flex gap-4">
              <img src={current.person.image} alt={current.person.name} className="w-20 h-20 object-cover rounded"/>
              <div className="text-left text-sm">
                <p><strong>Name:</strong> {current.person.name}</p>
                <p><strong>Age:</strong> {current.person.age}</p>
                <p><strong>Lifestyle:</strong> {current.person.lifestyle}</p>
              </div>
            </div>

            {/* Person Symptoms */}
            <div className="text-left text-sm">
              <p className="font-bold">Reported Symptoms</p>
              <div className="flex flex-wrap gap-x-2">
                {current.symptoms.map((symptom, idx) => (
                  <span key={idx} className="after:content-[','] last:after:content-none">
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Question prompt */}
          <div className="text-black py-2 rounded text-center space-y-1">
            <div>
            <h2 className="text-black font-bold py-2 px-4 rounded text-base">
              {current.question}
            </h2>
            <p className="text-sm text-gray-600">Question {`${currentQuestion + 1} of ${questions.length}`}</p>
          </div>
          </div>

          {/* Options */}
          <div className="space-y-2 text-left">
            {current.options.map((option, i) => (
              <button key={i} onClick={() => handleSelect(option)}
                className={`block w-full border rounded px-4 py-2 cursor-pointer ${
                  selectedAnswer === option
                    ? option === current.answer
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                    : "bg-white hover:bg-blue-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Feedback */}
          {feedback && (
            <p className={`font-bold mt-2 text-center ${ feedback === "Correct!" ? "text-green-600" : "text-red-600"}`}>
              {feedback}
            </p>
          )}

          {/* Next button */}
          {showNext && currentQuestion < questions.length - 1 && (
            <div className="flex justify-center">
              <button onClick={handleNext}
                className="mt-4 bg-white text-black font-bold border border-black px-6 py-2 rounded hover:bg-gray-100 cursor-pointer"> Next
              </button>
            </div>
          )}

          {/* End of quiz */}
          {showNext && currentQuestion === questions.length - 1 && (
            <p className="mt-4 text-[#0070C0] font-semibold text-center"> You've completed the game!</p>
          )}
        </div>
      </main>
    </div>
  );
}
