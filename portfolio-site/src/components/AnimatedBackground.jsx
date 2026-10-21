
import "../styles/animations.css";

function AnimatedBackground({ theme = "default" }) {
  return (
    <div
      className={`animated-background theme-${theme}`}
      aria-hidden="true"
    >
      {/* DEFAULT: Floating particles */}
      {theme === "default" && (
        <div className="particle-field">
          {Array.from({ length: 24 }, (_, i) => (
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
      )}

      {/* MINECRAFT: Animated GIF */}
      {theme === "minecraft" && (
        <img
          className="background-gif minecraft-gif"
          src="/videos/minecraft.gif"
          alt=""
        />
      )}

      {/* CYBERPUNK: Animated GIF */}
      {theme === "cyberpunk" && (
        <img
          className="background-gif cyberpunk-gif"
          src="/videos/cyberpunk.gif"
          alt=""
        />
      )}

      {/* Dark overlay for readability */}
      {(theme === "minecraft" || theme === "cyberpunk") && (
        <div className="background-overlay" />
      )}

      {/* CYBERPUNK: Additional neon atmosphere */}
      {theme === "cyberpunk" && (
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
