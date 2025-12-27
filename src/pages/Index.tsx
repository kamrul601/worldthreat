import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { getAllPosts } from "@/lib/posts";
import { articles } from "@/data/articles";

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

  const featuredPost = allPosts[0];
  const secondaryPosts = allPosts.slice(1, 3);
  const remainingPosts = allPosts.slice(3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top Headlines Section */}
        <section className="border-b border-border pb-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Latest Headlines
            </h1>
            <span className="text-xs text-muted-foreground">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Featured Article */}
            {featuredPost && (
              <div className="lg:col-span-2">
                <NewsCard {...featuredPost} variant="featured" />
              </div>
            )}

            {/* Secondary Articles */}
            <div className="space-y-6">
              {secondaryPosts.map((post) => (
                <NewsCard key={post.id} {...post} variant="standard" />
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              More Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {remainingPosts.map((post) => (
              <NewsCard key={post.id} {...post} variant="standard" />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="my-12 border-t border-b border-border py-10">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold">Stay Informed</h2>
            <p className="text-muted-foreground">
              Get the latest cyber security insights and AI news delivered to your inbox.
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
