// import fetch from 'isomorphic-fetch'; // Import fetch
// import { getArticlesFromDevTo } from 'someFunctions'; // Replace with your actual function to fetch articles
function generateRandomNumber(min, max) {
  // Math.random() generates a random number between 0 and 1
  // We multiply it by (max - min + 1) to include the max value,
  // then add min to ensure the number falls within the desired range.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage example to generate a random number between 1 and 10000
const randomNumber = generateRandomNumber(1, 1000);
console.log(randomNumber);

// Mock function to fetch articles (replace this with your actual implementation)
let getArticlesFromDevTo = async (params) => {
  console.log("params", params);
  const response = await fetch(
    `https://dev.to/api/articles/latest/?per_page=100000&page=${
      params || generateRandomNumber(1, 1000).toString()
    }`
  );
  const data = await response.json();
  return data;
};

export async function GET(req) {
  if (req.method === "GET") {
    try {
      // Fetch articles from Dev.to or your database
      let articles = await getArticlesFromDevTo(0);
      let articles2 = await getArticlesFromDevTo(328);
      let articles3 = await getArticlesFromDevTo(39);
      let articles4 = await getArticlesFromDevTo(342);
      // let articles5 = await getArticlesFromDevTo(35);
      // let articles6 = await getArticlesFromDevTo(122);
      // let articles7 = await getArticlesFromDevTo(11);
      // let articles8 = await getArticlesFromDevTo(312);
      // let articles9 = await getArticlesFromDevTo(31);
      // let articles10 = await getArticlesFromDevTo(21);
      // let articles11 = await getArticlesFromDevTo();
      // let articles12 = await getArticlesFromDevTo(2);
      // let articles13 = await getArticlesFromDevTo();
      // let articles14 = await getArticlesFromDevTo(2);
      // let articles15 = await getArticlesFromDevTo();
      // let articles16 = await getArticlesFromDevTo(2);
      // let articles17 = await getArticlesFromDevTo();
      // let articles18 = await getArticlesFromDevTo(2);
      // let articles19 = await getArticlesFromDevTo();
      // let articles20 = await getArticlesFromDevTo(2);
      // let articles21 = await getArticlesFromDevTo();
      // let articles22 = await getArticlesFromDevTo(2);

      // Start building the XML
      let xml = '<?xml version="1.0" encoding="UTF-8"?>';
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

      // Add each article URL to the sitemap
      articles.forEach((article) => {
        xml += "<url>";
        xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
        xml += `<lastmod>${new Date(
          article.published_at
        ).toISOString()}</lastmod>`; // Use published date as last modified
        xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
        xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
        xml += "</url>";
      });
      articles2.forEach((article) => {
        xml += "<url>";
        xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
        xml += `<lastmod>${new Date(
          article.published_at
        ).toISOString()}</lastmod>`; // Use published date as last modified
        xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
        xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
        xml += "</url>";
      });
      articles3.forEach((article) => {
        xml += "<url>";
        xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
        xml += `<lastmod>${new Date(
          article.published_at
        ).toISOString()}</lastmod>`; // Use published date as last modified
        xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
        xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
        xml += "</url>";
      });
      articles4.forEach((article) => {
        xml += "<url>";
        xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
        xml += `<lastmod>${new Date(
          article.published_at
        ).toISOString()}</lastmod>`; // Use published date as last modified
        xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
        xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
        xml += "</url>";
      });
      // articles5.forEach((article) => {
      //   xml += "<url>";
      //   xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
      //   xml += `<lastmod>${new Date(
      //     article.published_at
      //   ).toISOString()}</lastmod>`; // Use published date as last modified
      //   xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
      //   xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
      //   xml += "</url>";
      // });
      // articles6.forEach((article) => {
      //   xml += "<url>";
      //   xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
      //   xml += `<lastmod>${new Date(
      //     article.published_at
      //   ).toISOString()}</lastmod>`; // Use published date as last modified
      //   xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
      //   xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
      //   xml += "</url>";
      // });
      // articles7.forEach((article) => {
      //   xml += "<url>";
      //   xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
      //   xml += `<lastmod>${new Date(
      //     article.published_at
      //   ).toISOString()}</lastmod>`; // Use published date as last modified
      //   xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
      //   xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
      //   xml += "</url>";
      // });
      // articles8.forEach((article) => {
      //   xml += "<url>";
      //   xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
      //   xml += `<lastmod>${new Date(
      //     article.published_at
      //   ).toISOString()}</lastmod>`; // Use published date as last modified
      //   xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
      //   xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
      //   xml += "</url>";
      // });
      // (await getArticlesFromDevTo(24)).forEach((article) => {
      //   xml += "<url>";
      //   xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
      //   xml += `<lastmod>${new Date(
      //     article.published_at
      //   ).toISOString()}</lastmod>`; // Use published date as last modified
      //   xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
      //   xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
      //   xml += "</url>";
      // });

      // (await getArticlesFromDevTo(32)).forEach((article) => {
      //   xml += "<url>";
      //   xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
      //   xml += `<lastmod>${new Date(
      //     article.published_at
      //   ).toISOString()}</lastmod>`; // Use published date as last modified
      //   xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
      //   xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
      //   xml += "</url>";
      // });

      // (await getArticlesFromDevTo(23)).forEach((article) => {
      //   xml += "<url>";
      //   xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
      //   xml += `<lastmod>${new Date(
      //     article.published_at
      //   ).toISOString()}</lastmod>`; // Use published date as last modified
      //   xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
      //   xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
      //   xml += "</url>";
      // });

      // (await getArticlesFromDevTo(324)).forEach((article) => {
      //   xml += "<url>";
      //   xml += `<loc>https://dev.sh20raj.com${article.path}</loc>`; // Modify URL structure as needed
      //   xml += `<lastmod>${new Date(
      //     article.published_at
      //   ).toISOString()}</lastmod>`; // Use published date as last modified
      //   xml += "<changefreq>weekly</changefreq>"; // You can adjust the change frequency
      //   xml += "<priority>0.8</priority>"; // Priority can be adjusted based on the importance of the page
      //   xml += "</url>";
      // });






      xml += "</urlset>";

      // Set the response headers and status
      return new Response(xml, {
        headers: {
          "Content-Type": "application/xml",
        },
        status: 200,
      });
    } catch (error) {
      console.error("Error generating sitemap:", error);
      return new Response("Error generating sitemap", {
        status: 500,
      });
    }
  } else {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: {
        Allow: ["GET"],
      },
    });
  }
}
