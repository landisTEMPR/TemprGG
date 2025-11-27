import Hero from "../../components/UI/Hero";
import StreamEmbed from "../../components/UI/StreamEmbed";
import Section from "../../components/UI/Section";
import NewsPreview from "./NewsPreview";
import SponsorsStrip from "./SponsorsStrip";

export default function Home() {
  return (
    <div className="home-container">

      {/* Hero */}
      <Hero />

      {/* Live Stream */}
      <Section title="Live Now">
        <StreamEmbed channel="temprgg" />
      </Section>

      {/* Latest News */}
      <Section title="Latest News">
        <NewsPreview />
      </Section>

      {/* Sponsors */}
      <Section title="Our Partners" style={{ paddingTop: 10 }}>
        <SponsorsStrip />
      </Section>
    </div>
  );
}
