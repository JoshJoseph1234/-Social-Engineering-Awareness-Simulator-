import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Have questions about cybersecurity? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors duration-300">
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="training">Training Programs</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <div className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </div>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">security@simulator.com</p>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                    <p className="text-gray-300">Available on our website</p>
                    <p className="text-gray-400 text-sm">Real-time support during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office</h3>
                    <p className="text-gray-300">
                      123 Security Street
                      <br />
                      Cyber City, CC 12345
                    </p>
                    <p className="text-gray-400 text-sm">Visit by appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h2>
              <p className="text-gray-300 mb-4">
                Looking for custom training programs for your organization? We offer:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Custom simulation scenarios
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Detailed analytics and reporting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Integration with existing systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Ongoing support and updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
