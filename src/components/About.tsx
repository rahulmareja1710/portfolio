import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Trophy, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Introduction */}
          <div className="space-y-6">
            <Card className="border-accent/20 shadow-custom-soft">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">Professional Focus</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I am a passionate Data Scientist and Product Analyst with expertise in machine learning, 
                  natural language processing, and product strategy. My experience spans from developing 
                  AI-powered solutions to leading cross-functional teams and driving data-driven decisions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in both technical execution and strategic thinking, I excel at 
                  translating complex data insights into actionable business outcomes. My work has directly 
                  contributed to improving customer satisfaction, reducing operational costs, and driving 
                  revenue growth across multiple domains.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 shadow-custom-soft">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">Key Achievements</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">PPO</Badge>
                    <span className="text-muted-foreground">Pre-Placement Offer from Robylon AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">Gold</Badge>
                    <span className="text-muted-foreground">Inter IIT Tech Meet 12.0 Winner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">Leadership</Badge>
                    <span className="text-muted-foreground">Overall Coordinator, Finance & Economics Club</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">Impact</Badge>
                    <span className="text-muted-foreground">Managed ₹1.5L+ Mutual Fund with 13% returns</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Academic Information */}
          <div className="space-y-6">
            <Card className="border-accent/20 shadow-custom-soft">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">Academic Excellence</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Bachelor of Technology</h4>
                    <p className="text-muted-foreground mb-1">Biosciences and Bioengineering</p>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">Indian Institute of Technology Guwahati</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Roll No: 220106062</span>
                      <Badge className="bg-accent/10 text-accent border-accent/30">
                        CGPA: 7.38
                      </Badge>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-foreground mb-4">Specialized Coursework</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-sm">
                        <Badge variant="secondary" className="mb-2 w-full justify-center">Technical</Badge>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Data Structures & Algorithms</li>
                          <li>• Machine Learning</li>
                          <li>• Database Management</li>
                          <li>• Statistical Analysis</li>
                        </ul>
                      </div>
                      <div className="text-sm">
                        <Badge variant="secondary" className="mb-2 w-full justify-center">Domain</Badge>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Bioengineering</li>
                          <li>• Computational Biology</li>
                          <li>• Systems Biology</li>
                          <li>• Research Methodology</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 shadow-custom-soft">
              <CardContent className="p-8">
                <h4 className="font-semibold text-foreground mb-4">Competition Excellence</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-foreground">Inter IIT Tech Meet Success</p>
                      <p className="text-sm text-muted-foreground">Gold Medal (12.0) & Bronze Medal (13.0)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-foreground">Pan IIT Data Science Hackathon</p>
                      <p className="text-sm text-muted-foreground">5th Position among 600+ teams</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-foreground">Global Recognition</p>
                      <p className="text-sm text-muted-foreground">Rank 40 globally in Creative Shock, Lithuania</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;