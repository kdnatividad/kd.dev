import Hero from "../components/Hero";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <Work />
      <Projects />
      <Blogs />
    </main>
  );
};

export default Home;
