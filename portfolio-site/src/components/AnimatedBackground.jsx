function AnimatedBackground({ theme }) {
  return (
    <div className="animated-background" aria-hidden="true">
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

      {theme === "minecraft" && (
        <div className="block-field">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={`minecraft-block block-${i % 3}`}
              style={{
                "--i": i,
                left: `${(i * 31 + 5) % 100}%`,
                top: `${(i * 43 + 12) % 100}%`,
              }}
            />
          ))}
        </div>
      )}

      {theme === "cyberpunk" && (
        <div className="cyberpunk-field">
          <div className="neon-grid" />
          <div className="neon-glow" />
        </div>
      )}
    </div>
  );
}

export default AnimatedBackground;