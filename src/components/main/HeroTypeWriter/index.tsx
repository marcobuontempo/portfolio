import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  children: string;
}



export default function HeroTypeWriter({ children }: Props) {
  const heroText = useRef<HTMLDivElement | null>(null);
  const typewriterText = useRef<HTMLDivElement | null>(null);

  const words = children.split(" ");
  const [typedText, setTypedText] = useState<string[]>(Array(words.length).fill(""));
  const [isTypingDone, setIsTypingDone] = useState(false);

  const letterDelay = 90; // Speed of each letter (in 1st animation)
  const delayBeforeStart = 1500; // Delay before starting animation to remove hero (i.e. 2nd animation), triggered *after* 1st animation finishes
  const wordDelay = 150;  // Delay between each word being removed from hero (in 2nd animation)
  const delayBeforeEnd = 800;  // Delay before the final animation (defined in CSS), to minimise the hero element

  // 1st Animation - Typewrite each letter of text
  useEffect(() => {
    const handleLoad = () => {
      let wordIndex = 0;
      let letterIndex = 0;

      const newTypedText = [...typedText];

      const typeNextLetter = () => {
        if (wordIndex < words.length) {
          if (letterIndex < words[wordIndex].length) {
            newTypedText[wordIndex] += words[wordIndex][letterIndex];
            setTypedText([...newTypedText]);
            letterIndex++;
            setTimeout(typeNextLetter, letterDelay);
          } else {
            // Add a space
            newTypedText[wordIndex] += " ";
            setTypedText([...newTypedText]);
            // Move to the next word
            wordIndex++;
            letterIndex = 0;
            typeNextLetter();
          }
        } else {
          setIsTypingDone(true);
        }
      };

      typeNextLetter();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [children]);

  // 2nd Animation - Remove each hero text word and place into terminal
  useEffect(() => {
    if (!isTypingDone) return;

    const handleLoad = () => {
      if (heroText.current && typewriterText.current) {
        setTimeout(() => {
          if (heroText.current && typewriterText.current) {
            for (let i = 0; i < typewriterText.current.children.length - 1; i++) {  // 1 less than total children, as we exclude the cursor <span>
              setTimeout(() => {
                if (heroText.current && typewriterText.current) {
                  const heroNode = heroText.current.children[i] as HTMLElement;
                  const typewriterNode = typewriterText.current.children[i] as HTMLElement;

                  heroNode.style.zIndex = "20";
                  heroNode.style.visibility = "visible";
                  typewriterNode.style.display = "none";
                  // TODO: play sound
                }
              }, i * wordDelay);
            }
          }
        }, delayBeforeStart);
      }
    };

    handleLoad();
  }, [isTypingDone]);

  return (
    <div className={styles["hero-typewriter-container"]}>
      {/* Hero text (hidden until typewriter is fully typed) */}
      <div className={styles["hero-text"]} ref={heroText} style={{ visibility: "hidden" }}>
        {words.map((word, i) => (
          <span key={i} className={styles["hero-word"]}>{word}&nbsp;</span>
        ))}
      </div>

      {/* Typewriter text (animated letter by letter) */}
      <div className={styles["typewriter-main"]} style={{ "--animation-delay": `${(children.length * letterDelay) + delayBeforeStart + (words.length * wordDelay) + delayBeforeEnd}ms` } as CSSProperties}>
        <div className={styles["typewriter-text"]} ref={typewriterText}>
          {typedText.map((word, i) => (
            <span key={i}>{word}</span>
          ))}
          <span className={styles["cursor"]} />
        </div>
      </div>
    </div>
  );
}