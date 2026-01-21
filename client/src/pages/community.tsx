import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import logoUrl from "@assets/logo_1769031259580.png";

const THEME_PRIMARY = "#1E9AD6";

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
          Community
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-xl border border-border bg-card">
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
          
          <div className="p-6 rounded-xl border border-border bg-card">
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
          className="rounded-xl p-8 text-center border border-white/20"
          style={{ backgroundColor: THEME_PRIMARY }}
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
