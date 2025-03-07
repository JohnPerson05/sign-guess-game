import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-6">
          What&apos;s Your Type in SIGN?
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Take this quick quiz to discover if you're a Serious Builder, Visionary Observer, Bullish Tycoon, or
          Adventurous Rebel!
        </p>
        <div className="flex justify-center">
          <Link href="/quiz">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-medium px-8 py-6 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Start Personality Quiz
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

