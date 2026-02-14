import { HeroSection } from "@/components/hero-section";
import { ClientsSection } from "@/components/clients-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}