import AsciiText3d from "../AsciiText3d";
import Nav from "../../common/Nav";
import styles from "./styles.module.css";

type Props = {};

const Hero = ({}: Props) => {
  return (
    <header className={styles.hero}>
      <AsciiText3d />
      <Nav
        links={[
          { to: "about", text: "About" },
          { to: "portfolio", text: "Portfolio" },
          { to: "contact", text: "Contact" },
        ]}
      />
    </header>
  );
};

export default Hero;
