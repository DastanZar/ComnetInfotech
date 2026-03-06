import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "IT Support & Maintenance | Comnet Infotech",
  description: "Reliable IT support and maintenance services for homes and businesses. Fast, friendly help when you need it.",
};

const supportServices = [
  {
    title: "User Support & Troubleshooting",
    description: "Fast, friendly help when you need it. We solve technical issues so you can get back to what matters.",
    icon: "support",
  },
  {
    title: "Device Care & Patching",
    description: "Keep your devices running smoothly with regular updates, security patches, and preventive maintenance.",
    icon: "patch",
  },
  {
    title: "Networking & Connectivity",
    description: "Reliable network setup and maintenance for homes and businesses of all sizes.",
    icon: "network",
  },
  {
    title: "Security & Monitoring",
    description: "Proactive security solutions to protect your systems from threats 24/7.",
    icon: "security",
  },
];

const pricingPlans = [
  {
    name: "Pay-As-You-Go",
    price: "From $75",
    description: "One-time support for occasional needs",
    features: [
      "Remote support",
      "On-site visits available",
      "No long-term commitment",
      "Standard response time",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Managed Support",
    price: "$199/mo",
    description: "Ongoing support with proactive maintenance",
    features: [
      "Unlimited remote support",
      "Monthly maintenance visits",
      "Priority response time",
      "Proactive monitoring",
      "Security updates",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-service IT management",
    features: [
      "Everything in Managed Support",
      "Dedicated IT team",
      "24/7 emergency support",
      "Strategic IT planning",
      "Compliance management",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function ITSupportPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              IT Support & <span className="text-accent">Maintenance</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Fast, reliable IT support when you need it. From troubleshooting to preventive maintenance, 
              we keep your technology running smoothly so you can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" href="/contact">
                Get Support Now
              </Button>
              <Button variant="outline" size="lg" href="/support">
                Submit a Ticket
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Support Services</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive IT support solutions tailored to your needs, whether you're a small business or enterprise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-4">
                  <SupportIcon />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing Section */}
      <SectionWrapper className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Flexible Support Plans</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Choose the support level that fits your needs. All plans include our commitment to quality service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`p-8 ${plan.popular ? 'ring-2 ring-accent' : ''}`}>
                {plan.popular && (
                  <div className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-accent mb-2">{plan.price}</div>
                <p className="text-text-secondary text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? 'cta' : 'outline'} 
                  href="/contact" 
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Our support team is ready to help. Submit a support request or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" href="/support">
              Submit a Ticket
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

function SupportIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
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
