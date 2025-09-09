import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Send, 
  Camera, 
  Bot, 
  User, 
  Heart, 
  Brain, 
  Shield, 
  Sparkles,
  MessageCircle,
  Upload,
  Mic,
  Star
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

const suggestions = [
  { text: "Fever symptoms", icon: "🌡️" },
  { text: "Skin rash analysis", icon: "🔍" },
  { text: "Medication interactions", icon: "💊" },
  { text: "Emergency first aid", icon: "🚨" }
];

export default function ChatbotMode() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! I'm your AI Medical Assistant. I can help analyze symptoms, provide health guidance, and answer medical questions. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const headerRef = useRef(null);
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const chatInView = useInView(chatRef, { once: true, amount: 0.2 });
  const inputInView = useInView(inputRef, { once: true, amount: 0.5 });

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "I understand your concern. Based on the symptoms you've described, I recommend consulting with a healthcare professional for a proper evaluation. In the meantime, here are some general suggestions...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header */}
      <motion.section
        ref={headerRef}
        className="relative py-16 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-32 right-32 w-32 h-32 bg-secondary/25 rounded-full blur-2xl"
            animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], rotate: [0, -45, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-gradient inline-block">
                <motion.span
                  className="inline-block mr-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  🤖
                </motion.span>
                AI Medical
              </span>
              <br />
              <motion.span
                className="text-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Assistant
                <motion.div
                  className="inline-block ml-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              <Brain className="w-6 h-6 inline-block mr-2 text-primary animate-pulse" />
              Ask questions, upload images, get instant medical guidance powered by advanced AI technology.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Chat Interface */}
      <motion.section
        ref={chatRef}
        className="pb-32"
        variants={containerVariants}
        initial="hidden"
        animate={chatInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden"
            variants={itemVariants}
          >
            {/* Chat Header */}  
            <motion.div
              className="gradient-healing p-6 text-white"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold">AI Medical Assistant</h3>
                  <motion.p
                    className="text-white/80 text-sm"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Online • Ready to help
                  </motion.p>
                </div>
                <div className="flex-1" />
                <motion.div
                  className="flex space-x-1"
                  variants={itemVariants}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 bg-gradient-to-b from-background/50 to-background">
              <motion.div className="space-y-4" variants={containerVariants}>
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    variants={itemVariants}
                    initial={{ opacity: 0, x: message.type === "user" ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${
                      message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}>
                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === "user" 
                            ? "gradient-neon" 
                            : "gradient-secondary"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        animate={message.type === "bot" ? { rotate: [0, 5, -5, 0] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {message.type === "user" ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </motion.div>
                      
                      <motion.div
                        className={`px-4 py-3 rounded-2xl ${
                          message.type === "user"
                            ? "gradient-neon text-white"
                            : "glass-card border-white/10"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        layout
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <motion.div
                          className={`text-xs mt-2 ${
                            message.type === "user" ? "text-white/70" : "text-muted-foreground"
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {message.timestamp.toLocaleTimeString()}
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="w-8 h-8 gradient-secondary rounded-full flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Bot className="w-4 h-4 text-white" />
                      </motion.div>
                      <div className="glass-card px-4 py-3 rounded-2xl border-white/10">
                        <div className="flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Enhanced Medicine Order Button */}
            <motion.div
              className="px-6 py-4 bg-gradient-to-r from-accent/10 to-primary/10 border-t border-white/10"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="w-full gradient-healing text-white py-3 font-semibold hover:shadow-lg transition-all duration-300 group"
                  onClick={() => window.open("https://www.flipkart.com/health-medicine", "_blank")}
                >
                  <Heart className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="white" />
                  <span className="relative">
                    Order Medicine Online
                    <motion.span
                      className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      🚀
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Input Area */}
      <motion.section
        ref={inputRef}
        className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-white/10 z-40"
        variants={containerVariants}
        initial="hidden"
        animate={inputInView ? "visible" : "hidden"}
      >
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <div className="container mx-auto px-4 py-6">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4 mb-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300 h-12 w-12 p-0 group"
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Upload className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <Input
                placeholder="Describe your symptoms or ask a medical question..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                className="glass-card border-white/20 placeholder:text-muted-foreground focus:border-accent/50 focus:ring-accent/20 h-12 text-base"
              />
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={handleSendMessage}
                  className="gradient-neon text-white h-12 px-6 hover:shadow-lg transition-all duration-300 group"
                  disabled={!inputText.trim()}
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <motion.span
                    className="ml-2"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📤
                  </motion.span>
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Suggestions */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              variants={containerVariants}
            >
              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.text}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputText(suggestion.text)}
                    className="text-sm border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:border-accent/40 group"
                  >
                    <span className="mr-2 text-base group-hover:animate-bounce">
                      {suggestion.icon}
                    </span>
                    {suggestion.text}
                    <motion.span
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              console.log("File selected:", file.name);
            }
          }}
        />
      </motion.section>
    </div>
  );
}