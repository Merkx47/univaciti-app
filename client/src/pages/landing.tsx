import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useTheme } from "@/components/theme-provider";
import { Link } from "wouter";
import logoUrl from "@assets/logo_1769031259580.png";
import pepsiLogo from "@assets/image_1769036912372.png";
import unionBankLogo from "@assets/image_1769037382283.png";
import citiLogo from "@assets/image_1769037532565.png";
import stanbicLogo from "@assets/image_1769037712758.png";
import polarisLogo from "@assets/image_1769037805080.png";
import firstBankLogo from "@assets/image_1769037850316.png";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronRight,
} from "lucide-react";
import { SiAmazon, SiGooglecloud, SiHuawei } from "react-icons/si";

// Univaciti theme colors - matching logo blue
const THEME_PRIMARY = "#1E9AD6";
const THEME_LIGHT = "#3AAFE6";

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

// Programme Icons - Improved TESA icon (Rocket/Accelerator)
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

// STEM Icon - Pi/Math Symbol
function StemIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 25H60"/>
      <path d="M30 25V60"/>
      <path d="M50 25V45C50 55 55 60 60 60"/>
      <circle cx="25" cy="15" r="3" fill="currentColor"/>
      <circle cx="55" cy="15" r="3" fill="currentColor"/>
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="25" width="44" height="45" rx="2"/>
      <rect x="28" y="12" width="24" height="13"/>
      <rect x="25" y="32" width="6" height="6"/>
      <rect x="37" y="32" width="6" height="6"/>
      <rect x="49" y="32" width="6" height="6"/>
      <rect x="25" y="44" width="6" height="6"/>
      <rect x="37" y="44" width="6" height="6"/>
      <rect x="49" y="44" width="6" height="6"/>
      <rect x="35" y="56" width="10" height="14"/>
    </svg>
  );
}

function CertifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="16" width="52" height="36" rx="3"/>
      <circle cx="40" cy="34" r="9"/>
      <path d="M36 34L39 37L45 31"/>
      <path d="M33 52L30 68L40 62L50 68L47 52"/>
    </svg>
  );
}

// Certification Icons
function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 52C14 52 10 45 10 38C10 31 15 25 22 25C23 16 32 10 42 10C52 10 60 17 62 26C69 27 74 33 74 41C74 49 68 55 60 55H22"/>
      <path d="M32 40L40 48L52 36"/>
    </svg>
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

// Java Icon - Coffee cup
function JavaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 30H50V60C50 65 45 70 35 70C25 70 20 65 20 60V30Z"/>
      <path d="M50 35H58C62 35 65 38 65 42C65 46 62 50 58 50H50"/>
      <path d="M28 18C28 18 30 22 35 22C40 22 40 18 40 18"/>
      <path d="M35 20C35 20 37 24 42 24C47 24 47 20 47 20"/>
    </svg>
  );
}

function QAIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="40" cy="40" r="24"/>
      <path d="M28 40L36 48L52 32"/>
    </svg>
  );
}

// Official React Logo Style
function ReactLogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="40" cy="40" rx="26" ry="10"/>
      <ellipse cx="40" cy="40" rx="26" ry="10" transform="rotate(60 40 40)"/>
      <ellipse cx="40" cy="40" rx="26" ry="10" transform="rotate(-60 40 40)"/>
      <circle cx="40" cy="40" r="5" fill="currentColor"/>
    </svg>
  );
}

// Solutions Architecture Icon - Network diagram
function ArchitectureIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="30" y="10" width="20" height="14" rx="2"/>
      <rect x="10" y="56" width="16" height="14" rx="2"/>
      <rect x="32" y="56" width="16" height="14" rx="2"/>
      <rect x="54" y="56" width="16" height="14" rx="2"/>
      <path d="M40 24V40"/>
      <path d="M18 56V46H62V56"/>
      <path d="M40 40V56"/>
    </svg>
  );
}

