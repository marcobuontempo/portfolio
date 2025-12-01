import type { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = HTMLAttributes<HTMLElement> & {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children, className, ...props }: Props) => {
  return (
    <section
      {...props}
      className={className ? `${styles.section} ${className}` : styles.section}
    >
      <h2 className={styles.heading}>
        {title.split(" ").map((t) => (
          <span className={styles.headingword} key={t}>
            {t}{" "}
          </span>
        ))}
      </h2>
      {children}
    </section>
  );
};

export default Section;
