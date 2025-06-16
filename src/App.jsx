import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";
import themes from "./data/themes";
import countries from "./data/countries";
const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  const [currentTheme, setCurrentTheme] = useState("dracula");
  const [isDark, setIsDark] = useState(true);

  // Apply theme class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${themes[currentTheme].gradient} transition-all duration-700`}>
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (min-width: 475px) {
          .xs\\:inline {
            display: inline;
          }
        }
      `}</style>
      <Navbar
        category={category}
        setCategory={setCategory}
        country={country}
        setCountry={setCountry}
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <Newsboard
        category={category}
        country={country}
        currentTheme={currentTheme}
      />
    </div>
  );
};

export default App;
