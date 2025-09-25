import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star, Users } from "lucide-react";
import Section from "@/components/ui/section";

const achievements = [
  {
    title: "Gold Medal, Inter IIT Techmeet 12.0",
    details: "Mphasis Optimization Challenge, IIT Madras",
    year: "2023",
    rank: "1st among 22 IITs",
    category: "Competition",
    icon: Trophy,
    color: "text-yellow-600 bg-yellow-50 border-yellow-200"
  },
  {
    title: "Bronze Medal, Inter IIT Techmeet 13.0",
    details: "INA Solar Consulting Challenge, IIT Bombay",
    year: "2024",
    rank: "3rd among 23 IITs",
    category: "Competition",
    icon: Medal,
    color: "text-amber-700 bg-amber-50 border-amber-200"
  },
  {
    title: "5th Position, Convolve 3.0",
    details: "Pan IIT Data Science Hackathon",
    year: "2025",
    rank: "5th among 600+ teams",
    category: "Hackathon",
    icon: Star,
    color: "text-accent bg-accent/10 border-accent/20"
  },
  {
    title: "Global Rank 40, Creative Shock",
    details: "ISM University, Lithuania",  
    year: "2023",
    rank: "40th among 2,000+ teams globally",
    category: "International",
    icon: Award,
    color: "text-primary bg-primary/10 border-primary/20"
  },
  {
    title: "Best Project Award, Techevince 10.0",
    details: "Q Solve Quantum Computing Flight Optimization System",
    year: "2024",
    rank: "1st Place",
    category: "Project",
    icon: Trophy,
    color: "text-success bg-success/10 border-success/20"
  }
];

const Achievements = () => {
  return (
    <Section id="achievements" variant="muted">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Key Achievements</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Recognition and awards from prestigious competitions, hackathons, and international events
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <Card 
              key={index} 
              className={`group shadow-custom-lg border-0 transition-smooth hover:shadow-custom-xl hover:-translate-y-1 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-full ${achievement.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-smooth">
                    {achievement.title}
                  </h3>
                  
                  {/* Details */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.details}
                  </p>
                  
                  {/* Rank & Year */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">{achievement.rank}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{achievement.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* Summary Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-card rounded-xl border border-border/50 shadow-custom-sm">
          <div className="text-3xl font-bold text-primary mb-2">5+</div>
          <div className="text-sm text-muted-foreground">Major Awards</div>
        </div>
        <div className="text-center p-6 bg-card rounded-xl border border-border/50 shadow-custom-sm">
          <div className="text-3xl font-bold text-accent mb-2">2</div>
          <div className="text-sm text-muted-foreground">Inter IIT Medals</div>
        </div>
        <div className="text-center p-6 bg-card rounded-xl border border-border/50 shadow-custom-sm">
          <div className="text-3xl font-bold text-secondary mb-2">600+</div>
          <div className="text-sm text-muted-foreground">Teams Competed Against</div>
        </div>
        <div className="text-center p-6 bg-card rounded-xl border border-border/50 shadow-custom-sm">
          <div className="text-3xl font-bold text-success mb-2">2K+</div>
          <div className="text-sm text-muted-foreground">Global Participants</div>
        </div>
      </div>
    </Section>
  );
};

export default Achievements;