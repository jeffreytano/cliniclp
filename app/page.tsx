import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StickyCard } from "@/components/sticky-card";
import { VerticalSection } from "@/components/vertical-section";
import { Location } from "@/components/location";
import { ScrollToTop } from "@/components/scroll-to-top";
import { AboutUs } from "@/components/about-us";
import { LocationButton } from "@/components/location-button";
import { ContactSection } from "@/components/contact-section";
import { ScheduleSection } from "@/components/schedule-section";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StickyCard />
      <main>
        <AboutUs />
        <VerticalSection />
        <Location />
        <ScheduleSection />
        <ContactSection />
      </main>
      <ScrollToTop />
      <LocationButton />
    </div>
  );
}
