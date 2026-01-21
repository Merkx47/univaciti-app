import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const THEME_PRIMARY = "#0d4f6b";

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
            <h2 className="text-xl font-semibold mb-4">Technologies Covered</h2>
            <div className="flex flex-wrap gap-3">
              {["Java 17+", "Spring Boot", "Spring MVC", "JPA/Hibernate", "MySQL", "PostgreSQL", "Maven", "JUnit"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-sm bg-background border border-border">
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
