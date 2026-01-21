import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useTheme } from "@/components/theme-provider";
import logoUrl from "@assets/logo_1769023265723.png";

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
      <path 
        d="M50 25 L70 50 L60 50 L60 75 L40 75 L40 50 L30 50 Z" 
        className="fill-primary-foreground"
      />
    </svg>
  );
}
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Briefcase,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
  Cloud,
  Code,
  Database,
  Brain,
  Monitor,
} from "lucide-react";

function ThemeToggle({ testId }: { testId: string }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      data-testid={testId}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-3" data-testid="logo-container">
            <UnivacitiLogo className="h-10 w-10 flex-shrink-0" testId="img-logo" />
            <span className="text-xl font-bold text-foreground" data-testid="text-brand-name">Univaciti</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#programmes" className="text-muted-foreground transition-colors" data-testid="link-programmes">Programmes</a>
            <a href="#certification" className="text-muted-foreground transition-colors" data-testid="link-certification">Certification</a>
            <a href="#recruitment" className="text-muted-foreground transition-colors" data-testid="link-recruitment">Recruitment</a>
            <a href="#community" className="text-muted-foreground transition-colors" data-testid="link-community">Community</a>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle testId="button-theme-toggle-desktop" />
            <Button variant="ghost" data-testid="button-register">Register</Button>
            <Button data-testid="button-sign-in">Sign in</Button>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle testId="button-theme-toggle-mobile" />
            <Button size="icon" variant="ghost" onClick={() => setIsOpen(!isOpen)} data-testid="button-mobile-menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-3">
            <a href="#programmes" className="block py-2 text-muted-foreground" data-testid="link-programmes-mobile">Programmes</a>
            <a href="#certification" className="block py-2 text-muted-foreground" data-testid="link-certification-mobile">Certification</a>
            <a href="#recruitment" className="block py-2 text-muted-foreground" data-testid="link-recruitment-mobile">Recruitment</a>
            <a href="#community" className="block py-2 text-muted-foreground" data-testid="link-community-mobile">Community</a>
            <div className="pt-3 space-y-2">
              <Button variant="outline" className="w-full" data-testid="button-register-mobile">Register</Button>
              <Button className="w-full" data-testid="button-sign-in-mobile">Sign in</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
              <span className="text-foreground">Get an accelerated skill, from </span>
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Novice to Expertise.</span>
              <br />
              <span className="text-foreground">Get certified, get validated.</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" data-testid="button-get-started-hero">
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-learn-more-hero">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5" data-testid="card-hero-image">
              <div className="aspect-square bg-card rounded-lg flex items-center justify-center relative overflow-hidden border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="relative z-10 text-center">
                  <GraduationCap className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">Your Journey Starts Here</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreePillarsSection() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Learning",
      description: "Hop on any of the specialization course and learn on your own terms.",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Get certified to receive validation recruiters are looking for.",
    },
    {
      icon: Briefcase,
      title: "Recruitment",
      description: "Get access to the pool of certified professionals.",
    },
  ];
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-pillars">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="p-8 text-center hover-elevate transition-all duration-300" data-testid={`card-pillar-${index}`}>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3" data-testid={`text-pillar-title-${index}`}>{pillar.title}</h3>
              <p className="text-muted-foreground" data-testid={`text-pillar-description-${index}`}>{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningProgrammeSection() {
  const programmes = [
    {
      name: "TESA",
      subtitle: "Tech Skills Accelerator",
      description: "For beginners who need intensive courses in specialized skills",
    },
    {
      name: "Startup Accelerator",
      subtitle: "Entrepreneurship Track",
      description: "For beginners who need intensive courses in specialized skills",
    },
    {
      name: "Empowa",
      subtitle: "Empowerment Programme",
      description: "For beginners who need intensive courses in specialized skills",
    },
  ];
  
  return (
    <section id="programmes" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-programmes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-programmes-title">
            Learning Programme
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-programmes-description">
            Choose from the pool of Univaciti programs and start learning when and how you choose to.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((programme, index) => (
            <Card key={index} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-programme-${index}`}>
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1" data-testid={`text-programme-name-${index}`}>{programme.name}</h3>
              <p className="text-sm text-primary mb-3" data-testid={`text-programme-subtitle-${index}`}>{programme.subtitle}</p>
              <p className="text-muted-foreground mb-4" data-testid={`text-programme-description-${index}`}>{programme.description}</p>
              <Button variant="outline" className="w-full" data-testid={`button-programme-more-${index}`}>
                More
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const specializations = [
    {
      icon: Cloud,
      name: "Cloud Engineering & Architecture",
      description: "Choose from the key Hyperscalers and achieve advanced skills.",
    },
    {
      icon: Code,
      name: "Software Engineering - Backend",
      description: "Achieve software engineering mastery with a specialization in React, Java and .Net Skills",
    },
    {
      icon: Database,
      name: "Data Analytics",
      description: "Acquire problem solving skills, with specialization in a domain: Banking, Telecoms, Finance, Manufacturing, etc.",
    },
    {
      icon: Brain,
      name: "AI & Machine Learning",
      description: "Acquire problem solving skills, with specialization in a domain: Banking, Telecoms, Finance, Manufacturing, etc.",
    },
    {
      icon: Monitor,
      name: "Software Engineering - Frontend",
      description: "For beginners who need intensive courses in specialized skills",
    },
  ];
  
  return (
    <section id="certification" className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-certifications">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-certifications-title">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-certifications-description">
            Validate your skillset with Univaciti certification courses. Specializations are in Cloud Engineering, 
            Cloud Solutions Architecture, Software Engineering, AI Solution Architecture & Engineering and Data Analytics.
          </p>
          <p className="text-primary font-medium mt-4" data-testid="text-certifications-instruction">
            Select a specialization to view the details.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {specializations.map((spec, index) => (
            <Card key={index} className="p-6 hover-elevate transition-all duration-300 cursor-pointer" data-testid={`card-specialization-${index}`}>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <spec.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2" data-testid={`text-specialization-name-${index}`}>{spec.name}</h3>
              <p className="text-sm text-muted-foreground mb-4" data-testid={`text-specialization-description-${index}`}>{spec.description}</p>
              <Button variant="outline" size="sm" className="w-full" data-testid={`button-specialization-more-${index}`}>
                More
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecruitersSection() {
  const { toast } = useToast();
  
  const handleRegister = () => {
    toast({
      title: "Coming Soon",
      description: "Recruiter registration will be available soon.",
    });
  };
  
  return (
    <section id="recruitment" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-recruiters">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-recruiters-title">
          Recruiters
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-recruiters-description">
          Join the growing list of recruiters, have access to the pool of exceptional Univaciti graduates, 
          get alerted by new additions to the pool. Track talents of interest, track skills of interest.
        </p>
        <Button size="lg" onClick={handleRegister} data-testid="button-recruiter-register">
          Register
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </section>
  );
}

function TESASection() {
  const menuItems = [
    "Admission",
    "Courses",
    "Labs",
    "Internship",
    "Time-Table",
    "Funding",
  ];
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-tesa">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="p-6" data-testid="card-tesa-nav">
              <h3 className="text-2xl font-bold mb-2" data-testid="text-tesa-title">TESA</h3>
              <p className="text-primary mb-6" data-testid="text-tesa-subtitle">Tech Skills Accelerator</p>
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <Button 
                    key={index} 
                    variant="ghost" 
                    className="w-full justify-start"
                    data-testid={`button-tesa-nav-${item.toLowerCase().replace('-', '')}`}
                  >
                    {item}
                  </Button>
                ))}
              </nav>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="p-8" data-testid="card-tesa-content">
              <h3 className="text-2xl font-bold mb-4" data-testid="text-tesa-content-title">About TESA</h3>
              <p className="text-muted-foreground mb-6" data-testid="text-tesa-content-description">
                For beginners who need intensive courses in specialized skills. This is a 12-week intensive programme, 
                with specializations in Cloud Engineering, Cloud Solutions Architecture, Software Engineering, 
                AI Solution Architecture & Engineering and Data Analytics.
              </p>
              <p className="text-primary font-medium mb-6" data-testid="text-tesa-content-instruction">
                Select a specialization to view the details.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {["Cloud Engineering", "Software Engineering - Backend", "Data Analytics", "AI & Machine Learning"].map((spec, index) => (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`card-tesa-spec-${index}`}>
                    <h4 className="font-semibold mb-2" data-testid={`text-tesa-spec-name-${index}`}>{spec}</h4>
                    <Button variant="outline" size="sm" data-testid={`button-tesa-spec-more-${index}`}>
                      More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-community">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-community-title">
            Community
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-community-description">
            Join a vibrant community of learners, mentors, and industry professionals. 
            Connect, collaborate, and grow together.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover-elevate" data-testid="card-community-connect">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <p className="text-sm text-muted-foreground">Network with peers and professionals in your field.</p>
          </Card>
          
          <Card className="p-6 text-center hover-elevate" data-testid="card-community-learn">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Learn Together</h3>
            <p className="text-sm text-muted-foreground">Join study groups and collaborative learning sessions.</p>
          </Card>
          
          <Card className="p-6 text-center hover-elevate" data-testid="card-community-grow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Grow</h3>
            <p className="text-sm text-muted-foreground">Access mentorship and career development resources.</p>
          </Card>
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
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Univaciti launches.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      joinWaitlist.mutate(email);
    }
  };
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-cta">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-primary p-8 sm:p-12 text-center overflow-hidden relative" data-testid="card-cta">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" data-testid="text-cta-title">
              Ready to transform your learning?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8" data-testid="text-cta-description">
              Join thousands of learners who are already experiencing the future of education. 
              Get early access and exclusive benefits.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" data-testid="form-waitlist-cta">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                data-testid="input-email-cta"
              />
              <Button 
                type="submit" 
                variant="secondary"
                disabled={joinWaitlist.isPending}
                data-testid="button-join-waitlist-cta"
              >
                {joinWaitlist.isPending ? "Joining..." : "Join Waitlist"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  const links = {
    Product: ["Programmes", "Certification", "Recruitment", "Community"],
    Company: ["About", "Careers", "Blog", "Press"],
    Resources: ["Documentation", "Help Center", "Contact"],
    Legal: ["Privacy", "Terms", "Cookie Policy"],
  };
  
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <UnivacitiLogo className="h-10 w-10 flex-shrink-0" testId="img-footer-logo" />
              <span className="text-xl font-bold" data-testid="text-footer-brand">Univaciti</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-tagline">
              Transform your learning journey with accelerated skills development.
            </p>
          </div>
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4" data-testid={`text-footer-category-${category.toLowerCase()}`}>{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors" data-testid={`link-footer-${item.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            2025 Univaciti. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="transition-colors" data-testid="link-footer-privacy-policy">Privacy Policy</a>
            <a href="#" className="transition-colors" data-testid="link-footer-terms-of-service">Terms of Service</a>
            <a href="#" className="transition-colors" data-testid="link-footer-cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ThreePillarsSection />
      <LearningProgrammeSection />
      <CertificationsSection />
      <RecruitersSection />
      <CommunitySection />
      <TESASection />
      <CTASection />
      <Footer />
    </div>
  );
}
