import About from "./components/features/About";
import Contact from "./components/features/Contact";
import Hero from "./components/features/Hero";
import PortfolioCollection from "./components/features/PortfolioCollection";
import Layout from "./components/layout/Layout";

const App = () => {
  console.log(
    "%cbeep. %cboop. %ci'm a robot.",
    "color:green;",
    "color:white;",
    "color:red;"
  );

  console.log(
    `
%c███╗   ███╗ █████╗ ██████╗  ██████╗ ██████╗ 
%c████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔═══██╗
%c██╔████╔██║███████║██████╔╝██║     ██║   ██║
%c██║╚██╔╝██║██╔══██║██╔══██╗██║     ██║   ██║
%c██║ ╚═╝ ██║██║  ██║██║  ██║╚██████╗╚██████╔╝
%c╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ %cxox
  `,
    "color:#b8ffff;",
    "color:#92fffe;",
    "color:#6cf9d8;",
    "color:#47d4b3;",
    "color:#21ae8d;",
    "color:#008867;",
    "color:white; font-style:italic;"
  );

  return (
    <Layout>
      <Hero />
      <About />
      <PortfolioCollection />
      <Contact />
    </Layout>
  );
};

export default App;
