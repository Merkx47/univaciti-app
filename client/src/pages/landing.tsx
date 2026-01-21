import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useTheme } from "@/components/theme-provider";
import { Link } from "wouter";
import logoUrl from "@assets/logo_1769031259580.png";
import {
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

// Card background color from the design
const CARD_COLOR = "#1a6985";
const CARD_COLOR_LIGHT = "#2a8aa8";

function ThemeToggle({ testId }: { testId: string }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      data-testid={testId}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

// Programme Icons
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

function CertifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="15" width="56" height="40" rx="3"/>
      <circle cx="40" cy="35" r="10"/>
      <path d="M36 35L39 38L45 32"/>
      <path d="M32 55L28 70L40 64L52 70L48 55"/>
    </svg>
  );
}

// Certification Icons
function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 50C12 50 8 44 8 38C8 32 12 26 20 26C20 18 28 12 38 12C48 12 56 18 58 26C66 26 72 32 72 40C72 48 66 54 58 54H20"/>
      <path d="M30 42L38 50L50 38"/>
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="55" width="12" height="15"/>
      <rect x="26" y="40" width="12" height="30"/>
      <rect x="42" y="25" width="12" height="45"/>
      <rect x="58" y="15" width="12" height="55"/>
      <path d="M10 20L30 35L50 22L70 10"/>
      <circle cx="70" cy="10" r="3" fill="currentColor"/>
    </svg>
  );
}

function JavaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 15C28 15 35 20 45 20C55 20 55 12 55 12"/>
      <path d="M25 25C25 25 35 32 50 32C60 32 60 22 60 22"/>
      <path d="M20 40C20 40 25 50 40 50C55 50 60 42 60 42"/>
      <path d="M30 55C30 55 35 62 45 62C55 62 55 55 55 55"/>
      <path d="M25 68C25 68 32 72 40 72C48 72 55 68 55 68"/>
      <rect x="32" y="35" width="16" height="20" rx="2"/>
      <path d="M36 40V50"/>
      <path d="M44 40V50"/>
    </svg>
  );
}

function QAIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="12" width="56" height="56" rx="4"/>
      <path d="M25 40L35 50L55 30"/>
      <circle cx="40" cy="40" r="20"/>
    </svg>
  );
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="40" cy="40" rx="28" ry="11"/>
      <ellipse cx="40" cy="40" rx="28" ry="11" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="40" rx="28" ry="11" transform="rotate(120 40 40)"/>
      <circle cx="40" cy="40" r="4" fill="currentColor"/>
    </svg>
  );
}

function ArchitectureIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="55" width="20" height="15" rx="2"/>
      <rect x="50" y="55" width="20" height="15" rx="2"/>
      <rect x="30" y="10" width="20" height="15" rx="2"/>
      <rect x="10" y="32" width="20" height="12" rx="2"/>
      <rect x="50" y="32" width="20" height="12" rx="2"/>
      <path d="M40 25V32"/>
      <path d="M20 44V55"/>
      <path d="M60 44V55"/>
      <path d="M20 38H30"/>
      <path d="M50 38H60"/>
    </svg>
  );
}

function AIIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="40" cy="40" r="25"/>
      <circle cx="40" cy="40" r="8"/>
      <path d="M40 15V25"/>
      <path d="M40 55V65"/>
      <path d="M15 40H25"/>
      <path d="M55 40H65"/>
      <path d="M22 22L29 29"/>
      <path d="M51 51L58 58"/>
      <path d="M58 22L51 29"/>
      <path d="M29 51L22 58"/>
      <circle cx="40" cy="40" r="3" fill="currentColor"/>
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M32 8L4 24L32 40L60 24L32 8Z" strokeLinejoin="round"/>
      <path d="M16 32V48C16 48 24 56 32 56C40 56 48 48 48 48V32" strokeLinejoin="round"/>
      <path d="M32 40V56"/>
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M8 12C8 12 16 8 32 8C48 8 56 12 56 12V52C56 52 48 48 32 48C16 48 8 52 8 52V12Z"/>
      <path d="M32 8V48"/>
    </svg>
  );
}

