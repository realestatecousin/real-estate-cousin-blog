import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = "https://example.com";
  const orgName = "Apex Technical Publishing";

  const allPosts = Object.values(import.meta.glob('./blog/*.md', { eager: true }));
  const sortedPosts = allPosts.sort((a: any, b: any) =>
    new Date(b.frontmatter.datePublished).valueOf() - new Date(a.frontmatter.datePublished).valueOf()
  );

  const postLines = sortedPosts
    .map((post: any) => {
      const url = new URL(post.url, siteUrl).href;
      const title = post.frontmatter.headline;
      const desc = post.frontmatter.keyFinding || post.frontmatter.description;
      return `- [${title}](${url}): ${desc}`;
    })
    .join('\n');

  const body = `# ${orgName}

> Independent engineering research publication providing empirical benchmarks, Schema.org knowledge graphs, and server-first architectures for traditional search (SEO) and Generative Engine Optimization (GEO).

## Core Topical Pillar Hubs
- [GEO Architecture & AI Retrieval Systems](${siteUrl}/topics/geo-architecture/)
- [Web Performance & Rendering Physics](${siteUrl}/topics/web-performance/)
- [Entity SEO & Knowledge Graph Engineering](${siteUrl}/topics/knowledge-graphs/)
- [Organization Entity Home (About)](${siteUrl}/about/)

## Published Research & Empirical Benchmarks
${postLines}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};