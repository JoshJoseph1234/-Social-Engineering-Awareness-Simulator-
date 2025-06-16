import { BookOpen, ExternalLink, Shield, Users, AlertTriangle, Lock } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      category: "Essential Reading",
      icon: BookOpen,
      items: [
        { title: "NIST Cybersecurity Framework", url: "#", description: "Comprehensive cybersecurity guidelines" },
        {
          title: "Social Engineering: The Art of Human Hacking",
          url: "#",
          description: "Classic book by Christopher Hadnagy",
        },
        { title: "SANS Security Awareness", url: "#", description: "Industry-leading security training resources" },
      ],
    },
    {
      category: "Training Programs",
      icon: Users,
      items: [
        { title: "KnowBe4 Security Awareness", url: "#", description: "Comprehensive phishing simulation platform" },
        { title: "Proofpoint Security Awareness", url: "#", description: "Enterprise security training solutions" },
        { title: "SANS Securing the Human", url: "#", description: "Human-focused cybersecurity training" },
      ],
    },
    {
      category: "Threat Intelligence",
      icon: AlertTriangle,
      items: [
        { title: "MITRE ATT&CK Framework", url: "#", description: "Global knowledge base of adversary tactics" },
        { title: "Verizon Data Breach Report", url: "#", description: "Annual analysis of security incidents" },
        { title: "Anti-Phishing Working Group", url: "#", description: "Latest phishing trends and statistics" },
      ],
    },
    {
      category: "Security Tools",
      icon: Lock,
      items: [
        { title: "Have I Been Pwned", url: "#", description: "Check if your data has been compromised" },
        { title: "VirusTotal", url: "#", description: "Analyze suspicious files and URLs" },
        { title: "PhishTank", url: "#", description: "Community-driven phishing verification" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Security Resources
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Expand your cybersecurity knowledge with these curated resources
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resources.map((category, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0 ml-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tips Section */}
        <div className="mt-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Quick Security Tips</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-semibold text-cyan-400 mb-2">Enable 2FA</h3>
              <p className="text-gray-300 text-sm">Use two-factor authentication on all important accounts</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-semibold text-cyan-400 mb-2">Verify Requests</h3>
              <p className="text-gray-300 text-sm">Always verify unusual requests through a separate channel</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-semibold text-cyan-400 mb-2">Keep Updated</h3>
              <p className="text-gray-300 text-sm">Regularly update software and security awareness knowledge</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-semibold text-cyan-400 mb-2">Think Before Clicking</h3>
              <p className="text-gray-300 text-sm">Hover over links to check destinations before clicking</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-semibold text-cyan-400 mb-2">Report Suspicious Activity</h3>
              <p className="text-gray-300 text-sm">Immediately report potential security threats to IT</p>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-semibold text-cyan-400 mb-2">Use Strong Passwords</h3>
              <p className="text-gray-300 text-sm">Create unique, complex passwords for each account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
