"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="hidden sm:block">Security Simulator</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-cyan-400 bg-cyan-500/10"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/quiz">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Start Quiz
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/quiz" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md transition-all duration-300 hover:scale-105">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
