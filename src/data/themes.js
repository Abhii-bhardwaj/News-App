const themes = {
  dracula: {
    name: "Dracula",
    icon: "🧛",
    gradient:
      "from-slate-900 via-purple-900 to-slate-900 dark:from-[#282a36] dark:via-[#44475a] dark:to-[#282a36]",
    accent: "bg-[#ff79c6]",
    cardBg: "bg-[#44475a]/80 border-[#6272a4]/30",
    text: "text-[#f8f8f2]",
    navBg: "bg-[#282a36]/95",
    primary: "#ff79c6",
    secondary: "#8be9fd",
  },
  solarizedLight: {
    name: "Solarized Light",
    icon: "☀️",
    gradient:
      "from-[#fdf6e3] via-[#eee8d5] to-[#fdf6e3] dark:from-[#002b36] dark:via-[#073642] dark:to-[#002b36]",
    accent: "bg-[#268bd2]",
    cardBg:
      "bg-[#eee8d5]/80 border-[#93a1a1]/30 dark:bg-[#073642]/80 dark:border-[#586e75]/30",
    text: "text-[#657b83] dark:text-[#839496]",
    navBg: "bg-[#fdf6e3]/95 dark:bg-[#002b36]/95",
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  minimalMono: {
    name: "Minimal Mono",
    icon: "⚫",
    gradient:
      "from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950",
    accent: "bg-black dark:bg-white",
    cardBg:
      "bg-white/90 border-gray-200/50 dark:bg-gray-950/90 dark:border-gray-800/50",
    text: "text-gray-900 dark:text-gray-100",
    navBg: "bg-white/95 dark:bg-black/95",
    primary: "#000000",
    secondary: "#6b7280",
  },
  materialBlue: {
    name: "Material Blue",
    icon: "🔷",
    gradient:
      "from-blue-50 via-indigo-50 to-blue-50 dark:from-blue-950 dark:via-indigo-950 dark:to-blue-950",
    accent: "bg-[#2196F3]",
    cardBg:
      "bg-white/90 border-blue-200/30 dark:bg-blue-950/80 dark:border-blue-800/30",
    text: "text-gray-800 dark:text-blue-100",
    navBg: "bg-white/95 dark:bg-blue-950/95",
    primary: "#2196F3",
    secondary: "#03DAC6",
  },
  forestGreen: {
    name: "Forest Green",
    icon: "🌿",
    gradient:
      "from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950",
    accent: "bg-[#059669]",
    cardBg:
      "bg-white/90 border-green-200/30 dark:bg-green-950/80 dark:border-green-800/30",
    text: "text-gray-800 dark:text-green-100",
    navBg: "bg-white/95 dark:bg-green-950/95",
    primary: "#059669",
    secondary: "#10b981",
  },
  skyfall: {
    name: "Skyfall",
    icon: "🌌",
    gradient:
      "from-sky-100 via-blue-100 to-cyan-100 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900",
    accent: "bg-gradient-to-r from-sky-500 to-cyan-500",
    cardBg:
      "bg-white/90 border-sky-200/30 dark:bg-slate-900/80 dark:border-sky-800/30",
    text: "text-gray-800 dark:text-sky-100",
    navBg: "bg-white/95 dark:bg-slate-900/95",
    primary: "#0ea5e9",
    secondary: "#06b6d4",
  },
};
export default themes;
