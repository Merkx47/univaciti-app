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
    content: "Welcome to TESA - Tech Skills Accelerator Programme. An intensive 8-week specialization course designed to transform passionate learners into world-class professionals. TESA closes the tech talent gap by providing hands-on, industry-focused training that prepares you for real-world challenges."
  },
  courses: {
    title: "Courses",
    content: "TESA offers comprehensive courses across 7 specializations: Cloud Engineering, Data Analytics, Software Engineering (Java & React), Quality Assurance, Solutions Architecture, and AI & Machine Learning. Each course is designed with industry input to ensure relevance and practical applicability."
  },
  structure: {
    title: "Structure",
    content: "The TESA programme follows a structured 8-week intensive format:\n\n• Week 1-2: Foundation & Core Concepts\n• Week 3-4: Intermediate Skills & Projects\n• Week 5-6: Advanced Topics & Team Projects\n• Week 7-8: Capstone Project & Certification Prep\n\nDaily Schedule: 8 hours/day, Monday to Saturday"
  },
  timetable: {
    title: "Time-Table",
    content: "TESA Cohort Schedule:\n\n• January Cohort: Jan 15 - Mar 10\n• March Cohort: Mar 15 - May 10\n• July Cohort: Jul 15 - Sep 10\n• September Cohort: Sep 15 - Nov 10\n\nDaily Hours: 9:00 AM - 5:00 PM (with 1-hour lunch break)"
  },
  internship: {
    title: "Internship",
    content: "Upon successful completion of the TESA programme, graduates are connected with partner companies for internship opportunities. Our industry partnerships ensure that TESA graduates gain real-world experience and have a near 100% employment rate within 3 months of graduation."
  },
  fees: {
    title: "Fees",
    content: "Programme Fee: $2,000\n\nThis includes:\n• Full access to all course materials\n• Hands-on projects and labs\n• Certification exam fees\n• Career placement support\n• Alumni network access"
  },
  funding: {
    title: "Funding",
    content: "Scholarship Opportunities:\n\n• 70% scholarship available for qualifying candidates\n• Payment plans available (3-month installments)\n• Corporate sponsorship programmes\n• Early bird discount (10% off for early registration)\n\nEffective cost with scholarship: $600"
  },
};

export default function TesaPage() {
  const [, setLocation] = useLocation();
  const [selectedProgramme, setSelectedProgramme] = useState("tesa");
  const [selectedSpecialization, setSelectedSpecialization] = useState(specializations[0]);
  const [activeTab, setActiveTab] = useState("home");
  const [showMoreTabs, setShowMoreTabs] = useState(false);
  const [programmeDropdownOpen, setProgrammeDropdownOpen] = useState(false);
  const [specDropdownOpen, setSpecDropdownOpen] = useState(false);

  const handleProgrammeChange = (programmeId: string) => {
    setSelectedProgramme(programmeId);
    setProgrammeDropdownOpen(false);
    if (programmeId !== "tesa") {
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
