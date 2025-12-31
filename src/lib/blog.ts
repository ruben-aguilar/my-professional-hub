export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Blog posts registry - add new posts here
const blogPostModules = import.meta.glob('/src/content/blog/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default' 
});

function extractFrontmatter(content: string): { title: string; date: string; excerpt: string; body: string } {
  const lines = content.split('\n');
  let title = 'Untitled';
  let date = new Date().toISOString().split('T')[0];
  let excerpt = '';
  let bodyStartIndex = 0;

  // Check for YAML frontmatter
  if (lines[0]?.trim() === '---') {
    const endIndex = lines.findIndex((line, i) => i > 0 && line.trim() === '---');
    if (endIndex > 0) {
      const frontmatter = lines.slice(1, endIndex).join('\n');
      const titleMatch = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m);
      const dateMatch = frontmatter.match(/^date:\s*["']?(.+?)["']?\s*$/m);
      const excerptMatch = frontmatter.match(/^excerpt:\s*["']?(.+?)["']?\s*$/m);
      
      if (titleMatch) title = titleMatch[1];
      if (dateMatch) date = dateMatch[1];
      if (excerptMatch) excerpt = excerptMatch[1];
      
      bodyStartIndex = endIndex + 1;
    }
  }

  const body = lines.slice(bodyStartIndex).join('\n').trim();
  
  // If no title in frontmatter, try to get from first H1
  if (title === 'Untitled') {
    const h1Match = body.match(/^#\s+(.+)$/m);
    if (h1Match) title = h1Match[1];
  }

  // If no excerpt, take first paragraph
  if (!excerpt) {
    const firstParagraph = body
      .split('\n')
      .find(line => line.trim() && !line.startsWith('#'));
    excerpt = firstParagraph?.slice(0, 160) || '';
  }

  return { title, date, excerpt, body };
}

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const [path, content] of Object.entries(blogPostModules)) {
    const slug = path.replace('/src/content/blog/', '').replace('.md', '');
    const { title, date, excerpt, body } = extractFrontmatter(content as string);
    
    posts.push({
      slug,
      title,
      date,
      excerpt,
      content: body,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(post => post.slug === slug);
}
