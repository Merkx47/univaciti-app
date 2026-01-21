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
    content: "Welcome to NEST - Corporate Tech Skills Programme. Tailored for organizations seeking rapid but flexible curriculum for employees in key tech skills. NEST provides customized training solutions that fit your organization's specific technology needs and business objectives."
  },
  courses: {
    title: "Courses",
    content: "NEST offers all 7 specializations tailored for corporate training: Cloud Engineering, Data Analytics, Software Engineering (Java & React), Quality Assurance, Solutions Architecture, and AI & Machine Learning. Courses can be customized based on your organization's specific requirements."
  },
  structure: {
    title: "Structure",
    content: "The NEST programme offers flexible structure options:\n\n• Full-time Intensive: 4-8 weeks\n• Part-time: 12-16 weeks (evenings/weekends)\n• Modular: Pick specific modules as needed\n• On-site or Remote delivery options\n\nCustom schedules available for corporate groups."
  },
  timetable: {
    title: "Time-Table",
    content: "NEST Corporate Schedule Options:\n\n• Standard: Monday-Friday 9:00 AM - 5:00 PM\n• Evening: Monday-Thursday 6:00 PM - 9:00 PM\n• Weekend Intensive: Saturday-Sunday 9:00 AM - 4:00 PM\n\nSchedules can be customized based on organizational needs."
  },
  internship: {
    title: "Internship",
    content: "NEST participants apply their learning directly within their organizations. We provide project mentorship and support to ensure skills are immediately applied to real business challenges. Optional cross-company collaboration projects available."
  },
  fees: {
    title: "Fees",
    content: "Corporate Pricing:\n\n• Individual Employee: $1,500/person\n• Team (5-10): $1,200/person\n• Department (11-25): $1,000/person\n• Enterprise (26+): Custom pricing\n\nIncludes all materials, certification, and ongoing support."
  },
  funding: {
    title: "Funding",
    content: "Corporate Funding Options:\n\n• Annual training contracts with volume discounts\n• Quarterly billing options\n• Skills development grant assistance\n• Government training subsidy consultation\n• ROI tracking and reporting included\n\nContact us for custom enterprise agreements."
  },
};

export default function NestPage() {
  const [, setLocation] = useLocation();
  const [selectedProgramme, setSelectedProgramme] = useState("nest");
  const [selectedSpecialization, setSelectedSpecialization] = useState(specializations[0]);
  const [activeTab, setActiveTab] = useState("home");
  const [showMoreTabs, setShowMoreTabs] = useState(false);
  const [programmeDropdownOpen, setProgrammeDropdownOpen] = useState(false);
  const [specDropdownOpen, setSpecDropdownOpen] = useState(false);

  const handleProgrammeChange = (programmeId: string) => {
    setSelectedProgramme(programmeId);
    setProgrammeDropdownOpen(false);
    if (programmeId !== "nest") {
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
                      key={spec}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-muted/50 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${
                        selectedSpecialization === spec ? 'bg-muted/50 font-medium' : ''
                      }`}
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
