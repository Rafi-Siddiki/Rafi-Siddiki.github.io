import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollReveal from "./components/ScrollReveal";
import useTheme from "./hooks/useTheme";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

// Section ids must match NAV_LINKS in data/navigation.js.
// Home handles its own entrance animation, so it has no reveal direction.
const SECTIONS = [
  { id: "home", Component: Home, className: "hero" },
  { id: "projects", Component: Projects, reveal: "up" },
  { id: "about", Component: About, reveal: "left" },
  { id: "contact", Component: Contact, reveal: "up" },
];

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="app">
      <AnimatedBackground theme={theme} />

      <Navbar themeId={theme.id} onThemeChange={setTheme} />

      <main>
        {SECTIONS.map(({ id, Component, className = "", reveal }) => (
          <section key={id} id={id} className={`section ${className}`.trim()}>
            {reveal ? (
              <ScrollReveal direction={reveal}>
                <Component />
              </ScrollReveal>
            ) : (
              <Component />
            )}
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
