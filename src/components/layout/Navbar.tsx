import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Globe,
  Sparkles
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Learn", path: "/learn" },
    { name: "Chatbot", path: "/chatbot" },
    { name: "Community", path: "/community" },
    { name: "Demo", path: "/demo" },
    { name: "About", path: "/about" },
  ];

  const translations = {
    en: {
      brand: "AI Defense",
      tagline: "Misinformation Defense Tool",
      demo: "Try Demo"
    },
    hi: {
      brand: "AI डिफेंस",
      tagline: "गलत सूचना रक्षा उपकरण",
      demo: "डेमो आज़माएं"
    }
  };

  const currentLang = translations[language];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center shadow-glow">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <Sparkles className="w-3 h-3 text-primary absolute -top-1 -right-1 animate-pulse" />
              </motion.div>
              <div>
                <h1 className="font-bold text-lg text-foreground">{currentLang.brand}</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">{currentLang.tagline}</p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-smooth hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-2">
              {/* Language Toggle */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden sm:flex">
                    <Globe className="w-4 h-4 mr-2" />
                    {language.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm">
                  <DropdownMenuItem onClick={() => setLanguage("en")}>
                    🇺🇸 English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("hi")}>
                    🇮🇳 हिंदी
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hidden sm:flex"
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>

              {/* Demo Button */}
              <Button variant="default" size="sm" asChild className="hidden sm:flex gradient-hero">
                <NavLink to="/demo">{currentLang.demo}</NavLink>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden glass backdrop-blur-xl border-b border-border/50"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block text-sm font-medium transition-smooth hover:text-primary ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
                
                {/* Mobile Controls */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                  <Button variant="ghost" size="sm" onClick={toggleTheme}>
                    {isDark ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                    Theme
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Globe className="w-4 h-4 mr-2" />
                        {language.toUpperCase()}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm">
                      <DropdownMenuItem onClick={() => setLanguage("en")}>
                        🇺🇸 English
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage("hi")}>
                        🇮🇳 हिंदी
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <Button variant="default" asChild className="gradient-hero">
                  <NavLink to="/demo" onClick={() => setIsOpen(false)}>
                    {currentLang.demo}
                  </NavLink>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;