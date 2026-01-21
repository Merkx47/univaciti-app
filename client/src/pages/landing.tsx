import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useTheme } from "@/components/theme-provider";
import {
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

function UnivacitiLogo({ className, testId }: { className?: string; testId?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      data-testid={testId}
      aria-label="Univaciti Logo"
    >
      <circle cx="50" cy="50" r="50" className="fill-primary" />
      <path 
        d="M25 30 L25 60 L35 60 L35 45 L50 60 L65 60 L65 30 L55 30 L55 45 L40 30 Z" 
        className="fill-primary-foreground"
      />
    </svg>
  );
}

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
      <path d="M20 20H28"/>
      <path d="M20 28H28"/>
      <path d="M36 20H44"/>
      <path d="M36 28H44"/>
    </svg>
  );
}

function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="8" y="12" width="48" height="36" rx="2"/>
      <circle cx="32" cy="28" r="8"/>
      <path d="M28 36L26 52L32 48L38 52L36 36"/>
      <path d="M16 20H24"/>
      <path d="M40 20H48"/>
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="8" y="20" width="48" height="36" rx="3"/>
      <path d="M24 20V14C24 12 26 10 28 10H36C38 10 40 12 40 14V20"/>
      <path d="M8 36H56"/>
      <rect x="28" y="32" width="8" height="8" rx="1"/>
    </svg>
  );
}

function AcornIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="32" cy="40" rx="14" ry="18"/>
      <path d="M18 30C18 30 22 20 32 20C42 20 46 30 46 30"/>
      <path d="M32 20V10"/>
      <path d="M28 12C28 12 30 14 32 14C34 14 36 12 36 12"/>
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="32" r="24"/>
      <ellipse cx="32" cy="32" rx="10" ry="24"/>
      <path d="M8 32H56"/>
      <path d="M12 20H52"/>
      <path d="M12 44H52"/>
    </svg>
  );
}

function DolphinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 32C8 32 12 24 24 24C32 24 36 28 40 28C48 28 52 24 56 28"/>
      <path d="M24 24C24 24 20 16 28 12C32 10 36 14 36 18"/>
      <path d="M40 28C40 28 44 36 40 44C36 52 24 52 20 48"/>
      <path d="M56 28C56 28 60 32 58 38C56 44 48 48 40 44"/>
      <circle cx="20" cy="28" r="2" fill="currentColor"/>
    </svg>
  );
}

function PatternIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="32" cy="16" r="6"/>
      <circle cx="32" cy="48" r="6"/>
      <circle cx="20" cy="32" r="6"/>
      <circle cx="44" cy="32" r="6"/>
      <path d="M32 22V42"/>
      <path d="M26 32H38"/>
      <path d="M24 20L28 26"/>
      <path d="M40 20L36 26"/>
      <path d="M24 44L28 38"/>
      <path d="M40 44L36 38"/>
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-3" data-testid="logo-container">
            <UnivacitiLogo className="h-10 w-10 flex-shrink-0" testId="img-logo" />
            <span className="text-xl font-bold text-foreground" data-testid="text-brand-name">Univaciti</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#programmes" className="text-base text-foreground/80 font-medium" data-testid="link-programmes">Programmes</a>
            <a href="#certification" className="text-base text-foreground/80 font-medium" data-testid="link-certification">Certification</a>
            <a href="#recruitment" className="text-base text-foreground/80 font-medium" data-testid="link-recruitment">Recruitment</a>
            <a href="#community" className="text-base text-foreground/80 font-medium" data-testid="link-community">Community</a>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle testId="button-theme-toggle-desktop" />
            <Button variant="ghost" className="text-base font-medium" data-testid="button-register">Register</Button>
            <Button className="text-base font-medium px-6" data-testid="button-sign-in">Sign in</Button>
          </div>
          
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle testId="button-theme-toggle-mobile" />
            <Button size="icon" variant="ghost" onClick={() => setIsOpen(!isOpen)} data-testid="button-mobile-menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border/30" data-testid="mobile-menu">
          <div className="px-6 py-6 space-y-4">
            <a href="#programmes" className="block py-3 text-lg text-foreground/80 font-medium" data-testid="link-programmes-mobile">Programmes</a>
            <a href="#certification" className="block py-3 text-lg text-foreground/80 font-medium" data-testid="link-certification-mobile">Certification</a>
            <a href="#recruitment" className="block py-3 text-lg text-foreground/80 font-medium" data-testid="link-recruitment-mobile">Recruitment</a>
            <a href="#community" className="block py-3 text-lg text-foreground/80 font-medium" data-testid="link-community-mobile">Community</a>
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full text-base" data-testid="button-register-mobile">Register</Button>
              <Button className="w-full text-base" data-testid="button-sign-in-mobile">Sign in</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8" data-testid="section-hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-8" data-testid="text-hero-title">
              <span className="text-foreground">Get an accelerated skill, from </span>
              <span className="text-primary font-medium">Novis to Expertise.</span>
              <br />
              <span className="text-foreground">Get certified, get validated.</span>
            </h1>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div 
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl flex flex-col items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, rgba(230,240,250,0.8) 0%, rgba(200,220,240,0.6) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.5)'
              }}
              data-testid="card-hero-image"
            >
              <GraduationCapIcon className="w-24 h-24 text-primary mb-6" />
              <p className="text-lg text-foreground/60 font-light">Your Journey Starts Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreePillarsSection() {
  const pillars = [
    {
      icon: BookIcon,
      title: "Learning",
      description: "Hop on any of the specialization course and learn on your own terms.",
    },
    {
      icon: CertificateIcon,
      title: "Certification",
      description: "Get certified to receive validation recruiters are looking for.",
    },
    {
      icon: BriefcaseIcon,
      title: "Recruitment",
      description: "Get access to the pool of certified professionals.",
    },
  ];
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-pillars">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center" data-testid={`card-pillar-${index}`}>
              <div 
                className="w-32 h-32 rounded-3xl mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(230,240,250,0.9) 0%, rgba(210,225,245,0.7) 100%)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
                }}
              >
                <pillar.icon className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`text-pillar-title-${index}`}>{pillar.title}</h3>
              <p className="text-base text-foreground/70 leading-relaxed" data-testid={`text-pillar-description-${index}`}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningProgrammeSection() {
  const programmes = [
    { name: "TESA", icon: PatternIcon, description: "For beginners who need intensive courses in specialized skills" },
    { name: "Startup Accelerator", icon: AcornIcon, description: "For beginners who need intensive courses in specialized skills" },
    { name: "Empowa", icon: GlobeIcon, description: "For beginners who need intensive courses in specialized skills" },
    { name: "TESA", icon: DolphinIcon, description: "For beginners who need intensive courses in specialized skills" },
    { name: "TESA", icon: PatternIcon, description: "For beginners who need intensive courses in specialized skills" },
  ];
  
  return (
    <section id="programmes" className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-programmes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light mb-4" data-testid="text-programmes-title">
            Learning Programme
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto" data-testid="text-programmes-description">
            Choose from the pool of Univaciti programs and start learning when and how you choose to.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {programmes.map((programme, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-6 flex flex-col h-full"
              style={{ backgroundColor: '#3d7a8c' }}
              data-testid={`card-programme-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white leading-tight" data-testid={`text-programme-name-${index}`}>
                  {programme.name}
                </h3>
                <programme.icon className="w-12 h-12 text-white/80 flex-shrink-0" />
              </div>
              <p className="text-sm text-white/80 mb-6 flex-grow" data-testid={`text-programme-description-${index}`}>
                {programme.description}
              </p>
              <Button 
                variant="outline"
                className="w-full border-2 border-white/40 text-white bg-transparent"
                data-testid={`button-programme-more-${index}`}
              >
                More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const specializations = [
    { name: "Cloud Engineering & Architecture.", description: "Choose from the key Hyperscalers and achieve advanced skills." },
    { name: "Software Engineering - Backend.", description: "Achieve software engineering mastery with a specialization in React, Java and .Net Skills" },
    { name: "Data Analytics.", description: "Acquire problem solving skills, with specialization in a domain: Banking, Telecoms, Finance Manufacturing, etc" },
    { name: "AI & Machine Learning.", description: "Acquire problem solving skills, with specialization in a domain: Banking, Telecoms, Finance Manufacturing, etc" },
    { name: "Software Engineering - Frontend.", description: "For beginners who need intensive courses in specialized skills" },
  ];
  
  return (
    <section id="certification" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20" data-testid="section-certifications">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-light mb-4" data-testid="text-certifications-title">
            Certifications
          </h2>
          <p className="text-base text-foreground/70 max-w-4xl mx-auto mb-2" data-testid="text-certifications-description">
            Validate your skillset with Univaciti certification courses.
            Specializations are in Cloud Engineering, Cloud Solutions Architecture, Software Engineering, AI Solution Architecture & Engineering and Data Analytics.
          </p>
          <p className="text-primary font-medium" data-testid="text-certifications-instruction">
            Select a specialization to view the details.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {specializations.map((spec, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-5 flex flex-col h-full"
              style={{ backgroundColor: '#3d7a8c' }}
              data-testid={`card-specialization-${index}`}
            >
              <h3 className="text-base font-semibold text-white mb-3 leading-tight" data-testid={`text-specialization-name-${index}`}>
                {spec.name}
              </h3>
              <p className="text-sm text-white/80 mb-4 flex-grow leading-relaxed" data-testid={`text-specialization-description-${index}`}>
                {spec.description}
              </p>
              <Button 
                variant="outline"
                className="w-full border-2 border-white/40 text-white bg-transparent"
                data-testid={`button-specialization-more-${index}`}
              >
                More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecruitersSection() {
  return (
    <section id="recruitment" className="py-24 px-4 sm:px-6 lg:px-8" data-testid="section-recruiters">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-light mb-6" data-testid="text-recruiters-title">
          Recruiters
        </h2>
        <p className="text-lg text-foreground/70 mb-10 leading-relaxed" data-testid="text-recruiters-description">
          Join the growing list of recruiters, have access to the pool of exceptional Univaciti graduates,
          get alerted by new additions to the pool. Track talents of interest, track skills of interest.
        </p>
        <Button size="lg" className="px-10 py-6 text-lg" data-testid="button-recruiter-register">
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
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-cta">
      <div className="max-w-4xl mx-auto">
        <div 
          className="rounded-3xl p-10 sm:p-14 text-center"
          style={{ backgroundColor: '#3d7a8c' }}
          data-testid="card-cta"
        >
          <GraduationCapIcon className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4" data-testid="text-cta-title">
            Ready to transform your learning?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8" data-testid="text-cta-description">
            Join thousands of learners who are already experiencing the future of education.
          </p>
          <form 
            onSubmit={(e) => { e.preventDefault(); email && joinWaitlist.mutate(email); }} 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" 
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
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/30" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <UnivacitiLogo className="h-10 w-10 flex-shrink-0" testId="img-footer-logo" />
            <span className="text-xl font-bold" data-testid="text-footer-brand">Univaciti</span>
          </div>
          <p className="text-sm text-foreground/60" data-testid="text-footer-copyright">
            2025 Univaciti. All rights reserved.
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
      <RecruitersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
