import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: "Cyber Security", path: "/cyber-security" },
      { name: "AI", path: "/ai" },
      { name: "News", path: "/news" },
      { name: "Guides", path: "/guides" },
    ],
    about: [
      { name: "About worldthreat", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Authors", path: "/authors" },
    ],
    resources: [
      { name: "AI Tools", path: "/ai" },
      { name: "Security Guides", path: "/cyber-security" },
      { name: "Blog Archive", path: "/#articles" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Disclaimer", path: "/disclaimer" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and tagline */}
        <div className="mb-12">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-mono font-bold text-xl">worldthreat</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm">
            Understanding cyber threats, comparing AI tools, and exploring the future of technology.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 worldthreat. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/worldthreat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/worldthreat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="/rss"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
