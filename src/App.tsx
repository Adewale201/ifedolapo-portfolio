import Navbar from "./components/layout/Navbar";
import About from "./sections/about";
import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Featured from "./sections/featured";

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
      </main>

    
    </>
  );
}

export default App;