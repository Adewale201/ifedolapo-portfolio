import Navbar from "./components/layout/Navbar";
import About from "./sections/about";
import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Featured from "./sections/featured";
import Projects from "./sections/projects";
import Contact from "./sections/contact/Contact";
import Footer from "./components/layout/Footer";

import Marquee from "./components/common/Marquee";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Marquee />

        <Featured />

        <About />

        <Experience />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;