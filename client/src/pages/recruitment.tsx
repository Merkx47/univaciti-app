import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import logoUrl from "@assets/logo_1769031259580.png";

const THEME_PRIMARY = "#1E9AD6";

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
    <div className="min-h-screen bg-background">
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoUrl} alt="Univaciti" className="h-9 w-9" />
              <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>Univaciti</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm">Register</Button>
              <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm">Sign in</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-light mb-6" style={{ color: THEME_PRIMARY }}>
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
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <h3 className="font-semibold mb-2">Access Certified Talent</h3>
                <p className="text-sm text-foreground/70">Browse our pool of certified professionals with verified skills.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <h3 className="font-semibold mb-2">Skills-Based Matching</h3>
                <p className="text-sm text-foreground/70">Filter candidates by specific certifications and skill sets.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <h3 className="font-semibold mb-2">Instant Notifications</h3>
                <p className="text-sm text-foreground/70">Get notified when new talent matching your criteria becomes available.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border border-border bg-card">
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
