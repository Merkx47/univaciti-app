import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
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

export default function CommunityPage() {
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
          Community
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-xl border-2 border-gray-400 dark:border-slate-500 glass-card hover-lift shine-effect fade-in-up stagger-1">
            <h2 className="text-xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-foreground/70 mb-4">
              Connect with fellow learners, alumni, and industry professionals. 
              Share knowledge, find mentors, and grow your network.
            </p>
            <ul className="space-y-2 text-sm text-foreground/80 mb-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME_PRIMARY }}></span>
                Peer-to-peer learning groups
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME_PRIMARY }}></span>
                Industry mentorship programs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME_PRIMARY }}></span>
                Exclusive webinars and events
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME_PRIMARY }}></span>
                Job referral network
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl border-2 border-gray-400 dark:border-slate-500 glass-card hover-lift shine-effect fade-in-up stagger-2">
            <h2 className="text-xl font-semibold mb-4">Alumni Network</h2>
            <p className="text-foreground/70 mb-4">
              Our alumni are working at top companies around the world. 
              Join the network and benefit from their experience and connections.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-2xl font-bold" style={{ color: THEME_PRIMARY }}>500+</div>
                <div className="text-xs text-foreground/60">Graduates</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-2xl font-bold" style={{ color: THEME_PRIMARY }}>95%</div>
                <div className="text-xs text-foreground/60">Employed</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="text-2xl font-bold" style={{ color: THEME_PRIMARY }}>50+</div>
                <div className="text-xs text-foreground/60">Companies</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl p-8 text-center border border-white/20 animated-gradient-bg fade-in-up stagger-3"
        >
          <h2 className="text-2xl font-light text-white mb-3">
            Ready to join the Univaciti community?
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto mb-6">
            Sign up to get notified about community events, new programmes, and exclusive opportunities.
          </p>
          <form 
            onSubmit={(e) => { e.preventDefault(); email && joinWaitlist.mutate(email); }} 
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60"
              data-testid="input-email"
            />
            <Button type="submit" variant="secondary" disabled={joinWaitlist.isPending} data-testid="button-join">
              {joinWaitlist.isPending ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
