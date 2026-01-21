import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ChevronDown, ChevronUp, Building2, Users, Briefcase, Award, DollarSign, HandCoins, Target, TrendingUp } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";
import { 
  THEME_PRIMARY, 
  programmes, 
  specializations, 
  tabs, 
  CalendarTimetable, 
  CoursesContent, 
  StructureContent,
  WorldMapBackground
} from "@/components/programme-shared";

const cohorts = [
  { name: "Q1 Training", startDate: "2026-01-05", endDate: "2026-03-31", color: "#1E9AD6" },
  { name: "Q2 Training", startDate: "2026-04-01", endDate: "2026-06-30", color: "#3AAFE6" },
  { name: "Q3 Training", startDate: "2026-07-01", endDate: "2026-09-30", color: "#1E9AD6" },
  { name: "Q4 Training", startDate: "2026-10-01", endDate: "2026-12-31", color: "#3AAFE6" },
];

export default function NestPage() {
  const [, setLocation] = useLocation();
  const [selectedProgramme, setSelectedProgramme] = useState("nest");
  const [selectedSpecialization, setSelectedSpecialization] = useState(specializations[0].name);
  const [activeTab, setActiveTab] = useState("home");
  const [programmeDropdownOpen, setProgrammeDropdownOpen] = useState(false);
  const [specDropdownOpen, setSpecDropdownOpen] = useState(false);

  const handleProgrammeChange = (programmeId: string) => {
    setSelectedProgramme(programmeId);
    setProgrammeDropdownOpen(false);
    if (programmeId !== "nest") {
      setLocation(`/programmes/${programmeId}`);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Building2 className="w-12 h-12 flex-shrink-0" style={{ color: THEME_PRIMARY }} />
              <div>
                <h2 className="text-xl font-medium mb-2" data-testid="text-tab-title">Welcome to NEST</h2>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>NEST (New Employee Skills Training)</strong> is our corporate training programme tailored for organizations seeking rapid but flexible curriculum for employees in key tech skills. We provide customized training solutions that fit your organization's specific technology needs and business objectives.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <Target className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Tailored Curriculum</h3>
                <p className="text-sm text-foreground/70">Custom-designed courses aligned with your organization's tech stack and goals.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <TrendingUp className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Measurable ROI</h3>
                <p className="text-sm text-foreground/70">Track employee progress and measure training impact on productivity.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <Users className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Team Training</h3>
                <p className="text-sm text-foreground/70">Scale training across departments with consistent quality.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <Award className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Industry Certification</h3>
                <p className="text-sm text-foreground/70">Employees earn recognized certifications upon completion.</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>Training Delivery Options</h3>
              <div className="flex gap-4">
                <div className="flex-1 p-3 rounded-lg border border-border text-center">
                  <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>On-Site</span>
                  <p className="text-sm text-foreground/70">Training at your location</p>
                </div>
                <div className="flex-1 p-3 rounded-lg border border-border text-center">
                  <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>Remote</span>
                  <p className="text-sm text-foreground/70">Virtual instructor-led</p>
                </div>
                <div className="flex-1 p-3 rounded-lg border border-border text-center">
                  <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>Hybrid</span>
                  <p className="text-sm text-foreground/70">Best of both worlds</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "courses":
        return (
          <div>
            <h2 className="text-lg font-medium mb-4" data-testid="text-tab-title">Courses - {selectedSpecialization}</h2>
            <CoursesContent specialization={selectedSpecialization} />
          </div>
        );
      case "structure":
        return (
          <div>
            <h2 className="text-lg font-medium mb-4" data-testid="text-tab-title">Programme Structure</h2>
            <StructureContent programme="nest" />
          </div>
        );
      case "timetable":
        return <CalendarTimetable cohorts={cohorts} title="NEST 2026 Corporate Training Calendar" />;
      case "internship":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Briefcase className="w-10 h-10 flex-shrink-0" style={{ color: THEME_PRIMARY }} />
              <div>
                <h2 className="text-lg font-medium mb-2" data-testid="text-tab-title">Practical Application</h2>
                <p className="text-foreground/80">NEST participants apply their learning directly within their organizations with our project mentorship support.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border">
                <Target className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Real Projects</h3>
                <p className="text-sm text-foreground/70">Apply skills to actual company projects, not hypothetical scenarios.</p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <Users className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Mentorship</h3>
                <p className="text-sm text-foreground/70">Ongoing support from industry experts throughout training.</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>Application Benefits</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Immediate value to your organization</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Portfolio of completed work projects</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Cross-company collaboration opportunities</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Performance tracking and reporting</li>
              </ul>
            </div>
          </div>
        );
      case "fees":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <DollarSign className="w-10 h-10 flex-shrink-0" style={{ color: THEME_PRIMARY }} />
              <div>
                <h2 className="text-lg font-medium mb-2" data-testid="text-tab-title">Corporate Pricing</h2>
                <p className="text-foreground/80">Volume-based pricing designed for organizations of all sizes.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-lg border border-border">
                <h3 className="font-medium mb-3">Individual</h3>
                <div className="text-2xl font-bold mb-1" style={{ color: THEME_PRIMARY }}>$1,500</div>
                <span className="text-sm text-foreground/70">per employee</span>
              </div>
              <div className="p-5 rounded-lg border border-border">
                <h3 className="font-medium mb-3">Team (5-10)</h3>
                <div className="text-2xl font-bold mb-1" style={{ color: THEME_PRIMARY }}>$1,200</div>
                <span className="text-sm text-foreground/70">per employee (20% off)</span>
              </div>
              <div className="p-5 rounded-lg border-2" style={{ borderColor: THEME_PRIMARY }}>
                <h3 className="font-medium mb-3">Department (11-25)</h3>
                <div className="text-2xl font-bold mb-1" style={{ color: THEME_PRIMARY }}>$1,000</div>
                <span className="text-sm text-foreground/70">per employee (33% off)</span>
              </div>
              <div className="p-5 rounded-lg border border-border bg-muted/20">
                <h3 className="font-medium mb-3">Enterprise (26+)</h3>
                <div className="text-xl font-bold mb-1" style={{ color: THEME_PRIMARY }}>Custom</div>
                <span className="text-sm text-foreground/70">Contact for pricing</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>All Plans Include</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Full course materials</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Industry certification</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Dedicated account manager</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Progress reporting</div>
              </div>
            </div>
          </div>
        );
      case "funding":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <HandCoins className="w-10 h-10 flex-shrink-0" style={{ color: THEME_PRIMARY }} />
              <div>
                <h2 className="text-lg font-medium mb-2" data-testid="text-tab-title">Funding Options</h2>
                <p className="text-foreground/80">Flexible payment and funding options for corporate training budgets.</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Annual Training Contracts</h3>
                    <p className="text-sm text-foreground/70">Commit to yearly training for additional discounts</p>
                  </div>
                  <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>15% OFF</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Quarterly Billing</h3>
                    <p className="text-sm text-foreground/70">Spread payments across quarters</p>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-muted">Flexible</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Skills Development Grants</h3>
                    <p className="text-sm text-foreground/70">We help you apply for government grants</p>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-800">Assistance</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">ROI Reporting</h3>
                    <p className="text-sm text-foreground/70">Measure training impact on productivity</p>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-muted">Included</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <WorldMapBackground />
      <nav className="bg-background border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoUrl} alt="Univaciti" className="h-9 w-9" />
              <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>Univaciti</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm" data-testid="button-register">
                Register
              </Button>
              <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm" data-testid="button-sign-in">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <h1 className="text-2xl font-light mb-6" style={{ color: THEME_PRIMARY }} data-testid="text-page-title">
          Learning Programme
        </h1>

        <div className="space-y-3 mb-6">
          <div className="flex items-center border-2 border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
            <div className="w-48 px-4 py-3 bg-muted/50 text-sm font-medium border-r-2 border-gray-300 dark:border-gray-600">
              Select programme:
            </div>
            <div className="flex-1 relative">
              <button
                type="button"
                className="w-full px-4 py-3 text-left flex items-center justify-between text-sm bg-background hover:bg-muted/30 cursor-pointer"
                onClick={() => { setProgrammeDropdownOpen(!programmeDropdownOpen); setSpecDropdownOpen(false); }}
                data-testid="dropdown-programme"
              >
                <span className="tracking-widest font-medium">
                  {programmes.find(p => p.id === selectedProgramme)?.name.split('').join(' ')}
                </span>
                {programmeDropdownOpen ? (
                  <ChevronUp className="w-4 h-4" style={{ color: THEME_PRIMARY }} />
                ) : (
                  <ChevronDown className="w-4 h-4" style={{ color: THEME_PRIMARY }} />
                )}
              </button>
              {programmeDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-background border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50 mt-1">
                  {programmes.map((prog) => (
                    <button
                      type="button"
                      key={prog.id}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-muted/50 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${
                        selectedProgramme === prog.id ? 'bg-muted/50 font-medium' : ''
                      }`}
                      onClick={() => handleProgrammeChange(prog.id)}
                    >
                      {prog.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center border-2 border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
            <div className="w-48 px-4 py-3 bg-muted/50 text-sm font-medium border-r-2 border-gray-300 dark:border-gray-600">
              Specialization:
            </div>
            <div className="flex-1 relative">
              <button
                type="button"
                className="w-full px-4 py-3 text-left flex items-center justify-between text-sm bg-background hover:bg-muted/30 cursor-pointer"
                onClick={() => { setSpecDropdownOpen(!specDropdownOpen); setProgrammeDropdownOpen(false); }}
                data-testid="dropdown-specialization"
              >
                <span>{selectedSpecialization}</span>
                {specDropdownOpen ? (
                  <ChevronUp className="w-4 h-4" style={{ color: THEME_PRIMARY }} />
                ) : (
                  <ChevronDown className="w-4 h-4" style={{ color: THEME_PRIMARY }} />
                )}
              </button>
              {specDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-background border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50 mt-1">
                  {specializations.map((spec) => (
                    <button
                      type="button"
                      key={spec.id}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-muted/50 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${
                        selectedSpecialization === spec.name ? 'bg-muted/50 font-medium' : ''
                      }`}
                      onClick={() => { setSelectedSpecialization(spec.name); setSpecDropdownOpen(false); }}
                    >
                      {spec.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-0 border border-border rounded-lg overflow-hidden min-h-[500px]">
          <div className="w-48 border-r border-border bg-background flex flex-col">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-3 text-left text-sm font-medium border-l-4 transition-colors ${
                  activeTab === tab.id
                    ? "border-l-[#1E9AD6] bg-[#1E9AD6] text-white"
                    : "border-l-transparent hover:bg-muted/50"
                }`}
                onClick={() => setActiveTab(tab.id)}
                data-testid={`tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 p-6 bg-muted/10 overflow-auto">
            <div className="border border-border rounded-lg bg-background p-6 min-h-[450px]">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
