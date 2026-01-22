import { SiAmazon, SiGooglecloud, SiHuawei } from "react-icons/si";
import azureLogo from "@assets/image_1769038035704.png";
import worldMapImg from "@assets/world_map.png";

export const THEME_PRIMARY = "#1E9AD6";
export const THEME_LIGHT = "#3AAFE6";

export const programmes = [
  { id: "tesa", name: "TESA" },
  { id: "stem", name: "STEM" },
  { id: "nest", name: "NEST" },
];

export const specializations = [
  { id: "cloud-engineering", name: "Cloud Engineering" },
  { id: "data-analytics", name: "Data Analytics" },
  { id: "software-java", name: "Software Engineering - Java" },
  { id: "quality-assurance", name: "Quality Assurance" },
  { id: "software-react", name: "Software Engineering - React" },
  { id: "solutions-architecture", name: "Solutions Architecture" },
  { id: "ai-ml", name: "AI & Machine Learning" },
];

export const tabs = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "structure", label: "Structure" },
  { id: "timetable", label: "Time-Table" },
  { id: "internship", label: "Internship" },
  { id: "fees", label: "Fees" },
  { id: "funding", label: "Funding" },
];

export const cloudProviders = [
  { name: "AWS", icon: SiAmazon, color: "#FF9900", isImage: false },
  { name: "Azure", icon: null, color: "#0078D4", isImage: true, imageSrc: azureLogo },
  { name: "GCP", icon: SiGooglecloud, color: "#4285F4", isImage: false },
  { name: "Huawei", icon: SiHuawei, color: "#FF0000", isImage: false },
];

