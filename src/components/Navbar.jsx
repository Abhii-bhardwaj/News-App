import React, { useState, useEffect, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ExternalLink,
  Calendar,
  Clock,
  TrendingUp,
  Sun,
  Moon,
  Palette,
  Globe,
  Search,
  Filter,
    Zap,
  Menu,
  X,
  Newspaper,
  BookOpen,
} from "lucide-react";
import countries from "../data/countries";
import themes from "../data/themes";

import ThemeToggle from "./ThemeToggle";
const Navbar = ({
  category,
  setCategory,
  country,
  setCountry,
  currentTheme,
  setTheme,
  isDark,
  setIsDark,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      id: "general",
      label: "General",
      icon: <Newspaper className="w-3 h-3 sm:w-4 sm:h-4" />,
    },
    {
      id: "technology",
      label: "Tech",
      icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" />,
    },
    {
      id: "business",
      label: "Business",
      icon: <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />,
    },
    { id: "health", label: "Health", icon: "🏥" },
    { id: "sports", label: "Sports", icon: "⚽" },
    { id: "entertainment", label: "Entertainment", icon: "🎬" },
  ];

  const currentCountry = countries.find((c) => c.code === country);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full border-b ${themes[currentTheme].navBg} backdrop-blur-xl shadow-sm`}>
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <div className="relative flex-shrink-0">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary animate-pulse" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-ping"></div>
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent truncate">
                  Headly
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  Stay Ahead, Stay Informed!
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center max-w-2xl mx-4">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={category === cat.id ? "default" : "ghost"}
                  onClick={() => setCategory(cat.id)}
                  className="flex items-center space-x-1 sm:space-x-2 transition-all duration-200 hover:scale-105 group text-xs sm:text-sm h-8 px-2 sm:px-3"
                  size="sm">
                  <span className="group-hover:animate-bounce">{cat.icon}</span>
                  <span className="hidden xl:inline">{cat.label}</span>
                </Button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              {/* Country Selector */}
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="w-16 sm:w-[100px] md:w-[120px] bg-background/80 backdrop-blur h-8 sm:h-9 text-xs sm:text-sm">
                  <div className="flex items-center space-x-1 truncate">
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="hidden sm:inline truncate">
                      {currentCountry?.flag}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      <span className="flex items-center space-x-2">
                        <span>{c.flag}</span>
                        <span className="hidden sm:inline truncate">
                          {c.name}
                        </span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Theme Toggle */}
              <ThemeToggle
                currentTheme={currentTheme}
                setTheme={setTheme}
                isDark={isDark}
                setIsDark={setIsDark}
              />

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden ${themes[currentTheme].cardBg} backdrop-blur h-8 sm:h-9 w-8 sm:w-9 p-0`}>
                {mobileMenuOpen ? (
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <Menu className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className={`fixed top-[60px] sm:top-[76px] left-0 right-0 z-50 ${themes[currentTheme].navBg} backdrop-blur-xl border-b shadow-lg lg:hidden`}>
            <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={category === cat.id ? "default" : "ghost"}
                    onClick={() => {
                      setCategory(cat.id);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-start space-x-2 h-10 text-xs sm:text-sm"
                    size="sm">
                    <span>{cat.icon}</span>
                    <span className="truncate">{cat.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
