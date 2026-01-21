import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const THEME_PRIMARY = "#0d4f6b";

function BlueprintIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="10" width="60" height="60" rx="4"/>
      <circle cx="25" cy="25" r="6"/>
      <circle cx="55" cy="25" r="6"/>
      <circle cx="40" cy="55" r="6"/>
      <path d="M31 25H49"/>
      <path d="M25 31V40L40 49"/>
      <path d="M55 31V40L40 49"/>
    </svg>
  );
}

const modules = [
  { name: "Architecture Fundamentals", hours: "20 Hours" },
  { name: "System Design Patterns", hours: "25 Hours" },
  { name: "Cloud Architecture", hours: "30 Hours" },
  { name: "Scalability & Performance", hours: "20 Hours" },
  { name: "Security Architecture", hours: "20 Hours" },
  { name: "Cost Optimization", hours: "15 Hours" },
  { name: "Architecture Documentation", hours: "20 Hours" },
];

const skills = [
  "System Design: Design scalable, resilient, and maintainable systems.",
  "Cloud Patterns: Apply cloud-native architecture patterns and best practices.",
  "High Availability: Design for fault tolerance and disaster recovery.",
  "Performance: Architect for optimal performance and low latency.",
  "Security: Implement security-first architecture principles.",
  "Cost Management: Design cost-effective solutions with proper resource sizing.",
  "Documentation: Create clear architecture diagrams and technical documentation.",
];

export default function SolutionsArchitecturePage() {
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
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <BlueprintIcon className="w-20 h-20 text-white" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Solutions Architecture</h1>
                <p className="text-lg text-white/90">System Design Specialization</p>
              </div>
            </div>
            <p className="text-white/85 text-base leading-relaxed">
              Master the art of designing enterprise-grade solutions. This specialization 
              covers system design patterns, cloud architecture, scalability, security, 
              and cost optimization to prepare you for solutions architect roles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Course Modules</h2>
              <div className="space-y-2">
                {modules.map((module, index) => (
                  <div 
                    key={index}
                    className="rounded-lg p-3 bg-muted/30 border border-border flex items-center justify-between"
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

          <div className="rounded-lg p-6 bg-muted/30 border border-border mb-8">
            <h2 className="text-xl font-semibold mb-4">Topics Covered</h2>
            <div className="flex flex-wrap gap-3">
              {["Microservices", "Event-Driven", "Serverless", "Containers", "Load Balancing", "Caching", "CDN", "Database Design"].map((topic) => (
                <span key={topic} className="px-3 py-1 rounded-full text-sm bg-background border border-border">
                  {topic}
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
