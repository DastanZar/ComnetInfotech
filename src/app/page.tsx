import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { CloudExpertise } from "@/components/sections/CloudExpertise";
import { HardwareSolutions } from "@/components/sections/HardwareSolutions";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <ServiceCards />
      <WhoWeServe />
      <CloudExpertise />
      <HardwareSolutions />
      <HowWeWork />
      <Testimonials />
      <FAQ />
      <ResourcesPreview />
      <ContactCTA />
    </main>
  );
}
