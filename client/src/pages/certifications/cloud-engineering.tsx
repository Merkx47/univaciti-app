import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const CARD_COLOR = "#1a6985";

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 50C12 50 8 44 8 38C8 32 12 26 20 26C20 18 28 12 38 12C48 12 56 18 58 26C66 26 72 32 72 40C72 48 66 54 58 54H20"/>
      <path d="M30 42L38 50L50 38"/>
    </svg>
  );
}

const modules = [
  { name: "Cloud Fundamentals", hours: "10 Hours" },
  { name: "Cloud Services", hours: "40 Hours" },
  { name: "Cloud Solution Architecture", hours: "20 Hours" },
  { name: "Infrastructure As Code", hours: "10 Hours" },
  { name: "DevOps & DevSecOps", hours: "10 Hours" },
  { name: "Advanced Security", hours: "20 Hours" },
  { name: "Infrastructure Operations", hours: "40 Hours" },
];

const skills = [
  "Cloud Services: Understanding compute, storage, networking, and managed services across cloud platforms.",
  "Solution Architecture: Designing scalable, resilient, and cost-effective cloud solutions.",
  "Security: Implementing identity management, access controls, encryption, and compliance.",
  "Automation: Using Infrastructure as Code tools to provision and manage cloud resources.",
  "InOps: Managing, monitoring, scaling, and maintaining reliable cloud infrastructure.",
  "DevOps Practices: Applying CI/CD pipelines, containerization, and collaboration workflows.",
];

export default function CloudEngineeringPage() {
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
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <CloudIcon className="w-20 h-20 text-white" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Cloud Engineering</h1>
                <p className="text-lg text-white/90">& Solutions Architecture</p>
              </div>
            </div>
            <p className="text-white/85 text-base leading-relaxed">
              The Cloud Engineering Specialization equips learners with practical skills to design, 
              deploy, secure, and manage scalable cloud infrastructure. It focuses on hands-on 
              experience with cloud services (AWS, Azure, Huawei, GCP), automation, DevOps practices, 
              and real-world projects to prepare learners for in-demand cloud engineering roles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Course Modules</h2>
              <div className="space-y-2">
                {modules.map((module, index) => (
                  <div 
                    key={index}
                    className="rounded-lg p-3 bg-muted/30 flex items-center justify-between"
                  >
                    <span className="font-medium text-sm">{module.name}</span>
                    <span className="text-xs text-foreground/60">{module.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Skills You'll Learn</h2>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="text-sm text-foreground/80 leading-relaxed">
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: CARD_COLOR }}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-muted/30 mb-8">
            <h2 className="text-xl font-semibold mb-4">Cloud Platforms Covered</h2>
            <div className="flex flex-wrap gap-3">
              {["Amazon Web Services (AWS)", "Microsoft Azure", "Huawei Cloud", "Google Cloud Platform"].map((platform) => (
                <span key={platform} className="px-3 py-1 rounded-full text-sm bg-background border border-border">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg">Get Certified</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
