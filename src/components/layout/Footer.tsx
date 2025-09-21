import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Defense</h3>
                <p className="text-xs text-muted-foreground">Misinformation Defense Tool</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Building India's first AI-powered misinformation defense system. 
              Fast, multilingual, and evidence-backed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {["Features", "Learn", "Community", "Demo"].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <div className="space-y-2">
              {["Documentation", "API Reference", "Support", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Hackathon Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Hackathon Project</h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Built for the AI Innovation Challenge 2024
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>at AI Innovation Challenge 2024</span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 AI Defense Team. Demo purposes only.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;