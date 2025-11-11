import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "business");

  // Update the HTML attribute when theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "business" ? "lofi" : "business");
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-sm text-base-content"
    >
      {theme === "business" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeToggle;
