import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useTheme } from "@/components/theme-provider";
import logoUrl from "@assets/logo_1769023265723.png";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Play,
  Star,
  Globe,
  Zap,
  Target,
  Shield,
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
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
            <img src={logoUrl} alt="Univaciti" className="h-10 w-10" data-testid="img-logo" />
            <span className="text-xl font-bold text-foreground" data-testid="text-brand-name">Univaciti</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground transition-colors" data-testid="link-features">Features</a>
            <a href="#how-it-works" className="text-muted-foreground transition-colors" data-testid="link-how-it-works">How It Works</a>
            <a href="#testimonials" className="text-muted-foreground transition-colors" data-testid="link-testimonials">Testimonials</a>
            <a href="#pricing" className="text-muted-foreground transition-colors" data-testid="link-pricing">Pricing</a>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle testId="button-theme-toggle-desktop" />
            <Button variant="ghost" data-testid="button-login">Log In</Button>
            <Button data-testid="button-get-started">Get Started</Button>
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
            <a href="#features" className="block py-2 text-muted-foreground" data-testid="link-features-mobile">Features</a>
            <a href="#how-it-works" className="block py-2 text-muted-foreground" data-testid="link-how-it-works-mobile">How It Works</a>
            <a href="#testimonials" className="block py-2 text-muted-foreground" data-testid="link-testimonials-mobile">Testimonials</a>
            <a href="#pricing" className="block py-2 text-muted-foreground" data-testid="link-pricing-mobile">Pricing</a>
            <div className="pt-3 space-y-2">
              <Button variant="outline" className="w-full" data-testid="button-login-mobile">Log In</Button>
              <Button className="w-full" data-testid="button-get-started-mobile">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
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
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2" data-testid="badge-launch">
            <Sparkles className="h-4 w-4 mr-2" />
            <span data-testid="text-launch-badge">Launching Soon - Join 10,000+ Early Adopters</span>
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
            <span className="text-foreground">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10" data-testid="text-hero-description">
            Univaciti is the next-generation learning platform that combines AI-powered personalization, 
            world-class content, and a vibrant community to help you master any skill.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8" data-testid="form-waitlist-hero">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              data-testid="input-email-hero"
            />
            <Button type="submit" disabled={joinWaitlist.isPending} data-testid="button-join-waitlist">
              {joinWaitlist.isPending ? "Joining..." : "Join Waitlist"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground" data-testid="features-list-hero">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span data-testid="text-feature-free">Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span data-testid="text-feature-no-card">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span data-testid="text-feature-cancel">Cancel anytime</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl" data-testid="card-preview">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 sm:p-12">
              <div className="aspect-video bg-card rounded-lg flex items-center justify-center relative overflow-hidden border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground" data-testid="text-preview-cta">Watch Platform Preview</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "50K+", label: "Active Learners", icon: Users },
    { value: "500+", label: "Expert Courses", icon: BookOpen },
    { value: "95%", label: "Completion Rate", icon: Trophy },
    { value: "150+", label: "Countries", icon: Globe },
  ];
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border bg-muted/30" data-testid="section-stats">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-item-${index}`}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1" data-testid={`text-stat-value-${index}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Learning",
      description: "Our AI adapts to your learning style, pace, and goals to create a personalized curriculum that evolves with you.",
    },
    {
      icon: BookOpen,
      title: "World-Class Content",
      description: "Access courses created by industry leaders from top companies like Google, Meta, and Stanford University.",
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Join study groups, participate in discussions, and collaborate with learners from around the globe.",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set learning goals and track your progress with detailed analytics and milestone celebrations.",
    },
    {
      icon: Zap,
      title: "Interactive Labs",
      description: "Practice what you learn with hands-on coding environments, simulations, and real-world projects.",
    },
    {
      icon: Shield,
      title: "Verified Certificates",
      description: "Earn industry-recognized certificates that showcase your skills to potential employers.",
    },
  ];
  
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8" data-testid="section-features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-features">Features</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-features-title">
            Everything you need to <span className="text-primary">succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-features-description">
            Univaciti combines cutting-edge technology with proven learning methodologies 
            to deliver an unparalleled educational experience.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Tell us about your goals, interests, and current skill level. Our AI will use this to personalize your experience.",
      icon: Users,
    },
    {
      number: "02",
      title: "Get Your Learning Path",
      description: "Receive a customized curriculum designed specifically for you, with courses and projects tailored to your objectives.",
      icon: Target,
    },
    {
      number: "03",
      title: "Learn & Practice",
      description: "Engage with interactive content, complete hands-on projects, and get real-time feedback on your progress.",
      icon: BookOpen,
    },
    {
      number: "04",
      title: "Earn & Grow",
      description: "Complete courses to earn verified certificates and unlock new opportunities in your career.",
      icon: Trophy,
    },
  ];
  
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-how-it-works">How It Works</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-how-it-works-title">
            Start learning in <span className="text-primary">4 simple steps</span>
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-how-it-works-description">
            Our streamlined onboarding process gets you learning in minutes, not hours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-item-${index}`}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold" data-testid={`text-step-number-${index}`}>
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`text-step-title-${index}`}>{step.title}</h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-step-description-${index}`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Univaciti completely transformed how I approach learning. The AI recommendations are spot-on, and I've learned more in 3 months than I did in a year of self-study.",
      author: "Sarah Chen",
      role: "Software Engineer at Google",
      rating: 5,
    },
    {
      quote: "The community aspect is incredible. I've connected with mentors and peers who have accelerated my growth exponentially. This platform is a game-changer.",
      author: "Michael Rodriguez",
      role: "Product Manager at Meta",
      rating: 5,
    },
    {
      quote: "As someone who struggled with traditional online courses, Univaciti's personalized approach finally helped me complete a full learning path. Highly recommend!",
      author: "Emily Watson",
      role: "Data Scientist at Netflix",
      rating: 5,
    },
  ];
  
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-testimonials">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            Loved by learners <span className="text-primary">worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-testimonials-description">
            Join thousands of satisfied learners who have transformed their careers with Univaciti.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6" data-testid={`card-testimonial-${index}`}>
              <div className="flex gap-1 mb-4" data-testid={`rating-${index}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed" data-testid={`text-testimonial-quote-${index}`}>"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm" data-testid={`text-testimonial-initials-${index}`}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm" data-testid={`text-testimonial-author-${index}`}>{testimonial.author}</div>
                  <div className="text-muted-foreground text-xs" data-testid={`text-testimonial-role-${index}`}>{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for exploring and getting started",
      features: [
        "Access to 10 free courses",
        "Basic progress tracking",
        "Community forums access",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Best for serious learners and professionals",
      features: [
        "Unlimited course access",
        "AI-powered personalization",
        "Verified certificates",
        "Priority support",
        "Offline downloads",
        "Advanced analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per team",
      description: "For organizations and large teams",
      features: [
        "Everything in Pro",
        "Custom learning paths",
        "Team management",
        "SSO integration",
        "Dedicated success manager",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];
  
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-pricing">Pricing</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-pricing-title">
            Simple, transparent <span className="text-primary">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-pricing-description">
            Choose the plan that fits your learning goals. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-6 relative ${plan.popular ? 'border-primary ring-1 ring-primary' : ''}`}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" data-testid="badge-most-popular">
                  Most Popular
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2" data-testid={`text-plan-name-${plan.name.toLowerCase()}`}>{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold" data-testid={`text-plan-price-${plan.name.toLowerCase()}`}>{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2" data-testid={`text-plan-description-${plan.name.toLowerCase()}`}>{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" data-testid={`text-plan-feature-${plan.name.toLowerCase()}-${i}`}>
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
                data-testid={`button-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Card>
          ))}
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
    <section className="py-24 px-4 sm:px-6 lg:px-8" data-testid="section-cta">
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
    Product: ["Features", "Pricing", "Courses", "Enterprise"],
    Company: ["About", "Careers", "Blog", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
    Legal: ["Privacy", "Terms", "Cookie Policy"],
  };
  
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoUrl} alt="Univaciti" className="h-10 w-10" data-testid="img-footer-logo" />
              <span className="text-xl font-bold" data-testid="text-footer-brand">Univaciti</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-tagline">
              Transform your learning journey with AI-powered education.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="h-9 w-9" data-testid="button-social-twitter">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9" data-testid="button-social-linkedin">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9" data-testid="button-social-github">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </Button>
            </div>
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
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
