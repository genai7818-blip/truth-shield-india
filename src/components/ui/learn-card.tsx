import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  AlertTriangle, 
  BarChart3, 
  Image as ImageIcon,
  ChevronRight,
  BookOpen,
  Lightbulb,
  RotateCcw,
  Clock,
  CheckCircle,
  Play
} from "lucide-react";

interface LearnCardProps {
  type: "clickbait" | "false-context" | "cherry-picked" | "deepfake";
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  example: {
    before: string;
    beforeHi: string;
    after: string;
    afterHi: string;
    explanation: string;
    explanationHi: string;
  };
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  completed?: boolean;
  language: "en" | "hi";
}

const LearnCard = ({
  type,
  title,
  titleHi,
  description,
  descriptionHi,
  example,
  difficulty,
  estimatedTime,
  completed = false,
  language = "en"
}: LearnCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "clickbait":
        return <Eye className="w-6 h-6" />;
      case "false-context":
        return <AlertTriangle className="w-6 h-6" />;
      case "cherry-picked":
        return <BarChart3 className="w-6 h-6" />;
      case "deepfake":
        return <ImageIcon className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "clickbait":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800";
      case "false-context":
        return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/50 dark:text-orange-300 dark:border-orange-800";
      case "cherry-picked":
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800";
      case "deepfake":
        return "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/50 dark:text-green-300 dark:border-green-800";
      case "intermediate":
        return "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/50 dark:text-yellow-300 dark:border-yellow-800";
      case "advanced":
        return "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const currentTitle = language === "hi" ? titleHi : title;
  const currentDescription = language === "hi" ? descriptionHi : description;
  const currentExample = {
    before: language === "hi" ? example.beforeHi : example.before,
    after: language === "hi" ? example.afterHi : example.after,
    explanation: language === "hi" ? example.explanationHi : example.explanation
  };

  return (
    <motion.div
      className="group perspective-1000"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative w-full h-96 cursor-pointer preserve-3d transition-all duration-700 ease-in-out"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 backface-hidden shadow-elegant border-2 bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-xl transition-all duration-300 group-hover:shadow-glow">
          <CardContent className="p-6 h-full flex flex-col relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary/20 to-transparent" />
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className={`p-4 rounded-2xl border ${getTypeColor(type)} transition-all duration-300 group-hover:scale-110`}>
                {getTypeIcon(type)}
              </div>
              <div className="flex flex-col space-y-2">
                {completed && (
                  <Badge className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950/50 dark:text-green-300 dark:border-green-800 self-end">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {language === "hi" ? "पूर्ण" : "Completed"}
                  </Badge>
                )}
                <div className="flex space-x-2">
                  <Badge className={`border ${getDifficultyColor(difficulty)}`}>
                    {language === "hi" ? 
                      (difficulty === "beginner" ? "आसान" : difficulty === "intermediate" ? "मध्यम" : "कठिन") 
                      : difficulty}
                  </Badge>
                  <Badge variant="outline" className="border-muted">
                    <Clock className="w-3 h-3 mr-1" />
                    {estimatedTime}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-foreground leading-tight">
                {currentTitle}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed line-clamp-4">
                {currentDescription}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50 relative z-10">
              <div className="flex items-center text-sm text-muted-foreground">
                <Play className="w-4 h-4 mr-2 text-primary" />
                {language === "hi" ? "उदाहरण देखने के लिए क्लिक करें" : "Click to see example"}
              </div>
              <motion.div
                animate={{ x: isFlipped ? 0 : [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card 
          className="absolute inset-0 shadow-elegant border-2 bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-xl"
          style={{ transform: "rotateY(180deg)" }}
        >
          <CardContent className="p-6 h-full flex flex-col relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-secondary/20 to-transparent" />
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <Badge className={`border ${getTypeColor(type)}`}>
                <BookOpen className="w-3 h-3 mr-1" />
                {language === "hi" ? "वास्तविक उदाहरण" : "Real Example"}
              </Badge>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="hover:bg-muted/50"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {/* Examples */}
            <div className="space-y-4 flex-1 relative z-10 overflow-y-auto">
              <div className="group/example">
                <h4 className="font-semibold text-sm text-red-600 dark:text-red-400 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  {language === "hi" ? "❌ भ्रामक" : "❌ MISLEADING"}
                </h4>
                <div className="bg-red-50/80 dark:bg-red-950/30 p-4 rounded-xl border border-red-200/50 dark:border-red-800/50 transition-all duration-300 group-hover/example:bg-red-50 dark:group-hover/example:bg-red-950/50">
                  <p className="text-sm text-red-800 dark:text-red-200 leading-relaxed">
                    {currentExample.before}
                  </p>
                </div>
              </div>

              <div className="group/example">
                <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {language === "hi" ? "✅ वास्तविकता" : "✅ REALITY"}
                </h4>
                <div className="bg-green-50/80 dark:bg-green-950/30 p-4 rounded-xl border border-green-200/50 dark:border-green-800/50 transition-all duration-300 group-hover/example:bg-green-50 dark:group-hover/example:bg-green-950/50">
                  <p className="text-sm text-green-800 dark:text-green-200 leading-relaxed">
                    {currentExample.after}
                  </p>
                </div>
              </div>

              <div className="group/example">
                <h4 className="font-semibold text-sm text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {language === "hi" ? "💡 यह क्यों काम करता है" : "💡 WHY IT WORKS"}
                </h4>
                <div className="bg-blue-50/80 dark:bg-blue-950/30 p-4 rounded-xl border border-blue-200/50 dark:border-blue-800/50 transition-all duration-300 group-hover/example:bg-blue-50 dark:group-hover/example:bg-blue-950/50">
                  <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                    {currentExample.explanation}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default LearnCard;