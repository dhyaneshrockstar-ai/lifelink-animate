import { motion } from "framer-motion";
import { Heart, Bot, Sparkles, Settings } from "lucide-react";

interface TabNavigationProps {
  activeTab: "blood" | "chatbot";
  onTabChange: (tab: "blood" | "chatbot") => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 gradient-neon rounded-xl flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-6 h-6 text-white" fill="white" />
              </motion.div>
              <motion.div
                className="absolute inset-0 gradient-neon rounded-xl opacity-50 blur-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="text-left">
              <motion.h1
                className="text-2xl font-bold text-gradient leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                LifeLink
                <motion.span
                  className="inline-block ml-1"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  ✨
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Healthcare Hub
              </motion.p>
            </div>
          </motion.div>

          {/* Enhanced Tab Navigation */}
          <div className="flex items-center space-x-2 relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl" />
            
            <motion.button
              onClick={() => onTabChange("blood")}
              className={`relative flex items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 z-10 group ${
                activeTab === "blood"
                  ? "gradient-neon text-white neon-glow shadow-xl"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className={`w-5 h-5 transition-all duration-300 ${
                activeTab === "blood" ? "fill-white" : "group-hover:text-primary"
              }`} />
              <span className="font-medium">Blood Bank</span>
              <motion.span
                className="text-xs opacity-70"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔴
              </motion.span>

              {activeTab === "blood" && (
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-xl border border-white/20"
                  layoutId="activeTab"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </motion.button>

            <motion.button
              onClick={() => onTabChange("chatbot")}
              className={`relative flex items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 z-10 group ${
                activeTab === "chatbot"
                  ? "gradient-neon text-white neon-glow shadow-xl"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className={`w-5 h-5 transition-all duration-300 ${
                activeTab === "chatbot" ? "" : "group-hover:text-primary"
              }`} />
              <span className="font-medium">AI Assistant</span>
              <motion.span
                className="text-xs opacity-70"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🤖
              </motion.span>

              {activeTab === "chatbot" && (
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-xl border border-white/20"
                  layoutId="activeTab"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </motion.button>
          </div>

          {/* Enhanced User Avatar */}
          <motion.div
            className="relative cursor-pointer group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-12 h-12 gradient-healing rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-shimmer" />
              
              <motion.div
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            
            {/* Settings icon on hover */}
            <motion.div
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            >
              <Settings className="w-3 h-3 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}