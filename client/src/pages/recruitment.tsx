import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
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

export default function RecruitmentPage() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      toast({ title: "Registration submitted!", description: "We'll be in touch shortly." });
      setEmail("");
      setCompany("");
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <WorldMapWatermark />
      <nav className="frosted-nav border-b border-border/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-back-home">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <img src={logoUrl} alt="Univaciti" className="h-9 w-9 rounded-full" />
                <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>Univaciti</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <h1 className="text-3xl font-light mb-6 gradient-text text-glow fade-in-up">
          Recruiters
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Join the growing list of recruiters and have access to the pool of exceptional 
              Univaciti graduates. Get alerted by new additions to the pool. Track talents 
              of interest, track skills of interest.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500 glass-card hover-lift fade-in-up stagger-1">
                <h3 className="font-semibold mb-2">Access Certified Talent</h3>
                <p className="text-sm text-foreground/70">Browse our pool of certified professionals with verified skills.</p>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500 glass-card hover-lift fade-in-up stagger-2">
                <h3 className="font-semibold mb-2">Skills-Based Matching</h3>
                <p className="text-sm text-foreground/70">Filter candidates by specific certifications and skill sets.</p>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500 glass-card hover-lift fade-in-up stagger-3">
                <h3 className="font-semibold mb-2">Instant Notifications</h3>
                <p className="text-sm text-foreground/70">Get notified when new talent matching your criteria becomes available.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border border-border glass-card glow-card shine-effect fade-in-up stagger-4">
            <h2 className="text-xl font-semibold mb-4">Register as a Recruiter</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Company Name</label>
                <Input 
                  value={company} 
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your company name"
                  data-testid="input-company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <Input 
                  type="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                style={{ backgroundColor: THEME_PRIMARY }}
                data-testid="button-submit"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
