export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorAvatar: string;
  authorBio: string;
  category: string;
  featuredImage: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

// Import all markdown files from the content/posts directory
const postModules = import.meta.glob<{
  attributes: {
    title: string;
    date: string;
    author: string;
    authorAvatar?: string;
    authorBio?: string;
    category: string;
    featuredImage: string;
    excerpt?: string;
    tags?: string[];
    readTime?: string;
  };
  html: string;
}>("@/content/posts/*.md", { eager: true });

// Parse all posts and extract metadata
export function getAllPosts(): PostMeta[] {
  const posts = Object.entries(postModules).map(([filepath, module]) => {
    const slug = filepath.split("/").pop()?.replace(".md", "") || "";
    const { attributes } = module;

    return {
      slug,
      title: attributes.title,
      date: attributes.date,
      author: attributes.author,
      authorAvatar: attributes.authorAvatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      authorBio: attributes.authorBio || "Contributing writer",
      category: attributes.category,
      featuredImage: attributes.featuredImage,
      excerpt: attributes.excerpt || "",
      tags: attributes.tags || [],
      readTime: attributes.readTime || "5 min",
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | undefined {
  const filepath = Object.keys(postModules).find(
    (path) => path.split("/").pop()?.replace(".md", "") === slug
  );

  if (!filepath) return undefined;

  const module = postModules[filepath];
  const { attributes, html } = module;

  return {
    slug,
    title: attributes.title,
    date: attributes.date,
    author: attributes.author,
    authorAvatar: attributes.authorAvatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    authorBio: attributes.authorBio || "Contributing writer",
    category: attributes.category,
    featuredImage: attributes.featuredImage,
    excerpt: attributes.excerpt || "",
    tags: attributes.tags || [],
    readTime: attributes.readTime || "5 min",
    content: html,
  };
}

// Get posts by category
export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  return getAllPosts()
    .filter(
      (post) =>
        post.slug !== slug &&
        post.category.toLowerCase() === currentPost.category.toLowerCase()
    )
    .slice(0, limit);
}
