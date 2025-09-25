import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Github, Target, TrendingUp, Zap, Trophy } from "lucide-react";
import Section from "@/components/ui/section";

const projects = [
  {
    title: "Flight Passenger Re-accommodation System",
    company: "Mphasis",
    award: "Gold Medal, Inter IIT Tech Meet 12.0, IIT Madras",
    description: "Designed an automated system prioritizing 7+ PNR features and scoring alternate flights. Built using Dynamic Programming and CQM-based hybrid optimization with Gurobi & D-Wave.",
    impact: [
      "Reduced manual disruption handling time by 40%",
      "Scalable solution for large airline disruptions",
      "Advanced optimization algorithms implementation"
    ],
    technologies: ["Dynamic Programming", "Gurobi", "D-Wave", "CQM", "Python", "Optimization"],
    category: "Data Science",
    featured: true
  },
  {
    title: "Credit Card Default Prediction & Behaviour Scoring",
    company: "IDFC Bank",
    award: "5th Rank, Convolve 3.0, Pan IIT Data Science Hackathon",
    description: "Engineered comprehensive EDA pipeline with MICE/MCMC imputation and advanced feature selection via PCA and ANOVA. Built ensemble Voting Classifier achieving exceptional performance.",
    impact: [
      "Achieved 96% accuracy with ensemble methods",
      "Enhanced performance to 0.78 ROC-AUC using SMOTE",
      "Comprehensive feature engineering pipeline"
    ],
    technologies: ["XGBoost", "LightGBM", "CatBoost", "SMOTE", "Optuna", "PCA", "ANOVA"],
    category: "Machine Learning",
    featured: true
  },
  {
    title: "Solar Panel Waste Management",
    company: "INA Solar",
    award: "Bronze Medal, Inter IIT Tech Meet 13.0, IIT Bombay",
    description: "Forecasted solar waste generation until 2050 using ML with exceptional model performance. Developed circular economy model for cost optimization.",
    impact: [
      "Achieved R² > 0.95 in forecasting models",
      "Saved 30% recycling costs and 25% transport costs",
      "Comprehensive circular economy implementation"
    ],
    technologies: ["Machine Learning", "Time Series", "Regression", "Python", "Data Analytics"],
    category: "Sustainability",
    featured: true
  },
  {
    title: "Street Food Integration on Zomato",
    company: "PMx",
    award: "Product Management Focus",
    description: "Defined user personas and developed Zomato's street food GTM strategy. Conducted extensive vendor interviews to enhance market adoption.",
    impact: [
      "Projected INR 10 Cr+ revenue generation",
      "Interviewed 15+ vendors for user research",
      "Increased MAO by 30% through strategic planning"
    ],
    technologies: ["Product Strategy", "User Research", "GTM", "Market Analysis"],
    category: "Product Management",
    featured: false
  }
];

const Projects = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Award-winning projects from major competitions including Inter IIT Tech Meets and national hackathons
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className={`group shadow-custom-lg border-0 transition-smooth hover:shadow-custom-xl hover:-translate-y-1 animate-fade-in-up animate-delay-${(index + 1) * 200} ${
              project.featured ? 'ring-2 ring-accent/20' : ''
            }`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Badge className="bg-success/10 text-success border-success/20">
                        <Award className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-sm font-medium text-secondary">{project.company}</p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="h-4 w-4 text-accent" />
                    <span className="text-accent font-medium">{project.award}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-smooth p-2">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-smooth p-2">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Key Impact & Results
                </h4>
                <ul className="space-y-2">
                  {project.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Zap className="h-3 w-3 text-accent flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-primary/5 text-primary border-primary/20">
                      {tech}
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

export default Projects;