import { useEffect, useState } from 'react';

export function Counter({ value, suffix = '', duration = 1400, active = true }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    let frame = 0;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [active, duration, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
