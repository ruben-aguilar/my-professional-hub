import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar } from "lucide-react";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import MermaidDiagram from "@/components/MermaidDiagram";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <main className="pt-24 pb-16">
          <div className="container max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main className="pt-24 pb-16">
        <article className="container max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          <div className="prose-blog">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const language = match ? match[1] : "";
                  const codeContent = String(children).replace(/\n$/, "");

                  // Check if it's a mermaid code block
                  if (language === "mermaid") {
                    return <MermaidDiagram chart={codeContent} />;
                  }

                  // Check if it's an inline code or block code
                  const isInline = !className && !codeContent.includes("\n");

                  if (isInline) {
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }

                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
