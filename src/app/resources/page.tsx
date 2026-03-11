import { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Resources | Comnet Infotech",
  description: "Helpful resources, guides, and tips for managing your technology.",
};

const resources = [
  {
    category: "Guides",
    items: [
      { title: "Getting Started with Cloud Storage", description: "Learn the basics of cloud storage and how to choose the right solution.", href: "/resources/cloud-storage-guide" },
      { title: "Small Business IT Checklist", description: "Essential IT components every small business needs.", href: "/resources/do-i-need-managed-it" },
      { title: "Securing Your Home Network", description: "Steps to protect your home network from cyber threats.", href: "/resources/home-network-security" },
    ],
  },
  {
    category: "Tips",
    items: [
      { title: "10 Ways to Speed Up Your Computer", description: "Simple tips to improve your computer's performance.", href: "/resources/do-i-need-managed-it" },
      { title: "Password Best Practices", description: "How to create and manage secure passwords.", href: "/resources/home-network-security" },
      { title: "Data Backup Strategies", description: "Why backups matter and how to implement them effectively.", href: "/resources/cloud-storage-guide" },
    ],
  },
  {
    category: "FAQ",
    items: [
      { title: "What is Cloud Computing?", description: "Understanding cloud services in simple terms.", href: "/resources/cloud-storage-guide" },
      { title: "How does IT support work?", description: "An overview of our support process.", href: "/resources/do-i-need-managed-it" },
      { title: "Do I need managed IT services?", description: "Determine if managed services are right for your business.", href: "/resources/do-i-need-managed-it" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Resources & <span className="text-accent">Guides</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Helpful articles, guides, and tips to help you get the most out of your technology.
            </p>
            <Button variant="cta" size="lg" href="/contact">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resources.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-primary mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm mb-4">{item.description}</p>
                    <Link href={item.href || "#"} className="text-accent font-medium text-sm hover:underline">
                      Read More →
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter Section */}
      <SectionWrapper className="py-20 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Stay Updated</h2>
          <p className="text-text-secondary mb-8">
            Subscribe to our newsletter for the latest tech tips and company updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="cta">Subscribe</Button>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need More Help?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" href="/contact">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" href="/faq" className="border-white text-white hover:bg-white hover:text-primary">
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
