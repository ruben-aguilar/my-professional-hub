import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center h-16">
          <Link to="/" className="font-bold text-xl hover:text-primary transition-colors">
            R<span className="text-primary">.</span>A
          </Link>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
