import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const CARD_COLOR = "#1a6985";

function QAIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="12" width="56" height="56" rx="4"/>
      <path d="M25 40L35 50L55 30"/>
      <circle cx="40" cy="40" r="20"/>
    </svg>
  );
}

const modules = [
  { name: "QA Fundamentals", hours: "15 Hours" },
  { name: "Test Planning & Design", hours: "20 Hours" },
  { name: "Manual Testing", hours: "25 Hours" },
  { name: "Automation Testing", hours: "30 Hours" },
  { name: "API Testing", hours: "20 Hours" },
  { name: "Performance Testing", hours: "20 Hours" },
  { name: "CI/CD Integration", hours: "20 Hours" },
];

const skills = [
  "Test Planning: Create comprehensive test plans and test cases.",
  "Manual Testing: Execute functional, regression, and exploratory testing.",
  "Automation: Build automated test suites using Selenium and other tools.",
  "API Testing: Test REST APIs using Postman and automated frameworks.",
  "Performance: Conduct load and stress testing with JMeter.",
  "Bug Tracking: Effectively document and track defects.",
  "CI/CD: Integrate testing into continuous integration pipelines.",
];

export default function QualityAssurancePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoUrl} alt="Univaciti" className="h-9 w-9" />
              <span className="text-lg font-bold text-foreground">Univaciti</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div 
            className="rounded-3xl p-8 sm:p-12 mb-12"
            style={{ backgroundColor: CARD_COLOR }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <QAIcon className="w-20 h-20 text-white" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Quality Assurance</h1>
                <p className="text-lg text-white/90">Software Testing Specialization</p>
              </div>
            </div>
            <p className="text-white/85 text-base leading-relaxed">
              Master the art of software quality assurance. This specialization covers 
              manual and automated testing, test planning, API testing, performance testing, 
              and CI/CD integration to prepare you for QA engineering roles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Course Modules</h2>
              <div className="space-y-2">
                {modules.map((module, index) => (
                  <div 
                    key={index}
                    className="rounded-lg p-3 bg-muted/30 flex items-center justify-between"
                  >
                    <span className="font-medium text-sm">{module.name}</span>
                    <span className="text-xs text-foreground/60">{module.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Skills You'll Learn</h2>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="text-sm text-foreground/80 leading-relaxed">
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: CARD_COLOR }}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-muted/30 mb-8">
            <h2 className="text-xl font-semibold mb-4">Tools Covered</h2>
            <div className="flex flex-wrap gap-3">
              {["Selenium", "Cypress", "Postman", "JMeter", "TestNG", "Cucumber", "Jenkins", "JIRA"].map((tool) => (
                <span key={tool} className="px-3 py-1 rounded-full text-sm bg-background border border-border">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg">Get Certified</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
