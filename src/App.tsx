import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load all page components for code splitting
const Index = lazy(() => import("./pages/Index"));
const Article = lazy(() => import("./pages/Article"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CyberSecurity = lazy(() => import("./pages/CyberSecurity"));
const AI = lazy(() => import("./pages/AI"));
const News = lazy(() => import("./pages/News"));
const About = lazy(() => import("./pages/About"));
const Authors = lazy(() => import("./pages/Authors"));
const Contact = lazy(() => import("./pages/Contact"));
const StyleGuide = lazy(() => import("./pages/StyleGuide"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/style-guide" element={<StyleGuide />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/guides" element={<CyberSecurity />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
