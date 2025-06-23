export interface QuizQuestion {
  id: number
  type: "email" | "chat" | "phone"
  title: string
  content: string
  sender?: string
  isSuspicious: boolean
  explanation: string
}

// Add 50+ questions here. Here are 10 as a sample:
export const questionBank: QuizQuestion[] = [
  {
    id: 1,
    type: "email",
    title: "Urgent Security Alert",
    sender: "security@yourbank.com",
    content: "Your account has been compromised! Click here immediately to secure your account: https://secure-bank-login.net/verify",
    isSuspicious: true,
    explanation: "This is a phishing email. Legitimate banks never ask you to click links in emails to verify accounts.",
  },
  {
    id: 2,
    type: "chat",
    title: "IT Support Request",
    sender: "IT Support",
    content: "Hi! This is John from IT. We're updating our systems and need your password to ensure your account stays active. Can you share it with me?",
    isSuspicious: true,
    explanation: "IT departments never ask for passwords via chat. This is a social engineering attempt.",
  },
  {
    id: 3,
    type: "email",
    title: "Meeting Reminder",
    sender: "calendar@company.com",
    content: "Reminder: Team meeting tomorrow at 2 PM in Conference Room B. Please bring your quarterly reports.",
    isSuspicious: false,
    explanation: "This appears to be a legitimate internal meeting reminder with no suspicious requests.",
  },
  {
    id: 4,
    type: "phone",
    title: "Phone Call Transcript",
    sender: "Unknown Caller",
    content: "Hello, this is Microsoft Support. We've detected malicious activity on your computer. Please download our remote access tool so we can fix it immediately.",
    isSuspicious: true,
    explanation: "Microsoft does not make unsolicited calls. This is a common tech support scam.",
  },
  {
    id: 5,
    type: "email",
    title: "Invoice Notification",
    sender: "billing@company.com",
    content: "Your monthly subscription invoice is ready. Amount due: $29.99. Payment will be automatically processed on the 15th.",
    isSuspicious: false,
    explanation: "This appears to be a standard billing notification with no suspicious elements.",
  },
  // Add more questions here up to 50-100 for variety!
  {
    id: 6,
    type: "chat",
    title: "HR Policy Update",
    sender: "HR Department",
    content: "Please review the attached document for the latest HR policies. Let us know if you have any questions.",
    isSuspicious: false,
    explanation: "This is a typical HR communication with no suspicious requests.",
  },
  {
    id: 7,
    type: "email",
    title: "Password Expiry Notice",
    sender: "admin@company.com",
    content: "Your password will expire in 3 days. Please change it using the official company portal.",
    isSuspicious: false,
    explanation: "Standard password expiry notifications direct you to the official portal.",
  },
  {
    id: 8,
    type: "chat",
    title: "Gift Card Request",
    sender: "CEO",
    content: "Can you buy $500 in gift cards and send me the codes? I'm in a meeting and can't do it myself.",
    isSuspicious: true,
    explanation: "Executives rarely make such requests via chat. This is a common scam.",
  },
  {
    id: 9,
    type: "phone",
    title: "Bank Verification Call",
    sender: "Bank Representative",
    content: "We noticed unusual activity. Please confirm your account number and PIN.",
    isSuspicious: true,
    explanation: "Banks never ask for sensitive info like PINs over the phone.",
  },
  {
    id: 10,
    type: "email",
    title: "Conference Invitation",
    sender: "events@industryconf.com",
    content: "You are invited to speak at our annual conference. Please register using the attached link.",
    isSuspicious: true,
    explanation: "Unsolicited invitations with registration links can be phishing attempts.",
  },
]
/**
 * Returns a random set of questions, avoiding repeats until all are used.
 */
let usedIds = new Set<number>()
export function getRandomQuestions(count: number): QuizQuestion[] {
  let available = questionBank.filter(q => !usedIds.has(q.id))
  if (available.length < count) {
    usedIds.clear()
    available = [...questionBank]
  }
  const shuffled = available.sort(() => Math.random() - 0.5)
  const selected = shuffled.slice(0, count)
  selected.forEach(q => usedIds.add(q.id))
  return selected
}