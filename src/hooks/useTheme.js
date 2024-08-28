import { useDebugValue, useState } from "react";

export const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useDebugValue(`${darkTheme ? "dark" : "light"}`, 
    (val) => {
    if (val === "light") {
      return "Light Theme";
    } else {
      return "Dark Theme";
    }
  });
  return {
    darkTheme,
    toggleTheme,
  };
};
