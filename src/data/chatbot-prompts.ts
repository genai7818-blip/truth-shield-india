// Comprehensive Chatbot Testing Prompts for AI Misinformation Defense Tool

export const chatbotPrompts = {
  // 1. Credibility Check Prompts
  credibilityCheck: [
    {
      category: "Political",
      prompt: "Is this true: 'PM announces free internet for all Indians from next month'?",
      expectedResponse: "Low credibility score with fact-check citations and manipulation tags"
    },
    {
      category: "Health",
      prompt: "Someone shared: 'Drinking hot water cures COVID-19 completely'. Is this accurate?",
      expectedResponse: "Very low credibility with health misinformation warning"
    },
    {
      category: "Economic",
      prompt: "Check this: 'Indian rupee becomes world's strongest currency after new policy'",
      expectedResponse: "Extremely low credibility with economic fact-checking"
    },
    {
      category: "Technology",
      prompt: "Is it true that 'WhatsApp will start charging ₹5 per message from December'?",
      expectedResponse: "Recurring hoax detection with historical context"
    },
    {
      category: "Social",
      prompt: "Verify: 'Government announces 3-day national holiday for Diwali celebration'",
      expectedResponse: "No official announcement found with government sources check"
    }
  ],

  // 2. Learn Card Demonstration
  learnCardDemo: [
    {
      prompt: "Show me how clickbait works",
      expectedResponse: "Display clickbait learn card with examples"
    },
    {
      prompt: "What is false context manipulation?",
      expectedResponse: "Show false context learn card with real examples"
    },
    {
      prompt: "Explain cherry-picked statistics",
      expectedResponse: "Display cherry-picked data learn card"
    },
    {
      prompt: "How do I spot deepfakes?",
      expectedResponse: "Show deepfake detection learn card"
    }
  ],

  // 3. Manipulation Technique Detection
  manipulationDetection: [
    {
      prompt: "Analyze this headline: 'SHOCKING: This simple trick doctors don't want you to know!'",
      expectedResponse: "Identifies clickbait manipulation with emotional triggers and curiosity gaps"
    },
    {
      prompt: "What's wrong with: '90% of people can't solve this simple math problem'?",
      expectedResponse: "Detects engagement bait and false challenge manipulation"
    },
    {
      prompt: "Check: 'Scientists hate this one weird trick that makes you look 20 years younger'",
      expectedResponse: "Multiple manipulation tags: clickbait, false authority, miracle cure claims"
    }
  ],

  // 4. Multilingual Support Test
  hindiPrompts: [
    {
      prompt: "क्या यह सच है: 'सरकार ने सभी के लिए मुफ्त पेट्रोल की घोषणा की'?",
      expectedResponse: "Hindi response with credibility analysis"
    },
    {
      prompt: "इस खबर की जांच करें: 'व्हाट्सऐप अब हिंदी में बात करेगा'",
      expectedResponse: "Hindi fact-check with sources"
    },
    {
      prompt: "गलत सूचना कैसे पहचानें?",
      expectedResponse: "Hindi explanation of misinformation detection"
    }
  ],

  // 5. Source Verification
  sourceVerification: [
    {
      prompt: "Check if Times of India reported: 'India becomes first country to land on sun'",
      expectedResponse: "Source verification with credibility assessment"
    },
    {
      prompt: "Did BBC really publish this: 'India's population reaches 2 billion'?",
      expectedResponse: "Source credibility check with fact-checker cross-reference"
    },
    {
      prompt: "Verify this quote from WHO: 'Yoga cures all diseases including cancer'",
      expectedResponse: "Official source verification with health authority check"
    }
  ],

  // 6. Context Verification
  contextVerification: [
    {
      prompt: "This image shows massive crowd in Delhi today - is this current?",
      expectedResponse: "Reverse image search simulation with timeline verification"
    },
    {
      prompt: "Video of floods in Mumbai shared today - when was this actually taken?",
      expectedResponse: "Video context verification with date/location analysis"
    }
  ],

  // 7. Emergency/Crisis Mode
  emergencyMode: [
    {
      prompt: "Breaking: Earthquake hits Delhi, 1000+ casualties - verify immediately",
      expectedResponse: "Crisis mode activation with rapid fact-checking from official sources"
    },
    {
      prompt: "Urgent: PM hospitalized after heart attack - confirm this news",
      expectedResponse: "High-priority verification with government sources"
    }
  ],

  // 8. Statistical Analysis
  statisticalAnalysis: [
    {
      prompt: "Analyze: 'Crime in Mumbai increased by 500% this month'",
      expectedResponse: "Statistical context analysis with historical data comparison"
    },
    {
      prompt: "Check this data: 'India's GDP grew 50% in last quarter'",
      expectedResponse: "Economic data verification with expert analysis"
    }
  ],

  // 9. Social Media Verification
  socialMediaCheck: [
    {
      prompt: "Celebrity X tweeted about retiring from films - is this authentic?",
      expectedResponse: "Social media verification with account authenticity check"
    },
    {
      prompt: "Viral Facebook post claims new government policy - verify source",
      expectedResponse: "Social media credibility assessment"
    }
  ],

  // 10. Interactive Features Test
  interactiveFeatures: [
    {
      prompt: "Show me my learning progress",
      expectedResponse: "Display user's completion stats and achievements"
    },
    {
      prompt: "What should I learn next?",
      expectedResponse: "Personalized learning recommendations"
    },
    {
      prompt: "Give me a quick fact-check quiz",
      expectedResponse: "Interactive quiz with real examples"
    },
    {
      prompt: "How accurate am I at detecting misinformation?",
      expectedResponse: "Personal accuracy statistics and improvement tips"
    }
  ],

  // 11. Advanced Analysis
  advancedAnalysis: [
    {
      prompt: "Analyze the bias in this news article: [article text]",
      expectedResponse: "Bias detection with political leaning analysis"
    },
    {
      prompt: "Check for coordinated inauthentic behavior in these accounts",
      expectedResponse: "Bot network detection simulation"
    },
    {
      prompt: "Evaluate the credibility of this scientific claim about vaccines",
      expectedResponse: "Scientific fact-checking with expert sources"
    }
  ],

  // 12. Community Features
  communityFeatures: [
    {
      prompt: "What's trending in misinformation today?",
      expectedResponse: "Display current trending false information"
    },
    {
      prompt: "Show me what the community is discussing",
      expectedResponse: "Community feed with recent verifications"
    },
    {
      prompt: "How can I help others spot misinformation?",
      expectedResponse: "Community contribution guidelines and tips"
    }
  ]
};

// Quick Demo Prompts for Judges/Reviewers
export const judgePrompts = [
  "Is this true: 'PM announces free internet for all Indians'?",
  "Show me how clickbait works",
  "Check this headline: 'SHOCKING trick doctors hate!'",
  "क्या यह सच है: 'सरकार ने मुफ्त पेट्रोल की घोषणा की'?",
  "Analyze this: 'Crime increased 500% this month'",
  "Show me my learning progress"
];

// Expected Response Templates
export const responseTemplates = {
  credibilityCard: {
    score: "32/100",
    verdict: "Highly Misleading",
    tags: ["Clickbait", "False Authority", "Emotional Manipulation"],
    sources: [
      "No official government announcement found",
      "AltNews: Similar claims debunked",
      "PIB Fact Check: No such policy exists"
    ]
  },
  
  learnCard: {
    type: "Clickbait Detection",
    example: "Before/After comparison with explanation",
    techniques: ["Emotional triggers", "Curiosity gaps", "Urgency creation"]
  },
  
  hindiResponse: {
    language: "hi",
    verdict: "अत्यधिक भ्रामक",
    explanation: "कोई आधिकारिक घोषणा नहीं मिली"
  }
};