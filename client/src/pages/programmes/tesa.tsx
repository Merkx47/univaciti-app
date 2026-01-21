import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ChevronDown, ChevronUp, GraduationCap, Users, Briefcase, Award, DollarSign, HandCoins } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";
import { 
  THEME_PRIMARY, 
  programmes, 
  specializations, 
  tabs, 
  CalendarTimetable, 
  CoursesContent, 
  StructureContent,
  WorldMapBackground,
  cloudProviders
} from "@/components/programme-shared";

const cohorts = [
  { name: "January Cohort", startDate: "2026-01-15", endDate: "2026-03-10", color: "#1E9AD6" },
  { name: "March Cohort", startDate: "2026-03-15", endDate: "2026-05-10", color: "#3AAFE6" },
  { name: "July Cohort", startDate: "2026-07-15", endDate: "2026-09-10", color: "#1E9AD6" },
  { name: "September Cohort", startDate: "2026-09-15", endDate: "2026-11-10", color: "#3AAFE6" },
];

export default function TesaPage() {
  const [, setLocation] = useLocation();
  const [selectedProgramme, setSelectedProgramme] = useState("tesa");
  const [selectedSpecialization, setSelectedSpecialization] = useState(specializations[0].name);
  const [activeTab, setActiveTab] = useState("home");
  const [programmeDropdownOpen, setProgrammeDropdownOpen] = useState(false);
  const [specDropdownOpen, setSpecDropdownOpen] = useState(false);

  const handleProgrammeChange = (programmeId: string) => {
    setSelectedProgramme(programmeId);
    setProgrammeDropdownOpen(false);
    if (programmeId !== "tesa") {
      setLocation(`/programmes/${programmeId}`);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-12 h-12 flex-shrink-0" style={{ color: THEME_PRIMARY }} />
              <div>
                <h2 className="text-xl font-medium mb-2" data-testid="text-tab-title">Welcome to TESA</h2>
                <p className="text-foreground/80 leading-relaxed">
                  The <strong>Tech Skills Accelerator (TESA)</strong> is an intensive 8-week specialization programme designed to transform passionate learners into world-class tech professionals. TESA closes the tech talent gap by providing hands-on, industry-focused training that prepares you for real-world challenges.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <h3 className="font-medium mb-2" style={{ color: THEME_PRIMARY }}>What is TESA?</h3>
                <p className="text-sm text-foreground/70">8-week intensive specialization courses, curated for top quality intakes. Transform from beginner to job-ready professional.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <h3 className="font-medium mb-2" style={{ color: THEME_PRIMARY }}>Quality Experience</h3>
                <p className="text-sm text-foreground/70">Top quality internship and practical experience through various mission-critical customer projects.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <h3 className="font-medium mb-2" style={{ color: THEME_PRIMARY }}>Selection Process</h3>
                <p className="text-sm text-foreground/70">Two rounds of proctored assessment in Numeracy and basic computing skills, followed by an interview.</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-muted/20">
                <h3 className="font-medium mb-2" style={{ color: THEME_PRIMARY }}>Job Opportunity</h3>
                <p className="text-sm text-foreground/70">Near 100% employment within 3 months of course completion. We connect students directly to employers.</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>Available Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-sm text-white" style={{ backgroundColor: THEME_PRIMARY }}>
                    {spec.name}
                  </span>
                ))}
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
            <StructureContent programme="tesa" />
          </div>
        );
      case "timetable":
        return <CalendarTimetable cohorts={cohorts} title="TESA 2026 Cohort Schedule" />;
      case "internship":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Briefcase className="w-10 h-10 flex-shrink-0" style={{ color: THEME_PRIMARY }} />
              <div>
                <h2 className="text-lg font-medium mb-2" data-testid="text-tab-title">Internship & Practical Experience</h2>
                <p className="text-foreground/80">Upon successful completion of the TESA programme, graduates are connected with partner companies for internship opportunities.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border">
                <Users className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Industry Partners</h3>
                <p className="text-sm text-foreground/70">Access to 50+ partner companies across fintech, banking, telecom, and tech sectors.</p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <Award className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">100% Placement</h3>
                <p className="text-sm text-foreground/70">Near 100% employment rate within 3 months of programme completion.</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>What You'll Experience</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Real-world project experience with actual clients</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Mentorship from senior industry professionals</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Portfolio-building projects for your career</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Networking opportunities with potential employers</li>
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
                <h2 className="text-lg font-medium mb-2" data-testid="text-tab-title">Programme Fees</h2>
                <p className="text-foreground/80">Invest in your future with TESA's comprehensive training programme.</p>
              </div>
            </div>
            <div className="p-6 rounded-lg border-2 border-dashed" style={{ borderColor: THEME_PRIMARY }}>
              <div className="text-center">
                <span className="text-sm text-foreground/60 line-through">Full Price: $2,000</span>
                <div className="text-3xl font-bold mt-1" style={{ color: THEME_PRIMARY }}>$600</div>
                <span className="text-sm text-foreground/70">With 70% Qucoon Scholarship</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>What's Included</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Full course materials</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Hands-on projects</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Certification exam fees</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Career placement support</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Alumni network access</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Mentorship programme</div>
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
                <h2 className="text-lg font-medium mb-2" data-testid="text-tab-title">Funding & Scholarships</h2>
                <p className="text-foreground/80">Multiple funding options available to make TESA accessible for everyone.</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="p-4 rounded-lg border border-border bg-gradient-to-r from-muted/30 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">70% Qucoon Scholarship</h3>
                    <p className="text-sm text-foreground/70">Available for all qualifying candidates</p>
                  </div>
                  <span className="text-xl font-bold" style={{ color: THEME_PRIMARY }}>70% OFF</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">100% Full Scholarship</h3>
                    <p className="text-sm text-foreground/70">For exceptional candidates demonstrating need and merit</p>
                  </div>
                  <span className="text-xl font-bold text-green-500">FREE</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Payment Plans</h3>
                    <p className="text-sm text-foreground/70">3-month installment options available</p>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-muted">Flexible</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Early Bird Discount</h3>
                    <p className="text-sm text-foreground/70">Register early for additional savings</p>
                  </div>
                  <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>10% OFF</span>
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
