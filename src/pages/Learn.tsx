import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import LearnCard from "@/components/ui/learn-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  BookOpen, 
  Award, 
  TrendingUp,
  Target,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

const Learn = () => {
  const learnCards = [
    {
      type: "clickbait" as const,
      title: "Spotting Clickbait",
      description: "Learn to identify sensationalized headlines designed to manipulate emotions and drive clicks without providing substantial information.",
      example: {
        before: "SHOCKING: This One Trick Will Make You Rich Overnight! Doctors Hate This!",
        after: "Investment strategy article discusses long-term wealth building through diversified portfolios over 20+ years.",
        explanation: "Clickbait uses emotional triggers, exaggerated claims, and curiosity gaps. Real news provides specific, verifiable information upfront."
      },
      difficulty: "beginner" as const,
      estimatedTime: "5 min"
    },
    {
      type: "false-context" as const,
      title: "False Context Detection",
      description: "Understand how real images or videos can be used in wrong contexts to spread misinformation about different events or places.",
      example: {
        before: "Breaking: Massive protests in Delhi against new policy (shows crowd from 2019 farmer protests)",
        after: "This image is from 2019 farmer protests, not current political demonstrations. Context verification is crucial.",
        explanation: "False context manipulation reuses authentic content in misleading situations. Always verify when and where media was originally captured."
      },
      difficulty: "intermediate" as const,
      estimatedTime: "8 min"
    },
    {
      type: "cherry-picked" as const,
      title: "Cherry-Picked Statistics",
      description: "Recognize when data is selectively presented to support a narrative while ignoring contradictory evidence or broader context.",
      example: {
        before: "Crime in City X increased 300% last month! (comparing to unusually low February numbers)",
        after: "Crime in City X shows seasonal variation; overall yearly trend remains stable when compared to historical averages.",
        explanation: "Cherry-picking selects favorable data points while ignoring the full picture. Look for broader trends and comparative context."
      },
      difficulty: "advanced" as const,
      estimatedTime: "12 min"
    },
    {
      type: "deepfake" as const,
      title: "Deepfake Awareness",
      description: "Learn to spot AI-generated or manipulated audio and video content that appears authentic but is artificially created.",
      example: {
        before: "Viral video of politician making controversial statement (AI-generated deepfake)",
        after: "Technical analysis reveals inconsistent facial movements, lighting artifacts, and audio-visual sync issues typical of deepfakes.",
        explanation: "Deepfakes use AI to create realistic but fake content. Look for technical inconsistencies, verify through multiple sources, and check timing."
      },
      difficulty: "advanced" as const,
      estimatedTime: "15 min"
    }
  ];

  const learningStats = [
    { icon: <BookOpen className="w-6 h-6" />, label: "Lessons Completed", value: "12/20", progress: 60 },
    { icon: <Award className="w-6 h-6" />, label: "Badges Earned", value: "5", progress: 100 },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Detection Accuracy", value: "85%", progress: 85 },
    { icon: <Target className="w-6 h-6" />, label: "Weekly Goal", value: "3/5", progress: 60 }
  ];

  const achievements = [
    { title: "Fact Checker", description: "Verified 10 pieces of content", earned: true },
    { title: "Pattern Spotter", description: "Identified 5 manipulation techniques", earned: true },
    { title: "Source Validator", description: "Cross-checked with 3 fact-checking sites", earned: true },
    { title: "Community Helper", description: "Helped 5 users understand misinformation", earned: false },
    { title: "Expert Analyst", description: "Achieved 90% detection accuracy", earned: false }
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
            <Brain className="w-4 h-4 mr-2" />
            Interactive Learning Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learn to Spot Misinformation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive cards that teach you manipulation techniques with real examples. 
            Hover or click to flip and see the truth behind misleading content.
          </p>
        </motion.div>

        {/* Learning Progress Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Card className="p-6 glass backdrop-blur-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Your Learning Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {learningStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center space-y-3"
                  >
                    <div className="w-12 h-12 mx-auto gradient-hero rounded-full flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                      <Progress value={stat.progress} className="h-2" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Learn Cards Grid */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Interactive Learn Cards</h2>
            <p className="text-muted-foreground">
              Click any card to flip and see real examples of manipulation techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learnCards.map((card, index) => (
              <motion.div key={index} variants={itemVariants}>
                <LearnCard {...card} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Learning Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border ${
                      achievement.earned 
                        ? 'bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800' 
                        : 'bg-muted/50 border-muted'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.earned 
                          ? 'bg-green-500 text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {achievement.earned ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Award className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Learning Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-6 gradient-hero text-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-white">
                <Brain className="w-5 h-5" />
                <span>Pro Tips for Detection</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">🔍 Quick Verification Steps</h4>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>• Check the source and date</li>
                    <li>• Look for emotional language</li>
                    <li>• Verify with fact-checkers</li>
                    <li>• Cross-reference multiple sources</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">🎯 Red Flags to Watch</h4>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>• Too good/bad to be true</li>
                    <li>• Urgent "share immediately"</li>
                    <li>• Missing source attribution</li>
                    <li>• Extreme emotional reactions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 glass backdrop-blur-xl border-2">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Test Your Skills?</h3>
              <p className="text-muted-foreground mb-6">
                Practice what you've learned with our interactive chatbot or join the community discussion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="gradient-hero">
                  <a href="/chatbot">
                    <Brain className="w-5 h-5 mr-2" />
                    Practice with AI
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/community">
                    <Users className="w-5 h-5 mr-2" />
                    Join Community
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Learn;