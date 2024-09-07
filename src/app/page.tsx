import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="md:flex max-w-screen-md xl:max-w-screen-xl mx-auto px-4">
      <Header />
      <div className="md:w-1/2 text-lightWhite pb-4 md:pb-16">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
