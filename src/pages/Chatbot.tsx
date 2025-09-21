import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Send, 
  Bot, 
  User, 
  MessageCircle, 
  CheckCircle, 
  AlertTriangle,
  Search,
  Share2,
  Brain,
  Clock,
  Sparkles
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "credibility" | "learn-card";
  data?: any;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI misinformation defense assistant. I can help you verify content, understand manipulation techniques, and learn critical thinking skills. Try asking me about any suspicious content you've seen!",
      sender: "bot",
      timestamp: new Date(),
      type: "text"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    { text: "Is this forward true?", icon: <Search className="w-4 h-4" /> },
    { text: "Show me a Learn Card", icon: <Brain className="w-4 h-4" /> },
    { text: "What's misleading here?", icon: <AlertTriangle className="w-4 h-4" /> },
    { text: "How to share results?", icon: <Share2 className="w-4 h-4" /> }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
      type: "text"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(content);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    if (input.includes("forward") || input.includes("true") || input.includes("verify")) {
      return {
        id: Date.now().toString(),
        content: "I'll analyze this content for you. Here's what I found:",
        sender: "bot",
        timestamp: new Date(),
        type: "credibility",
        data: {
          score: 32,
          verdict: "misleading",
          title: "Content Analysis Result",
          summary: "This appears to contain misleading information. The claims are partially true but lack important context and contain exaggerated elements.",
          evidence: [
            "Fact-checked by AltNews: Partially false",
            "Missing crucial context about eligibility",
            "Source verification needed"
          ]
        }
      };
    }
    
    if (input.includes("learn") || input.includes("card") || input.includes("technique")) {
      return {
        id: Date.now().toString(),
        content: "Here's a Learn Card to help you understand this manipulation technique:",
        sender: "bot",
        timestamp: new Date(),
        type: "learn-card",
        data: {
          type: "clickbait",
          title: "Clickbait Detection",
          description: "Learn to spot sensationalized headlines designed to manipulate emotions."
        }
      };
    }

    if (input.includes("misleading") || input.includes("why")) {
      return {
        id: Date.now().toString(),
        content: "Great question! Here are the key manipulation tactics I detected:\n\n🎯 **Emotional Manipulation**: Uses fear/excitement to bypass critical thinking\n📊 **Cherry-picked Data**: Selects only favorable statistics\n⏰ **Urgency Pressure**: 'Share immediately' to prevent verification\n🔍 **Missing Context**: Leaves out crucial qualifying information\n\nRemember: Always verify before sharing!",
        sender: "bot",
        timestamp: new Date(),
        type: "text"
      };
    }

    if (input.includes("share") || input.includes("whatsapp")) {
      return {
        id: Date.now().toString(),
        content: "I can help you share verified results! Here's how:\n\n📤 **WhatsApp Format**: Tap the share button on any credibility card to get a WhatsApp-ready message\n\n🎯 **Key Elements**:\n• Credibility score badge\n• Brief verdict summary\n• Top evidence sources\n• Link to full analysis\n\nThis way, you're not just stopping misinformation - you're educating others too!",
        sender: "bot",
        timestamp: new Date(),
        type: "text"
      };
    }

    // Default responses
    const defaultResponses = [
      "I'm here to help you verify information and learn about misinformation techniques. Could you share some specific content you'd like me to analyze?",
      "That's interesting! Would you like me to analyze some content for credibility, or would you prefer to learn about manipulation techniques?",
      "I can help with content verification, explaining why something might be misleading, or teaching you detection skills. What would be most helpful?",
      "Great! I'm ready to assist. You can paste any suspicious content, ask about manipulation techniques, or request verification help."
    ];

    return {
      id: Date.now().toString(),
      content: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
      sender: "bot",
      timestamp: new Date(),
      type: "text"
    };
  };

  const MessageComponent = ({ message }: { message: Message }) => {
    const isBot = message.sender === "bot";

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      >
        <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'} items-end space-x-2`}>
          <Avatar className="w-8 h-8">
            <AvatarFallback className={isBot ? 'bg-primary text-white' : 'bg-secondary'}>
              {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </AvatarFallback>
          </Avatar>
          
          <div className={`${isBot ? 'ml-2' : 'mr-2'}`}>
            <div className={`rounded-2xl p-4 ${
              isBot 
                ? 'bg-muted/50 border' 
                : 'gradient-hero text-white'
            }`}>
              {message.type === "credibility" && message.data ? (
                <Card className="w-80 shadow-none border-0 bg-transparent">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        message.data.score >= 70 ? 'bg-green-500' : 
                        message.data.score >= 40 ? 'bg-orange-500' : 'bg-red-500'
                      }`}>
                        {message.data.score}
                      </div>
                      <div>
                        <Badge className={
                          message.data.verdict === "true" ? "bg-green-100 text-green-800" :
                          message.data.verdict === "misleading" ? "bg-orange-100 text-orange-800" :
                          "bg-red-100 text-red-800"
                        }>
                          {message.data.verdict.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <h4 className="font-semibold mb-2">{message.data.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{message.data.summary}</p>
                    <div className="space-y-1">
                      {message.data.evidence.map((item: string, index: number) => (
                        <div key={index} className="text-xs text-muted-foreground">
                          • {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : message.type === "learn-card" && message.data ? (
                <Card className="w-80 shadow-none border-0 bg-transparent">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center space-x-2">
                      <Brain className="w-4 h-4" />
                      <span>{message.data.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">{message.data.description}</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      <Brain className="w-4 h-4 mr-2" />
                      Open Interactive Card
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="whitespace-pre-line text-sm">
                  {message.content}
                </div>
              )}
            </div>
            <div className={`text-xs text-muted-foreground mt-1 ${isBot ? 'text-left' : 'text-right'}`}>
              <Clock className="w-3 h-3 inline mr-1" />
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex justify-start mb-4"
    >
      <div className="flex items-end space-x-2">
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-primary text-white">
            <Bot className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
        <div className="bg-muted/50 border rounded-2xl p-4 ml-2">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-muted-foreground rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium gradient-hero text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            AI Powered Chatbot
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Chat with AI Defense Bot
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant analysis of suspicious content, learn about manipulation techniques, 
            and practice your detection skills with our intelligent assistant.
          </p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-background rounded-2xl shadow-elegant border-2 overflow-hidden"
        >
          {/* Chat Header */}
          <div className="p-4 border-b gradient-hero text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Defense Assistant</h3>
                <p className="text-sm opacity-90">Online • Ready to help verify content</p>
              </div>
              <div className="ml-auto">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <MessageComponent key={message.id} message={message} />
            ))}
            
            <AnimatePresence>
              {isTyping && <TypingIndicator />}
            </AnimatePresence>
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-4 border-t bg-muted/30">
            <div className="mb-3">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Quick Actions:</h4>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSendMessage(reply.text)}
                    className="text-xs"
                  >
                    {reply.icon}
                    <span className="ml-1">{reply.text}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message or paste suspicious content..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                className="flex-1"
              />
              <Button 
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="gradient-hero"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <CheckCircle className="w-6 h-6" />,
              title: "Instant Verification",
              description: "Get credibility scores and evidence sources in seconds"
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Learn Interactively",
              description: "Understand manipulation techniques through examples"
            },
            {
              icon: <Share2 className="w-6 h-6" />,
              title: "Share Results",
              description: "Get formatted results ready for WhatsApp sharing"
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 text-center glass backdrop-blur-sm">
              <div className="w-12 h-12 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Chatbot;