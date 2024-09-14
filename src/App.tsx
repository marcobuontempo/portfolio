import { useEffect } from "react";
import Terminal from "./components/main/Terminal";

function App() {
  console.log(
    `%cHello from the console!%c
    %cYou found me! 🎉
    %c- Love from Marco Buontempo xx`,
    "color: #ff5722; font-size: 18px; font-weight: bold;",
    "color: #000000; font-size: 16px;",
    "color: #4caf50; font-size: 16px; font-style: italic;",
    "color: #2196f3; font-size: 16px;"
  );

  useEffect(() => {
    // Check local storage for 'theme' setting
    const storedTheme = localStorage.getItem("theme");
    const theme = "theme-" + (storedTheme || "dark"); // Use 'default' if no theme is found

    // Apply the theme class to the body element
    document.body.classList.add(theme);

    // Optional: Cleanup function to remove the theme class if needed
    return () => {
      document.body.classList.remove(theme);
    };
  }, []);

  return (
    <>
      <Terminal />
    </>
  );
}

export default App;
