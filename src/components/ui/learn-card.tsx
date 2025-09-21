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
  Lightbulb
} from "lucide-react";

interface LearnCardProps {
  type: "clickbait" | "false-context" | "cherry-picked" | "deepfake";
  title: string;
  description: string;
  example: {
    before: string;
    after: string;
    explanation: string;
  };
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
}

const LearnCard = ({
  type,
  title,
  description,
  example,
  difficulty,
  estimatedTime
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
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "false-context":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "cherry-picked":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "deepfake":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <motion.div
      className="perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative w-full h-80 preserve-3d transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 backface-hidden shadow-elegant border-2 glass backdrop-blur-xl">
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-full ${getTypeColor(type)}`}>
                {getTypeIcon(type)}
              </div>
              <div className="flex space-x-2">
                <Badge className={getDifficultyColor(difficulty)}>
                  {difficulty}
                </Badge>
                <Badge variant="outline">
                  {estimatedTime}
                </Badge>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground flex-1">{description}</p>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center text-sm text-muted-foreground">
                <Lightbulb className="w-4 h-4 mr-2" />
                Click to see example
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card 
          className="absolute inset-0 shadow-elegant border-2 glass backdrop-blur-xl"
          style={{ transform: "rotateY(180deg)" }}
        >
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <Badge className={getTypeColor(type)}>
                Real Example
              </Badge>
              <Button variant="ghost" size="sm">
                <ChevronRight className="w-4 h-4 rotate-180" />
              </Button>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <h4 className="font-semibold text-sm text-red-600 mb-2">❌ MISLEADING</h4>
                <p className="text-sm bg-red-50 dark:bg-red-950/50 p-3 rounded-lg border border-red-200 dark:border-red-800">
                  {example.before}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-green-600 mb-2">✅ REALITY</h4>
                <p className="text-sm bg-green-50 dark:bg-green-950/50 p-3 rounded-lg border border-green-200 dark:border-green-800">
                  {example.after}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-blue-600 mb-2">💡 WHY IT WORKS</h4>
                <p className="text-sm bg-blue-50 dark:bg-blue-950/50 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                  {example.explanation}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default LearnCard;