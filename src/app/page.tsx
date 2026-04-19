import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
