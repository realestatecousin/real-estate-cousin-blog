// src/config/site.ts

export const siteConfig = {
  name: "Your Las Vegas Home Guide",
  url: "https://realestatecousin.com",
  description: "Independent real estate research, neighborhood benchmarks, and buyer strategies.",
  logoUrl: "/images/brand-logo.png",
  
  // Author Defaults for E-E-A-T Schema
  author: {
    name: "Sasha Alicia Wallace",
    role: "Real Estate Agent & Investor",
    url: "/about/",
    sameAs: [
      "https://github.com/sashaalicia",
      "https://www.linkedin.com/in/sashawallace"
    ]
  },

  // Topical Pillars
  pillars: [
    { name: "GEO Architecture", slug: "geo-architecture" },
    { name: "Web Performance", slug: "web-performance" },
    { name: "Knowledge Graphs", slug: "knowledge-graphs" }
  ]
};