// Robot Icon for AI/ML
function RobotIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="28" width="44" height="36" rx="4"/>
      <rect x="24" y="36" width="10" height="8" rx="2"/>
      <rect x="46" y="36" width="10" height="8" rx="2"/>
      <path d="M32 54H48"/>
      <path d="M40 12V28"/>
      <circle cx="40" cy="12" r="4"/>
      <path d="M12 42H18"/>
      <path d="M62 42H68"/>
      <path d="M28 64V70"/>
      <path d="M52 64V70"/>
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
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
            <Link href="/programmes/tesa" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-programmes">Programmes</Link>
            <Link href="/certifications/cloud-engineering" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-certification">Certification</Link>
            <Link href="/recruitment" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-recruitment">Recruitment</Link>
            <Link href="/certify" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-certify">Certify</Link>
            <Link href="/community" className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors" data-testid="link-community">Community</Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle testId="button-theme-toggle-desktop" />
            <Link href="/register">
              <Button variant="ghost" size="sm" className="font-medium" data-testid="button-register">Register</Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="font-medium" data-testid="button-sign-in">Sign in</Button>
            </Link>
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
            <Link href="/programmes/tesa" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-programmes-mobile">Programmes</Link>
            <Link href="/certifications/cloud-engineering" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-certification-mobile">Certification</Link>
            <Link href="/recruitment" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-recruitment-mobile">Recruitment</Link>
            <Link href="/certify" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-certify-mobile">Certify</Link>
            <Link href="/community" className="block py-2 text-sm text-foreground/80 font-medium" data-testid="link-community-mobile">Community</Link>
            <div className="pt-3 flex gap-2">
              <Link href="/register" className="flex-1">
                <Button variant="outline" size="sm" className="w-full" data-testid="button-register-mobile">Register</Button>
              </Link>
              <Link href="/login" className="flex-1">
                <Button size="sm" className="w-full" data-testid="button-sign-in-mobile">Sign in</Button>
              </Link>
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
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl flex flex-col items-center justify-center border border-border/30 bg-muted/50 dark:bg-muted/30"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
              data-testid="card-hero-image"
            >
              <span style={{ color: THEME_PRIMARY }}>
                <GraduationCapIcon className="w-20 h-20 mb-4" />
              </span>
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
                className="w-24 h-24 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-border/30 bg-muted/50 dark:bg-muted/30"
              >
                <span style={{ color: THEME_PRIMARY }}>
                  <pillar.icon className="w-12 h-12" />
                </span>
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
      icon: RocketIcon, 
      description: "Tech Skills Accelerator Programme. Intensive 8-week tech skills accelerator.",
      link: "/programmes/tesa"
    },
    { 
      id: "stem",
      name: "STEM", 
      icon: StemIcon, 
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
        
        <div className="grid sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {programmes.map((programme, index) => (
            <Link key={index} href={programme.link}>
              <div 
                className="rounded-2xl p-5 flex flex-col h-52 cursor-pointer transition-transform hover:scale-[1.02] border border-white/20"
                style={{ backgroundColor: THEME_PRIMARY }}
                data-testid={`card-programme-${programme.id}`}
              >
                <h3 className="text-base font-semibold text-white mb-auto" data-testid={`text-programme-name-${index}`}>
                  {programme.name}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-4" data-testid={`text-programme-description-${index}`}>
                  {programme.description}
                </p>
                <div 
                  className="self-end py-1.5 px-4 rounded-full text-white text-xs font-medium border border-white/50"
                  style={{ backgroundColor: THEME_LIGHT }}
                  data-testid={`button-programme-more-${index}`}
                >
                  More
                </div>
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
    { id: "cloud-engineering", name: "Cloud Engineering & Architecture", icon: CloudIcon, description: "Choose from the key Hyperscalers and achieve advanced skills in designing, deploying, and managing scalable cloud infrastructure across AWS, Azure, and GCP." },
    { id: "data-analytics", name: "Data Analytics", icon: ChartIcon, description: "Master the art of collecting, analyzing, and visualizing data to drive business decisions. Learn SQL, Python, and modern BI tools for actionable insights." },
    { id: "software-java", name: "Software Eng. - Java", icon: JavaIcon, description: "Build enterprise-grade applications with Java. Cover Spring Boot, microservices, APIs, and industry best practices for scalable backend systems." },
    { id: "quality-assurance", name: "Quality Assurance", icon: QAIcon, description: "Ensure software excellence through comprehensive testing strategies. Learn manual and automated testing, CI/CD integration, and quality metrics." },
    { id: "software-react", name: "Software Eng. - React", icon: ReactLogoIcon, description: "Create modern, responsive web applications with React. Master components, state management, hooks, and deployment to production environments." },
    { id: "solutions-architecture", name: "Solutions Architecture", icon: ArchitectureIcon, description: "Design scalable, resilient, and cost-effective cloud solutions. Learn architectural patterns, security best practices, and system design principles." },
    { id: "ai-ml", name: "AI & Machine Learning", icon: RobotIcon, description: "Apply artificial intelligence and machine learning to solve real-world problems. Cover neural networks, NLP, computer vision, and model deployment." },
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {specializations.map((spec, index) => (
            <Link key={index} href={`/certifications/${spec.id}`}>
              <div 
                className="rounded-2xl p-4 flex flex-col h-64 cursor-pointer transition-transform hover:scale-[1.02] border border-white/20"
                style={{ backgroundColor: THEME_PRIMARY }}
                data-testid={`card-specialization-${spec.id}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-semibold text-white leading-tight flex-1 pr-2" data-testid={`text-specialization-name-${index}`}>
                    {spec.name}
                  </h3>
                  <spec.icon className="w-10 h-10 text-white/80 flex-shrink-0" />
                </div>
                <p className="text-xs text-white/80 leading-relaxed flex-1" data-testid={`text-specialization-description-${index}`}>
                  {spec.description}
                </p>
                <div 
                  className="self-end py-1.5 px-4 rounded-full text-white text-xs font-medium border border-white/50 mt-3"
                  style={{ backgroundColor: THEME_LIGHT }}
                  data-testid={`button-specialization-more-${index}`}
                >
                  More
                </div>
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
          className="rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6 border border-white/20"
          style={{ backgroundColor: THEME_PRIMARY }}
          data-testid="card-certify"
        >
          <CertifyIcon className="w-20 h-20 text-white flex-shrink-0" />
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-2xl font-semibold text-white mb-2" data-testid="text-certify-title">
              CERTIFY
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

function RecruiterLogoImg({ src, alt, darkBg }: { src: string; alt: string; darkBg?: boolean }) {
  return (
    <div className={`h-16 px-4 flex items-center justify-center rounded-lg ${darkBg ? 'bg-slate-800' : 'bg-white'}`}>
      <img src={src} alt={alt} className="h-10 w-auto object-contain" />
    </div>
  );
}

function RecruitersSection() {
  return (
    <section id="recruitment" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20" data-testid="section-recruiters">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-light mb-4" data-testid="text-recruiters-title">
          Recruiters
        </h2>
        <p className="text-sm text-foreground/70 mb-6 leading-relaxed" data-testid="text-recruiters-description">
          Join the growing list of recruiters, have access to the pool of exceptional Univaciti graduates,
          get alerted by new additions to the pool. Track talents of interest, track skills of interest.
        </p>
        <Link href="/recruitment">
          <Button size="lg" className="mb-10" style={{ backgroundColor: THEME_PRIMARY }} data-testid="button-recruiter-register">
            Register as Recruiter
          </Button>
        </Link>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8" data-testid="recruiter-logos">
          <RecruiterLogoImg src={pepsiLogo} alt="Pepsi" />
          <RecruiterLogoImg src={unionBankLogo} alt="Union Bank" />
          <RecruiterLogoImg src={stanbicLogo} alt="Stanbic IBTC" darkBg />
          <RecruiterLogoImg src={polarisLogo} alt="Polaris Bank" />
          <RecruiterLogoImg src={citiLogo} alt="Citi" />
          <RecruiterLogoImg src={firstBankLogo} alt="FirstBank" />
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-medium mb-6" style={{ color: THEME_PRIMARY }}>Cloud Platform Partners</h3>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-2">
              <SiAmazon className="w-14 h-14" style={{ color: "#FF9900" }} />
              <span className="text-xs text-foreground/70">AWS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-14 h-14" viewBox="0 0 64 64" fill="#3B82F6">
                <path d="M52 28c0-1.1-.03-2.18-.1-3.26A16 16 0 0 0 22.18 20 12 12 0 0 0 8 32a12 12 0 0 0 12 12h30a10 10 0 0 0 2-19.8V28z"/>
              </svg>
              <span className="text-xs text-foreground/70">Azure</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiGooglecloud className="w-14 h-14" style={{ color: "#4285F4" }} />
              <span className="text-xs text-foreground/70">Google Cloud</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiHuawei className="w-14 h-14" style={{ color: "#FF0000" }} />
              <span className="text-xs text-foreground/70">Huawei Cloud</span>
            </div>
          </div>
        </div>
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
          className="rounded-xl p-8 text-center border border-white/20"
          style={{ backgroundColor: THEME_PRIMARY }}
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
