import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Users, Globe, Zap } from "lucide-react";
import heroImage from "@/assets/lykluk-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Cultural Heritage" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Share Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
              Cultural Story
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Connect cultures worldwide through authentic video content. 
            Preserve traditions, share heritage, and build global communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Start Creating
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Explore Content
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-card/50 backdrop-blur border-primary-foreground/20 p-6 text-center shadow-cultural hover:shadow-glow transition-all duration-300">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Share your culture with millions worldwide</p>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary-foreground/20 p-6 text-center shadow-cultural hover:shadow-glow transition-all duration-300">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community First</h3>
              <p className="text-muted-foreground">Build connections through cultural exchange</p>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary-foreground/20 p-6 text-center shadow-cultural hover:shadow-glow transition-all duration-300">
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Easy Creation</h3>
              <p className="text-muted-foreground">Simple tools for powerful storytelling</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;