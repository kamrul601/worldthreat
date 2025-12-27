import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { getPostsByCategory } from "@/lib/posts";

const News = () => {
  const posts = getPostsByCategory("news");

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Tech News
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            The latest developments in technology, cybersecurity, and artificial intelligence. 
            Stay updated on what matters in the digital world.
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
            <h2 className="text-3xl font-bold mb-6">Stay Ahead of the Curve</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The tech landscape moves fast. New threats emerge, AI capabilities expand, 
                and the future of work continues to evolve.
              </p>
              <p>
                We curate and analyze the most important tech news so you can stay informed 
                without the information overload.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default News;
