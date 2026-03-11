import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Signs Your Business Needs Managed IT Services | Comnet Infotech",
  description: "Learn the warning signs that indicate it's time to upgrade your IT support to managed services.",
};

export default function ManagedITServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Guide</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              5 Signs Your Business Needs Managed IT Services
            </h1>
            <p className="text-lg text-text-secondary">
              Is your IT support holding you back? Learn the warning signs that indicate it's time to upgrade.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-text-secondary mb-8">
              Running a business is challenging enough without worrying about IT problems. 
              Here's how to tell if it's time to consider managed IT services.
            </p>

            <div className="space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">1. Your "IT Person" Is Just One Person</h2>
                <p className="text-text-secondary">
                  If you rely on a single person for all your IT needs—whether it's a full-time employee 
                  or a freelancer—you're at risk. What happens when they're unavailable? Managed IT 
                  services provide a team of experts available when you need them.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">2. IT Emergencies Are Frequent</h2>
                <p className="text-text-secondary">
                  If you're dealing with computer crashes, network outages, or security breaches more 
                  than once a month, your current setup isn't working. Managed services include 
                  proactive monitoring to catch problems before they become emergencies.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">3. You're Using Outdated Technology</h2>
                <p className="text-text-secondary">
                  Holding onto old hardware and software because "it still works" is a false economy. 
                  Managed IT services keep your technology current, secure, and efficient—saving you 
                  money in the long run through improved productivity.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">4. You Have No Disaster Recovery Plan</h2>
                <p className="text-text-secondary">
                  What would happen if you lost all your data tomorrow? If you don't have a backup 
                  and recovery plan, you're gambling with your business. Managed IT services include 
                  automated backups and disaster recovery solutions.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">5. IT Costs Are Unpredictable</h2>
                <p className="text-text-secondary">
                  If your IT expenses fluctuate wildly from month to month—emergency repairs, 
                  unexpected hardware purchases, crisis support—you need predictable IT costs. 
                  Managed services work on a fixed monthly fee, making budgeting simple.
                </p>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-background-alt rounded-2xl">
              <h3 className="text-xl font-bold text-primary mb-4">Ready to Get Started?</h3>
              <p className="text-text-secondary mb-6">
                Comnet Infotech offers free IT assessments for businesses in Delhi NCR. 
                We'll evaluate your current setup and recommend a customized solution.
              </p>
              <Button variant="cta" size="lg" href="/contact">
                Get Your Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Resources */}
      <SectionWrapper className="py-16 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-primary mb-6">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/resources/home-network-security">
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-bold text-primary mb-2">Home Network Security Checklist</h4>
                <p className="text-text-secondary text-sm">Essential steps to secure your home network.</p>
              </Card>
            </Link>
            <Link href="/resources/cloud-storage-guide">
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-bold text-primary mb-2">Cloud Migration: What to Expect</h4>
                <p className="text-text-secondary text-sm">A practical guide to planning your cloud transition.</p>
              </Card>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
