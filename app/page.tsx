import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-palette-cream flex flex-col justify-between">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections - stretches horizontally across desktop */}
      <main className="w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex-1">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
