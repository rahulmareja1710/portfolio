import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette, Settings, BarChart3, Cpu } from "lucide-react";
import Section from "@/components/ui/section";

const skillCategories = [
  {
    title: "Data Science & ML",
    icon: BarChart3,
    skills: [
      { name: "Python", level: "Expert" },
      { name: "NumPy", level: "Expert" },
      { name: "Pandas", level: "Expert" },
      { name: "Scikit-Learn", level: "Expert" },
      { name: "PyTorch", level: "Advanced" },
      { name: "TensorFlow", level: "Advanced" },
      { name: "Keras", level: "Advanced" },
      { name: "NLTK", level: "Advanced" },
      { name: "Matplotlib", level: "Expert" },
      { name: "Seaborn", level: "Expert" },
      { name: "C/C++", level: "Intermediate", note: "Elementary proficiency" },
      { name: "R", level: "Intermediate", note: "Elementary proficiency" }
    ],
    color: "primary"
  },
  {
    title: "Product & Tools",
    icon: Settings,
    skills: [
      { name: "Power BI", level: "Advanced" },
      { name: "Google Analytics", level: "Advanced" },
      { name: "Google App Script", level: "Intermediate" },
      { name: "Figma", level: "Advanced" },
      { name: "Notion", level: "Expert" },
      { name: "Jira", level: "Advanced" },
      { name: "Webflow", level: "Intermediate" },
      { name: "n8n", level: "Advanced" }
    ],
    color: "accent"
  },
  {
    title: "Database Management",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate", note: "Elementary proficiency" }
    ],
    color: "secondary"
  }
];

const levelColors = {
  Expert: "bg-success/10 text-success border-success/30",
  Advanced: "bg-accent/10 text-accent border-accent/30",
  Intermediate: "bg-warning/10 text-warning border-warning/30"
};

const Skills = () => {
  return (
    <Section id="skills" variant="muted">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Technical Expertise</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive technical skills spanning data science, machine learning, product development, and database management
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={index} 
              className={`shadow-custom-lg border-0 transition-smooth hover:shadow-custom-xl animate-fade-in-up animate-delay-${(index + 1) * 200}`}
            >
              <CardHeader className="pb-4">
                <CardTitle className={`text-xl flex items-center gap-3 text-${category.color}`}>
                  <div className={`p-2 rounded-lg bg-${category.color}/10`}>
                    <IconComponent className={`h-5 w-5 text-${category.color}`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          {skill.note && (
                            <Badge variant="outline" className="text-xs text-muted-foreground">
                              *
                            </Badge>
                          )}
                        </div>
                        {skill.note && (
                          <p className="text-xs text-muted-foreground mt-1">{skill.note}</p>
                        )}
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-medium ${levelColors[skill.level as keyof typeof levelColors]}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">*</span> Elementary proficiency levels for R, C/C++, and MongoDB based on academic and project requirements
        </p>
      </div>
    </Section>
  );
};

export default Skills;