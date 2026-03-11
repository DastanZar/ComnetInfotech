import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy | Comnet Infotech",
  description: "Privacy Policy for Comnet Infotech",
};

export default function PrivacyPage() {
  return (
    <main>
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-text-secondary mb-6">Last updated: {new Date().getFullYear()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
              <p className="text-text-secondary">
                Comnet Infotech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
              <p className="text-text-secondary mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Fill out a contact form on our website</li>
                <li>Request a consultation or quote</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">We may use the information we collect to:</p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you technical updates and security alerts</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Information Security</h2>
              <p className="text-text-secondary">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary">
                If you have questions about this Privacy Policy, please contact us at info@comnettech.in.
              </p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
