import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SendFlowersSection } from "@/components/SendFlowersSection";
import { Terminal } from "@/components/Terminal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Terminal />
      <SendFlowersSection />
    </main>
  );
}