function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="8" y="12" width="48" height="36" rx="2"/>
      <circle cx="32" cy="28" r="8"/>
      <path d="M28 36L26 52L32 48L38 52L36 36"/>
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="8" y="20" width="48" height="36" rx="3"/>
      <path d="M24 20V14C24 12 26 10 28 10H36C38 10 40 12 40 14V20"/>
      <path d="M8 36H56"/>
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="logo-container">
            <img src={logoUrl} alt="Univaciti" className="h-9 w-9" data-testid="img-logo" />
            <span className="text-lg font-bold text-foreground" data-testid="text-brand-name">Univaciti</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#programmes" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-programmes">Programmes</a>
            <a href="#certification" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-certification">Certification</a>
            <a href="#recruitment" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-recruitment">Recruitment</a>
            <a href="#certify" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-certify">Certify</a>
            <a href="#community" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-community">Community</a>
          </div>
          
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle testId="button-theme-toggle-desktop" />
            <Button variant="ghost" size="sm" className="font-medium" data-testid="button-register">Register</Button>
            <Button size="sm" className="font-medium" data-testid="button-sign-in">Sign in</Button>
          </div>
          
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle testId="button-theme-toggle-mobile" />
            <Button size="icon" variant="ghost" onClick={() => setIsOpen(!isOpen)} data-testid="button-mobile-menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border/30" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-2">
            <a href="#programmes" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-programmes-mobile">Programmes</a>
            <a href="#certification" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-certification-mobile">Certification</a>
            <a href="#recruitment" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-recruitment-mobile">Recruitment</a>
            <a href="#certify" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-certify-mobile">Certify</a>
            <a href="#community" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-community-mobile">Community</a>
            <div className="pt-3 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" data-testid="button-register-mobile">Register</Button>
              <Button size="sm" className="flex-1" data-testid="button-sign-in-mobile">Sign in</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8" data-testid="section-hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6" data-testid="text-hero-title">
              <span className="text-foreground">Get an accelerated skill, from </span>
              <span className="text-primary font-medium">Novis to Expertise.</span>
              <br />
              <span className="text-foreground">Get certified, get validated.</span>
            </h1>
            <p className="text-base text-foreground/70 mb-6" data-testid="text-hero-subtitle">
              Driven by Curiosity & Powered by Passion
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div 
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl flex flex-col items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, rgba(230,240,250,0.9) 0%, rgba(200,220,240,0.7) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
              }}
              data-testid="card-hero-image"
            >
              <GraduationCapIcon className="w-20 h-20 text-primary mb-4" />
              <p className="text-sm text-foreground/60 font-light">Your Journey Starts Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreePillarsSection() {
  const pillars = [
    { icon: BookIcon, title: "Learning", description: "Hop on any of the specialization courses and learn on your own terms." },
    { icon: CertificateIcon, title: "Certification", description: "Get certified to receive validation recruiters are looking for." },
    { icon: BriefcaseIcon, title: "Recruitment", description: "Get access to the pool of certified professionals." },
  ];
  
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" data-testid="section-pillars">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center" data-testid={`card-pillar-${index}`}>
              <div 
                className="w-24 h-24 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(230,240,250,0.9) 0%, rgba(210,225,245,0.7) 100%)'
                }}
              >
                <pillar.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground" data-testid={`text-pillar-title-${index}`}>{pillar.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed" data-testid={`text-pillar-description-${index}`}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningProgrammeSection() {
  const programmes = [
    { 
      id: "tesa",
      name: "TESA", 
      icon: BeaverIcon, 
      description: "Tech Skills Accelerator Programme. Intensive 8-week tech skills accelerator.",
      link: "/programmes/tesa"
    },
    { 
      id: "stem",
      name: "STEM", 
      icon: AtomIcon, 
      description: "Science, Tech, Engineering and Maths courses for young people.",
      link: "/programmes/stem"
    },
    { 
      id: "nest",
      name: "NEST", 
      icon: BuildingIcon, 
      description: "Tailored for rapid but flexible curriculum for employees in key tech skills.",
      link: "/programmes/nest"
    },
  ];
  
  return (
    <section id="programmes" className="py-12 px-4 sm:px-6 lg:px-8" data-testid="section-programmes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-light mb-3" data-testid="text-programmes-title">
            Learning Programme
          </h2>
          <p className="text-sm text-foreground/70 max-w-2xl mx-auto" data-testid="text-programmes-description">
            Choose from the pool of Univaciti programs and start learning when and how you choose to.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {programmes.map((programme, index) => (
            <Link key={index} href={programme.link}>
              <div 
                className="rounded-2xl p-5 flex flex-col h-full cursor-pointer transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: CARD_COLOR }}
                data-testid={`card-programme-${programme.id}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold text-white tracking-wider" data-testid={`text-programme-name-${index}`}>
                    {programme.name}
                  </h3>
                  <programme.icon className="w-14 h-14 text-white/90 flex-shrink-0 -mt-1 -mr-1" />
                </div>
                <p className="text-xs text-white/80 mb-5 flex-grow leading-relaxed" data-testid={`text-programme-description-${index}`}>
                  {programme.description}
                </p>
                <button 
                  className="w-full py-2 rounded-full border-2 border-dashed border-white/50 text-white text-sm font-medium"
                  style={{ backgroundColor: CARD_COLOR_LIGHT }}
                  data-testid={`button-programme-more-${index}`}
                >
                  More
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const specializations = [
    { id: "cloud-engineering", name: "Cloud Engineering", icon: CloudIcon, description: "Design, deploy, and manage scalable cloud infrastructure." },
    { id: "data-analytics", name: "Data Analytics", icon: ChartIcon, description: "Collect, analyze, and visualize data-driven insights." },
    { id: "software-java", name: "Software Eng. - Java", icon: JavaIcon, description: "Master Java for enterprise software development." },
    { id: "quality-assurance", name: "Quality Assurance", icon: QAIcon, description: "Ensure software quality through testing practices." },
    { id: "software-react", name: "Software Eng. - React", icon: ReactIcon, description: "Build modern web applications with React." },
    { id: "solutions-architecture", name: "Solutions Architecture", icon: ArchitectureIcon, description: "Design scalable, resilient cloud solutions." },
    { id: "ai-ml", name: "AI & Machine Learning", icon: AIIcon, description: "Apply AI and ML to solve real problems." },
  ];
  
  return (
    <section id="certification" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20" data-testid="section-certifications">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-light mb-3" data-testid="text-certifications-title">
            Certifications
          </h2>
          <p className="text-sm text-foreground/70 max-w-3xl mx-auto mb-1" data-testid="text-certifications-description">
            Validate your skillset with Univaciti certification courses.
          </p>
          <p className="text-primary font-medium text-sm" data-testid="text-certifications-instruction">
            Select a specialization to view the details.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {specializations.map((spec, index) => (
            <Link key={index} href={`/certifications/${spec.id}`}>
              <div 
                className="rounded-xl p-4 flex flex-col h-full cursor-pointer transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: CARD_COLOR }}
                data-testid={`card-specialization-${spec.id}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold text-white leading-tight flex-1 pr-2" data-testid={`text-specialization-name-${index}`}>
                    {spec.name}
                  </h3>
                  <spec.icon className="w-10 h-10 text-white/90 flex-shrink-0" />
                </div>
                <p className="text-xs text-white/75 mb-3 flex-grow leading-relaxed" data-testid={`text-specialization-description-${index}`}>
                  {spec.description}
                </p>
                <button 
                  className="w-full py-1.5 rounded-full border-2 border-dashed border-white/50 text-white text-xs font-medium"
                  style={{ backgroundColor: CARD_COLOR_LIGHT }}
                  data-testid={`button-specialization-more-${index}`}
                >
                  More
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertifySection() {
  return (
    <section id="certify" className="py-12 px-4 sm:px-6 lg:px-8" data-testid="section-certify">
      <div className="max-w-4xl mx-auto">
        <div 
          className="rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
          style={{ backgroundColor: CARD_COLOR }}
          data-testid="card-certify"
        >
          <CertifyIcon className="w-20 h-20 text-white flex-shrink-0" />
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-2xl font-semibold text-white mb-2" data-testid="text-certify-title">
              CERTIFY®
            </h2>
            <p className="text-sm text-white/80 mb-4" data-testid="text-certify-description">
              Univaciti certification exams in key tech skills, for skills validation. 
              Get certified to prove your expertise to employers worldwide.
            </p>
            <Button variant="secondary" size="sm" data-testid="button-certify-learn-more">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecruitersSection() {
  return (
    <section id="recruitment" className="py-16 px-4 sm:px-6 lg:px-8" data-testid="section-recruiters">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-light mb-4" data-testid="text-recruiters-title">
          Recruiters
        </h2>
        <p className="text-sm text-foreground/70 mb-6 leading-relaxed" data-testid="text-recruiters-description">
          Join the growing list of recruiters, have access to the pool of exceptional Univaciti graduates,
          get alerted by new additions to the pool. Track talents of interest, track skills of interest.
        </p>
        <Button size="lg" data-testid="button-recruiter-register">
          Register
        </Button>
      </div>
    </section>
  );
}

function CTASection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const joinWaitlist = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/waitlist", { email });
    },
    onSuccess: () => {
      toast({ title: "You're on the list!", description: "We'll notify you when Univaciti launches." });
      setEmail("");
    },
    onError: () => {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    },
  });
  
  return (
    <section id="community" className="py-12 px-4 sm:px-6 lg:px-8" data-testid="section-cta">
      <div className="max-w-3xl mx-auto">
        <div 
          className="rounded-2xl p-8 text-center"
          style={{ backgroundColor: CARD_COLOR }}
          data-testid="card-cta"
        >
          <GraduationCapIcon className="w-14 h-14 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-light text-white mb-3" data-testid="text-cta-title">
            Ready to transform your learning?
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto mb-6" data-testid="text-cta-description">
            Join thousands of learners who are already experiencing the future of education.
          </p>
          <form 
            onSubmit={(e) => { e.preventDefault(); email && joinWaitlist.mutate(email); }} 
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" 
            data-testid="form-waitlist-cta"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60"
              data-testid="input-email-cta"
            />
            <Button type="submit" variant="secondary" disabled={joinWaitlist.isPending} data-testid="button-join-waitlist-cta">
              {joinWaitlist.isPending ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/30" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logoUrl} alt="Univaciti" className="h-8 w-8" data-testid="img-footer-logo" />
            <span className="text-lg font-bold" data-testid="text-footer-brand">Univaciti</span>
          </div>
          <p className="text-xs text-foreground/60" data-testid="text-footer-copyright">
            2026 Univaciti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ThreePillarsSection />
      <LearningProgrammeSection />
      <CertificationsSection />
      <CertifySection />
      <RecruitersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
