// import fetch from 'isomorphic-fetch'; // Import fetch
// import { getArticlesFromDevTo } from 'someFunctions'; // Replace with your actual function to fetch articles

// Mock function to fetch articles (replace this with your actual implementation)
let getArticlesFromDevTo = async () => {
    const response = await fetch(
      `https://dev.to/api/articles/latest/?per_page=1000&page=1`
    );
    const data = await response.json();
    return data;
  };
  
  export async function GET(req) {
    if (req.method === 'GET') {
      try {
        const sitemaps = [];
        let currentPage = 1;
        const perPage = 10; // Number of articles per sitemap
  
        // Fetch articles in batches and generate sitemaps
        while (true) {
          const response = await fetch(
            `https://dev.to/api/articles/latest/?per_page=${perPage}&page=${currentPage}`
          );
          const data = await response.json();
  
          if (data.length === 0) {
            break; // No more articles to fetch
          }
  
          // Start building the XML for the current sitemap
          let xml = '<?xml version="1.0" encoding="UTF-8"?>';
          xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  
          // Add each article URL to the current sitemap
          data.forEach((article) => {
            xml += '<url>';
            xml += `<loc>https://yourwebsite.com/${article.path}</loc>`; // Modify URL structure as needed
            xml += `<lastmod>${new Date(article.published_at).toISOString()}</lastmod>`; // Use published date as last modified
            xml += '<changefreq>weekly</changefreq>'; // You can adjust the change frequency
            xml += '<priority>0.8</priority>'; // Priority can be adjusted based on the importance of the page
            xml += '</url>';
          });
  
          xml += '</urlset>';
  
          // Add the current sitemap to the collection
          sitemaps.push(xml);
  
          currentPage++;
        }
  
        // Generate the sitemap index
        let sitemapIndex = '<?xml version="1.0" encoding="UTF-8"?>';
        sitemapIndex += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  
        sitemaps.forEach((sitemap, index) => {
          sitemapIndex += `<sitemap><loc>https://yourwebsite.com/sitemaps/sitemap-${index + 1}.xml</loc></sitemap>`;
        });
  
        sitemapIndex += '</sitemapindex>';
  
        // Set the response headers and status
        return new Response(sitemapIndex, {
          headers: {
            'Content-Type': 'application/xml',
          },
          status: 200,
        });
      } catch (error) {
        console.error('Error generating sitemaps:', error);
        return new Response('Error generating sitemaps', {
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