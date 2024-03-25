import { NextResponse } from "next/server";

// Mock function to fetch articles (replace this with your actual implementation)
let getArticlesFromDevTo = async () => {
  const response = await fetch(
    `https://dev.to/api/articles/?per_page=100000&page=1`
  );
  const data = await response.json();
  return data;
};

export async function GET(req) {
  if (req.method === "GET") {
    try {
      // Fetch articles from Dev.to or your database
      const articles = await getArticlesFromDevTo();

      // Start building the XML
      let xml = '<?xml version="1.0" encoding="UTF-8"?>';
      xml +=
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';

      // Add each article URL to the sitemap
      articles.forEach((article) => {
        xml += "<url>";
        xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
        xml += `<lastmod>${new Date(article.published_at).toISOString()}</lastmod>`; // Use published date as last modified
        xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
        xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
        xml += "</url>";
      });

      xml += "</urlset>";

      // Set the response headers and status
      return new NextResponse(xml, {
        headers: {
          "Content-Type": "application/xml",
          "X-Robots-Tag": "index, follow",
        },
        status: 200,
      });
    } catch (error) {
      console.error("Error generating sitemap:", error);
      return new NextResponse("Error generating sitemap", {
        status: 500,
      });
    }
  } else {
    return new NextResponse("Method Not Allowed", {
      status: 405,
      headers: {
        Allow: ["GET"],
      },
    });
  }
}
