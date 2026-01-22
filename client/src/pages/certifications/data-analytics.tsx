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

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="52" width="10" height="16"/>
      <rect x="27" y="38" width="10" height="30"/>
      <rect x="42" y="24" width="10" height="44"/>
      <rect x="57" y="12" width="10" height="56"/>
      <path d="M12 22L27 34L47 20L67 8"/>
      <circle cx="67" cy="8" r="3" fill="currentColor"/>
    </svg>
  );
}

const modules = [
  { name: "Data Analysis Process", hours: "15 Hours" },
  { name: "Problem Solving & Design", hours: "20 Hours" },
  { name: "Analytics Techniques", hours: "25 Hours" },
  { name: "Domain Expertise", hours: "20 Hours" },
  { name: "Data Analysis Tools", hours: "30 Hours" },
  { name: "Machine Learning Basics", hours: "20 Hours" },
  { name: "Data Storytelling", hours: "20 Hours" },
];

const skills = [
  "Data Analysis Process: End-to-end data collection, cleaning, exploration, analysis, and insight generation.",
  "Problem Solving & Design Thinking: Implementing design thinking, problem framing, and hypothesis testing.",
  "Analytics Techniques: Mastering descriptive, diagnostic, predictive, and prescriptive analytics.",
  "Domain Expertise: Designing domain-specific solutions for finance, marketing, operations, and healthcare.",
  "Data Analysis Tools: Using Excel, SQL, Python (Pandas, NumPy), and BI tools.",
  "ML Basics: Applying supervised and unsupervised learning, regression, classification, and clustering.",
  "Data Storytelling: Using visuals and narratives to communicate insights and drive decision-making.",
];

export default function DataAnalyticsPage() {
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
              <ChartIcon className="w-20 h-20 text-white" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Data Analytics</h1>
                <p className="text-lg text-white/90">& Design Thinking</p>
              </div>
            </div>
            <p className="text-white/85 text-base leading-relaxed">
              The Data Analytics Specialization equips learners with practical skills to collect, clean, 
              analyze, visualize, and communicate data-driven insights. It focuses on hands-on experience 
              with tools like Excel, SQL, Python, Tableau/Power BI, and real-world projects to prepare 
              learners for in-demand data analytics roles.
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
            <h2 className="text-xl font-semibold mb-4">Tools & Platforms Covered</h2>
            <div className="flex flex-wrap gap-3">
              {["Excel", "SQL", "Python", "Pandas", "NumPy", "Tableau", "Power BI"].map((tool) => (
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
