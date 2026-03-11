import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Network Security Checklist | Comnet Infotech",
  description: "Essential steps to secure your home network and protect your family from cyber threats.",
};

export default function HomeNetworkSecurityPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Checklist</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              Home Network Security Checklist
            </h1>
            <p className="text-lg text-text-secondary">
              Protect your family and devices with these essential security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-text-secondary mb-8">
              With more families working and learning from home, securing your home network has never 
              been more important. Follow this checklist to keep your digital life safe.
            </p>

            <div className="space-y-6">
              <Card className="p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">Change Default Router Password</h2>
                    <p className="text-text-secondary">
                      Your router came with a default password that's easily guessable. Change it to a 
                      strong, unique password. Use a mix of letters, numbers, and symbols.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">Enable WPA3 or WPA2 Encryption</h2>
                    <p className="text-text-secondary">
                      Never use WEP encryption—it's easily cracked. Use WPA2 at minimum, or WPA3 
                      if your router supports it. This encrypts your WiFi traffic.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">Create a Guest Network</h2>
                    <p className="text-text-secondary">
                      Keep your personal devices separate from guests. Most routers allow you to 
                      create a guest network with limited access to your main network resources.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">Update Router Firmware</h2>
                    <p className="text-text-secondary">
                      Router manufacturers release security updates. Check your router settings 
                      monthly for updates, or enable automatic updates if available.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">Use Strong, Unique Passwords</h2>
                    <p className="text-text-secondary">
                      Enable two-factor authentication on important accounts. Use a password manager 
                      to generate and store unique passwords for each account.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">Secure Smart Home Devices</h2>
                    <p className="text-text-secondary">
                      Smart TVs, cameras, and IoT devices can be vulnerable. Change default passwords, 
                      update firmware regularly, and consider isolating them on a separate network.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                    7
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">Enable Network Firewall</h2>
                    <p className="text-text-secondary">
                      Most routers have built-in firewalls. Ensure it's enabled to block unauthorized 
                      incoming connections to your network.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                    8
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-2">Back Up Your Data</h2>
                    <p className="text-text-secondary">
                      Use cloud backup or an external hard drive to regularly back up important files. 
                      This protects you from both security threats and hardware failures.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-background-alt rounded-2xl">
              <h3 className="text-xl font-bold text-primary mb-4">Need Help Securing Your Home Network?</h3>
              <p className="text-text-secondary mb-6">
                Comnet Infotech offers home network security assessments and setup services in Delhi NCR. 
                Our experts can help you implement all these security measures.
              </p>
              <Button variant="cta" size="lg" href="/contact">
                Get Expert Help
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
            <Link href="/resources/cloud-storage-guide">
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-bold text-primary mb-2">Cloud Migration: What to Expect</h4>
                <p className="text-text-secondary text-sm">Planning your cloud transition.</p>
              </Card>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
