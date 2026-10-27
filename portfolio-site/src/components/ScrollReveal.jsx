import { useEffect, useRef, useState } from "react";

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
        // Runs when the element enters AND leaves the viewport.
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? "visible" : ""} ${className}`}
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