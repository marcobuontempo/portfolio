import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

type Props = {
  children: string;
}

// no need to copy x,y, and styles.
// simply 

export default function HeroTypeWriter({ children }: Props) {
  const heroText = useRef<HTMLDivElement | null>(null);
  const typewriterText = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const delayBeforeStart = 1000;
    const wordDelay = 300;

    if (heroText.current && typewriterText.current) {
      console.log("HeroText Ref:", heroText.current.children);
      console.log("TypewriterText Ref:", typewriterText.current.children);

      setTimeout(() => {
        if (heroText.current && typewriterText.current) {
          for (let i = 0; i < typewriterText.current.children.length; i++) {
            setTimeout(() => {
              if (heroText.current && typewriterText.current) {
                const heroNode = heroText.current.children[i] as HTMLElement;
                const typewriterNode = typewriterText.current.children[i] as HTMLElement;

                heroNode.style.zIndex = "20";
                heroNode.style.visibility = "visible";
                typewriterNode.style.display = "none";
              }
            }, i * wordDelay); // Delay each word
          }
        }
      }, delayBeforeStart);
    }
  }, []);



  return (
    <div className={styles["hero-typewriter-container"]}>

      <div className={styles["hero-text"]} ref={heroText}>
        {
          children.split(" ").map((word, i) => (
            <span key={`${word}-${i}`} className={styles["hero-word"]}>{word}&nbsp;</span>
          ))
        }
      </div>

      <div className={styles["typewriter-main"]}>
        <div className={styles["typewriter-text"]} ref={typewriterText}>
          {
            children.split(" ").map((word, i) => (
              <span key={`${word}-${i}`}>{word}&nbsp;</span>
            ))
          }
        </div>
      </div>

    </div>
  )
}