"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Shield, TrendingUp, AlertTriangle, CheckCircle, RotateCcw, BookOpen } from "lucide-react"
import { Suspense } from "react"

function ResultsContent() {
  const searchParams = useSearchParams()
  const score = Number.parseInt(searchParams.get("score") || "0")
  const total = Number.parseInt(searchParams.get("total") || "5")
  const percentage = Number.parseInt(searchParams.get("percentage") || "0")

  const getVerdict = (percentage: number) => {
    if (percentage >= 90)
      return { label: "Excellent", color: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/50" }
    if (percentage >= 70)
      return { label: "Well Trained", color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/50" }
    if (percentage >= 50)
      return {
        label: "Moderate Risk",
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
        border: "border-yellow-500/50",
      }
    return { label: "High Risk", color: "text-red-400", bg: "bg-red-500/20", border: "border-red-500/50" }
  }

  const verdict = getVerdict(percentage)

  const tips = [
    "Always verify sender identity through a separate communication channel",
    "Be suspicious of urgent requests for sensitive information",
    "Check URLs carefully for misspellings or suspicious domains",
    "Never share passwords or personal information via email or chat",
    "When in doubt, contact your IT department directly",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Shield className="w-16 h-16 text-cyan-400" />
              <div className="absolute inset-0 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Assessment Complete</h1>
          <p className="text-gray-300">Here's how you performed on the security awareness test</p>
        </div>

        {/* Score Card */}
        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8">
          <div className="text-center mb-8">
            {/* Score Circle */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-700"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  strokeDashoffset={`${2 * Math.PI * 50 * (1 - percentage / 100)}`}
                  className="text-cyan-400 transition-all duration-1000 ease-out"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{percentage}%</span>
              </div>
            </div>

            {/* Score Details */}
            <h2 className="text-2xl font-bold text-white mb-2">
              {score} out of {total} correct
            </h2>

            {/* Verdict Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${verdict.bg} ${verdict.border} ${verdict.color} font-semibold`}
            >
              {percentage >= 70 ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
              {verdict.label}
            </div>
          </div>

          {/* Performance Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Accuracy</h3>
              <p className="text-2xl font-bold text-cyan-400">{percentage}%</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Correct</h3>
              <p className="text-2xl font-bold text-green-400">{score}</p>
            </div>
            <div className="text-center">
              <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Missed</h3>
              <p className="text-2xl font-bold text-red-400">{total - score}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-5 h-5" />
                  Try Again
                </div>
              </button>
            </Link>
            <Link href="/resources">
              <button className="group relative px-6 py-3 bg-gray-700/50 border border-gray-600 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-600/50 hover:border-gray-500">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Learn More
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            Security Tips
          </h3>
          <div className="space-y-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg">
                <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-400 text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-300">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-400"></div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  )
}
