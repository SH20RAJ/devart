import { NextResponse } from "next/server";


export async function GET(req) {
  if (true) {
    try {
      // Fetch articles from Dev.to or your database

      // Start building the XML
      let xml = '<?xml version="1.0" encoding="UTF-8"?>';
      xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
      
      for (let i = 0; i < 1000; i++) {
        xml += "<sitemap>";
        xml += `<loc>https://sh20raj.com/sitemapsh/${Math.floor(Math.random()*1000)}</loc>`; // Modify URL structure as needed
        xml += "</sitemap>";

      }

      xml += "</sitemapindex>";

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
