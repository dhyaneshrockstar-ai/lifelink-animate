import { motion } from "framer-motion";
import { Heart, Droplet, Bot, Settings, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

interface TabNavigationProps {
  activeTab: "blood" | "chatbot";
  onTabChange: (tab: "blood" | "chatbot") => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const { user, signOut } = useAuth();
  
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
              <Droplet className={`w-5 h-5 transition-all duration-300 ${
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

          {/* Enhanced User Avatar with Sign Out */}
          <div className="flex items-center space-x-2">
            <div className="relative group">
              <div className="relative">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {user?.user_metadata?.display_name?.[0]?.toUpperCase() || <User className="w-5 h-5" />}
                </div>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => signOut()}
              className="hover:bg-destructive/10 hover:text-destructive transition-colors duration-200"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}