import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Calendar, Award, DollarSign } from "lucide-react";
import Section from "@/components/ui/section";

const positions = [
  {
    title: "Overall Coordinator",
    organization: "Finance and Economics Club, IIT Guwahati",
    duration: "Mar 2024 – Feb 2025",
    type: "Leadership",
    achievements: [
      "Managed India's only student-run Mutual Fund with 1.5L+ corpus, yielding 13% annual returns",
      "Mentored 100+ students and launched 20+ initiatives, impacting 15k+ global learners",
      "Raised INR 10 Lakhs+ sponsorship by forging partnerships with 10+ firms",
      "Created comprehensive educational programs and trading initiatives"
    ],
    impact: {
      students: "100+",
      initiatives: "20+",
      globalLearners: "15k+",
      sponsorship: "₹10L+",
      returns: "13%"
    },
    skills: ["Financial Management", "Mentorship", "Partnership Development", "Event Management"]
  },
  {
    title: "Product Manager",
    organization: "Students' Web Committee, IIT Guwahati",
    duration: "Apr 2024 – Mar 2025",
    type: "Product",
    achievements: [
      "Digitized Gate entry-exit system, reducing user wait times by 80%",
      "Created PRD and wireframes for OneStop app, driving 20K+ MAU",
      "Led cross-functional teams to solve pain points for 10k+ IITG students",
      "Collaborated with 20+ developers on multiple campus solutions"
    ],
    impact: {
      waitTimeReduction: "80%",
      mau: "20K+",
      studentsImpacted: "10k+",
      developers: "20+"
    },
    skills: ["Product Management", "UX Design", "Team Leadership", "Systems Design"]
  }
];

const Leadership = () => {
  return (
    <Section id="leadership">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Positions of Responsibility</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Leadership roles demonstrating team management, strategic planning, and impactful project execution
        </p>
      </div>
      
      <div className="space-y-8">
        {positions.map((position, index) => (
          <Card 
            key={index} 
            className={`shadow-custom-lg border-0 transition-smooth hover:shadow-custom-xl animate-fade-in-up animate-delay-${(index + 1) * 200}`}
          >
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge className={`
                      ${position.type === 'Leadership' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-accent/10 text-accent border-accent/20'}
                    `}>
                      <Award className="h-3 w-3 mr-1" />
                      {position.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-primary">{position.title}</CardTitle>
                  <h3 className="text-lg font-semibold text-secondary">{position.organization}</h3>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{position.duration}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Key Metrics */}
              <div>
                <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Key Impact Metrics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(position.impact).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-4 bg-gradient-subtle rounded-lg border border-border/50">
                      <div className="text-2xl font-bold text-accent mb-1">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize font-medium">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Major Achievements
                </h4>
                <ul className="space-y-3">
                  {position.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Skills */}
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {position.skills.map((skill, idx) => (
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

export default Leadership;