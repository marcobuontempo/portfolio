import { Children, useEffect, useRef, type ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  speed?: number;
  gapSize?: number; // flexbox gap size in px, if applied on component
  className?: string;
};

const InfiniteCarousel = ({
  children,
  speed = 50,
  gapSize = 0,
  className,
}: Props) => {
  const GAP_THRESHOLD = 2 * gapSize;

  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const scrollAmountRef = useRef<number>(1);
  const isTouchingRef = useRef(false); // track finger touch

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollLeft = 1; // ensures the scroll is offset initially, so that it allows left-scroll

    const handleScroll = () => {
      const halfWidth = container.scrollWidth / 2;

      // Wrap right
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
      }

      // Wrap left using your gap threshold
      if (container.scrollLeft <= GAP_THRESHOLD) {
        container.scrollLeft += halfWidth;
      }

      // Additional guard to stop iOS/Android from sticking at 0
      if (container.scrollLeft === 0) {
        container.scrollLeft = halfWidth + GAP_THRESHOLD;
      }

      scrollAmountRef.current = container.scrollLeft;
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    const step = (time: number) => {
      const deltaTime = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      // console.log(container.scrollLeft, scrollAmountRef.current);

      if (!isTouchingRef.current) {
        scrollAmountRef.current += speed * deltaTime;
        container.scrollLeft = scrollAmountRef.current;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  const originalChildren = Children.toArray(children);
  const duplicatedChildren = [...originalChildren, ...originalChildren];

  return (
    <div
      className={
        className ? `${styles.carousel} ${className}` : styles.carousel
      }
      ref={containerRef}
      onPointerEnter={() => (isTouchingRef.current = true)}
      onPointerLeave={() => (isTouchingRef.current = false)}
      onTouchStart={() => (isTouchingRef.current = true)}
      onTouchMove={() => (isTouchingRef.current = true)}
      onTouchEnd={() => (isTouchingRef.current = false)}
      onTouchCancel={() => (isTouchingRef.current = false)}
    >
      {duplicatedChildren.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
};

export default InfiniteCarousel;
