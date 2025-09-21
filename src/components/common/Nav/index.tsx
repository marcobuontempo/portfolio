import type { HTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = HTMLAttributes<HTMLElement> & {
  links: { to: string; text: string }[];
};

const Nav = ({ links }: Props) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.to}>
            <button
              className={styles.button}
              onClick={() => handleScroll(link.to)}
            >
              {link.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
