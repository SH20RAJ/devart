// import fetch from 'isomorphic-fetch'; // Import fetch
// import { getArticlesFromDevTo } from 'someFunctions'; // Replace with your actual function to fetch articles

// Mock function to fetch articles (replace this with your actual implementation)
let getArticlesFromDevTo = async () => {
  const response = await fetch(
    `https://dev.to/api/articles/latest/?per_page=10&page=1`
  );
  const data = await response.json();
  return data;
};

export async function GET(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch articles from Dev.to or your database
      const articles = await getArticlesFromDevTo();

      // Start building the XML
      let xml = '<?xml version="1.0" encoding="UTF-8"?>';
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

      // Add each article URL to the sitemap
      articles.forEach((article) => {
        xml += '<url>';
        xml += `<loc>https://yourwebsite.com/${article.path}</loc>`; // Modify URL structure as needed
        xml += `<lastmod>${new Date(article.published_at).toISOString()}</lastmod>`; // Use published date as last modified
        xml += '<changefreq>weekly</changefreq>'; // You can adjust the change frequency
        xml += '<priority>0.8</priority>'; // Priority can be adjusted based on the importance of the page
        xml += '</url>';
      });

      xml += '</urlset>';

      // Send the XML response
      res.setHeader('Content-Type', 'application/xml');
      res.send(xml);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      res.statusCode = 500; // Set status code
      res.send('Error generating sitemap'); // Send an error message
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.statusCode = 405; // Method Not Allowed
    res.end(`Method ${req.method} Not Allowed`);
  }
}
