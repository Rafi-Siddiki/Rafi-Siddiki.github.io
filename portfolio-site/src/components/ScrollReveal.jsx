import { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

// Fades children in the first time they scroll into view, then stops observing.
function ScrollReveal({
  children,
  direction = "up",
  duration = 700,
  delay = 0,
  className = "",
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? "visible" : ""} ${className}`.trim()}
      data-direction={direction}
      style={{
        "--reveal-duration": `${duration}ms`,
        "--reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
