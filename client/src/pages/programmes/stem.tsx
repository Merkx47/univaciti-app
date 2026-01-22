import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ChevronDown, ChevronUp, GraduationCap, Users, Briefcase, Award, DollarSign, HandCoins, BookOpen, Rocket, Star, ArrowLeft } from "lucide-react";
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
  { name: "Spring Term", startDate: "2026-01-10", endDate: "2026-04-05", color: "#1E9AD6" },
  { name: "Summer Camp", startDate: "2026-06-15", endDate: "2026-08-15", color: "#3AAFE6" },
  { name: "Fall Term", startDate: "2026-09-05", endDate: "2026-12-15", color: "#1E9AD6" },
];

export default function StemPage() {
  const [, setLocation] = useLocation();
  const [selectedProgramme, setSelectedProgramme] = useState("stem");
  const [selectedSpecialization, setSelectedSpecialization] = useState(specializations[0].name);
  const [activeTab, setActiveTab] = useState("home");
  const [programmeDropdownOpen, setProgrammeDropdownOpen] = useState(false);
  const [specDropdownOpen, setSpecDropdownOpen] = useState(false);

  const handleProgrammeChange = (programmeId: string) => {
    setSelectedProgramme(programmeId);
    setProgrammeDropdownOpen(false);
    if (programmeId !== "stem") {
      setLocation(`/programmes/${programmeId}`);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <BookOpen className="w-12 h-12 flex-shrink-0" style={{ color: THEME_PRIMARY }} />
              <div>
                <h2 className="text-xl font-medium mb-2" data-testid="text-tab-title">Welcome to STEM</h2>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Science, Technology, Engineering and Mathematics (STEM)</strong> programme is designed specifically for young learners aged 10-18. We provide a strong foundation in technology through interactive, age-appropriate courses that spark curiosity and prepare students for future careers in the digital economy.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500 bg-muted/20 text-center">
                <Rocket className="w-10 h-10 mx-auto mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Discovery Learning</h3>
                <p className="text-sm text-foreground/70">Learn through exploration and hands-on experiments</p>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500 bg-muted/20 text-center">
                <Star className="w-10 h-10 mx-auto mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Age-Appropriate</h3>
                <p className="text-sm text-foreground/70">Curriculum designed for young minds</p>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500 bg-muted/20 text-center">
                <Award className="w-10 h-10 mx-auto mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Certification</h3>
                <p className="text-sm text-foreground/70">Earn recognized credentials</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>Age Groups</h3>
              <div className="flex gap-4">
                <div className="flex-1 p-3 rounded-lg bg-muted/30 text-center">
                  <span className="text-2xl font-bold" style={{ color: THEME_PRIMARY }}>10-13</span>
                  <p className="text-sm text-foreground/70">Junior Explorers</p>
                </div>
                <div className="flex-1 p-3 rounded-lg bg-muted/30 text-center">
                  <span className="text-2xl font-bold" style={{ color: THEME_PRIMARY }}>14-16</span>
                  <p className="text-sm text-foreground/70">Teen Innovators</p>
                </div>
                <div className="flex-1 p-3 rounded-lg bg-muted/30 text-center">
                  <span className="text-2xl font-bold" style={{ color: THEME_PRIMARY }}>17-18</span>
                  <p className="text-sm text-foreground/70">Future Professionals</p>
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
            <StructureContent programme="stem" />
          </div>
        );
      case "timetable":
        return <CalendarTimetable cohorts={cohorts} title="STEM 2026 Term Schedule" />;
      case "internship":
        return (
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Briefcase className="w-10 h-10 flex-shrink-0" style={{ color: THEME_PRIMARY }} />
              <div>
                <h2 className="text-lg font-medium mb-2" data-testid="text-tab-title">Mentorship & Experience</h2>
                <p className="text-foreground/80">STEM students have opportunities to learn from industry professionals through our mentorship programme and summer internships.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500">
                <Users className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Industry Mentors</h3>
                <p className="text-sm text-foreground/70">Connect with professionals who guide your learning journey.</p>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500">
                <Rocket className="w-8 h-8 mb-2" style={{ color: THEME_PRIMARY }} />
                <h3 className="font-medium mb-1">Summer Internships</h3>
                <p className="text-sm text-foreground/70">For advanced students (16+), explore real tech environments.</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>Learning Experiences</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Tech company visits and tours</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Guest lectures from industry experts</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Hackathons and coding competitions</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: THEME_PRIMARY }} />Project showcases and exhibitions</li>
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
                <p className="text-foreground/80">Affordable term-based pricing for quality STEM education.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border-2" style={{ borderColor: THEME_PRIMARY }}>
                <div className="text-center">
                  <h3 className="font-medium mb-2">Per Term</h3>
                  <div className="text-3xl font-bold" style={{ color: THEME_PRIMARY }}>$500</div>
                  <span className="text-sm text-foreground/70">12 weeks of learning</span>
                </div>
              </div>
              <div className="p-6 rounded-lg border-2 border-green-500">
                <div className="text-center">
                  <h3 className="font-medium mb-2">Summer Camp</h3>
                  <div className="text-3xl font-bold text-green-500">$800</div>
                  <span className="text-sm text-foreground/70">8 weeks intensive</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>What's Included</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> All course materials</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Project kits & supplies</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Certificate of completion</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Online learning platform</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Parent progress reports</div>
                <div className="flex items-center gap-2 p-2 rounded bg-muted/30"><span className="text-green-500">✓</span> Student support</div>
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
                <h2 className="text-lg font-medium mb-2" data-testid="text-tab-title">Funding & Discounts</h2>
                <p className="text-foreground/80">We believe every child deserves access to quality STEM education.</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Merit Scholarships</h3>
                    <p className="text-sm text-foreground/70">For outstanding academic performers</p>
                  </div>
                  <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>Up to 50%</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Sibling Discount</h3>
                    <p className="text-sm text-foreground/70">15% off for each additional child</p>
                  </div>
                  <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>15% OFF</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Early Registration</h3>
                    <p className="text-sm text-foreground/70">Register 30 days before term starts</p>
                  </div>
                  <span className="text-lg font-bold" style={{ color: THEME_PRIMARY }}>10% OFF</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Financial Aid</h3>
                    <p className="text-sm text-foreground/70">Need-based assistance for qualifying families</p>
                  </div>
                  <span className="text-sm px-3 py-1 rounded-full bg-muted">Available</span>
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
      <nav className="frosted-nav border-b border-border relative z-10">
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
                <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm" data-testid="button-register">
                  Register
                </Button>
              </Link>
              <Link href="/login">
                <Button style={{ backgroundColor: THEME_PRIMARY }} size="sm" data-testid="button-sign-in">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <h1 className="text-2xl font-light mb-6 gradient-text text-glow" data-testid="text-page-title">
          Learning Programme
        </h1>

        <div className="space-y-3 mb-6">
          <div className="flex items-center border-2 border-gray-400 dark:border-slate-500 rounded-md">
            <div className="w-48 px-4 py-3 bg-muted/50 text-sm font-medium border-r-2 border-gray-400 dark:border-slate-500 rounded-l-md">
              Select programme:
            </div>
            <div className="flex-1 relative">
              <button
                type="button"
                className="w-full px-4 py-3 text-left flex items-center justify-between text-sm bg-background hover:bg-muted/30 cursor-pointer rounded-r-md"
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
                <div className="absolute top-full left-0 right-0 bg-background border-2 border-gray-400 dark:border-slate-500 rounded-md shadow-lg z-50 mt-1">
                  {programmes.map((prog) => (
                    <button
                      type="button"
                      key={prog.id}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-muted/50 border-b border-gray-400 dark:border-slate-600 last:border-b-0 ${
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

          <div className="flex items-center border-2 border-gray-400 dark:border-slate-500 rounded-md">
            <div className="w-48 px-4 py-3 bg-muted/50 text-sm font-medium border-r-2 border-gray-400 dark:border-slate-500 rounded-l-md">
              Specialization:
            </div>
            <div className="flex-1 relative">
              <button
                type="button"
                className="w-full px-4 py-3 text-left flex items-center justify-between text-sm bg-background hover:bg-muted/30 cursor-pointer rounded-r-md"
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
                <div className="absolute top-full left-0 right-0 bg-background border-2 border-gray-400 dark:border-slate-500 rounded-md shadow-lg z-50 mt-1">
                  {specializations.map((spec) => (
                    <button
                      type="button"
                      key={spec.id}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-muted/50 border-b border-gray-400 dark:border-slate-600 last:border-b-0 ${
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

        <div className="flex gap-0 border-2 border-gray-400 dark:border-slate-500 rounded-lg overflow-hidden min-h-[500px] glass-card">
          <div className="w-48 border-r-2 border-gray-400 dark:border-slate-500 bg-background/50 backdrop-blur-sm flex flex-col">
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
            <div className="border-2 border-gray-400 dark:border-slate-500 rounded-lg bg-background/80 backdrop-blur-sm p-6 min-h-[450px] fade-in-up">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
