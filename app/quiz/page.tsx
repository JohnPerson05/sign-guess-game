"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { questions } from "@/lib/quiz-data"

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [progress, setProgress] = useState(0)

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setProgress(((currentQuestion + 1) / questions.length) * 100)
    } else {
      // Quiz completed, navigate to results
      router.push(`/results?answers=${newAnswers.join(",")}`)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-orange p-4">
      <div className="max-w-md w-full quiz-card">
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>

        <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

