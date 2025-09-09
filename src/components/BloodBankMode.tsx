import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Phone, 
  Clock, 
  Droplets, 
  AlertCircle, 
  CheckCircle,
  Navigation,
  Heart,
  Users,
  Shield,
  Zap
} from "lucide-react";

interface BloodBank {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance: string;
  available: boolean;
  bloodGroups: string[];
}

const mockBloodBanks: BloodBank[] = [
  {
    id: "1",
    name: "City General Blood Bank",
    address: "123 Medical Center Drive, Downtown",
    phone: "+1 (555) 123-4567",
    distance: "0.8 km",
    available: true,
    bloodGroups: ["A+", "B+", "O+", "AB+"],
  },
  {
    id: "2",
    name: "Metropolitan Blood Services",
    address: "456 Healthcare Plaza, Medical District",
    phone: "+1 (555) 987-6543",
    distance: "1.2 km",
    available: false,
    bloodGroups: ["A-", "B-", "O-", "AB-"],
  },
  {
    id: "3",
    name: "Regional Medical Blood Center",
    address: "789 Hospital Road, North Side",
    phone: "+1 (555) 246-8135",
    distance: "2.1 km",
    available: true,
    bloodGroups: ["A+", "A-", "O+", "O-"],
  },
];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function BloodBankMode() {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [requestForm, setRequestForm] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    address: "",
  });

  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const formRef = useRef(null);
  const resultsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const searchInView = useInView(searchRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.3 });
  const resultsInView = useInView(resultsRef, { once: true, amount: 0.2 });

  const handleSearch = () => {
    setShowResults(true);
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
      {/* Enhanced Header CTA */}
      <motion.section
        ref={headerRef}
        className="relative py-24 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
            animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent/15 rounded-full blur-3xl"
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-gradient inline-block">
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  💉
                </motion.span>
                Find Blood
              </span>
              <br />
              <motion.span
                className="text-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Now
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Connect with verified blood banks instantly. Save lives with our emergency blood request system.
              <motion.span
                className="inline-block ml-2 text-accent"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🚨
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleSearch}
                className="gradient-neon text-white px-8 py-6 text-lg font-semibold hover:shadow-xl transition-all duration-300 group"
              >
                <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Find Blood Banks
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 group emergency-glow"
              >
                <AlertCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Emergency Blood Request
                <motion.span
                  className="ml-2"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  🆘
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Search Section */}
      <motion.section
        ref={searchRef}
        className="py-16 relative"
        variants={containerVariants}
        initial="hidden"
        animate={searchInView ? "visible" : "hidden"}
      >
        {/* Animated background accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-4 text-gradient"
              variants={itemVariants}
            >
              <Droplets className="w-8 h-8 inline-block mr-3 text-accent animate-bounce-subtle" />
              Search Blood Banks
              <motion.div
                className="flex justify-center mt-4"
                variants={itemVariants}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full mx-1"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            </motion.h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto glass-card p-8 rounded-2xl"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <Droplets className="w-4 h-4 inline-block mr-2 text-accent" />
                  Blood Group
                </label>
                <Select value={selectedBloodGroup} onValueChange={setSelectedBloodGroup}>
                  <SelectTrigger className="glass-card border-white/20 hover:border-secondary/40 transition-all duration-300">
                    <SelectValue placeholder="Select blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group} className="hover:bg-primary/10">
                        <span className="font-semibold text-accent mr-2">🩸</span>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <MapPin className="w-4 h-4 inline-block mr-2 text-secondary" />
                  Location
                </label>
                <Input
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="glass-card border-white/20 placeholder:text-muted-foreground hover:border-secondary/40 transition-all duration-300 h-12 pl-10"
                />
                <Navigation className="absolute left-3 top-11 w-4 h-4 text-muted-foreground" />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-8 text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleSearch}
                  className="gradient-healing text-white px-12 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 group"
                >
                  <Search className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                  <span className="relative">
                    Find Blood Banks
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Request Form */}
      <motion.section
        ref={formRef}
        className="py-16 relative"
        variants={containerVariants}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
      >
        {/* Animated background accent */}
        <div className="absolute inset-0 bg-gradient-to-l from-secondary/5 to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-4 text-gradient"
              variants={itemVariants}
            >
              <AlertCircle className="w-8 h-8 inline-block mr-3 text-accent animate-pulse" />
              Blood Request Form
              <motion.div
                className="w-20 h-1 bg-gradient-neon mx-auto mt-4 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h2>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto glass-card p-8 rounded-2xl"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <Users className="w-4 h-4 inline-block mr-2 text-primary" />
                  Full Name
                </label>
                <Input
                  placeholder="Enter your full name"
                  value={requestForm.name}
                  onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                  className="glass-card border-white/20 placeholder:text-muted-foreground hover:border-secondary/40 transition-all duration-300 h-12"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <Phone className="w-4 h-4 inline-block mr-2 text-secondary" />
                  Phone Number
                </label>
                <Input
                  placeholder="Enter your phone number"
                  value={requestForm.phone}
                  onChange={(e) => setRequestForm({ ...requestForm, phone: e.target.value })}
                  className="glass-card border-white/20 placeholder:text-muted-foreground hover:border-secondary/40 transition-all duration-300 h-12"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <Droplets className="w-4 h-4 inline-block mr-2 text-accent" />
                  Required Blood Group
                </label>
                <Select
                  value={requestForm.bloodGroup}
                  onValueChange={(value) => setRequestForm({ ...requestForm, bloodGroup: value })}
                >
                  <SelectTrigger className="glass-card border-white/20 hover:border-secondary/40 transition-all duration-300">
                    <SelectValue placeholder="Select required blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    {bloodGroups.map((group) => (
                      <SelectItem key={group} value={group} className="hover:bg-accent/10">
                        <span className="font-semibold text-accent mr-2">🩸</span>
                        {group}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  <MapPin className="w-4 h-4 inline-block mr-2 text-primary" />
                  Hospital/Address
                </label>
                <Input
                  placeholder="Enter hospital or address"
                  value={requestForm.address}
                  onChange={(e) => setRequestForm({ ...requestForm, address: e.target.value })}
                  className="glass-card border-white/20 placeholder:text-muted-foreground hover:border-secondary/40 transition-all duration-300 h-12"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className="w-full gradient-neon text-white py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 group"
                    onClick={() => console.log("Blood request submitted:", requestForm)}
                  >
                    <Heart className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="white" />
                    <span className="relative">
                      Submit Blood Request
                      <motion.div
                        className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🚀
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Results Section */}
      {showResults && (
        <motion.section
          ref={resultsRef}
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          animate={resultsInView ? "visible" : "hidden"}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <motion.h2
                className="text-4xl font-bold mb-4 text-gradient"
                variants={itemVariants}
              >
                <CheckCircle className="w-8 h-8 inline-block mr-3 text-secondary" />
                Available Blood Banks
                <motion.span
                  className="ml-3 text-lg text-muted-foreground"
                  variants={itemVariants}
                >
                  {mockBloodBanks.length} found
                </motion.span>
              </motion.h2>
            </motion.div>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {mockBloodBanks.map((bank, index) => (
                <motion.div
                  key={bank.id}
                  className="glass-card p-6 rounded-2xl hover-lift group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated status indicator */}
                  <div className="absolute -left-2 top-6">
                    <motion.div
                      className={`w-4 h-4 rounded-full ${
                        bank.available ? "bg-secondary" : "bg-accent"
                      }`}
                      animate={{ scale: bank.available ? [1, 1.3, 1] : [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3
                        className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Shield className="w-5 h-5 inline-block mr-2 text-primary" />
                        {bank.name}
                      </motion.h3>
                      
                      <motion.div
                        className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2 ${
                          bank.available
                            ? "bg-secondary/20 text-secondary border border-secondary/30"
                            : "bg-accent/20 text-accent border border-accent/30"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {bank.available ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <AlertCircle className="w-4 h-4" />
                          </motion.div>
                        )}
                        <span>{bank.available ? "Available" : "Busy"}</span>
                      </motion.div>
                    </div>

                    <div className="space-y-3 text-muted-foreground">
                      <motion.div
                        className="flex items-center space-x-2 hover:text-foreground transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{bank.address} • {bank.distance}</span>
                      </motion.div>
                      
                      <motion.div
                        className="flex items-center space-x-2 hover:text-foreground transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Phone className="w-4 h-4 text-secondary" />
                        <span>{bank.phone}</span>
                      </motion.div>
                      
                      <motion.div
                        className="flex items-center space-x-2 hover:text-foreground transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Clock className="w-4 h-4 text-accent" />
                        <span>24/7 Emergency Service</span>
                      </motion.div>
                      
                      <motion.div
                        className="flex items-center space-x-2"
                        variants={itemVariants}
                      >
                        <Droplets className="w-4 h-4 text-accent" />
                        <div className="flex flex-wrap gap-2">
                          {bank.bloodGroups.map((group, i) => (
                            <motion.span
                              key={group}
                              className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              🩸 {group}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                      
                      <motion.div
                        className="pt-4"
                        variants={itemVariants}
                      >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            className="gradient-secondary text-white hover:shadow-lg transition-all duration-300 group"
                            onClick={() => window.open(`tel:${bank.phone}`, "_self")}
                          >
                            <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                            <span className="relative">
                              Contact Blood Bank
                              <motion.span
                                className="absolute -right-6 top-1/2 transform -translate-y-1/2"
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                📞
                              </motion.span>
                            </span>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Enhanced Emergency Button - Fixed Position */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Pulsing background rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-accent/20 rounded-full"
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
              }}
            />
          ))}
          
          <Button
            className="w-16 h-16 rounded-full gradient-neon text-white shadow-2xl emergency-glow hover:shadow-xl transition-all duration-300 group relative z-10"
            onClick={() => window.open("tel:911", "_self")}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 group-hover:animate-pulse" fill="white" />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}