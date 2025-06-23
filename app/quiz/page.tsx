"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Shield, AlertTriangle, CheckCircle, XCircle, ArrowRight } from "lucide-react"
import { getRandomQuestions, QuizQuestion } from "@/lib/questionBank" // Use alias if configured, else use "../../lib/questionBank"

export default function QuizPage() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    setQuizQuestions(getRandomQuestions(5)) // Get 5 random questions each time
  }, [])

  if (quizQuestions.length === 0) return null

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleAnswer = (isSuspicious: boolean) => {
    setSelectedAnswer(isSuspicious)
    setShowFeedback(true)

    setTimeout(() => {
      const newAnswers = [...answers, isSuspicious === question.isSuspicious]
      setAnswers(newAnswers)

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setShowFeedback(false)
        setSelectedAnswer(null)
      } else {
        // Quiz completed, navigate to results
        const score = newAnswers.filter(Boolean).length
        const percentage = Math.round((score / quizQuestions.length) * 100)
        router.push(`/results?score=${score}&total=${quizQuestions.length}&percentage=${percentage}`)
      }
    }, 3000)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "email":
        return "📧"
      case "chat":
        return "💬"
      case "phone":
        return "📞"
      default:
        return "📄"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Awareness Test</h1>
          <div className="flex items-center justify-center gap-4 text-gray-300">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center text-gray-400 mt-2">{Math.round(progress)}% Complete</p>
        </div>

        {/* Question Card */}
        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8">
          {/* Message Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">{getTypeIcon(question.type)}</span>
            <div>
              <h2 className="text-xl font-bold text-white">{question.title}</h2>
              {question.sender && <p className="text-gray-400">From: {question.sender}</p>}
            </div>
          </div>

          {/* Message Content */}
          <div className="bg-gray-900/50 rounded-lg p-6 mb-6 border-l-4 border-cyan-500">
            <p className="text-gray-200 leading-relaxed">{question.content}</p>
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div
              className={`p-4 rounded-lg mb-6 border-l-4 ${
                selectedAnswer === question.isSuspicious
                  ? "bg-green-900/30 border-green-500"
                  : "bg-red-900/30 border-red-500"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === question.isSuspicious ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span
                  className={`font-semibold ${
                    selectedAnswer === question.isSuspicious ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {selectedAnswer === question.isSuspicious ? "Correct!" : "Incorrect"}
                </span>
              </div>
              <p className="text-gray-300">{question.explanation}</p>
            </div>
          )}

          {/* Answer Buttons */}
          {!showFeedback && (
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleAnswer(false)}
                className="flex-1 group relative px-6 py-4 bg-green-600/20 border-2 border-green-500/50 text-green-400 font-semibold rounded-lg transition-all duration-300 hover:bg-green-600/30 hover:border-green-400 hover:scale-105"
              >
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  Safe
                </div>
              </button>

              <button
                onClick={() => handleAnswer(true)}
                className="flex-1 group relative px-6 py-4 bg-red-600/20 border-2 border-red-500/50 text-red-400 font-semibold rounded-lg transition-all duration-300 hover:bg-red-600/30 hover:border-red-400 hover:scale-105"
              >
                <div className="flex items-center justify-center gap-3">
                  <AlertTriangle className="w-5 h-5" />
                  Suspicious
                </div>
              </button>
            </div>
          )}

          {/* Next Indicator */}
          {showFeedback && currentQuestion < quizQuestions.length - 1 && (
            <div className="text-center mt-6">
              <div className="flex items-center justify-center gap-2 text-cyan-400">
                <span>Next question in 3 seconds</span>
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
