import Header from "@/components/layout/Header";
import FAQ from "@/components/faq/Faq";
import Sponsors from "@/components/sponsors/Sponsors";
import Section from "@/components/layout/Section";
import Schedule from "@/components/schedule/Schedule";

export default function App() {
  return (
    <div className="h-screen">
      <Header />
      <div>
        <Section name="Frequently Asked Questions">
          <FAQ />
        </Section>
        <Section name="Our Sponsors">
          <Sponsors />
        </Section>
        <Section name="The Schedule">
          <Schedule />
        </Section>
      </div>
    </div>
  );
}
