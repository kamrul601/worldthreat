import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { getPostsByCategory } from "@/lib/posts";

const AI = () => {
  const posts = getPostsByCategory("ai");

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            AI Tools & Technology
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Compare AI tools, understand their capabilities, and discover how artificial 
            intelligence is transforming work, creativity, and everyday life.
          </p>
        </div>

        {/* Articles Grid */}
        <section>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <div key={post.slug} className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
                  <ArticleCard
                    id={post.slug}
                    title={post.title}
                    category={post.category}
                    image={post.featuredImage}
                    date={post.date}
                    isMarkdownPost={true}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles yet. Check back soon!</p>
            </div>
          )}
        </section>

        {/* About Section */}
        <section className="mt-16 rounded-2xl bg-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Navigating the AI Revolution</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Artificial intelligence is reshaping every industry. From ChatGPT to specialized 
                tools, the options are overwhelming. We help you cut through the noise.
              </p>
              <p>
                Our in-depth comparisons and guides help you choose the right AI tools for your 
                specific needs—whether you're a professional, creator, or curious learner.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AI;
