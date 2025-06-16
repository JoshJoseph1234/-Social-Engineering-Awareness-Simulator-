export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            About Our Mission
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Empowering individuals and organizations to recognize and defend against social engineering attacks
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">What is Social Engineering?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Social engineering is a manipulation technique that exploits human psychology to gain access to buildings,
              systems, or data. It relies on human interaction and often involves tricking people into breaking normal
              security procedures.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our simulator helps you recognize these tactics by presenting realistic scenarios that you might encounter
              in your daily digital life.
            </p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why This Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">95% of Breaches</h3>
                <p className="text-gray-300">Are caused by human error, making awareness training crucial</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">$4.45M Average</h3>
                <p className="text-gray-300">Cost of a data breach in 2023, according to IBM</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">3.4 Billion</h3>
                <p className="text-gray-300">Phishing emails sent daily worldwide</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">12% Click Rate</h3>
                <p className="text-gray-300">Average percentage of users who click on phishing links</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-gray-300 leading-relaxed">
              We believe that the best defense against social engineering is education and practice. Our simulator
              provides a safe environment to learn and test your skills without real-world consequences. Through
              interactive scenarios based on real attack patterns, we help build your security intuition.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
