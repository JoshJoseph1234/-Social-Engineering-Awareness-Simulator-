"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, Play, Zap, Users, Lock } from "lucide-react"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo/Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Shield className="w-20 h-20 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 w-20 h-20 border-2 border-cyan-400/30 rounded-full animate-spin"></div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-fade-in">
              Social Engineering
              <br />
              <span className="text-4xl md:text-6xl">Awareness Simulator</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-fade-in-delay">
              Test your ability to identify social engineering attacks and protect yourself from cybersecurity threats.
              <br />
              <span className="text-cyan-400 font-semibold">Stay vigilant. Stay secure.</span>
            </p>

            {/* CTA Button */}
            <Link href="/quiz">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  Start Simulation
                  <Zap className="w-5 h-5 group-hover:animate-bounce" />
                </div>
              </button>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <Users className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">10,000+</h3>
                <p className="text-gray-400">Users Trained</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <Shield className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
                <p className="text-gray-400">Threat Detection Rate</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <Lock className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-400">Simulation Scenarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
