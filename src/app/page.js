"use client";
import { useSquaresResize } from "./hooks.js";
import styles from "./page.module.css";

export default function Home() {
  const squareCount = 6;
  const [squareRefs, squareSizes] = useSquaresResize(squareCount);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {[...Array(squareCount)].map((_, i) => {
          const width = squareSizes[i].width;
          const isCertainWidth = width >= 200 && width <= 300;
          return (
            <div
              key={i}
              className={isCertainWidth ? styles.special : styles.square}
              ref={(el) => (squareRefs.current[i] = el)}
            >
              <span className={styles.span}>
                {squareSizes[i].width} width × {squareSizes[i].height} height
              </span>
            </div>
          );
        })}
      </main>
    </div>
  );
}
