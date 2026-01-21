import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const CARD_COLOR = "#1a6985";

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="15" y="25" width="50" height="45" rx="2"/>
      <rect x="25" y="10" width="30" height="15"/>
      <rect x="22" y="32" width="8" height="8"/>
      <rect x="36" y="32" width="8" height="8"/>
      <rect x="50" y="32" width="8" height="8"/>
      <rect x="22" y="46" width="8" height="8"/>
      <rect x="36" y="46" width="8" height="8"/>
      <rect x="50" y="46" width="8" height="8"/>
      <rect x="34" y="58" width="12" height="12"/>
    </svg>
  );
}

const features = [
  { title: "Tailored Curriculum", description: "Customized learning paths based on your organization's specific needs." },
  { title: "Flexible Schedule", description: "Training that works around your employees' work schedules." },
  { title: "Rapid Skill Acquisition", description: "Focused, intensive training for quick results." },
  { title: "Corporate Discounts", description: "Special pricing for organizations training multiple employees." },
  { title: "Progress Tracking", description: "Monitor employee learning progress with detailed reports." },
  { title: "Certification", description: "Industry-recognized certifications upon completion." },
];

const skills = [
  "Cloud Engineering",
  "Data Analytics", 
  "Software Engineering - Java",
  "Quality Assurance",
  "Software Engineering - React",
  "Solutions Architecture",
  "Artificial Intelligence & ML",
];

export default function NestPage() {
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
            data-testid="card-nest-hero"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <BuildingIcon className="w-24 h-24 text-white" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2" data-testid="text-nest-title">NEST</h1>
                <p className="text-xl text-white/90">Corporate Tech Skills Programme</p>
              </div>
            </div>
            <p className="text-white/85 text-lg leading-relaxed mb-6" data-testid="text-nest-description">
              Tailored for rapid but flexible curriculum for employees in key tech skills.
              NEST provides organizations with customized training solutions that fit their 
              specific technology needs and business objectives.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-white/90">
              <div>
                <h3 className="font-semibold mb-2">Format</h3>
                <p className="text-sm">Flexible, tailored to your schedule</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-sm">Online, on-site, or hybrid options</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-sm">Customizable based on requirements</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm">Dedicated account management</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Why Choose NEST?</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="rounded-xl p-4 border border-border/50"
                    data-testid={`card-nest-feature-${index}`}
                  >
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Available Skills Training</h2>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="rounded-lg p-4 bg-muted/30 flex items-center"
                    data-testid={`card-nest-skill-${index}`}
                  >
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: CARD_COLOR }}></div>
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Upskill your workforce today</h3>
            <Button size="lg" data-testid="button-nest-contact">Contact Us</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
