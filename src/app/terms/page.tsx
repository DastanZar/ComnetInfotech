import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Service | Comnet Infotech",
  description: "Terms of Service for Comnet Infotech",
};

export default function TermsPage() {
  return (
    <main>
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-text-secondary mb-6">Last updated: {new Date().getFullYear()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Acceptance of Terms</h2>
              <p className="text-text-secondary">
                By accessing and using the Comnet Infotech website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Services Provided</h2>
              <p className="text-text-secondary mb-4">
                Comnet Infotech provides IT services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Cloud solutions and migration services</li>
                <li>IT support and maintenance</li>
                <li>Hardware procurement and installation</li>
                <li>Network setup and management</li>
                <li>Backup and disaster recovery solutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Service Agreements</h2>
              <p className="text-text-secondary">
                Specific terms and conditions for our services are outlined in individual service agreements contracts signed with clients. These agreements take precedence over this general terms document.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
              <p className="text-text-secondary">
                All content on this website is the property of Comnet Infotech and may not be reproduced without written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
              <p className="text-text-secondary">
                Comnet Infotech provides services "as is" without warranty of any kind. We are not liable for any damages arising from the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary">
                If you have questions about these Terms of Service, please contact us at info@comnettech.in.
              </p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
