import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ | Comnet Infotech",
  description: "Frequently asked questions about our IT services, support, and solutions.",
};

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of IT services including cloud solutions, IT support and maintenance, hardware procurement, networking, backup and disaster recovery, and more. Visit our Services page for a complete list.",
  },
  {
    question: "How quickly can you respond to support requests?",
    answer: "Response times vary based on your service level agreement. For managed clients, we typically respond within 30 minutes during business hours. Emergency support is available 24/7 for critical issues.",
  },
  {
    question: "Do you work with home users or only businesses?",
    answer: "We serve both! Whether you need help setting up a home network or managing enterprise IT infrastructure, our team has the expertise to assist you.",
  },
  {
    question: "What are your business hours?",
    answer: "Our offices are open Monday through Friday, 8am to 6pm. However, we offer 24/7 support for managed service clients and emergency situations.",
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing varies based on your needs. We offer flexible options from one-time support calls to comprehensive managed IT packages. Contact us for a free consultation and custom quote.",
  },
  {
    question: "Can you help with cloud migration?",
    answer: "Absolutely! We have extensive experience with cloud migrations, helping businesses move their data and applications to cloud platforms like Microsoft 365, AWS, and Azure.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve clients across various industries including healthcare, legal, financial services, manufacturing, retail, and more. Our flexible solutions can be tailored to any industry.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer free initial consultations to understand your needs and recommend the best solutions for your situation.",
  },
  {
    question: "How do I get started with your services?",
    answer: "Simply contact us through this website or give us a call. We'll schedule a consultation to discuss your needs and create a customized plan.",
  },
  {
    question: "What makes you different from other IT companies?",
    answer: "We pride ourselves on personalized service, honest communication, and building long-term partnerships. Our team is committed to understanding your unique needs and delivering solutions that actually work for you.",
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Find answers to common questions about our services and how we can help you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <SectionWrapper className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-border"
              >
                <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                <p className="text-black/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" href="/contact">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" href="/support" className="border-white text-white hover:bg-white hover:text-primary">
              Get Support
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
