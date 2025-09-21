import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle,
  Globe,
  Filter,
  Search,
  RotateCcw,
  Zap,
  Star,
  Play,
  Languages
} from "lucide-react";

const Learn = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [completedCards, setCompletedCards] = useState<Set<number>>(new Set([0, 2]));
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");

  const learnCards = [
    {
      type: "clickbait" as const,
      title: "Spotting Clickbait",
      titleHi: "क्लिकबेट की पहचान",
      description: "Learn to identify sensationalized headlines designed to manipulate emotions and drive clicks without providing substantial information.",
      descriptionHi: "भावनाओं को प्रभावित करने और बिना वास्तविक जानकारी के क्लिक बढ़ाने के लिए बनाए गए सनसनीखेज शीर्षकों को पहचानना सीखें।",
      example: {
        before: "SHOCKING: This One Trick Will Make You Rich Overnight! Doctors Hate This!",
        beforeHi: "चौंकाने वाला: यह एक ट्रिक आपको रातों-रात अमीर बना देगी! डॉक्टर इससे नफरत करते हैं!",
        after: "Investment strategy article discusses long-term wealth building through diversified portfolios over 20+ years.",
        afterHi: "निवेश रणनीति लेख 20+ वर्षों में विविधीकृत पोर्टफोलियो के माध्यम से दीर्घकालिक धन निर्माण पर चर्चा करता है।",
        explanation: "Clickbait uses emotional triggers, exaggerated claims, and curiosity gaps. Real news provides specific, verifiable information upfront.",
        explanationHi: "क्लिकबेट भावनात्मक ट्रिगर, अतिशयोक्ति और जिज्ञासा की खाई का उपयोग करता है। वास्तविक समाचार शुरुआत में ही स्पष्ट, सत्यापित जानकारी प्रदान करते हैं।"
      },
      difficulty: "beginner" as const,
      estimatedTime: "5 min"
    },
    {
      type: "false-context" as const,
      title: "False Context Detection",
      titleHi: "गलत संदर्भ की पहचान",
      description: "Understand how real images or videos can be used in wrong contexts to spread misinformation about different events or places.",
      descriptionHi: "समझें कि कैसे वास्तविक छवियों या वीडियो का उपयोग विभिन्न घटनाओं या स्थानों के बारे में गलत संदर्भ में गलत सूचना फैलाने के लिए किया जा सकता है।",
      example: {
        before: "Breaking: Massive protests in Delhi against new policy (shows crowd from 2019 farmer protests)",
        beforeHi: "ब्रेकिंग: नई नीति के खिलाफ दिल्ली में बड़ा प्रदर्शन (2019 के किसान आंदोलन की भीड़ दिखाई गई)",
        after: "This image is from 2019 farmer protests, not current political demonstrations. Context verification is crucial.",
        afterHi: "यह छवि 2019 के किसान प्रदर्शन की है, वर्तमान राजनीतिक प्रदर्शन की नहीं। संदर्भ सत्यापन महत्वपूर्ण है।",
        explanation: "False context manipulation reuses authentic content in misleading situations. Always verify when and where media was originally captured.",
        explanationHi: "गलत संदर्भ हेरफेर प्रामाणिक सामग्री को भ्रामक स्थितियों में फिर से उपयोग करता है। हमेशा सत्यापित करें कि मीडिया मूल रूप से कब और कहाँ कैप्चर किया गया था।"
      },
      difficulty: "intermediate" as const,
      estimatedTime: "8 min"
    },
    {
      type: "cherry-picked" as const,
      title: "Cherry-Picked Statistics",
      titleHi: "चुनिंदा आंकड़े",
      description: "Recognize when data is selectively presented to support a narrative while ignoring contradictory evidence or broader context.",
      descriptionHi: "पहचानें कि कब डेटा को चुनिंदा रूप से प्रस्तुत किया जाता है ताकि विरोधाभासी साक्ष्य या व्यापक संदर्भ को नजरअंदाज करके एक कहानी का समर्थन किया जा सके।",
      example: {
        before: "Crime in City X increased 300% last month! (comparing to unusually low February numbers)",
        beforeHi: "शहर X में पिछले महीने अपराध 300% बढ़ गया! (असामान्य रूप से कम फरवरी के आंकड़ों से तुलना)",
        after: "Crime in City X shows seasonal variation; overall yearly trend remains stable when compared to historical averages.",
        afterHi: "शहर X में अपराध मौसमी भिन्नता दिखाता है; ऐतिहासिक औसत से तुलना करने पर समग्र वार्षिक रुझान स्थिर रहता है।",
        explanation: "Cherry-picking selects favorable data points while ignoring the full picture. Look for broader trends and comparative context.",
        explanationHi: "चेरी-पिकिंग पूरी तस्वीर को नजरअंदाज करते हुए अनुकूल डेटा बिंदुओं का चयन करती है। व्यापक रुझान और तुलनात्मक संदर्भ देखें।"
      },
      difficulty: "advanced" as const,
      estimatedTime: "12 min"
    },
    {
      type: "deepfake" as const,
      title: "Deepfake Awareness",
      titleHi: "डीपफेक जागरूकता",
      description: "Learn to spot AI-generated or manipulated audio and video content that appears authentic but is artificially created.",
      descriptionHi: "AI-जनरेटेड या हेरफेर किए गए ऑडियो और वीडियो सामग्री को पहचानना सीखें जो प्रामाणिक लगती है लेकिन कृत्रिम रूप से बनाई गई है।",
      example: {
        before: "Viral video of politician making controversial statement (AI-generated deepfake)",
        beforeHi: "राजनेता का विवादास्पद बयान देते हुए वायरल वीडियो (AI-जनरेटेड डीपफेक)",
        after: "Technical analysis reveals inconsistent facial movements, lighting artifacts, and audio-visual sync issues typical of deepfakes.",
        afterHi: "तकनीकी विश्लेषण असंगत चेहरे की गतिविधियां, प्रकाश संबंधी समस्याएं, और डीपफेक की विशिष्ट ऑडियो-विजुअल सिंक समस्याओं को प्रकट करता है।",
        explanation: "Deepfakes use AI to create realistic but fake content. Look for technical inconsistencies, verify through multiple sources, and check timing.",
        explanationHi: "डीपफेक AI का उपयोग करके वास्तविक लेकिन नकली सामग्री बनाते हैं। तकनीकी असंगतियों को देखें, कई स्रोतों से सत्यापित करें, और समय की जांच करें।"
      },
      difficulty: "advanced" as const,
      estimatedTime: "15 min"
    }
  ];

  const learningStats = [
    { 
      icon: <BookOpen className="w-6 h-6" />, 
      label: language === "hi" ? "पाठ पूर्ण" : "Lessons Completed", 
      value: `${completedCards.size}/${learnCards.length}`, 
      progress: (completedCards.size / learnCards.length) * 100 
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      label: language === "hi" ? "बैज अर्जित" : "Badges Earned", 
      value: "5", 
      progress: 100 
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      label: language === "hi" ? "पहचान सटीकता" : "Detection Accuracy", 
      value: "85%", 
      progress: 85 
    },
    { 
      icon: <Target className="w-6 h-6" />, 
      label: language === "hi" ? "साप्ताहिक लक्ष्य" : "Weekly Goal", 
      value: "3/5", 
      progress: 60 
    }
  ];

  const achievements = [
    { 
      title: language === "hi" ? "फैक्ट चेकर" : "Fact Checker", 
      description: language === "hi" ? "10 सामग्री सत्यापित की" : "Verified 10 pieces of content", 
      earned: true 
    },
    { 
      title: language === "hi" ? "पैटर्न स्पॉटर" : "Pattern Spotter", 
      description: language === "hi" ? "5 हेरफेर तकनीकों की पहचान की" : "Identified 5 manipulation techniques", 
      earned: true 
    },
    { 
      title: language === "hi" ? "स्रोत सत्यापनकर्ता" : "Source Validator", 
      description: language === "hi" ? "3 फैक्ट-चेकिंग साइटों से जांच की" : "Cross-checked with 3 fact-checking sites", 
      earned: true 
    },
    { 
      title: language === "hi" ? "कम्युनिटी हेल्पर" : "Community Helper", 
      description: language === "hi" ? "5 उपयोगकर्ताओं को गलत सूचना समझने में मदद की" : "Helped 5 users understand misinformation", 
      earned: false 
    },
    { 
      title: language === "hi" ? "विशेषज्ञ विश्लेषक" : "Expert Analyst", 
      description: language === "hi" ? "90% पहचान सटीकता हासिल की" : "Achieved 90% detection accuracy", 
      earned: false 
    }
  ];

  const filteredCards = filterDifficulty === "all" 
    ? learnCards 
    : learnCards.filter(card => card.difficulty === filterDifficulty);

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
            {language === "hi" ? "इंटरैक्टिव लर्निंग हब" : "Interactive Learning Hub"}
          </Badge>
          
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === "hi" ? "गलत सूचना की पहचान सीखें" : "Learn to Spot Misinformation"}
            </h1>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Languages className="w-4 h-4 mr-2" />
              {language === "en" ? "हिंदी" : "English"}
            </Button>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "hi" 
              ? "इंटरैक्टिव कार्ड जो आपको वास्तविक उदाहरणों के साथ हेरफेर तकनीकें सिखाते हैं। भ्रामक सामग्री के पीछे की सच्चाई देखने के लिए होवर करें या क्लिक करें।"
              : "Interactive cards that teach you manipulation techniques with real examples. Hover or click to flip and see the truth behind misleading content."
            }
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
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {language === "hi" ? "इंटरैक्टिव लर्न कार्ड" : "Interactive Learn Cards"}
                </h2>
                <p className="text-muted-foreground">
                  {language === "hi" 
                    ? "हेरफेर तकनीकों के वास्तविक उदाहरण देखने के लिए किसी भी कार्ड को क्लिक करें"
                    : "Click any card to flip and see real examples of manipulation techniques"
                  }
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <select
                    value={filterDifficulty}
                    onChange={(e) => setFilterDifficulty(e.target.value)}
                    className="bg-background border border-border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">{language === "hi" ? "सभी स्तर" : "All Levels"}</option>
                    <option value="beginner">{language === "hi" ? "आसान" : "Beginner"}</option>
                    <option value="intermediate">{language === "hi" ? "मध्यम" : "Intermediate"}</option>
                    <option value="advanced">{language === "hi" ? "कठिन" : "Advanced"}</option>
                  </select>
                </div>
                
                <Badge variant="outline" className="text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  {completedCards.size}/{learnCards.length} {language === "hi" ? "पूर्ण" : "Complete"}
                </Badge>
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={filterDifficulty}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredCards.map((card, index) => (
                <motion.div 
                  key={`${card.type}-${language}`} 
                  variants={itemVariants}
                  onClick={() => {
                    const originalIndex = learnCards.findIndex(c => c.type === card.type);
                    setCompletedCards(prev => new Set([...prev, originalIndex]));
                  }}
                >
                  <LearnCard 
                    {...card} 
                    completed={completedCards.has(learnCards.findIndex(c => c.type === card.type))}
                    language={language}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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