export function CalendarTimetable({ cohorts, title }: { cohorts: { name: string; startDate: string; endDate: string; color: string }[]; title: string }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentYear = 2026;
  
  const getDaysInMonth = (month: number) => new Date(currentYear, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month: number) => new Date(currentYear, month, 1).getDay();
  
  const getCohortForDate = (month: number, day: number) => {
    const dateStr = `${currentYear}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return cohorts.find(c => dateStr >= c.startDate && dateStr <= c.endDate);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-4" data-testid="text-calendar-title">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {months.map((monthName, monthIndex) => (
          <div key={monthName} className="border-2 border-gray-400 dark:border-slate-500 rounded-lg p-3 bg-background">
            <h4 className="text-sm font-medium text-center mb-2" style={{ color: THEME_PRIMARY }}>{monthName} {currentYear}</h4>
            <div className="grid grid-cols-7 gap-0.5 text-xs">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i} className="text-center text-foreground/50 font-medium py-1">{d}</div>
              ))}
              {Array.from({ length: getFirstDayOfMonth(monthIndex) }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: getDaysInMonth(monthIndex) }).map((_, i) => {
                const day = i + 1;
                const cohort = getCohortForDate(monthIndex, day);
                return (
                  <div
                    key={day}
                    className={`text-center py-1 rounded-sm ${cohort ? 'text-white font-medium' : 'text-foreground/70'}`}
                    style={cohort ? { backgroundColor: cohort.color } : {}}
                    title={cohort?.name}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        {cohorts.map((cohort, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: cohort.color }} />
            <span>{cohort.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CoursesContent({ specialization }: { specialization: string }) {
  const courseModules: Record<string, { modules: string[]; skills: string[]; tools: string[] }> = {
    "Cloud Engineering": {
      modules: ["Cloud Fundamentals", "Cloud Services", "Cloud Solution Architecture", "Infrastructure As Code", "DevOps & DevSecOps", "Advanced Security", "Infrastructure Operations"],
      skills: ["Compute, Storage & Networking", "Identity Management", "Automation & Scripting", "CI/CD Pipelines", "Monitoring & Logging", "Cost Optimization"],
      tools: ["Terraform", "Ansible", "Docker", "Kubernetes", "Jenkins", "GitLab CI"]
    },
    "Data Analytics": {
      modules: ["Data Fundamentals", "SQL & Database Design", "Python for Analytics", "Statistical Analysis", "Data Visualization", "Business Intelligence", "Machine Learning Basics"],
      skills: ["Data Cleaning", "ETL Processes", "Dashboard Creation", "Report Writing", "Predictive Modeling", "Data Storytelling"],
      tools: ["Python", "SQL", "Power BI", "Tableau", "Excel", "Pandas"]
    },
    "Software Engineering - Java": {
      modules: ["Java Fundamentals", "Object-Oriented Programming", "Spring Framework", "REST APIs", "Microservices", "Testing & TDD", "Database Integration"],
      skills: ["Clean Code", "Design Patterns", "API Design", "Unit Testing", "Version Control", "Agile Development"],
      tools: ["Java 17+", "Spring Boot", "Maven", "JUnit", "Git", "IntelliJ IDEA"]
    },
    "Quality Assurance": {
      modules: ["QA Fundamentals", "Manual Testing", "Test Planning", "Automation Testing", "Performance Testing", "API Testing", "CI/CD Integration"],
      skills: ["Test Case Design", "Bug Reporting", "Test Automation", "Load Testing", "Security Testing", "Test Management"],
      tools: ["Selenium", "Cypress", "JMeter", "Postman", "JIRA", "TestRail"]
    },
    "Software Engineering - React": {
      modules: ["JavaScript ES6+", "React Fundamentals", "State Management", "React Hooks", "Routing & Navigation", "API Integration", "Testing React Apps"],
      skills: ["Component Design", "State Management", "Responsive Design", "Performance Optimization", "Accessibility", "Modern CSS"],
      tools: ["React 18", "TypeScript", "Redux", "React Query", "Tailwind CSS", "Jest"]
    },
    "Solutions Architecture": {
      modules: ["Architecture Fundamentals", "System Design", "Cloud Architecture", "Security Architecture", "Scalability Patterns", "Cost Optimization", "Documentation"],
      skills: ["Requirements Analysis", "Trade-off Decisions", "Diagramming", "Capacity Planning", "Disaster Recovery", "Stakeholder Communication"],
      tools: ["Draw.io", "Lucidchart", "AWS Well-Architected", "Azure Architecture Center", "Miro", "Confluence"]
    },
    "AI & Machine Learning": {
      modules: ["AI Fundamentals", "Python for ML", "Supervised Learning", "Deep Learning", "NLP Basics", "Computer Vision", "Model Deployment"],
      skills: ["Data Preprocessing", "Feature Engineering", "Model Training", "Hyperparameter Tuning", "Model Evaluation", "MLOps"],
      tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter", "Hugging Face"]
    }
  };

  const course = courseModules[specialization] || courseModules["Cloud Engineering"];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>Course Modules</h3>
        <div className="grid grid-cols-2 gap-2">
          {course.modules.map((module, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={{ backgroundColor: THEME_PRIMARY }}>
                {i + 1}
              </div>
              <span>{module}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>Skills You'll Gain</h3>
        <div className="flex flex-wrap gap-2">
          {course.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs border border-border bg-muted/30">{skill}</span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>Tools & Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {course.tools.map((tool, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: THEME_LIGHT }}>{tool}</span>
          ))}
        </div>
      </div>
      {specialization === "Cloud Engineering" && (
        <div>
          <h3 className="font-medium mb-3" style={{ color: THEME_PRIMARY }}>Cloud Platforms</h3>
          <div className="flex gap-6">
            {cloudProviders.map((provider, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                {provider.isImage ? (
                  <img src={provider.imageSrc} alt={provider.name} className="w-10 h-10 object-contain" />
                ) : (
                  provider.icon && <provider.icon className="w-10 h-10" style={{ color: provider.color }} />
                )}
                <span className="text-xs">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function StructureContent({ programme }: { programme: "tesa" | "stem" | "nest" }) {
  const structures = {
    tesa: {
      duration: "8 Weeks Intensive",
      schedule: "Monday - Saturday, 9:00 AM - 5:00 PM",
      weeks: [
        { week: "1-2", title: "Foundation & Core Concepts", description: "Introduction to fundamentals, environment setup, basic exercises" },
        { week: "3-4", title: "Intermediate Skills & Projects", description: "Hands-on projects, real-world scenarios, team collaboration" },
        { week: "5-6", title: "Advanced Topics & Team Projects", description: "Complex problems, capstone project initiation, peer reviews" },
        { week: "7-8", title: "Capstone & Certification Prep", description: "Final project presentation, certification exam preparation" }
      ]
    },
    stem: {
      duration: "12 Weeks Term-based",
      schedule: "Weekends & After-School Options",
      weeks: [
        { week: "1-3", title: "Discovery Phase", description: "Introduction to concepts through games and interactive activities" },
        { week: "4-6", title: "Exploration Phase", description: "Hands-on experiments and guided projects" },
        { week: "7-9", title: "Creation Phase", description: "Build your own projects with mentor guidance" },
        { week: "10-12", title: "Showcase Phase", description: "Present projects, peer collaboration, certificates" }
      ]
    },
    nest: {
      duration: "Flexible (4-16 Weeks)",
      schedule: "Customizable for Organizations",
      weeks: [
        { week: "Phase 1", title: "Assessment & Planning", description: "Skills gap analysis, custom curriculum design, team onboarding" },
        { week: "Phase 2", title: "Core Training", description: "Intensive skill building, workshops, practical exercises" },
        { week: "Phase 3", title: "Application", description: "Apply skills to real company projects with mentorship" },
        { week: "Phase 4", title: "Certification", description: "Skills validation, assessment, certification awards" }
      ]
    }
  };

  const structure = structures[programme];

  return (
    <div className="space-y-6">
      <div className="flex gap-6">
        <div className="px-4 py-2 rounded-lg bg-muted/30 border-2 border-gray-400 dark:border-slate-500">
          <span className="text-xs text-foreground/60">Duration</span>
          <p className="font-medium text-sm">{structure.duration}</p>
        </div>
        <div className="px-4 py-2 rounded-lg bg-muted/30 border-2 border-gray-400 dark:border-slate-500">
          <span className="text-xs text-foreground/60">Schedule</span>
          <p className="font-medium text-sm">{structure.schedule}</p>
        </div>
      </div>
      <div className="space-y-4">
        {structure.weeks.map((week, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-20 flex-shrink-0 px-3 py-2 rounded-lg text-center text-white text-sm font-medium" style={{ backgroundColor: THEME_PRIMARY }}>
              {week.week}
            </div>
            <div className="flex-1 p-4 rounded-lg border-2 border-gray-400 dark:border-slate-500 bg-muted/10">
              <h4 className="font-medium mb-1">{week.title}</h4>
              <p className="text-sm text-foreground/70">{week.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorldMapBackground() {
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
