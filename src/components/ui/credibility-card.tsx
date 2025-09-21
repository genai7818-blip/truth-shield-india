import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Info, 
  ExternalLink,
  Clock,
  MapPin,
  User,
  Share2
} from "lucide-react";

interface CredibilityCardProps {
  score: number;
  verdict: "true" | "false" | "misleading" | "unverified";
  title: string;
  summary: string;
  evidence: Array<{
    source: string;
    url: string;
    timestamp: string;
    excerpt: string;
  }>;
  entities: Array<{
    type: "person" | "place" | "organization" | "event";
    name: string;
    confidence: number;
  }>;
  language: "en" | "hi";
  showAnimation?: boolean;
}

const CredibilityCard = ({
  score,
  verdict,
  title,
  summary,
  evidence,
  entities,
  language,
  showAnimation = true
}: CredibilityCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "score-high";
    if (score >= 40) return "score-medium";
    return "score-low";
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "true":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "false":
        return <XCircle className="w-5 h-5 text-red-600" />;
      case "misleading":
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={showAnimation ? cardVariants : {}}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="shadow-elegant border-2 glass backdrop-blur-xl">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${getScoreColor(score)}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {score}
              </motion.div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  {getVerdictIcon(verdict)}
                  <Badge className={getVerdictColor(verdict)}>
                    {verdict.toUpperCase()}
                  </Badge>
                  <Badge className={language === "en" ? "lang-en" : "lang-hi"}>
                    {language.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Summary */}
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">SUMMARY</h4>
            <p className="text-sm leading-relaxed">{summary}</p>
          </div>

          {/* Evidence */}
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-3">EVIDENCE SOURCES</h4>
            <div className="space-y-3">
              {evidence.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 rounded-lg bg-muted/50 border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{item.source}</span>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{item.timestamp}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{item.excerpt}</p>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Source
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Entities */}
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-3">KEY ENTITIES</h4>
            <div className="flex flex-wrap gap-2">
              {entities.map((entity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-1 px-3 py-1 rounded-full bg-muted text-sm"
                >
                  {entity.type === "person" && <User className="w-3 h-3" />}
                  {entity.type === "place" && <MapPin className="w-3 h-3" />}
                  <span>{entity.name}</span>
                  <span className="text-xs text-muted-foreground">
                    ({entity.confidence}%)
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            <Button variant="outline" size="sm">
              <Info className="w-4 h-4 mr-2" />
              Why Misleading?
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share Result
            </Button>
            <Button variant="outline" size="sm">
              Report Issue
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CredibilityCard;