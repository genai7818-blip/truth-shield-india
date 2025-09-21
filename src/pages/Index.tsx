import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { 
  Shield, 
  Zap, 
  Globe, 
  BookOpen, 
  ArrowRight, 
  CheckCircle,
  Users,
  TrendingUp,
  Sparkles,
  Play
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Get credibility scores in under 2 seconds"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual",
      description: "Works in English and Hindi with cultural context"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Evidence-Backed",
      description: "Citations from trusted Indian fact-checkers"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educational",
      description: "Learn why content is misleading"
    }
  ];

  const stats = [
    { number: "50M+", label: "Messages Analyzed" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "12", label: "Languages Supported" },
    { number: "24/7", label: "Real-time Monitoring" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="mb-6">
              <Badge className="mb-4 px-4 py-2 text-sm font-medium gradient-hero text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Innovation Challenge 2024
              </Badge>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
            >
              AI-Powered{" "}
              <span className="text-primary">Misinformation</span>{" "}
              Defense Tool
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              Fast • Multilingual • Evidence-backed • India-first AI companion that helps you identify misleading content and learn critical thinking
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" asChild className="gradient-hero shadow-glow text-lg px-8">
                <NavLink to="/demo">
                  <Play className="w-5 h-5 mr-2" />
                  Try Live Demo
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <NavLink to="/features">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Features
                </NavLink>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AI Defense?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for India's diverse linguistic and cultural landscape
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-6 text-center hover:shadow-elegant transition-all duration-300 glass backdrop-blur-sm group">
                  <CardContent className="p-0">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, fast, and intelligent misinformation detection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Paste Content",
                description: "Share any viral forward, news link, or suspicious content",
                icon: <ArrowRight className="w-6 h-6" />
              },
              {
                step: "02", 
                title: "Instant Analysis",
                description: "Our AI analyzes credibility, extracts claims, and finds evidence",
                icon: <Zap className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Learn & Share",
                description: "Get detailed explanations and share verified results",
                icon: <CheckCircle className="w-6 h-6" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-glow group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Combat Misinformation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who are already building better information habits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <NavLink to="/demo">
                  <Play className="w-5 h-5 mr-2" />
                  Start Demo Now
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                <NavLink to="/community">
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;