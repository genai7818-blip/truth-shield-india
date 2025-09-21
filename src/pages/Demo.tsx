import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import CredibilityCard from "@/components/ui/credibility-card";
import LearnCard from "@/components/ui/learn-card";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  Settings,
  TrendingUp,
  Users,
  Shield,
  CheckCircle,
  AlertTriangle,
  Brain,
  BarChart3,
  Smartphone,
  Eye,
  Sparkles
} from "lucide-react";

interface DemoStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  emoji: string;
  component: React.ReactNode;
  duration: number;
}

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const demoSteps: DemoStep[] = [
    {
      id: 1,
      title: "Paste Viral Forward",
      description: "User receives suspicious content and wants verification",
      icon: <Smartphone className="w-6 h-6" />,
      emoji: "📱",
      duration: 3000,
      component: (
        <Card className="max-w-md mx-auto shadow-elegant border-2">
          <CardHeader>
            <CardTitle className="text-lg">WhatsApp Forward Received</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-200 dark:border-green-800 mb-4">
              <p className="text-sm">
                🚨 <strong>BREAKING NEWS:</strong> Delhi Government announces 100% FREE ELECTRICITY for ALL residents! 
                No more electricity bills! Share this amazing news with everyone IMMEDIATELY! 
                Don't let this opportunity go! ⚡🔥
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Forwarded many times • Shared in 50+ groups
              </p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            >
              <Button className="w-full gradient-hero">
                <Shield className="w-4 h-4 mr-2" />
                Verify with AI Defense
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      )
    },
    {
      id: 2,
      title: "Instant Analysis Result",
      description: "AI provides credibility score, verdict, and evidence in under 2 seconds",
      icon: <CheckCircle className="w-6 h-6" />,
      emoji: "⚡",
      duration: 4000,
      component: (
        <CredibilityCard
          score={32}
          verdict="misleading"
          title="Delhi Free Electricity Claim - Analysis"
          summary="This forward contains misleading information about electricity subsidies. While Delhi does provide power subsidies, the specific claims about '100% free electricity for ALL residents' are exaggerated and omit crucial eligibility criteria and consumption limits."
          evidence={[
            {
              source: "AltNews Fact Check",
              url: "https://altnews.in",
              timestamp: "2 hours ago",
              excerpt: "Delhi's electricity subsidy is capped at 200 units for residential consumers and has specific eligibility criteria..."
            },
            {
              source: "Government of Delhi Official",
              url: "https://delhi.gov.in",
              timestamp: "1 day ago",
              excerpt: "The subsidy applies only to residential connections under specific consumption limits and is not 100% free..."
            },
            {
              source: "BoomLive Verification",
              url: "https://boomlive.in",
              timestamp: "3 days ago",
              excerpt: "The viral message omits important details about eligibility criteria and consumption thresholds..."
            }
          ]}
          entities={[
            { type: "place", name: "Delhi", confidence: 95 },
            { type: "organization", name: "Delhi Government", confidence: 87 },
            { type: "person", name: "Arvind Kejriwal", confidence: 78 }
          ]}
          language="en"
          showAnimation={true}
        />
      )
    },
    {
      id: 3,
      title: "Educational Insight",
      description: "User taps 'Why Misleading?' to understand manipulation techniques",
      icon: <Brain className="w-6 h-6" />,
      emoji: "🧠",
      duration: 4000,
      component: (
        <div className="max-w-2xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <Badge className="gradient-hero text-white mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Learn Card Activated
            </Badge>
          </motion.div>
          
          <LearnCard
            type="false-context"
            title="Emotional Manipulation & Urgency Tactics"
            description="This forward uses multiple manipulation techniques to bypass critical thinking and encourage immediate sharing without verification."
            example={{
              before: "🚨 BREAKING NEWS: 100% FREE ELECTRICITY! Share IMMEDIATELY! Don't miss this opportunity! ⚡🔥",
              beforeHi: "🚨 ब्रेकिंग न्यूज़: 100% मुफ्त बिजली! तुरंत शेयर करें! यह अवसर मत चूकें! ⚡🔥",
              after: "Delhi offers electricity subsidies up to 200 units for eligible residential consumers under specific terms and conditions.",
              afterHi: "दिल्ली विशिष्ट नियमों और शर्तों के तहत पात्र आवासीय उपभोक्ताओं को 200 यूनिट तक बिजली सब्सिडी प्रदान करती है।",
              explanation: "The original uses ALL CAPS, urgency words, excessive emojis, and social pressure to create fear of missing out (FOMO). It also exaggerates partial truths to make them sound more dramatic and shareable.",
              explanationHi: "मूल में बड़े अक्षर, तात्कालिकता के शब्द, अत्यधिक इमोजी और सामाजिक दबाव का उपयोग करके FOMO (छूटने का डर) पैदा किया गया है।"
            }}
            difficulty="intermediate"
            estimatedTime="3 min"
          />
        </div>
      )
    },
    {
      id: 4,
      title: "Share Verified Result",
      description: "User gets WhatsApp-ready format to educate their network",
      icon: <Share2 className="w-6 h-6" />,
      emoji: "📤",
      duration: 3000,
      component: (
        <div className="max-w-md mx-auto space-y-6">
          <Card className="shadow-elegant border-2">
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Share2 className="w-5 h-5" />
                <span>WhatsApp Share Format</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg border border-green-200 dark:border-green-800 space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
                    32
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">MISLEADING</Badge>
                </div>
                
                <p className="text-sm font-medium">
                  ⚠️ <strong>Fact-Check Alert:</strong> Delhi Free Electricity Claim
                </p>
                
                <p className="text-xs text-muted-foreground">
                  AI Analysis: This forward contains misleading information. Delhi does offer electricity subsidies, but NOT 100% free for everyone.
                </p>
                
                <div className="text-xs space-y-1">
                  <p><strong>Evidence:</strong></p>
                  <p>• AltNews: Subsidy capped at 200 units</p>
                  <p>• Delhi Govt: Specific eligibility criteria</p>
                  <p>• BoomLive: Missing crucial context</p>
                </div>
                
                <p className="text-xs font-medium text-blue-600">
                  🔍 Verified by AI Defense Tool
                  <br />Always verify before sharing! 🛡️
                </p>
              </div>
              
              <div className="flex space-x-2 mt-4">
                <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                  Share on WhatsApp
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Copy Text
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 5,
      title: "Admin Dashboard View",
      description: "Behind-the-scenes look at moderation and analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      emoji: "📊",
      duration: 3000,
      component: (
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <Badge className="gradient-hero text-white mb-4">
              <Settings className="w-4 h-4 mr-2" />
              Admin Dashboard Preview
            </Badge>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Real-time Stats */}
            <Card className="glass backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Today's Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Content Analyzed</span>
                    <span className="font-bold text-primary">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Misleading Flagged</span>
                    <span className="font-bold text-orange-600">342</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Users Educated</span>
                    <span className="font-bold text-green-600">2,891</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="glass backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Trending Misinformation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Delhi Electricity", "Vaccine Side Effects", "Railway Scams"].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between text-xs">
                    <span>{topic}</span>
                    <Badge variant="outline" className="text-xs">
                      +{(index + 1) * 127}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Regional Insights */}
            <Card className="glass backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Regional Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { region: "Delhi", activity: 89 },
                  { region: "Mumbai", activity: 76 },
                  { region: "Bangalore", activity: 64 }
                ].map((region, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>{region.region}</span>
                      <span>{region.activity}%</span>
                    </div>
                    <Progress value={region.activity} className="h-1" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStepChange = (direction: "prev" | "next") => {
    if (direction === "prev" && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (direction === "next" && currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium gradient-hero text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            Judge Walkthrough Demo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Demo Narrative
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the full user journey from receiving suspicious content to sharing verified results. 
            This interactive demo showcases our complete misinformation defense workflow.
          </p>
        </motion.div>

        {/* Demo Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <Card className="p-6 glass backdrop-blur-xl">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Demo Progress</span>
                <span className="text-sm text-muted-foreground">
                  Step {currentStep + 1} of {demoSteps.length}
                </span>
              </div>
              <Progress value={(currentStep + 1) / demoSteps.length * 100} className="h-2" />
            </div>

            {/* Step Navigation */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleStepChange("prev")}
                  disabled={currentStep === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePlayPause}
                  className="min-w-[100px]"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleStepChange("next")}
                  disabled={currentStep === demoSteps.length - 1}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <Button variant="ghost" size="sm" onClick={handleReset}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Demo
              </Button>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center space-x-2 mb-6">
              {demoSteps.map((step, index) => (
                <motion.button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    index === currentStep
                      ? 'gradient-hero text-white shadow-glow'
                      : index < currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index < currentStep ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step.emoji
                  )}
                </motion.button>
              ))}
            </div>

            {/* Current Step Info */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-8 h-8 gradient-hero rounded-full flex items-center justify-center text-white">
                  {demoSteps[currentStep].icon}
                </div>
                <h3 className="text-xl font-bold">{demoSteps[currentStep].title}</h3>
              </div>
              <p className="text-muted-foreground">{demoSteps[currentStep].description}</p>
            </div>
          </Card>
        </motion.div>

        {/* Demo Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {demoSteps[currentStep].component}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Demo Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 gradient-hero text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Demo Complete! 🎉</h3>
            <p className="text-lg mb-6 opacity-90">
              You've experienced the complete AI Defense workflow: from viral content verification 
              to educational insights and verified sharing. This is how we're building better 
              information habits across India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">⚡ 2s</div>
                <div className="text-sm opacity-90">Analysis Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">🎯 95%</div>
                <div className="text-sm opacity-90">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">🌐 12</div>
                <div className="text-sm opacity-90">Languages</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={handleReset}>
                <RotateCcw className="w-5 h-5 mr-2" />
                Watch Again
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="/features">
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Features
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Demo;