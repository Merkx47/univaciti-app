import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoUrl from "@assets/logo_1769031259580.png";

const THEME_PRIMARY = "#1E9AD6";

function CertifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="16" width="52" height="36" rx="3"/>
      <circle cx="40" cy="34" r="9"/>
      <path d="M36 34L39 37L45 31"/>
      <path d="M33 52L30 68L40 62L50 68L47 52"/>
    </svg>
  );
}

const examTypes = [
  { name: "Cloud Engineering", description: "Validate your cloud infrastructure skills", duration: "90 mins", questions: 60 },
  { name: "Data Analytics", description: "Prove your data analysis expertise", duration: "90 mins", questions: 55 },
  { name: "Software Engineering - Java", description: "Demonstrate Java proficiency", duration: "120 mins", questions: 70 },
  { name: "Quality Assurance", description: "Show your QA capabilities", duration: "90 mins", questions: 50 },
  { name: "Software Engineering - React", description: "Validate React development skills", duration: "90 mins", questions: 55 },
  { name: "Solutions Architecture", description: "Prove system design expertise", duration: "120 mins", questions: 65 },
  { name: "AI & Machine Learning", description: "Demonstrate AI/ML knowledge", duration: "120 mins", questions: 70 },
];

export default function CertifyPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoUrl} alt="Univaciti" className="h-9 w-9" />
              <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>Univaciti</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm">Register</Button>
              <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm">Sign in</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-4" style={{ color: THEME_PRIMARY }}>
            <CertifyIcon className="w-full h-full" />
          </div>
          <h1 className="text-3xl font-light mb-3" style={{ color: THEME_PRIMARY }}>
            CERTIFY
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Univaciti certification exams in key tech skills, for skills validation. 
            Get certified to prove your expertise to employers worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: THEME_PRIMARY }}>1</div>
                <p className="text-sm text-foreground/80">Complete a Univaciti learning programme or self-study</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: THEME_PRIMARY }}>2</div>
                <p className="text-sm text-foreground/80">Register for the certification exam in your specialization</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: THEME_PRIMARY }}>3</div>
                <p className="text-sm text-foreground/80">Take the proctored online exam</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: THEME_PRIMARY }}>4</div>
                <p className="text-sm text-foreground/80">Receive your verified digital certificate</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME_PRIMARY }}></span>
                Industry-recognized certification
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME_PRIMARY }}></span>
                Verifiable digital credentials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME_PRIMARY }}></span>
                Listed in Univaciti talent pool
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME_PRIMARY }}></span>
                Access to exclusive job opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME_PRIMARY }}></span>
                Lifetime certificate validity
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Available Certification Exams</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {examTypes.map((exam, index) => (
            <div key={index} className="p-4 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
              <h3 className="font-semibold text-sm mb-1">{exam.name}</h3>
              <p className="text-xs text-foreground/60 mb-2">{exam.description}</p>
              <div className="flex gap-4 text-xs text-foreground/50">
                <span>{exam.duration}</span>
                <span>{exam.questions} questions</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" style={{ backgroundColor: THEME_PRIMARY }}>
            Schedule an Exam
          </Button>
        </div>
      </main>
    </div>
  );
}
