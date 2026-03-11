import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us | Comnet Infotech",
  description: "Learn about Comnet Infotech - your trusted IT partner since 2005, serving homes and businesses with comprehensive technology solutions.",
};

const timeline = [
  { year: "2005", title: "Founded", description: "Comnet Infotech was established with a mission to make technology accessible to everyone." },
  { year: "2008", title: "First Enterprise Client", description: "Expanded our services to serve small and medium businesses." },
  { year: "2012", title: "Cloud Services Launch", description: "Introduced cloud solutions to help clients modernize their infrastructure." },
  { year: "2016", title: "Service Team Expansion", description: "Grew our support team to provide 24/7 assistance to clients." },
  { year: "2020", title: "Remote Work Solutions", description: "Helped businesses transition to remote work during challenging times." },
  { year: "2024", title: "500+ Clients Served", description: "Continued growth with a focus on exceptional service." },
];

const values = [
  {
    title: "Customer First",
    description: "We prioritize your needs and work tirelessly to exceed expectations.",
  },
  {
    title: "Technical Excellence",
    description: "Our team stays current with the latest technologies and best practices.",
  },
  {
    title: "Honest Communication",
    description: "We believe in transparent, straightforward advice—no hidden agendas.",
  },
  {
    title: "Long-term Partnerships",
    description: "We build lasting relationships focused on your continued success.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              About <span className="text-accent">Comnet Infotech</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Your trusted technology partner since 2005. We help homes and businesses navigate 
              the ever-changing world of technology with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Founded in 2005, Comnet Infotech began with a simple mission: to make technology 
                  accessible and manageable for everyone. What started as a small IT consultancy has 
                  grown into a comprehensive technology solutions provider.
                </p>
                <p>
                  Over the years, we've evolved with the technology landscape, expanding our services 
                  from basic computer repair to include cloud solutions, enterprise networking, and 
                  complete IT infrastructure management.
                </p>
                <p>
                  Today, we're proud to serve hundreds of clients across the region, from homeowners 
                  setting up their first network to enterprises managing complex multi-site infrastructures.
                </p>
                <p>
                  Our commitment to personalized service and technical excellence has remained constant 
                  throughout our growth—because at the end of the day, it's about helping people 
                  use technology to improve their lives and businesses.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-accent-muted rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl">
                    <div className="text-4xl font-bold text-accent mb-2">15+</div>
                    <div className="text-black">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl">
                    <div className="text-4xl font-bold text-accent mb-2">574+</div>
                    <div className="text-black">Clients Served</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl">
                    <div className="text-4xl font-bold text-accent mb-2">99.999%</div>
                    <div className="text-black">Uptime</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl">
                    <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-black">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These principles guide everything we do at Comnet Infotech.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-text-secondary text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Key milestones in our growth from a small startup to a trusted technology partner.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/20 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                      <div className="text-accent font-bold mb-2">{item.year}</div>
                      <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                      <p className="text-black/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-accent absolute left-1/2 transform -translate-x-1/2" />
                  <div className="flex-1 md:pl-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Join hundreds of satisfied clients who've made Comnet their trusted technology partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" href="/contact">
              Get Started
            </Button>
            <Button variant="outline" size="lg" href="/services" className="border-white text-white hover:bg-white hover:text-primary">
              Our Services
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
