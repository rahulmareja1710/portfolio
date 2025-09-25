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
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Transforming data into insights, products into experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-3 shadow-custom-lg transition-smooth">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 transition-smooth">
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;