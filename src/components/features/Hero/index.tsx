import AsciiText3d from "../../common/AsciiText3d";
import Nav from "../../common/Nav";
import styles from "./styles.module.css";

type Props = {};

const Hero = ({}: Props) => {
  return (
    <header className={styles.hero}>
      <AsciiText3d text="Marco Buontempo" />
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
