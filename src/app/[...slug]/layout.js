// export const metadata = {
//   title: "op - Programming Related Articles",
//   description: "Get Programming Related Articles on Daily Basis on DevArt a better place to spend time....",
// };
const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default async function RootLayout(pr) {
  let { children, params } = pr;
  const api = `https://dev.to/api/articles/${params.slug[0]}/${params.slug[1]}`;
  const res = await fetch(api);
  const data = await res.json();
  return (
    <html lang="en">
      <head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.tag_list} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="canonical" href={"https://dev.sh20raj.com/"+data.path}/> */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.social_image} />
        {/* <meta property="og:url" content={"https://dev.sh20raj.com/"+data.path}/> */}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sh20raj" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={data.social_image} />
        <meta name="robots" content="index, follow" />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Product",
            "headline": data.title,
            "description": data.description,
            "datePublished": data.published_timestamp,
            "author": {
              "@type": "Person",
              "name": data.user.username
            },
            "image": {
              "@type": "ImageObject",
              "url": data.social_image,
              "width": 1000,
              "height": 500
            },
            "publisher": {
              "@type": "Organization",
              "name": "DevArt"
            },
              "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "7462",
              "bestRating": "5",
              "worstRating": "1"
            }
            }
          }}
        />

      </head>
      <body>{children}</body>
    </html>
  );
}
