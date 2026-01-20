import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { getAllPosts } from "@/lib/posts";
import { articles } from "@/data/articles";
import { Shield, Brain, Newspaper } from "lucide-react";

const Index = () => {
  const markdownPosts = getAllPosts();
  const hasMarkdownPosts = markdownPosts.length > 0;
  
  const allPosts = hasMarkdownPosts 
    ? markdownPosts.map(post => ({
        id: post.slug,
        title: post.title,
        category: post.category,
        date: post.date,
        image: post.featuredImage,
        isMarkdownPost: true
      }))
    : articles.map(article => ({
        id: article.id,
        title: article.title,
        category: article.category,
        date: article.date,
        image: article.image,
        isMarkdownPost: false
      }));

  // Categorize posts for sections
  const cyberSecurityPosts = allPosts.filter(p => 
    p.category?.toLowerCase().includes('cyber') || 
    p.category?.toLowerCase().includes('security')
  );
  const aiPosts = allPosts.filter(p => 
    p.category?.toLowerCase().includes('ai') || 
    p.category?.toLowerCase().includes('artificial')
  );
  const techNewsPosts = allPosts.filter(p => 
    !cyberSecurityPosts.includes(p) && !aiPosts.includes(p)
  );

  // For display, use all posts if no specific categories exist
  const displayCyberPosts = cyberSecurityPosts.length > 0 ? cyberSecurityPosts : allPosts.slice(0, 2);
  const displayAiPosts = aiPosts.length > 0 ? aiPosts : allPosts.slice(2, 4);
  const displayTechPosts = techNewsPosts.length > 0 ? techNewsPosts.slice(0, 4) : allPosts.slice(4, 8);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center border-b border-border mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-6 animate-slide-down">
            Cyber Security, AI & Technology — Explained for Everyone
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-1">
            Practical guides, real-world cyber threats, and AI insights without the hype.
          </p>
        </section>

        {/* Section 1: Cyber Security */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Cyber Security</h2>
              <p className="text-sm text-muted-foreground">Threats, protection, and digital safety</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayCyberPosts.slice(0, 2).map((post, index) => (
              <NewsCard key={post.id} {...post} variant="featured" priority={index === 0} />
            ))}
          </div>
        </section>

        {/* Section 2: Artificial Intelligence */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Artificial Intelligence</h2>
              <p className="text-sm text-muted-foreground">AI tools, comparisons, and how it's changing work</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayAiPosts.slice(0, 2).map((post) => (
              <NewsCard key={post.id} {...post} variant="featured" />
            ))}
          </div>
        </section>

        {/* Section 3: Tech News & Guides */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Newspaper className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Tech News & Guides</h2>
              <p className="text-sm text-muted-foreground">Latest updates and practical how-tos</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayTechPosts.slice(0, 4).map((post) => (
              <NewsCard key={post.id} {...post} variant="standard" />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="my-12 border-t border-b border-border py-10">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">Stay Updated on Cyber Security & AI</h2>
            <p className="text-muted-foreground">
              No spam. Only practical cyber threats, AI tools, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-sm border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button className="px-6 py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;