import { useEffect } from "react";
import Terminal from "./components/main/Terminal";
import AnimatedCursor from "react-animated-cursor";

const defaultTheme = "solarized";

function App() {
  console.log(
    `%cHello from the console!%c
    %c- Marco Buontempo xox`,
    "color: #3498db; font-size: 18px; font-weight: bold;",
    "color: #000000; font-size: 16px;",
    "color: #1abc9c; font-size: 16px; font-style: italic;",
  );

  useEffect(() => {
    // Check local storage for 'theme' setting
    const storedTheme = localStorage.getItem("theme");
    const theme = "theme-" + (storedTheme || defaultTheme); // Use 'default' if no theme is found

    // Apply the theme class to the body element
    document.documentElement.classList.add(theme);

    // Optional: Cleanup function to remove the theme class if needed
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, []);

  return (
    <>
      <AnimatedCursor
        color="255, 255, 255"
        innerSize={10}
        innerStyle={{
          background: "rgba(255, 255, 255, 0.5)",
          border: "2px solid black"
        }}
        outerSize={26}
        outerScale={3}
        outerStyle={{
          border: "2px solid rgba(255, 255, 255, 0.1)"
        }}
        trailingSpeed={8}
      />
      <Terminal />
    </>
  );
}

export default App;
