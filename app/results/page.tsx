"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { calculateResult, personalityTypes, type PersonalityType } from "@/lib/quiz-data"
import { Share } from "lucide-react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [result, setResult] = useState<PersonalityType | null>(null)
  const [shareUrl, setShareUrl] = useState("")

  useEffect(() => {
    const answersParam = searchParams.get("answers")
    if (answersParam) {
      const answers = answersParam.split(",")
      const personalityResult = calculateResult(answers)
      setResult(personalityResult)

      // Create share URL
      const baseUrl = window.location.origin
      const shareText = `I'm a ${personalityTypes[personalityResult].name}! ${personalityTypes[personalityResult].description} Take the quiz to find out your personality type!`
      setShareUrl(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(baseUrl)}&text=${encodeURIComponent(shareText)}`,
      )
    }
  }, [searchParams])

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-300">
        <div className="bg-white p-8 rounded-xl shadow-lg">Loading your results...</div>
      </div>
    )
  }

  const personality = personalityTypes[result]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-orange-300 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-5xl mb-4">{personality.icon}</div>
        <h1 className="text-3xl font-bold mb-2">You are a {personality.name}!</h1>
        <div
          className="inline-block px-3 py-1 rounded-full text-sm mb-4"
          style={{ backgroundColor: personality.color.split(" ")[0] }}
        >
          {personality.count} people
        </div>

        <p className="text-gray-700 mb-6">{personality.description}</p>

        <div className="flex flex-col gap-3">
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-2 px-4 rounded-lg"
          >
            <Share className="w-5 h-5" />
            Share on Twitter/X
          </a>

          <Link href="/quiz">
            <Button variant="outline" className="w-full">
              Take Quiz Again
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

