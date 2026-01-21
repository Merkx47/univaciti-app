import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ChevronDown, ChevronUp } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const THEME_PRIMARY = "#1E9AD6";

const programmes = [
  { id: "tesa", name: "TESA" },
  { id: "stem", name: "STEM" },
  { id: "nest", name: "NEST" },
];

const specializations = [
  "Cloud Engineering",
  "Data Analytics",
  "Software Engineering - Java",
  "Quality Assurance",
  "Software Engineering - React",
  "Solutions Architecture",
  "AI & Machine Learning",
];

const tabs = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "structure", label: "Structure" },
  { id: "timetable", label: "Time-Table" },
  { id: "internship", label: "Internship" },
  { id: "fees", label: "Fees" },
  { id: "funding", label: "Funding" },
];

const tabContent: Record<string, { title: string; content: string }> = {
  home: {
    title: "Home",
    content: "Welcome to STEM - Science, Technology, Engineering and Mathematics Programme. Designed specifically for young learners, STEM provides a strong foundation in technology and prepares students for future careers in the digital economy."
  },
  courses: {
    title: "Courses",
    content: "STEM offers age-appropriate courses across all 7 specializations: Cloud Engineering, Data Analytics, Software Engineering (Java & React), Quality Assurance, Solutions Architecture, and AI & Machine Learning. Each course is designed to be engaging and accessible for young learners."
  },
  structure: {
    title: "Structure",
    content: "The STEM programme follows a flexible learning structure:\n\n• Foundation Level: Introduction to concepts\n• Intermediate Level: Hands-on projects\n• Advanced Level: Real-world applications\n\nSessions are designed to fit around school schedules with weekend and after-school options."
  },
  timetable: {
    title: "Time-Table",
    content: "STEM Learning Schedule:\n\n• Weekend Classes: Saturday 10:00 AM - 1:00 PM\n• After-School: Tuesday & Thursday 4:00 PM - 6:00 PM\n• Holiday Intensive: Full-day camps during school breaks\n\nFlexible scheduling to accommodate academic commitments."
  },
  internship: {
    title: "Internship",
    content: "STEM graduates have opportunities to participate in mentorship programmes with industry professionals. Summer internship placements are available for advanced students, providing early exposure to real-world tech environments."
  },
  fees: {
    title: "Fees",
    content: "Programme Fee: $500/term\n\nThis includes:\n• All course materials and resources\n• Project kits and supplies\n• Certificate of completion\n• Access to online learning platform\n• Parent progress reports"
  },
  funding: {
    title: "Funding",
    content: "Scholarship Opportunities:\n\n• Merit-based scholarships available\n• Sibling discounts (15% off for each additional child)\n• Early registration discount (10% off)\n• School partnership programmes\n\nFinancial aid available for qualifying families."
  },
};

export default function StemPage() {
  const [, setLocation] = useLocation();
  const [selectedProgramme, setSelectedProgramme] = useState("stem");
  const [selectedSpecialization, setSelectedSpecialization] = useState(specializations[0]);
  const [activeTab, setActiveTab] = useState("home");
  const [showMoreTabs, setShowMoreTabs] = useState(false);
  const [programmeDropdownOpen, setProgrammeDropdownOpen] = useState(false);
  const [specDropdownOpen, setSpecDropdownOpen] = useState(false);

  const handleProgrammeChange = (programmeId: string) => {
    setSelectedProgramme(programmeId);
    setProgrammeDropdownOpen(false);
    if (programmeId !== "stem") {
      setLocation(`/programmes/${programmeId}`);
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-light mb-6" style={{ color: THEME_PRIMARY }} data-testid="text-page-title">
          Learning Programme
        </h1>

        <div className="space-y-3 mb-6">
          <div className="flex items-center border border-border rounded-md overflow-hidden">
            <div className="w-48 px-4 py-3 bg-muted/30 text-sm font-medium border-r border-border">
              Select programme:
            </div>
            <div className="flex-1 relative">
              <button
                className="w-full px-4 py-3 text-left flex items-center justify-between text-sm"
                onClick={() => setProgrammeDropdownOpen(!programmeDropdownOpen)}
                data-testid="dropdown-programme"
              >
                <span className="tracking-widest font-medium">
                  {programmes.find(p => p.id === selectedProgramme)?.name.split('').join(' ')}
                </span>
                <ChevronDown className="w-4 h-4" style={{ color: THEME_PRIMARY }} />
              </button>
              {programmeDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-background border border-border rounded-md shadow-lg z-10">
                  {programmes.map((prog) => (
                    <button
                      key={prog.id}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-muted/50"
                      onClick={() => handleProgrammeChange(prog.id)}
                    >
                      {prog.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center border border-border rounded-md overflow-hidden">
            <div className="w-48 px-4 py-3 bg-muted/30 text-sm font-medium border-r border-border">
              Specialization:
            </div>
            <div className="flex-1 relative">
              <button
                className="w-full px-4 py-3 text-left flex items-center justify-between text-sm"
                onClick={() => setSpecDropdownOpen(!specDropdownOpen)}
                data-testid="dropdown-specialization"
              >
                <span>{selectedSpecialization}</span>
                <ChevronDown className="w-4 h-4" style={{ color: THEME_PRIMARY }} />
              </button>
              {specDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-background border border-border rounded-md shadow-lg z-10">
                  {specializations.map((spec) => (
                    <button
                      key={spec}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-muted/50"
                      onClick={() => { setSelectedSpecialization(spec); setSpecDropdownOpen(false); }}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-0 border border-border rounded-lg overflow-hidden min-h-[400px]">
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
            
            <div className="mt-auto p-3">
              <button
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
                onClick={() => setShowMoreTabs(!showMoreTabs)}
                data-testid="button-see-more"
              >
                {showMoreTabs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                See more
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 bg-muted/10">
            <div className="border border-border rounded-lg bg-background p-6 min-h-[350px]">
              <h2 className="text-lg font-medium mb-4" data-testid="text-tab-title">
                {tabContent[activeTab]?.title}
              </h2>
              <p className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed" data-testid="text-tab-content">
                {tabContent[activeTab]?.content}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
