import React from "react";
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
import ThemeToggle from "./ThemeToggle";

const NewsItem = ({
  title,
  description,
  src,
  url,
  publishedAt,
  source,
  currentTheme,
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

    if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <Card
      className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 ${themes[currentTheme].cardBg} backdrop-blur-sm border-border/50 hover:border-primary/30 h-full flex flex-col`}>
      <div className="relative aspect-video overflow-hidden flex-shrink-0">
        <img
          src={src || "/api/placeholder/400/240"}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          onError={(e) => {
            e.target.src = "/api/placeholder/400/240";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <Badge
            variant="secondary"
            className="bg-background/90 backdrop-blur text-xs max-w-[100px] truncate">
            {source?.name || "News"}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2 sm:pb-3 flex-shrink-0 p-3 sm:p-6">
        <div className="flex items-center justify-between mb-1 sm:mb-2">
          <Badge
            variant="outline"
            className="text-xs bg-primary/10 border-primary/20">
            <Clock className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
            {publishedAt ? formatDate(publishedAt) : "Recent"}
          </Badge>
        </div>
        <CardTitle className="text-sm sm:text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300 font-semibold">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0 flex-1 p-3 sm:p-6 sm:pt-0">
        <CardDescription className="text-xs sm:text-sm line-clamp-3 leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-0 flex-shrink-0 p-3 sm:p-6 sm:pt-0">
        <Button
          asChild
          className="w-full group/btn bg-primary hover:bg-primary/90 transition-all duration-300 h-8 sm:h-9 text-xs sm:text-sm"
          size="sm">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1 sm:space-x-2">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Read Article</span>
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsItem;
