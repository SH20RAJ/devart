// import fetch from 'isomorphic-fetch'; // Import fetch
// import { getArticlesFromDevTo } from 'someFunctions'; // Replace with your actual function to fetch articles
function generateRandomNumber(min, max) {
  // Math.random() generates a random number between 0 and 1
  // We multiply it by (max - min + 1) to include the max value,
  // then add min to ensure the number falls within the desired range.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mock function to fetch articles (replace this with your actual implementation)
let getArticlesFromDevTo = async () => {
  const response = await fetch(
    `https://dev.to/api/articles/latest/?per_page=2000&page=${generateRandomNumber(1,1000)}`
  );
  const data = await response.json();
  return data;
};

export async function GET(req) {
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
          xml += `<loc>https://dev-art.vercel.app${article.path}</loc>`; // Modify URL structure as needed
          xml += `<lastmod>${new Date(article.published_at).toISOString()}</lastmod>`; // Use published date as last modified
          xml += '<changefreq>weekly</changefreq>'; // You can adjust the change frequency
          xml += '<priority>0.8</priority>'; // Priority can be adjusted based on the importance of the page
          xml += '</url>';
        });
  
        xml += '</urlset>';
  
        // Set the response headers and status
        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml',
          },
          status: 200,
        });
      } catch (error) {
        console.error('Error generating sitemap:', error);
        return new Response('Error generating sitemap', {
          status: 500,
        });
      }
    } else {
      return new Response('Method Not Allowed', {
        status: 405,
        headers: {
          'Allow': ['GET'],
        },
      });
    }
  }