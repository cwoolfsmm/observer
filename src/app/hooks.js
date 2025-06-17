import { useRef, useState, useEffect } from "react";

export function useSquaresResize(count) {

  // sizes - holds the dimensions of each square
  const [sizes, setSizes] = useState(Array(count).fill({ width: 0, height: 0 }));
  // refs - holds references to the square elements
  const refs = useRef([]);

  // ensure refs array always matches count
  if (refs.current.length !== count) {
    refs.current = Array(count).fill(null);
  }

  useEffect(() => {
    // create ResizeObserver instances for each square
    // and observe their size changes
    // create map of all observers
    const observers = refs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          // update sizes state with the new dimensions
          const { width, height } = entry.contentRect;
          setSizes((prev) => {
            const next = [...prev];
            next[i] = { width: Math.round(width), height: Math.round(height) };
            return next;
          });
        }
      });

      // do the observing
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, [count]);

  return [refs, sizes];
}