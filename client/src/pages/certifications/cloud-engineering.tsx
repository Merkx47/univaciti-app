import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SiAmazon, SiGooglecloud, SiHuawei } from "react-icons/si";
import logoUrl from "@assets/logo_1769031259580.png";
import worldMapImg from "@assets/world_map.png";
import azureLogo from "@assets/image_1769038035704.png";

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

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 52C14 52 10 45 10 38C10 31 15 25 22 25C23 16 32 10 42 10C52 10 60 17 62 26C69 27 74 33 74 41C74 49 68 55 60 55H22"/>
      <path d="M32 40L40 48L52 36"/>
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
    <div className="min-h-screen bg-background relative">
      <WorldMapWatermark />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoUrl} alt="Univaciti" className="h-9 w-9 rounded-full" />
              <span className="text-lg font-bold text-foreground">Univaciti</span>
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div 
            className="rounded-xl p-8 sm:p-12 mb-12 border border-white/20"
            style={{ backgroundColor: THEME_PRIMARY }}
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
                    className="rounded-lg p-3 bg-muted/30 border-2 border-gray-400 dark:border-slate-500 flex items-center justify-between"
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
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: THEME_PRIMARY }}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg p-6 bg-muted/30 border-2 border-gray-400 dark:border-slate-500 mb-8">
            <h2 className="text-xl font-semibold mb-4">Cloud Platforms Covered</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border-2 border-gray-400 dark:border-slate-500">
                <SiAmazon className="w-6 h-6 text-[#FF9900]" />
                <span className="text-sm font-medium">AWS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border-2 border-gray-400 dark:border-slate-500">
                <img src={azureLogo} alt="Azure" className="w-6 h-6 object-contain" />
                <span className="text-sm font-medium">Microsoft Azure</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border-2 border-gray-400 dark:border-slate-500">
                <SiGooglecloud className="w-5 h-5 text-[#4285F4]" />
                <span className="text-sm font-medium">Google Cloud</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border-2 border-gray-400 dark:border-slate-500">
                <SiHuawei className="w-5 h-5 text-[#CF0A2C]" />
                <span className="text-sm font-medium">Huawei Cloud</span>
              </div>
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
