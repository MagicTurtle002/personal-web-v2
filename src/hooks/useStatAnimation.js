import { useEffect, useState } from "react";

export const useStatsAnimation = () => {
  const [animateCounter, setAnimateCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCounter(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("project-stats");
    if (statsSection) observer.observe(statsSection);

    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  return animateCounter;
};