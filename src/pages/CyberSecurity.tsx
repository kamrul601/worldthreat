import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { getPostsByCategory } from "@/lib/posts";

const CyberSecurity = () => {
  const posts = getPostsByCategory("cyber security");

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Cyber Security
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Stay informed about the latest cyber threats, security best practices, 
            and how to protect yourself in an increasingly connected world.
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
            <h2 className="text-3xl font-bold mb-6">Understanding Cyber Threats</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In today's digital landscape, cyber security is not optional—it's essential. 
                From ransomware attacks to data breaches, the threats are constantly evolving.
              </p>
              <p>
                We break down complex security topics into actionable insights, helping you 
                understand risks and implement effective protection strategies.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CyberSecurity;
