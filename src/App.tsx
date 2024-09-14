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

  return (
    <>
      <Terminal />
    </>
  );
}

export default App;
