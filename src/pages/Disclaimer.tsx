import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">General Information</h2>
            <p>
              The information provided on worldthreat is for general informational purposes only. 
              All information on the site is provided in good faith; however, we make no representation 
              or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
              reliability, availability, or completeness of any information on the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Advice</h2>
            <p>
              The site cannot and does not contain professional cyber security or legal advice. 
              The security information is provided for general informational and educational purposes 
              only and is not a substitute for professional advice.
            </p>
            <p>
              Before taking any actions based upon information on this site, we encourage you to 
              consult with appropriate professionals. We do not provide any kind of professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">External Links</h2>
            <p>
              The site may contain links to other websites or content belonging to or originating 
              from third parties. Such external links are not investigated, monitored, or checked 
              for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">AI Tool Comparisons</h2>
            <p>
              Our AI tool comparisons and reviews represent our opinions based on our testing and research 
              at the time of writing. AI tools evolve rapidly, and features, pricing, and capabilities may 
              change. Always verify current information with the official tool providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind 
              incurred as a result of the use of the site or reliance on any information provided on the site. 
              Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
