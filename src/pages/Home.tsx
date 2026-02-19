import Hero from "../components/Hero";
import WorkHistory from "../components/WorkHistory";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <WorkHistory />
      <Projects />
      <Blogs />
    </main>
  );
};

export default Home;
