import { Link } from "react-router-dom";

interface NewsCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  isMarkdownPost?: boolean;
  variant?: "featured" | "standard" | "compact";
  priority?: boolean;
}

const NewsCard = ({ id, title, category, date, image, isMarkdownPost = false, variant = "standard", priority = false }: NewsCardProps) => {
  const getCategoryClass = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("cyber") || normalized.includes("security")) return "text-[hsl(var(--tag-cyber))]";
    if (normalized.includes("ai") || normalized.includes("artificial")) return "text-[hsl(var(--tag-ai))]";
    if (normalized.includes("news")) return "text-primary";
    return "text-[hsl(var(--tag-tech))]";
  };

  const href = isMarkdownPost ? `/blog/${id}` : `/article/${id}`;

  if (variant === "featured") {
    return (
      <Link to={href} className="group block">
        <article className="overflow-hidden">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-muted">
            <img
              src={image}
              alt={title}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={priority ? "high" : undefined}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="pt-4 space-y-2">
            <div className="flex items-center gap-3 text-xs">
              <span className={`font-semibold uppercase tracking-wide ${getCategoryClass(category)}`}>
                {category}
              </span>
              <span className="text-muted-foreground">{date}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
              {title}
            </h2>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link to={href} className="group block">
        <article className="flex gap-4 py-4 border-b border-border">
          <div className="flex-shrink-0 w-24 h-16 overflow-hidden rounded-sm bg-muted">
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className={`font-semibold uppercase tracking-wide ${getCategoryClass(category)}`}>
                {category}
              </span>
            </div>
            <h3 className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
        </article>
      </Link>
    );
  }

  // Standard variant
  return (
    <Link to={href} className="group block">
      <article className="overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-muted">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="pt-3 space-y-1.5">
          <div className="flex items-center gap-2 text-xs">
            <span className={`font-semibold uppercase tracking-wide ${getCategoryClass(category)}`}>
              {category}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{date}</span>
          </div>
          <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
