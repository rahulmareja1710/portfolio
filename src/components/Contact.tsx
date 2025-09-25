import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, GraduationCap } from "lucide-react";
import Section from "@/components/ui/section";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7973494747",
    href: "tel:+917973494747",
    color: "text-primary"
  },
  {
    icon: Mail,
    label: "IITG Email",
    value: "r.mareja@iitg.ac.in",
    href: "mailto:r.mareja@iitg.ac.in", 
    color: "text-accent"
  },
  {
    icon: Mail,
    label: "Personal Email",
    value: "marejarahul9@gmail.com",
    href: "mailto:marejarahul9@gmail.com",
    color: "text-secondary"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indian Institute of Technology Guwahati",
    href: "#",
    color: "text-muted-foreground"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#", // Placeholder for LinkedIn URL
    color: "hover:text-blue-600"
  },
  {
    icon: Github,
    label: "GitHub", 
    href: "#", // Placeholder for GitHub URL
    color: "hover:text-gray-900"
  }
];

const Contact = () => {
  return (
    <Section id="contact" variant="gradient">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Ready to discuss opportunities in Data Science, Product Management, or Analytics? 
          Let's start a conversation about how I can contribute to your team.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-custom-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Mail className="h-5 w-5 text-accent-light" />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-smooth group"
                    >
                      <div className="p-2 bg-white/10 rounded-lg">
                        <IconComponent className={`h-4 w-4 text-white group-hover:text-accent-light transition-smooth`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-white/70 font-medium">{contact.label}</div>
                        <div className="text-white font-medium">{contact.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          {/* Academic Information */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-custom-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary-light" />
                </div>
                Academic Profile
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-white font-semibold mb-2">
                    B.Tech - Biosciences and Bioengineering
                  </div>
                  <div className="text-white/80 text-sm mb-2">
                    Indian Institute of Technology Guwahati
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Roll No. 220106062</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent-light">7.38</div>
                      <div className="text-xs text-white/70">Current CGPA</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="text-success-light font-semibold mb-1">
                    Pre-Placement Offer Secured
                  </div>
                  <div className="text-white/80 text-sm">
                    Robylon AI - Product/Data Science Role
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Whether you're looking for a data scientist, product analyst, or someone who can bridge 
              technical and business domains, I'd love to discuss opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 shadow-custom-lg transition-smooth"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      size="sm"
                      variant="ghost"
                      className={`text-white hover:bg-white/10 p-3 rounded-full transition-smooth ${social.color}`}
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <IconComponent className="h-5 w-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;