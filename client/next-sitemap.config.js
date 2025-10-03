/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ye77i.uz", // domening
  generateRobotsTxt: true,     // robots.txt ham yaratadi
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*"], // agar yashirin sahifalar bo‘lsa
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/admin" },
    ],
  },
};
