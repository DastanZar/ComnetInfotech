import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "OEM / Service Contracts | Comnet Infotech",
  description: "Comprehensive OEM and service contracts for enterprise hardware maintenance and support.",
};

const contractTypes = [
  {
    title: "Hardware Maintenance Contracts",
    description: "Comprehensive coverage for servers, storage, and networking equipment from major OEMs.",
    features: [
      "Multi-vendor support",
      "Next-business-day parts replacement",
      "24/7 emergency support",
      "On-site technicians",
      "Quarterly health checks",
    ],
  },
  {
    title: "Software Assurance",
    description: "Keep your software current with subscription-based licensing and support.",
    features: [
      "License management",
      "Version upgrades included",
      "Technical support",
      "Training resources",
      "Compliance reporting",
    ],
  },
  {
    title: "Enterprise Service Agreements",
    description: "Tailored contracts for organizations with complex IT infrastructure.",
    features: [
      "Dedicated account manager",
      "Custom SLAs",
      "Preventive maintenance",
      "Disaster recovery support",
      "Budget forecasting",
    ],
  },
];

const benefits = [
  {
    title: "Reduced Downtime",
    description: "Fast response times and priority support minimize business disruption.",
    icon: "time",
  },
  {
    title: "Predictable Costs",
    description: "Fixed annual costs make budgeting easier and avoid unexpected expenses.",
    icon: "cost",
  },
  {
    title: "Expert Support",
    description: "Access to certified engineers with deep OEM expertise.",
    icon: "expert",
  },
  {
    title: "Extended Equipment Life",
    description: "Regular maintenance extends the lifespan of your hardware investment.",
    icon: "life",
  },
];

export default function OEMContractsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              OEM & Service <span className="text-accent">Contracts</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Protect your technology investment with comprehensive service contracts. 
              We manage relationships with major OEMs so you can focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" href="/contact">
                Get a Quote
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Contract Options</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Flexible service contracts designed to meet the needs of businesses of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">{contract.title}</h3>
                <p className="text-text-secondary mb-6">{contract.description}</p>
                <ul className="space-y-3">
                  {contract.features.map((feature, idx) => (
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
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Service Contracts?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Get peace of mind knowing your critical infrastructure is covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-4">
                  <BenefitIcon />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Getting started with a service contract is simple.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="font-bold text-primary mb-2">Assessment</h3>
              <p className="text-text-secondary text-sm">We evaluate your current infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="font-bold text-primary mb-2">Proposal</h3>
              <p className="text-text-secondary text-sm">Custom contract tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="font-bold text-primary mb-2">Onboarding</h3>
              <p className="text-text-secondary text-sm">Documentation and setup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h3 className="font-bold text-primary mb-2">Support</h3>
              <p className="text-text-secondary text-sm">Ongoing coverage and assistance</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Protect Your Investment?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Contact us to discuss a custom service contract for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" href="/contact">
              Get a Quote
            </Button>
            <Button variant="outline" size="lg" href="/contact" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function BenefitIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
