import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Free IT Health Check | Comnet Infotech",
  description: "Get a free IT health check for your business and discover opportunities to improve your technology infrastructure.",
};

const checkAreas = [
  {
    title: "Security Assessment",
    items: [
      "Firewall configuration review",
      "Antivirus status check",
      "Password policy evaluation",
      "Security patch status",
    ],
  },
  {
    title: "Performance Analysis",
    items: [
      "Server performance review",
      "Network speed testing",
      "Storage capacity check",
      "Backup verification",
    ],
  },
  {
    title: "Compliance Review",
    items: [
      "Data protection check",
      "Documentation review",
      "Disaster recovery plan",
      "Access control audit",
    ],
  },
];

export default function HealthCheckPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Free IT <span className="text-accent">Health Check</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Discover how healthy your IT infrastructure really is. Our comprehensive assessment 
              identifies issues and opportunities to improve your technology.
            </p>
            <Button variant="cta" size="lg" href="/contact">
              Schedule Your Free Check
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What's Included</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our comprehensive IT health check covers three critical areas of your technology infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {checkAreas.map((area, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-secondary">
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

      {/* Benefits */}
      <SectionWrapper className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Get a Health Check?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Regular IT assessments help prevent problems before they happen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">45%</div>
              <p className="text-text-secondary text-sm">of issues caught early</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">30%</div>
              <p className="text-text-secondary text-sm">cost savings potential</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <p className="text-text-secondary text-sm">peace of mind</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-text-secondary text-sm">objective analysis</p>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Get Started?</h2>
          <p className="text-text-secondary text-lg mb-8">
            Schedule your free IT health check today. It takes less than 30 minutes to book, 
            and we'll provide a comprehensive report within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" href="/contact">
              Schedule Now
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Learn More
            </Button>
          </div>
        </div>
      </SectionWrapper>
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
