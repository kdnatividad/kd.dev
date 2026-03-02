import Hero from "../components/Hero";
import Career from "../components/career/Career";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Career />
      <Projects />
      <Blogs />
    </main>
  );
};

export default Home;
