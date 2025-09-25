import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Trophy, TrendingUp, Users, Zap } from "lucide-react";
import Section from "@/components/ui/section";

const experiences = [
  {
    company: "Robylon AI",
    role: "Product Intern/Analyst/Management Intern",
    duration: "May 2025 – July 2025",
    location: "Bengaluru",
    type: "Internship",
    highlights: [
      "Secured Pre-Placement Offer (PPO)",
      "Deployed 3+ customer support AI agents (Bewakoof & HealthifyMe) using Gemini LLM via API",
      "Improved customer satisfaction rate by 40% through optimized prompt engineering",
      "Built automated models on n8n to analyze social media (LinkedIn, Reddit) and generate comments via LLM",
      "Reduced manual marketing work by 20%",
      "Built agent workflows for 14+ AI agents across 5+ clients, reducing human reliance by 60%",
      "Designed 12+ webpages for Robylon MVP, boosting key product page visits by 40%"
    ],
    skills: ["LLM", "Gemini API", "n8n", "Product Design", "AI Agents", "Prompt Engineering"]
  },
  {
    company: "Legit Quest",
    role: "Data Science Intern",
    duration: "March 2025 – May 2025",
    location: "New Delhi",
    type: "Internship",
    highlights: [
      "Developed legal text classification pipeline using NLP and BERT embeddings",
      "Achieved 88% classification accuracy with systematic optimization",
      "Reduced prediction time from 14s to 8s by integrating QNN/QSVM with NLP",
      "Validated performance improvements through A/B testing against LSTM models"
    ],
    skills: ["NLP", "BERT", "QNN", "QSVM", "A/B Testing", "Legal Tech"]
  }
];

const Experience = () => {
  return (
    <Section id="experience" variant="muted">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Hands-on experience in data science, AI implementation, and product development at leading tech companies
        </p>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card 
            key={index} 
            className={`shadow-custom-lg border-0 transition-smooth hover:shadow-custom-xl animate-fade-in-up animate-delay-${(index + 1) * 200}`}
          >
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl text-primary flex items-center gap-3">
                    <Building className="h-6 w-6 text-accent" />
                    {exp.company}
                  </CardTitle>
                  <h3 className="text-xl font-semibold text-secondary">{exp.role}</h3>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Badge className="bg-accent/10 text-accent border-accent/20 w-fit">
                    <Trophy className="h-3 w-3 mr-1" />
                    {exp.type}
                  </Badge>
                  {exp.company === "Robylon AI" && (
                    <Badge className="bg-success/10 text-success border-success/20 w-fit">
                      <Zap className="h-3 w-3 mr-1" />
                      PPO Secured
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Key Achievements & Impact
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;