import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Gallery from "../components/sections/Gallery";
import Dances from "../components/sections/Dances";
export default function IndexPage() {
  return (
    <main>
      <Hero />
      <About />
      <Dances />
      <Gallery />
      <img src="./assets/portada-1.jpg" alt="Banner" className="mx-auto"/>
    </main>
  );
}
