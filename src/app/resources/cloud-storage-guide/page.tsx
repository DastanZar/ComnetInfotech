import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Migration: What to Expect | Comnet Infotech",
  description: "A practical guide to planning and executing a smooth cloud transition for your business.",
};

export default function CloudStorageGuidePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Article</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              Cloud Migration: What to Expect
            </h1>
            <p className="text-lg text-text-secondary">
              A practical guide to planning and executing a smooth cloud transition.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-text-secondary mb-8">
              Moving to the cloud is one of the most important technology decisions your business 
              can make. Here's what you need to know to plan a successful migration.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6">Why Move to the Cloud?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6">
                <h3 className="font-bold text-primary mb-3">Cost Savings</h3>
                <p className="text-text-secondary text-sm">
                  Reduce capital expenses on hardware and convert to predictable operational costs. 
                  Pay only for what you use.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-primary mb-3">Scalability</h3>
                <p className="text-text-secondary text-sm">
                  Easily scale your resources up or down based on business needs. No more 
                  over-provisioning or running out of capacity.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-primary mb-3">Accessibility</h3>
                <p className="text-text-secondary text-sm">
                  Access your data and applications from anywhere, on any device. Perfect for 
                  remote work and distributed teams.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-primary mb-3">Security</h3>
                <p className="text-text-secondary text-sm">
                  Cloud providers invest heavily in security infrastructure, often more than 
                  small businesses can afford on their own.
                </p>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-6">The Migration Process</h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Assessment & Planning</h3>
                  <p className="text-text-secondary">
                    Evaluate your current infrastructure, identify applications suitable for cloud 
                    migration, and determine dependencies. This phase typically takes 2-4 weeks 
                    depending on complexity.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Choose Your Cloud Model</h3>
                  <p className="text-text-secondary">
                    Decide between public cloud, private cloud, or hybrid solutions. Each has 
                    different benefits:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary mt-2 space-y-1">
                    <li><strong>Public Cloud:</strong> Cost-effective, scalable (AWS, Azure, Google Cloud)</li>
                    <li><strong>Private Cloud:</strong> More control, better for sensitive data</li>
                    <li><strong>Hybrid:</strong> Best of both worlds, complex but flexible</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Data Migration</h3>
                  <p className="text-text-secondary">
                    Move your data to the cloud using various methods: direct upload for small 
                    datasets, offline transfer for large volumes, or continuous sync for 
                    ongoing migrations. Plan for 1-4 weeks depending on data volume.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Application Migration</h3>
                  <p className="text-text-secondary">
                    Migrate applications one at a time, starting with less critical systems. 
                    Test thoroughly before moving production workloads. Consider refactoring 
                    applications for cloud-native optimization.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Testing & Validation</h3>
                  <p className="text-text-secondary">
                    Conduct comprehensive testing including functionality, performance, security, 
                    and user acceptance. Train employees on new systems and processes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Go Live & Optimization</h3>
                  <p className="text-text-secondary">
                    Switch to cloud systems with a parallel运行 period if possible. Monitor 
                    performance closely and optimize resources for cost and performance. 
                    Establish ongoing management procedures.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-background-alt rounded-2xl">
              <h3 className="text-xl font-bold text-primary mb-4">Common Challenges to Avoid</h3>
              <ul className="space-y-3 text-text-secondary">
                <li>• <strong>Underestimating data volume:</strong> Know how much data you're moving</li>
                <li>• <strong>Ignoring security:</strong> Plan for security at every stage</li>
                <li>• <strong>No rollback plan:</strong> Always have a backup plan</li>
                <li>• <strong>Insufficient training:</strong> Prepare your team for the new environment</li>
                <li>• <strong>Going too fast:</strong> Phase the migration for better control</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-primary rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Migrate to the Cloud?</h3>
              <p className="text-gray-300 mb-6">
                Comnet Infotech specializes in cloud migration for small and medium businesses 
                in Delhi NCR. We handle everything from planning to execution.
              </p>
              <Button variant="cta" size="lg" href="/cloud-services">
                Explore Cloud Services
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
            <Link href="/resources/do-i-need-managed-it">
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-bold text-primary mb-2">5 Signs Your Business Needs Managed IT</h4>
                <p className="text-text-secondary text-sm">Warning signs for businesses.</p>
              </Card>
            </Link>
            <Link href="/resources/home-network-security">
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-bold text-primary mb-2">Home Network Security Checklist</h4>
                <p className="text-text-secondary text-sm">Essential steps to secure your home network.</p>
              </Card>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
