import Hero from "../components/Hero";
import Career from "../components/career/Career";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Career />
      <Projects />
    </main>
  );
};

export default Home;
