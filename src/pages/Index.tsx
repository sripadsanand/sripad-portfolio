import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import GlowCursor from "@/components/GlowCursor";

const Index = () => (
  <main className="bg-background">
    <GlowCursor />
    <Navigation />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <FeaturedProjectSection />
    <EducationSection />
    <SkillsSection />
    <ContactSection />
  </main>
);

export default Index;
