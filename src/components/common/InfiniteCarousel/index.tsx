import { Children, useEffect, useRef, type ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

const InfiniteCarousel = ({ children, speed = 50, className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const scrollAmountRef = useRef<number>(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const step = (time: number) => {
      const deltaTime = (time - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = time;

      if (!pausedRef.current) {
        scrollAmountRef.current += speed * deltaTime;

        if (scrollAmountRef.current >= container.scrollWidth / 2) {
          scrollAmountRef.current = 0;
        }

        container.scrollLeft = scrollAmountRef.current;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [speed]);

  const duplicatedChildren = Children.toArray(children).concat(
    Children.toArray(children)
  );

  return (
    <div
      className={
        className ? `${styles.carousel} ${className}` : styles.carousel
      }
      ref={containerRef}
      onPointerEnter={() => (pausedRef.current = true)}
      onPointerLeave={() => (pausedRef.current = false)}
    >
      {duplicatedChildren.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
};

export default InfiniteCarousel;
