import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Interview } from "@/components/interview";
import { Skills } from "@/components/skills";
import { Testimonial } from "@/components/testimonial";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
    </main>
  );
};

export default Home;
