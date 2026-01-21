import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const CARD_COLOR = "#1a6985";

function AtomIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="40" cy="40" rx="30" ry="12" transform="rotate(0 40 40)"/>
      <ellipse cx="40" cy="40" rx="30" ry="12" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="40" rx="30" ry="12" transform="rotate(120 40 40)"/>
      <circle cx="40" cy="40" r="5" fill="currentColor"/>
    </svg>
  );
}

const courses = [
  { name: "Cloud Engineering", description: "Introduction to cloud computing for young learners." },
  { name: "Data Analytics", description: "Learn to work with data and create visualizations." },
  { name: "Software Engineering - Java", description: "Build your first applications with Java." },
  { name: "Quality Assurance", description: "Learn software testing fundamentals." },
  { name: "Software Engineering - React", description: "Create interactive web applications." },
  { name: "Solutions Architecture", description: "Design systems that solve real problems." },
  { name: "Artificial Intelligence", description: "Explore AI and machine learning basics." },
];

export default function StemPage() {
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
            data-testid="card-stem-hero"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <AtomIcon className="w-24 h-24 text-white" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2" data-testid="text-stem-title">STEM</h1>
                <p className="text-xl text-white/90">Science, Technology, Engineering & Mathematics</p>
              </div>
            </div>
            <p className="text-white/85 text-lg leading-relaxed mb-6" data-testid="text-stem-description">
              Comprehensive STEM courses designed specifically for young people. 
              Build a strong foundation in technology and prepare for future careers 
              in the digital economy.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-white/90">
              <div>
                <h3 className="font-semibold mb-2">Target Audience</h3>
                <p className="text-sm">Young learners and students</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Format</h3>
                <p className="text-sm">Flexible, self-paced learning</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Approach</h3>
                <p className="text-sm">Hands-on projects and practical exercises</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Outcome</h3>
                <p className="text-sm">Industry-ready foundational skills</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-center">Available Courses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="rounded-xl p-5 border border-border/50 hover-elevate cursor-pointer"
                data-testid={`card-stem-course-${index}`}
              >
                <h3 className="font-semibold text-foreground mb-2">{course.name}</h3>
                <p className="text-sm text-foreground/70">{course.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Start your STEM journey today</h3>
            <Button size="lg" data-testid="button-stem-enroll">Enroll Now</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
