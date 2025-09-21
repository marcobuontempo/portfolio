import About from "./components/features/About";
import Contact from "./components/features/Contact";
import Hero from "./components/features/Hero";
import PortfolioCollection from "./components/features/PortfolioCollection";
import Layout from "./components/layout/Layout";

const App = () => {
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
