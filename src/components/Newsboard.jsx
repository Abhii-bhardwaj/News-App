import React, { useState, useEffect } from "react";
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
import { ExternalLink, Calendar, Clock, TrendingUp, Globe } from "lucide-react";
import NewsItem from "./NewsItem";
import ThemeToggle from "./ThemeToggle";
import themes from "../data/themes";
import countries from "../data/countries";

const Newsboard = ({ category, country, currentTheme }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `/.netlify/functions/news?country=${country}&category=${category}`;
        console.log("Fetching news from:", url);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();

        const filteredArticles = data.articles.filter(
          (article) =>
            article.title &&
            article.description &&
            article.url &&
            article.title !== "[Removed]" &&
            !article.title.includes("removed")
        );

        setArticles(filteredArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]);

  const getCategoryTitle = (cat) => {
    const categoryMap = {
      general: "Breaking News",
      technology: "Tech Updates",
      business: "Market News",
      health: "Health Reports",
      sports: "Sports News",
      entertainment: "Entertainment",
    };
    return categoryMap[cat] || "Latest News";
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {[...Array(8)].map((_, i) => (
        <Card
          key={i}
          className={`animate-pulse ${themes[currentTheme].cardBg} backdrop-blur h-[300px] sm:h-[350px]`}>
          <div className="aspect-video bg-muted/50 rounded-t-lg"></div>
          <CardHeader className="p-3 sm:p-6">
            <div className="h-3 sm:h-4 bg-muted/50 rounded w-3/4 mb-1 sm:mb-2"></div>
            <div className="h-3 sm:h-4 bg-muted/50 rounded w-1/2"></div>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            <div className="space-y-1 sm:space-y-2">
              <div className="h-2 sm:h-3 bg-muted/50 rounded"></div>
              <div className="h-2 sm:h-3 bg-muted/50 rounded w-4/5"></div>
              <div className="h-2 sm:h-3 bg-muted/50 rounded w-3/4"></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="text-center space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-2 sm:space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary"></div>
            <p className="text-sm sm:text-lg font-medium">
              Fetching latest news...
            </p>
          </div>
        </div>
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <Card
          className={`max-w-sm sm:max-w-md mx-auto ${themes[currentTheme].cardBg} backdrop-blur`}>
          <CardHeader>
            <CardTitle className="text-destructive flex items-center space-x-2 text-sm sm:text-base">
              <span>⚠️</span>
              <span>Oops! Something went wrong</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-xs sm:text-sm">{error}</p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => window.location.reload()}
              className="w-full text-xs sm:text-sm h-8 sm:h-9">
              <span>🔄</span>
              <span className="ml-2">Try Again</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
      <div className="text-center mb-6 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
          {getCategoryTitle(category)}
        </h2>
        <p className="text-muted-foreground text-sm sm:text-lg">
          Fresh updates from{" "}
          {countries.find((c) => c.code === country)?.name ||
            "around the world"}
        </p>
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-2 sm:mt-4">
          <Badge
            variant="outline"
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            {articles.length} articles
          </Badge>
          <Badge
            variant="outline"
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            {countries.find((c) => c.code === country)?.flag}
          </Badge>
        </div>
        <Separator className="mt-3 sm:mt-6 max-w-xs mx-auto" />
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {articles.map((news, index) => (
            <NewsItem
              key={`${news.url}-${index}`}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              publishedAt={news.publishedAt}
              source={news.source}
              currentTheme={currentTheme}
            />
          ))}
        </div>
      ) : (
        <Card
          className={`max-w-sm sm:max-w-md mx-auto ${themes[currentTheme].cardBg} backdrop-blur`}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
              <span>📰</span>
              <span>No Articles Found</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-xs sm:text-sm">
              No articles available for this category and country combination.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Newsboard;
