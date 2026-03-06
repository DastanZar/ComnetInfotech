import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Cloud Services | Comnet Infotech",
  description: "Expert cloud solutions including setup, migration, storage, and disaster recovery.",
};

const cloudServices = [
  {
    title: "Cloud Setup & Migration",
    description: "Seamlessly move your data and applications to the cloud with minimal disruption to your daily operations. We handle the entire migration process from planning to execution.",
    features: [
      "Assessment of current infrastructure",
      "Custom migration strategy",
      "Zero-downtime migration",
      "Post-migration support",
    ],
  },
  {
    title: "Cloud Storage & Collaboration",
    description: "Work from anywhere with secure file sharing, collaborative documents, and team communication tools.",
    features: [
      "Enterprise-grade cloud storage",
      "Real-time collaboration tools",
      "Team communication platforms",
      "Secure remote access",
    ],
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Protect your valuable data with automated backups and fast recovery solutions when you need them most.",
    features: [
      "Automated daily backups",
      "Geographic redundancy",
      "One-click restoration",
      "Disaster recovery planning",
    ],
  },
];

export default function CloudServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Cloud Solutions for <span className="text-accent">Modern Business</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              From cloud migration to everyday management, we help you leverage the full power of cloud technology 
              without the complexity. Focus on your business while we handle your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" href="/contact">
                Get a Cloud Assessment
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <Card key={index} className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent-muted flex items-center justify-center mb-6">
                  <CloudIcon />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our Cloud Services?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We combine technical expertise with business-focused solutions to deliver cloud infrastructure 
              that actually works for your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-text-secondary">Uptime Guarantee</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-text-secondary">Monitoring & Support</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">AES-256</div>
              <div className="text-text-secondary">Encryption</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">30min</div>
              <div className="text-text-secondary">Response Time</div>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Schedule a free consultation to discuss your cloud migration strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" href="/contact">
              Book a Consultation
            </Button>
            <Button variant="outline" size="lg" href="/support" className="border-white text-white hover:bg-white hover:text-primary">
              Need Support?
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function CloudIcon() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
