import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Share2, 
  TrendingUp,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Flag,
  ThumbsUp,
  Eye,
  Globe
} from "lucide-react";

interface CommunityPost {
  id: string;
  title: string;
  content: string;
  score: number;
  verdict: "true" | "false" | "misleading" | "unverified";
  author: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  language: "en" | "hi";
  region: string;
  category: "trending" | "regional" | "crisis" | "general";
}

const Community = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const communityPosts: CommunityPost[] = [
    {
      id: "1",
      title: "Free Electricity in Delhi - Viral Forward",
      content: "Analysis of the widely circulated message about 100% free electricity in Delhi. Found to be misleading due to missing eligibility criteria and consumption limits.",
      score: 32,
      verdict: "misleading",
      author: "FactChecker_Delhi",
      timestamp: "2 hours ago",
      likes: 234,
      comments: 45,
      shares: 67,
      tags: ["Delhi", "Electricity", "Government Policy"],
      language: "en",
      region: "Delhi",
      category: "trending"
    },
    {
      id: "2", 
      title: "कोविड वैक्सीन के बारे में गलत जानकारी",
      content: "सोशल मीडिया पर फैल रही वैक्सीन के साइड इफेक्ट्स की गलत जानकारी का विश्लेषण। WHO की रिपोर्ट के अनुसार अधिकांश दावे निराधार हैं।",
      score: 15,
      verdict: "false",
      author: "HealthVerifier_IN",
      timestamp: "4 hours ago",
      likes: 456,
      comments: 89,
      shares: 123,
      tags: ["वैक्सीन", "स्वास्थ्य", "WHO"],
      language: "hi",
      region: "Maharashtra",
      category: "general"
    },
    {
      id: "3",
      title: "Deepfake Video of Celebrity - Detected",
      content: "AI-generated video of a Bollywood celebrity making political statements. Technical analysis reveals facial inconsistencies and audio-visual sync issues.",
      score: 8,
      verdict: "false",
      author: "TechDetective",
      timestamp: "6 hours ago",
      likes: 789,
      comments: 156,
      shares: 234,
      tags: ["Deepfake", "Celebrity", "AI Detection"],
      language: "en",
      region: "Mumbai",
      category: "trending"
    },
    {
      id: "4",
      title: "Cyclone Warning - Government Advisory",
      content: "Verified official advisory from IMD about approaching cyclone. All evacuation procedures and safety guidelines confirmed through official channels.",
      score: 92,
      verdict: "true",
      author: "CrisisResponse_Team",
      timestamp: "1 hour ago",
      likes: 1234,
      comments: 67,
      shares: 567,
      tags: ["Weather", "Emergency", "IMD"],
      language: "en",
      region: "Odisha",
      category: "crisis"
    },
    {
      id: "5",
      title: "Railway Ticket Booking Scam Alert",
      content: "Fake IRCTC websites asking for OTP and bank details. Multiple users reported unauthorized transactions. Always use official irctc.co.in website.",
      score: 25,
      verdict: "misleading",
      author: "CyberSafety_India",
      timestamp: "8 hours ago",
      likes: 345,
      comments: 78,
      shares: 89,
      tags: ["Scam", "IRCTC", "Cybersecurity"],
      language: "en",
      region: "All India",
      category: "regional"
    },
    {
      id: "6",
      title: "किसान आंदोलन की तस्वीरें - पुराने दावे",
      content: "2019 के किसान प्रदर्शन की तस्वीरों को हाल की घटनाओं के रूप में फैलाया जा रहा है। मेटाडेटा विश्लेषण से पुष्टि हुई।",
      score: 28,
      verdict: "misleading",
      author: "PhotoVerifier",
      timestamp: "12 hours ago",
      likes: 567,
      comments: 234,
      shares: 123,
      tags: ["किसान", "तस्वीर", "संदर्भ"],
      language: "hi",
      region: "Punjab",
      category: "regional"
    }
  ];

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "true":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "false":
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case "misleading":
        return <Flag className="w-4 h-4 text-orange-600" />;
      default:
        return <Eye className="w-4 h-4 text-blue-600" />;
    }
  };

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "true":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "false":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "misleading":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-600 font-bold";
    if (score >= 40) return "text-orange-600 font-bold";
    return "text-red-600 font-bold";
  };

  const filteredPosts = communityPosts.filter(post => {
    const matchesFilter = filter === "all" || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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
          className="text-center mb-12"
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium gradient-hero text-white">
            <Users className="w-4 h-4 mr-2" />
            Community Verification Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Community Fact-Check Feed
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time community-driven verification of viral content. See what others are checking, 
            share your findings, and learn from collective intelligence.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { icon: <Eye className="w-5 h-5" />, label: "Posts Today", value: "156" },
            { icon: <Users className="w-5 h-5" />, label: "Active Users", value: "2.3K" },
            { icon: <CheckCircle className="w-5 h-5" />, label: "Verified", value: "89%" },
            { icon: <TrendingUp className="w-5 h-5" />, label: "Trending", value: "12" }
          ].map((stat, index) => (
            <Card key={index} className="p-4 text-center glass backdrop-blur-sm">
              <div className="w-10 h-10 mx-auto mb-2 gradient-hero rounded-full flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search posts, tags, or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Posts</SelectItem>
              <SelectItem value="trending">🔥 Trending</SelectItem>
              <SelectItem value="regional">📍 Regional</SelectItem>
              <SelectItem value="crisis">🚨 Crisis Mode</SelectItem>
              <SelectItem value="general">📰 General</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Posts Feed */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map((post, index) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="hover:shadow-elegant transition-all duration-300 glass backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        post.score >= 70 ? 'bg-green-500' : 
                        post.score >= 40 ? 'bg-orange-500' : 'bg-red-500'
                      }`}>
                        {post.score}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          {getVerdictIcon(post.verdict)}
                          <Badge className={getVerdictColor(post.verdict)}>
                            {post.verdict.toUpperCase()}
                          </Badge>
                          <Badge className={post.language === "en" ? "lang-en" : "lang-hi"}>
                            {post.language === "en" ? "🇺🇸 EN" : "🇮🇳 HI"}
                          </Badge>
                          {post.category === "crisis" && (
                            <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                              🚨 CRISIS
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.content}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Metadata */}
                  <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs bg-primary text-white">
                            {post.author[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.timestamp}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{post.region}</span>
                      </div>
                    </div>
                    
                    {/* Engagement */}
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </motion.div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 gradient-hero text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Join the Verification Community</h3>
            <p className="text-lg mb-6 opacity-90">
              Help build India's largest community-driven fact-checking network. 
              Share your findings, learn from others, and combat misinformation together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Start Contributing
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Globe className="w-5 h-5 mr-2" />
                View Guidelines
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;