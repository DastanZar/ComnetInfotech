import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "IT Support | Comnet Infotech",
  description: "Submit a support request or learn about our IT support services.",
};

export default function SupportPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-accent-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              IT <span className="text-accent">Support</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Need help? We're here to assist you. Submit a support request or browse resources.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <SectionWrapper className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-6">
                <TicketIcon />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Submit a Ticket</h3>
              <p className="text-text-secondary mb-6">
                Create a support ticket for non-urgent issues. We'll respond within business hours.
              </p>
              <Button variant="cta" href="#" className="w-full justify-center">
                Create Ticket
              </Button>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-6">
                <PhoneIcon />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Call Us Now</h3>
              <p className="text-text-secondary mb-6">
                For immediate assistance, give us a call. We're available during business hours.
              </p>
              <Button variant="outline" href="tel:+11234567890" className="w-full justify-center">
                (123) 456-7890
              </Button>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-6">
                <ChatIcon />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Live Chat</h3>
              <p className="text-text-secondary mb-6">
                Chat with a support representative for quick questions during business hours.
              </p>
              <Button variant="outline" href="#" className="w-full justify-center">
                Start Chat
              </Button>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Support Request Form */}
      <SectionWrapper className="py-20 bg-background-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Submit a Support Request</h2>
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Issue Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="">Select issue type</option>
                  <option value="hardware">Hardware Issue</option>
                  <option value="software">Software Issue</option>
                  <option value="network">Network Issue</option>
                  <option value="email">Email Issue</option>
                  <option value="security">Security Concern</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Priority</label>
                <select className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="low">Low - General Question</option>
                  <option value="medium">Medium - Affecting Work</option>
                  <option value="high">High - Can't Work</option>
                  <option value="critical">Critical - System Down</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Description</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Please describe the issue in detail..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Screenshots (optional)</label>
                <input 
                  type="file" 
                  multiple
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <Button variant="cta" size="lg" className="w-full justify-center">
                Submit Request
              </Button>
            </form>
          </Card>
        </div>
      </SectionWrapper>

      {/* Emergency Support */}
      <SectionWrapper className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Emergency Support</h2>
          <p className="text-text-secondary mb-6">
            For critical issues outside of business hours, our emergency line is available for managed clients.
          </p>
          <p className="text-lg">
            Emergency Hotline: <a href="tel:+11234567899" className="text-accent font-bold">(123) 456-7899</a>
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}

function TicketIcon() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.38-1.004-.928.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}
