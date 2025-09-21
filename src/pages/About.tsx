import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Shield, 
  Target, 
  Users, 
  Lightbulb,
  Github,
  Linkedin,
  Mail,
  Globe,
  Award,
  Heart,
  Zap,
  Brain,
  Code,
  Palette,
  Database,
  Sparkles,
  Clock
} from "lucide-react";

const About = () => {
  const problemStatement = {
    title: "The Misinformation Challenge",
    description: "Build a fast, multilingual, India-first AI companion that flags potentially misleading content, shows evidence with citations, and teaches users why it might be misleading—so people form better habits, not just get instant answers.",
    challenges: [
      "WhatsApp forwards spread faster than fact-checks",
      "Language barriers limit existing solutions",
      "Users need education, not just verification",
      "Cultural context missing in global tools"
    ]
  };

  const solution = {
    title: "Our AI Defense Approach",
    features: [
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Lightning Fast",
        description: "2-second analysis with instant credibility scores"
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Multilingual & Cultural",
        description: "English & Hindi with Indian context awareness"
      },
      {
        icon: <Brain className="w-5 h-5" />,
        title: "Educational First",
        description: "Teaches WHY content is misleading, building habits"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Evidence-Backed",
        description: "Citations from trusted Indian fact-checkers"
      }
    ]
  };

  const team = [
    {
      name: "Alex Chen",
      role: "AI/ML Engineer",
      avatar: "AC",
      bio: "Specialized in NLP and misinformation detection algorithms. Previously worked on content moderation at scale.",
      skills: ["Machine Learning", "NLP", "Python", "TensorFlow"],
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@aidefense.com"
      }
    },
    {
      name: "Priya Sharma", 
      role: "Full-Stack Developer",
      avatar: "PS",
      bio: "Expert in React, Node.js, and real-time systems. Passionate about building accessible tech for India.",
      skills: ["React", "Node.js", "TypeScript", "System Design"],
      social: {
        github: "#",
        linkedin: "#",
        email: "priya@aidefense.com"
      }
    },
    {
      name: "Rajesh Kumar",
      role: "Product Designer",
      avatar: "RK", 
      bio: "UX designer focused on Indian digital behaviors. Advocates for simple, culturally-aware interfaces.",
      skills: ["UI/UX Design", "Figma", "User Research", "Accessibility"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@aidefense.com"
      }
    },
    {
      name: "Sarah Mitchell",
      role: "Data Scientist",
      avatar: "SM",
      bio: "PhD in Computational Linguistics. Specializes in fact-checking automation and bias detection.",
      skills: ["Data Science", "Statistics", "R", "Deep Learning"],
      social: {
        github: "#",
        linkedin: "#", 
        email: "sarah@aidefense.com"
      }
    }
  ];

  const hackathonInfo = {
    name: "AI Innovation Challenge 2024",
    theme: "Building the Future of Information Integrity",
    duration: "48 hours",
    location: "Virtual + Mumbai Hub",
    judges: ["Industry Leaders", "AI Researchers", "Policy Experts"]
  };

  const techStack = [
    { name: "Frontend", tech: "React + TypeScript + Tailwind CSS" },
    { name: "Backend", tech: "Node.js + Express + Python Flask" },
    { name: "AI/ML", tech: "TensorFlow + Hugging Face + OpenAI" },
    { name: "Database", tech: "PostgreSQL + Redis + Vector DB" },
    { name: "Deployment", tech: "Vercel + AWS + Docker" },
    { name: "Analytics", tech: "Mixpanel + Custom Dashboards" }
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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium gradient-hero text-white">
            <Award className="w-4 h-4 mr-2" />
            Hackathon Project Showcase
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About AI Defense Tool
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the team and vision behind India's first AI-powered misinformation defense system. 
            Built with passion during the AI Innovation Challenge 2024.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 glass backdrop-blur-xl border-2 border-red-200 dark:border-red-800">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center space-x-2 text-red-600 dark:text-red-400">
                <Target className="w-6 h-6" />
                <span>{problemStatement.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {problemStatement.description}
              </p>
              
              <div>
                <h4 className="font-semibold mb-3">Key Challenges We're Addressing:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {problemStatement.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 glass backdrop-blur-xl border-2 border-green-200 dark:border-green-800">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center space-x-2 text-green-600 dark:text-green-400">
                <Lightbulb className="w-6 h-6" />
                <span>{solution.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800"
                  >
                    <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse group of passionate technologists united by the mission to combat misinformation in India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-6 text-center hover:shadow-elegant transition-all duration-300 glass backdrop-blur-sm group">
                  <CardContent className="p-0">
                    <motion.div
                      className="mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Avatar className="w-20 h-20 mx-auto mb-3">
                        <AvatarFallback className="text-lg gradient-hero text-white">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </motion.div>
                    
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-center space-x-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={`mailto:${member.social.email}`}>
                          <Mail className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathon Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 gradient-hero text-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center space-x-2 text-white">
                <Sparkles className="w-6 h-6" />
                <span>Hackathon Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold mb-2">{hackathonInfo.name}</h4>
                  <p className="text-sm opacity-90">{hackathonInfo.theme}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold mb-2">{hackathonInfo.duration}</h4>
                  <p className="text-sm opacity-90">Intensive Development</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold mb-2">Expert Judges</h4>
                  <p className="text-sm opacity-90">Industry + Academic Leaders</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 glass backdrop-blur-xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Code className="w-6 h-6" />
                <span>Technology Stack</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg border bg-muted/50"
                  >
                    <h4 className="font-semibold text-sm mb-2 text-primary">{tech.name}</h4>
                    <p className="text-xs text-muted-foreground">{tech.tech}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 glass backdrop-blur-xl border-2">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                Help us build a misinformation-free digital India. Whether you're a developer, 
                researcher, or concerned citizen, there's a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-hero">
                  <Heart className="w-5 h-5 mr-2" />
                  Support the Project
                </Button>
                <Button size="lg" variant="outline">
                  <Github className="w-5 h-5 mr-2" />
                  Contribute Code
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;