import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Hardware Solutions | Comnet Infotech",
  description: "Quality hardware solutions including computers, servers, networking equipment, and peripherals for homes and businesses.",
};

const hardwareCategories = [
  {
    title: "Computers & Laptops",
    description: "Business-grade desktops and laptops configured for your specific needs.",
    items: ["Dell Business PCs", "Lenovo ThinkPad", "HP EliteBook", "Apple MacBook Pro"],
  },
  {
    title: "Servers & Storage",
    description: "Reliable server solutions for small to enterprise businesses.",
    items: ["Tower Servers", "Rack Servers", "NAS Storage", "SAN Solutions"],
  },
  {
    title: "Networking Equipment",
    description: "Professional networking gear for seamless connectivity.",
    items: ["Managed Switches", "Enterprise Routers", "Access Points", "Firewalls"],
  },
  {
    title: "Peripherals",
    description: "Essential accessories to complete your workspace.",
    items: ["Monitors", "Keyboards & Mice", "Printers", "Webcams & Headsets"],
  },
];

const brands = [
  "Dell", "HP", "Lenovo", "Cisco", "Microsoft", "Apple", "ASUS", "Acer"
];

export default function HardwarePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Hardware <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Quality hardware for homes and businesses. We help you select, configure, and deploy 
              the right equipment for your needs, backed by our expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" href="/contact">
                Request a Quote
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Categories */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Hardware Offerings</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From individual components to complete system deployments, we have you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {hardwareCategories.map((category, index) => (
              <Card key={index} className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent-muted flex items-center justify-center mb-6">
                  <HardwareIcon />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{category.title}</h3>
                <p className="text-text-secondary mb-4">{category.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Brands Section */}
      <SectionWrapper className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Trusted Brands We Work With</h2>
            <p className="text-text-secondary">
              We partner with industry-leading manufacturers to bring you quality products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {brands.map((brand, index) => (
              <div key={index} className="text-xl font-bold text-primary px-4">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Include */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-6">
                <BuyIcon />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Hardware Procurement</h3>
              <p className="text-text-secondary text-sm">
                We source and provision hardware at competitive prices, handling all the logistics for you.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-6">
                <ConfigIcon />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Configuration & Setup</h3>
              <p className="text-text-secondary text-sm">
                Every device is configured to your specifications before delivery—ready to use out of the box.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-6">
                <InstallIcon />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Installation & Deployment</h3>
              <p className="text-text-secondary text-sm">
                Our team handles complete installation and deployment, ensuring everything works seamlessly.
              </p>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Hardware for Your Business?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a custom quote for your hardware needs. We'll recommend the best solutions for your budget and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" href="/contact">
              Get a Quote
            </Button>
            <Button variant="outline" size="lg" href="/contactborder-white text-white" className=" hover:bg-white hover:text-primary">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function HardwareIcon() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function BuyIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  );
}

function ConfigIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function InstallIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}
