import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";
import worldMapImg from "@assets/world_map.png";

const THEME_PRIMARY = "#1E9AD6";

function WorldMapWatermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      <img
        src={worldMapImg}
        alt=""
        className="w-full h-full object-cover opacity-[0.12] dark:opacity-[0.15] dark:invert"
        style={{ filter: 'grayscale(100%)' }}
      />
    </div>
  );
}

function QAIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="40" cy="40" r="24"/>
      <path d="M28 40L36 48L52 32"/>
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
    <div className="min-h-screen bg-background relative">
      <WorldMapWatermark />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoUrl} alt="Univaciti" className="h-9 w-9 rounded-full" />
              <span className="text-lg font-bold text-foreground">Univaciti</span>
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div 
            className="rounded-xl p-8 sm:p-12 mb-12 border border-white/20"
            style={{ backgroundColor: THEME_PRIMARY }}
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
                    className="rounded-lg p-3 bg-muted/30 border-2 border-gray-400 dark:border-slate-500 flex items-center justify-between"
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
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: THEME_PRIMARY }}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg p-6 bg-muted/30 border-2 border-gray-400 dark:border-slate-500 mb-8">
            <h2 className="text-xl font-semibold mb-4">Tools Covered</h2>
            <div className="flex flex-wrap gap-3">
              {["Selenium", "Cypress", "Postman", "JMeter", "TestNG", "Cucumber", "Jenkins", "JIRA"].map((tool) => (
                <span key={tool} className="px-3 py-1 rounded-full text-sm bg-background border-2 border-gray-400 dark:border-slate-500">
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
