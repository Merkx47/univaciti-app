import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/logo_1769031259580.png";

const CARD_COLOR = "#1a6985";

function AIIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="40" cy="40" r="25"/>
      <circle cx="40" cy="40" r="8"/>
      <path d="M40 15V25"/>
      <path d="M40 55V65"/>
      <path d="M15 40H25"/>
      <path d="M55 40H65"/>
      <path d="M22 22L29 29"/>
      <path d="M51 51L58 58"/>
      <path d="M58 22L51 29"/>
      <path d="M29 51L22 58"/>
      <circle cx="40" cy="40" r="3" fill="currentColor"/>
    </svg>
  );
}

const modules = [
  { name: "AI & ML Fundamentals", hours: "20 Hours" },
  { name: "Python for ML", hours: "25 Hours" },
  { name: "Supervised Learning", hours: "25 Hours" },
  { name: "Unsupervised Learning", hours: "20 Hours" },
  { name: "Deep Learning", hours: "30 Hours" },
  { name: "Natural Language Processing", hours: "20 Hours" },
  { name: "ML Operations", hours: "20 Hours" },
];

const skills = [
  "ML Fundamentals: Understand core concepts, algorithms, and mathematical foundations.",
  "Python & Libraries: Master NumPy, Pandas, Scikit-learn, and TensorFlow/PyTorch.",
  "Supervised Learning: Implement regression, classification, and ensemble methods.",
  "Unsupervised Learning: Apply clustering, dimensionality reduction, and anomaly detection.",
  "Deep Learning: Build neural networks, CNNs, RNNs, and transformers.",
  "NLP: Process text data and build language models.",
  "MLOps: Deploy and maintain ML models in production.",
];

export default function AiMlPage() {
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
              <AIIcon className="w-20 h-20 text-white" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">AI & Machine Learning</h1>
                <p className="text-lg text-white/90">Artificial Intelligence Specialization</p>
              </div>
            </div>
            <p className="text-white/85 text-base leading-relaxed">
              Master artificial intelligence and machine learning from fundamentals to advanced applications. 
              This specialization covers ML algorithms, deep learning, NLP, and MLOps to prepare you 
              for AI/ML engineering roles.
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
            <h2 className="text-xl font-semibold mb-4">Technologies Covered</h2>
            <div className="flex flex-wrap gap-3">
              {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face", "MLflow", "OpenAI API"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full text-sm bg-background border border-border">
                  {tech}
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
