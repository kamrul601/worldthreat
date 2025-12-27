import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About worldthreat
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Your source for understanding cyber threats, AI tools, and the future of technology.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p>
            In a world where technology evolves faster than ever, staying informed isn't just helpful—it's essential. 
            worldthreat was created to bridge the gap between complex tech topics and everyday understanding.
          </p>
          <p>
            We focus on three core areas: cyber security threats that affect individuals and organizations, 
            AI tools that can enhance productivity and creativity, and the broader technological shifts 
            reshaping our future.
          </p>
          <p>
            Our goal is simple: provide clear, actionable insights that help you navigate the digital landscape 
            with confidence.
          </p>
        </section>

        {/* What We Cover */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">What We Cover</h2>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-primary">•</span>
                <span><strong>Cyber Security:</strong> Threat analysis, protection strategies, and security best practices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-primary">•</span>
                <span><strong>AI Tools:</strong> Comparisons, guides, and practical applications of artificial intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-primary">•</span>
                <span><strong>Tech News:</strong> Important developments that shape our digital future</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Clear & Accessible</h3>
              <p className="text-muted-foreground">
                We break down complex topics so anyone can understand—no jargon overload.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Practical & Actionable</h3>
              <p className="text-muted-foreground">
                Every article provides insights you can actually use, not just theory.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Honest & Objective</h3>
              <p className="text-muted-foreground">
                We present facts and balanced perspectives, not hype or fear-mongering.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Future-Focused</h3>
              <p className="text-muted-foreground">
                We help you prepare for what's coming, not just react to what's happened.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest articles on cyber security, AI, and tech trends.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe Now
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
