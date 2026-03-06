import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Our Services | Comnet Infotech",
  description: "Explore our comprehensive IT services including cloud solutions, IT support, hardware solutions, and more.",
};

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <ServiceCards />
      <ContactCTA />
    </main>
  );
}
