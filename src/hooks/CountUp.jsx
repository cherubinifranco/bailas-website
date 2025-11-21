import { useEffect, useState } from "react";

export function useCountUp(end, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setValue(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animate();
  }, [end, duration]);

  return value;
}
