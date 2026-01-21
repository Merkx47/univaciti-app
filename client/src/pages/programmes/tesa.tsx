import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const CARD_COLOR = "#1a6985";

function BeaverIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 55C20 55 15 50 15 40C15 30 25 25 35 25C40 25 45 20 50 20C60 20 65 30 65 40C65 50 60 55 55 55"/>
      <path d="M35 25C35 25 30 20 25 22C20 24 18 30 20 35"/>
      <path d="M55 55L60 65C60 65 55 70 45 70C35 70 30 65 30 65L35 55"/>
      <ellipse cx="40" cy="45" rx="15" ry="12"/>
      <circle cx="32" cy="38" r="2" fill="currentColor"/>
      <circle cx="48" cy="38" r="2" fill="currentColor"/>
      <ellipse cx="40" cy="48" rx="4" ry="3" fill="currentColor"/>
      <path d="M36 52L38 56M44 52L42 56"/>
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
            className="rounded-3xl p-8 sm:p-12 mb-12"
            style={{ backgroundColor: CARD_COLOR }}
            data-testid="card-tesa-hero"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <BeaverIcon className="w-24 h-24 text-white" />
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
                className="rounded-xl p-5 border border-border/50 hover-elevate cursor-pointer"
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
