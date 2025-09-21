import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CredibilityCard from "@/components/ui/credibility-card";
import { 
  CheckCircle, 
  Search, 
  Zap, 
  Globe, 
  Share2, 
  AlertTriangle,
  Eye,
  Map,
  Target,
  TrendingUp,
  Shield,
  Brain,
  Smartphone,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

const Features = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const features = [
    {
      id: "credibility-check",
      icon: <CheckCircle className="w-6 h-6" />,
      title: "One-Tap Credibility Check",
      description: "Instant score with verdict and confidence badge",
      color: "bg-green-500",
      demo: "credibility"
    },
    {
      id: "evidence-summary",
      icon: <Search className="w-6 h-6" />,
      title: "Evidence Summary",
      description: "3 citations with timestamps and source verification",
      color: "bg-blue-500",
      demo: "evidence"
    },
    {
      id: "entity-extraction",
      icon: <Target className="w-6 h-6" />,
      title: "Claim & Entity Extraction",
      description: "Who/What/Where/When analysis with confidence scores",
      color: "bg-purple-500",
      demo: "entities"
    },
    {
      id: "fact-check-match",
      icon: <Shield className="w-6 h-6" />,
      title: "Fact-Check Match",
      description: "AltNews, BoomLive database cross-referencing",
      color: "bg-orange-500",
      demo: "factcheck"
    },
    {
      id: "learn-cards",
      icon: <Brain className="w-6 h-6" />,
      title: "Learn Cards Preview",
      description: "Educational content about manipulation techniques",
      color: "bg-indigo-500",
      demo: "learn"
    },
    {
      id: "multilingual",
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual Toggle",
      description: "Seamless English/Hindi switching with cultural context",
      color: "bg-teal-500",
      demo: "language"
    },
    {
      id: "shareable-results",
      icon: <Share2 className="w-6 h-6" />,
      title: "Shareable Result Card",
      description: "WhatsApp-ready format for viral fact-checking",
      color: "bg-pink-500",
      demo: "share"
    },
    {
      id: "crisis-mode",
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Crisis Mode Verification",
      description: "Government updates pinned during emergencies",
      color: "bg-red-500",
      demo: "crisis"
    },
    {
      id: "bias-awareness",
      icon: <Eye className="w-6 h-6" />,
      title: "Bias Awareness Lens",
      description: "Flip view to reveal hidden biases and perspectives",
      color: "bg-yellow-500",
      demo: "bias"
    },
    {
      id: "trust-heatmap",
      icon: <Map className="w-6 h-6" />,
      title: "Trust Heatmap",
      description: "India map with regional misinformation hotspots",
      color: "bg-emerald-500",
      demo: "heatmap"
    },
    {
      id: "deepfake-detector",
      icon: <Smartphone className="w-6 h-6" />,
      title: "Deepfake Spotter Lite",
      description: "AI-powered detection for manipulated media",
      color: "bg-violet-500",
      demo: "deepfake"
    },
    {
      id: "habit-tracker",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Habit Tracker ⭐",
      description: "Gamified verification streak counter",
      color: "bg-amber-500",
      demo: "habits"
    }
  ];

  const demoData = {
    credibility: {
      score: 32,
      verdict: "misleading" as const,
      title: "Free Electricity in Delhi - Viral Forward",
      summary: "This forward contains misleading information about electricity subsidies. While Delhi does provide power subsidies, the specific claims about '100% free electricity' are exaggerated and lack important context.",
      evidence: [
        {
          source: "AltNews",
          url: "https://altnews.in",
          timestamp: "2 hours ago",
          excerpt: "Delhi's electricity subsidy is capped at 200 units for most consumers..."
        },
        {
          source: "BoomLive",
          url: "https://boomlive.in",
          timestamp: "1 day ago", 
          excerpt: "The viral message omits crucial eligibility criteria and consumption limits..."
        },
        {
          source: "Government of Delhi",
          url: "https://delhi.gov.in",
          timestamp: "3 days ago",
          excerpt: "Official policy states subsidy applies only to residential connections under..."
        }
      ],
      entities: [
        { type: "place" as const, name: "Delhi", confidence: 95 },
        { type: "organization" as const, name: "AAP Government", confidence: 87 },
        { type: "person" as const, name: "Arvind Kejriwal", confidence: 78 }
      ],
      language: language
    }
  };

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
            Interactive Features Demo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful AI Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience judge-ready demonstrations of our misinformation defense capabilities. 
            Click any feature to see it in action!
          </p>
        </motion.div>

        {/* Language Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-2 p-1 bg-muted rounded-lg">
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
            >
              🇺🇸 English
            </Button>
            <Button
              variant={language === "hi" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("hi")}
            >
              🇮🇳 हिंदी
            </Button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <Card 
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-elegant group ${
                  activeDemo === feature.demo ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
                onClick={() => setActiveDemo(activeDemo === feature.demo ? null : feature.demo)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <div className="flex items-center space-x-2">
                      {feature.title.includes("⭐") && (
                        <Badge variant="secondary" className="text-xs">Judge Delighter</Badge>
                      )}
                      <Button variant="ghost" size="sm">
                        {activeDemo === feature.demo ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                  {activeDemo === feature.demo && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t"
                    >
                      <Badge className="w-full justify-center gradient-hero text-white">
                        ✨ Demo Active
                      </Badge>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Demo Section */}
        <AnimatePresence mode="wait">
          {activeDemo && (
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="mb-16"
            >
              <Card className="p-6 glass backdrop-blur-xl border-2 border-primary/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Live Feature Demo</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setActiveDemo(null)}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                    <Badge className="gradient-hero text-white">
                      {features.find(f => f.demo === activeDemo)?.title}
                    </Badge>
                  </div>
                </div>

                {activeDemo === "credibility" && (
                  <CredibilityCard {...demoData.credibility} showAnimation={true} />
                )}

                {activeDemo === "evidence" && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">Evidence Sources Found</h4>
                    {demoData.credibility.evidence.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="p-4 rounded-lg border bg-muted/50"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{item.source}</span>
                          <Badge variant="outline">{item.timestamp}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeDemo === "language" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">🇺🇸 English Version</h4>
                      <div className="p-4 rounded-lg border">
                        <p className="text-sm">
                          "Breaking: Delhi announces 100% free electricity for all residents. 
                          Share this great news with everyone!"
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">🇮🇳 हिंदी Version</h4>
                      <div className="p-4 rounded-lg border">
                        <p className="text-sm">
                          "खुशखबरी: दिल्ली में सभी लोगों के लिए 100% मुफ्त बिजली की घोषणा। 
                          इस अच्छी खबर को सभी के साथ शेयर करें!"
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === "habits" && (
                  <div className="text-center space-y-6">
                    <motion.div
                      className="w-32 h-32 mx-auto gradient-hero rounded-full flex items-center justify-center text-white"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold">7</div>
                        <div className="text-xs">Day Streak</div>
                      </div>
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">🔥 You're on fire!</h4>
                      <p className="text-muted-foreground">
                        You've verified 7 forwards this week. Keep building healthy information habits!
                      </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <Badge className="score-high">Fact Checker</Badge>
                      <Badge className="score-medium">Truth Seeker</Badge>
                      <Badge className="score-low">Just Started</Badge>
                    </div>
                  </div>
                )}

                {(!["credibility", "evidence", "language", "habits"].includes(activeDemo)) && (
                  <div className="text-center py-12">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center text-white"
                    >
                      <Zap className="w-8 h-8" />
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-2">Feature Demo Coming Soon</h4>
                    <p className="text-muted-foreground">
                      This feature demonstration is being prepared for the live demo.
                    </p>
                  </div>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 gradient-hero text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for the Full Experience?</h3>
            <p className="text-lg mb-6 opacity-90">
              See all features working together in our comprehensive demo narrative
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="/demo">View Complete Demo →</a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;