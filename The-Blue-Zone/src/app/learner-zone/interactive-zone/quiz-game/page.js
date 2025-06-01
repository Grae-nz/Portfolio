"use client";
import { useState } from "react";

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showNext, setShowNext] = useState(false);

  const questions = [
    {
      question: "Men of any age can get prostate cancer?",
      options: ["True", "False"],
      answer: "True",
      image: "/images/menanyage.png",
    },
    {
      question: "What does the prostate do?",
      options: ["Produces testosterone", "Controls urination", "Produces fluid for semen", "Regulates blood pressure",],
      answer: "Produces fluid for semen",
      image: "/images/prostatedo.png",
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
        
        {/* Quiz header */}
        <div className="bg-[#0070C0] text-white text-center py-3">
          <h1 className="text-2xl font-bold">Quiz Game</h1>
        </div>

        {/* Questions section */}
        <div className="bg-white text-center p-6 space-y-4 rounded-b-xl">
          <div>
            <h2 className="text-black font-bold py-2 px-4 rounded text-base">
              {current.question}
            </h2>
            <p className="text-sm text-gray-600">Question {`${currentQuestion + 1} of ${questions.length}`}</p>
          </div>
          <img src={current.image} alt="QuizImage" className="mx-auto max-h-48 object-contain"/>

          {/* Answer buttons */}
          <div className="space-y-2 mt-4">
            {current.options.map((option, i) => (
              <button key={i} onClick={() => handleSelect(option)}
                className={`block mx-auto w-3/4 border rounded px-4 py-2 text-left cursor-pointer ${
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
            <p className={`font-bold mt-2 text-center ${ feedback === "Correct!" ? "text-green-600" : "text-red-600"}`}>{feedback}</p>
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
            <p className="mt-4 text-[#0070C0] font-semibold text-center"> You've completed the quiz!</p>
          )}
        </div>
      </main>
    </div>
  );
}
