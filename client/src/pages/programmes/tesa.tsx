import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const THEME_PRIMARY = "#0d4f6b";

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 12C40 12 55 20 55 40C55 55 40 68 40 68C40 68 25 55 25 40C25 20 40 12 40 12Z"/>
      <circle cx="40" cy="38" r="6"/>
      <path d="M25 45L15 55L25 52"/>
      <path d="M55 45L65 55L55 52"/>
      <path d="M35 68L40 75L45 68"/>
    </svg>
  );
}

const specializations = [
  { name: "Cloud Engineering", description: "Design, deploy, and manage scalable cloud infrastructure." },
  { name: "Solution Architecture", description: "Design scalable, resilient, and cost-effective cloud solutions." },
  { name: "Data Analysis & Analytics", description: "Collect, analyze, and visualize data-driven insights." },
  { name: "Software Engineering - Java", description: "Master Java for enterprise software development." },
  { name: "Software Engineering - React", description: "Build modern web applications with React." },
  { name: "Artificial Intelligence & ML", description: "Apply AI and ML to solve real problems." },
  { name: "Quality Assurance", description: "Ensure software quality through testing practices." },
];

export default function TesaPage() {
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
            className="rounded-xl p-8 sm:p-12 mb-12 border border-white/20"
            style={{ backgroundColor: THEME_PRIMARY }}
            data-testid="card-tesa-hero"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <RocketIcon className="w-24 h-24 text-white" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2" data-testid="text-tesa-title">TESA</h1>
                <p className="text-xl text-white/90">Tech Skills Accelerator Programme</p>
              </div>
            </div>
            <p className="text-white/85 text-lg leading-relaxed mb-6" data-testid="text-tesa-description">
              8-week intensive specialization courses, curated for top quality intakes. 
              TESA closes the tech talent gap by transforming passionate top 1% learners 
              into world-class professionals who create real solutions for real problems.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-white/90">
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-sm">8 Weeks, Full-time (8 hours/day, Mon-Sat)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fee</h3>
                <p className="text-sm">$2,000 (With 70% scholarship available)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cohorts</h3>
                <p className="text-sm">January, March, July, September</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Employment Rate</h3>
                <p className="text-sm">Near 100% within 3 months</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-center">Specializations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => (
              <div 
                key={index}
                className="rounded-lg p-5 border border-border bg-card hover-elevate cursor-pointer"
                data-testid={`card-tesa-spec-${index}`}
              >
                <h3 className="font-semibold text-foreground mb-2">{spec.name}</h3>
                <p className="text-sm text-foreground/70">{spec.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to accelerate your tech career?</h3>
            <Button size="lg" data-testid="button-tesa-apply">Apply Now</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
