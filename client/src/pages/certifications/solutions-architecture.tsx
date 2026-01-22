import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Sun, Moon, ArrowLeft } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
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
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="min-h-screen bg-background relative">
      <WorldMapWatermark />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.history.back()}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                title="Go back"
              >
                <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
              <Link href="/" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors" data-testid="link-home">
                <Home className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <img src={logoUrl} alt="Univaciti" className="h-9 w-9 rounded-full" />
                <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>Univaciti</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="text-slate-600 dark:text-slate-300"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Link href="/register">
                <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm">Register</Button>
              </Link>
              <Link href="/login">
                <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm">Sign in</Button>
              </Link>
            </div>
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
              <div className="border-2 border-gray-400 dark:border-slate-500 rounded-lg overflow-hidden">
                <div className="grid grid-cols-[1fr_auto] bg-slate-100 dark:bg-slate-700 border-b-2 border-gray-400 dark:border-slate-500">
                  <div className="px-4 py-2 font-semibold text-sm border-r border-gray-400 dark:border-slate-500">Module</div>
                  <div className="px-4 py-2 font-semibold text-sm w-24 text-center">Duration</div>
                </div>
                {modules.map((module, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-[1fr_auto] ${index !== modules.length - 1 ? 'border-b border-gray-300 dark:border-slate-600' : ''}`}
                  >
                    <div className="px-4 py-3 text-sm border-r border-gray-300 dark:border-slate-600">{module.name}</div>
                    <div className="px-4 py-3 text-xs text-foreground/70 w-24 text-center">{module.hours}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Skills You'll Learn</h2>
              <div className="border-2 border-gray-400 dark:border-slate-500 rounded-lg overflow-hidden">
                <div className="bg-slate-100 dark:bg-slate-700 px-4 py-2 font-semibold text-sm border-b-2 border-gray-400 dark:border-slate-500">
                  Core Competencies
                </div>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-3 text-sm text-foreground/80 leading-relaxed ${index !== skills.length - 1 ? 'border-b border-gray-300 dark:border-slate-600' : ''}`}
                  >
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: THEME_PRIMARY }}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg p-6 bg-muted/30 border-2 border-gray-400 dark:border-slate-500 mb-8">
            <h2 className="text-xl font-semibold mb-4">Topics Covered</h2>
            <div className="flex flex-wrap gap-3">
              {["Microservices", "Event-Driven", "Serverless", "Containers", "Load Balancing", "Caching", "CDN", "Database Design"].map((topic) => (
                <span key={topic} className="px-3 py-1 rounded-full text-sm bg-background border-2 border-gray-400 dark:border-slate-500">
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
