import ClientHero from "@/components/ClientHero";
import SemesterGrid from "@/components/SemesterGrid";
import OpenSource from "./OpenSource";
import AboutUs from "./AboutUs";
import Faq from "./Faq";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ClientHero />
      <SemesterGrid />
      <AboutUs />
      <OpenSource />
      <Faq />
      <Footer />
    </main>
  );
}
