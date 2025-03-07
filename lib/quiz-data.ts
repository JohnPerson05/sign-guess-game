// Define a type for the personality types
export type PersonalityType = "builder" | "observer" | "tycoon" | "rebel"

// Game questions and options
export const questions = [
  {
    question: "How do you approach new projects?",
    options: [
      { label: "Methodically plan every detail", value: "builder" },
      { label: "Analyze trends and patterns first", value: "observer" },
      { label: "Look for growth opportunities", value: "tycoon" },
      { label: "Jump in and figure it out as I go", value: "rebel" },
    ],
  },
  {
    question: "What's your approach to risk?",
    options: [
      { label: "Calculated risks with proper foundation", value: "builder" },
      { label: "Research thoroughly before deciding", value: "observer" },
      { label: "High risk, high reward", value: "tycoon" },
      { label: "Embrace uncertainty and change", value: "rebel" },
    ],
  },
  {
    question: "How do you make important decisions?",
    options: [
      { label: "Based on practical experience and proven methods", value: "builder" },
      { label: "By gathering and analyzing all available information", value: "observer" },
      { label: "By evaluating potential return on investment", value: "tycoon" },
      { label: "By following my intuition and passion", value: "rebel" },
    ],
  },
  {
    question: "What's your ideal work environment?",
    options: [
      { label: "Structured with clear goals and processes", value: "builder" },
      { label: "Quiet space for deep thinking and analysis", value: "observer" },
      { label: "Fast-paced, competitive, and results-oriented", value: "tycoon" },
      { label: "Creative, flexible, and without rigid rules", value: "rebel" },
    ],
  },
  {
    question: "What motivates you the most?",
    options: [
      { label: "Creating something tangible and lasting", value: "builder" },
      { label: "Understanding complex systems and predicting trends", value: "observer" },
      { label: "Achieving growth and financial success", value: "tycoon" },
      { label: "Freedom to explore new possibilities", value: "rebel" },
    ],
  },
]

// Personality type data for results
export const personalityTypes: Record<
  PersonalityType,
  {
    name: string
    count: string
    icon: string
    description: string
    color: string
  }
> = {
  builder: {
    name: "Serious Builder",
    count: "119,363",
    icon: "🏗️",
    description:
      "You're methodical, reliable, and focused on creating solid foundations. You build things that last and value structure and consistency.",
    color: "bg-white text-gray-800 border border-gray-200",
  },
  observer: {
    name: "Visionary Observer",
    count: "84,876",
    icon: "👁️",
    description:
      "You see patterns others miss and excel at analyzing complex situations. Your insights help predict future trends and opportunities.",
    color: "bg-gray-500 text-white border border-gray-600",
  },
  tycoon: {
    name: "Bullish Tycoon",
    count: "77,882",
    icon: "🐂",
    description:
      "You're ambitious, confident, and always looking for growth opportunities. You're not afraid to take calculated risks for significant rewards.",
    color: "bg-orange-400 text-white border border-orange-500",
  },
  rebel: {
    name: "Adventurous Rebel",
    count: "75,542",
    icon: "🚀",
    description:
      "You challenge conventions and forge your own path. Your creativity and adaptability help you thrive in changing environments.",
    color: "bg-green-400 text-white border border-green-500",
  },
}

// Simple algorithm to determine the result based on answers
export function calculateResult(answers: string[]): PersonalityType {
  // Count the occurrences of each personality type
  const counts = {
    builder: 0,
    observer: 0,
    tycoon: 0,
    rebel: 0,
  }

  // Count each answer
  answers.forEach((answer) => {
    if (counts[answer as PersonalityType] !== undefined) {
      counts[answer as PersonalityType]++
    }
  })

  // Find the personality type with the highest count
  let maxCount = 0
  let result: PersonalityType = "builder" // Default

  for (const [type, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count
      result = type as PersonalityType
    }
  }

  return result
}