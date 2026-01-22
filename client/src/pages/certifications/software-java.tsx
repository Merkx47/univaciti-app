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

function JavaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 30H52V60C52 66 46 70 36 70C26 70 20 66 20 60V30Z"/>
      <path d="M52 38H58C62 38 65 42 65 46C65 50 62 54 58 54H52"/>
      <path d="M26 18C26 18 28 22 32 22C36 22 36 18 36 18"/>
      <path d="M38 12C38 12 40 18 44 18C48 18 48 12 48 12"/>
    </svg>
  );
}

const modules = [
  { name: "Java Fundamentals", hours: "20 Hours" },
  { name: "Object-Oriented Programming", hours: "25 Hours" },
  { name: "Data Structures & Algorithms", hours: "30 Hours" },
  { name: "Spring Framework", hours: "25 Hours" },
  { name: "Database Integration", hours: "20 Hours" },
  { name: "RESTful APIs", hours: "15 Hours" },
  { name: "Testing & Debugging", hours: "15 Hours" },
];

const skills = [
  "Core Java: Master Java syntax, data types, operators, and control flow.",
  "OOP Principles: Implement inheritance, polymorphism, encapsulation, and abstraction.",
  "Spring Boot: Build enterprise applications with Spring Boot and Spring MVC.",
  "Database Integration: Work with JPA, Hibernate, and relational databases.",
  "API Development: Design and implement RESTful web services.",
  "Testing: Write unit tests with JUnit and integration tests.",
  "Best Practices: Apply design patterns and clean code principles.",
];

export default function SoftwareJavaPage() {
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
              <JavaIcon className="w-20 h-20 text-white" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Software Engineering</h1>
                <p className="text-lg text-white/90">Java Specialization</p>
              </div>
            </div>
            <p className="text-white/85 text-base leading-relaxed">
              Master Java development from fundamentals to enterprise applications. 
              This specialization covers core Java, object-oriented programming, 
              Spring Framework, database integration, and modern development practices 
              to prepare you for backend engineering roles.
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
            <h2 className="text-xl font-semibold mb-4">Technologies Covered</h2>
            <div className="flex flex-wrap gap-3">
              {["Java 17+", "Spring Boot", "Spring MVC", "JPA/Hibernate", "MySQL", "PostgreSQL", "Maven", "JUnit"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-sm bg-background border-2 border-gray-400 dark:border-slate-500">
                  {tech}
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
