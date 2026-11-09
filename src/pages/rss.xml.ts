import rss from '@astrojs/rss';
import { siteConfig } from '../config/site';

export async function GET(context: any) {
  // Fetch all markdown posts automatically
  const allPosts = Object.values(import.meta.glob('./blog/*.md', { eager: true }));
  
  // Sort by newest first
  const sortedPosts = allPosts.sort((a: any, b: any) =>
    new Date(b.frontmatter.datePublished).valueOf() - new Date(a.frontmatter.datePublished).valueOf()
  );

  return rss({
    title: `${siteConfig.name} | RSS Feed`,
    description: siteConfig.description,
    // Pulls your domain from astro.config.mjs or falls back to site.ts
    site: context.site || siteConfig.url, 
    items: sortedPosts.map((post: any) => ({
      title: post.frontmatter.headline,
      pubDate: new Date(post.frontmatter.datePublished),
      description: post.frontmatter.description,
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}