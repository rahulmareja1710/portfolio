import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 hover:bg-accent/30 text-sm font-medium px-4 py-2">
            Pre-Placement Offer from Robylon AI
          </Badge>
          
          {/* Profile Photo */}
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto border-4 border-accent/30 shadow-custom-glow">
              <AvatarImage src={profilePhoto} alt="Rahul Mareja Profile" className="object-cover" />
              <AvatarFallback className="text-4xl font-semibold bg-accent/10 text-accent-light">RM</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Rahul Mareja</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-accent-light mt-2">
              Data Scientist | Product Analyst | IIT Guwahati B.Tech
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Securing roles in Data Science, Product, and Analyst domains with a strong academic record from IIT Guwahati. 
            Major achievements in Inter IIT Tech Meets and leadership as Overall Coordinator of Finance and Economics Club.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-3 shadow-custom-lg transition-smooth">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 transition-smooth">
              View My Work
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91-7973494747</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>r.mareja@iitg.ac.in</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>IIT Guwahati • Roll No. 220106062</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button size="sm" variant="ghost" className="text-white hover:text-accent-light hover:bg-white/10 p-3 rounded-full transition-smooth">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:text-accent-light hover:bg-white/10 p-3 rounded-full transition-smooth">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* CGPA Badge */}
        <div className="absolute bottom-8 right-8 animate-fade-in-up animate-delay-500 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-white">7.38</div>
            <div className="text-sm text-white/80">Current CGPA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;