import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import ChapterOne from "../components/ChapterOne";
import ChapterTwo from "../components/ChapterTwo";
import CrissCrossMarquee from "../components/CrissCrossMarquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ChapterOne />
      <ChapterTwo />
      <CrissCrossMarquee />
    </main>
  );
}
