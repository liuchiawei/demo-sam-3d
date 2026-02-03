import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { IndustrySection } from "@/components/sections/IndustrySection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main className="relative scroll-smooth">
        <HeroSection />
        <CapabilitiesSection />
        <IndustrySection />
        <MetricsSection />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </>
  );
}
