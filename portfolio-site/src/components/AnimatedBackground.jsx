import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import "./AnimatedBackground.css";

const PARTICLE_COUNT = 24;

function ParticleField() {
  return (
    <div className="particle-field">
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            "--i": i,
            left: `${(i * 37 + 11) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function AnimatedBackground({ theme }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const media = theme.background;

  return (
    <div className="animated-background" aria-hidden="true">
      {!media && <ParticleField />}

      {media && (
        <>
          {/* Reduced-motion users get a still frame and never download the animation. */}
          <img
            key={theme.id}
            className={`background-media background-media--${theme.id}`}
            src={prefersReducedMotion ? media.poster : media.src}
            alt=""
            decoding="async"
            style={{ backgroundImage: `url(${media.poster})` }}
          />
          <div className="background-overlay" />
        </>
      )}

      {theme.id === "cyberpunk" && (
        <div className="cyberpunk-atmosphere">
          <div className="cyberpunk-glow cyberpunk-glow-one" />
          <div className="cyberpunk-glow cyberpunk-glow-two" />
          <div className="cyberpunk-scanlines" />
        </div>
      )}
    </div>
  );
}

export default AnimatedBackground;
