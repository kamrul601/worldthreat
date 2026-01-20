import { List } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  if (items.length < 3) return null; // Only show for longer posts

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="mb-12 p-6 rounded-lg bg-muted/50 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4 text-muted-foreground" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          In This Article
        </h2>
      </div>
      <ol className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-left w-full text-sm text-foreground/80 hover:text-primary transition-colors py-1 flex items-start gap-3"
            >
              <span className="text-muted-foreground font-mono text-xs mt-0.5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;