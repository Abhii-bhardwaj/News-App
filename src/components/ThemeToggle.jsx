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
  Newspaper,
  BookOpen,
} from "lucide-react";

import themes from "../data/themes";
import countries from "../data/countries";
// Theme definitions


// Countries data


// Enhanced Theme Toggle Component
const ThemeToggle = ({ currentTheme, setTheme, isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-background/80 backdrop-blur border-border/50">
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">{themes[currentTheme].icon}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-12 right-0 z-50 w-64 p-4 bg-background/95 backdrop-blur-lg border rounded-lg shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Themes</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="h-8 w-8 p-0">
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {Object.entries(themes).map(([key, theme]) => (
                <Button
                  key={key}
                  variant={currentTheme === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setTheme(key);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-start space-x-2 h-auto p-3">
                  <span className="text-lg">{theme.icon}</span>
                  <span className="text-xs">{theme.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default ThemeToggle;