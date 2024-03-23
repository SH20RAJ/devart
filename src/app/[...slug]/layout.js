
// export const metadata = {
//   title: "op - Programming Related Articles",
//   description: "Get Programming Related Articles on Daily Basis on DevArt a better place to spend time....",
// };

export default async function RootLayout(pr) {
  let { children, params } = pr;
  const api = `https://dev.to/api/articles/${params.slug[0]}/${params.slug[1]}`;
  const res = await fetch(api);
  const data = await res.json();
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="exvbD16MWo-o_oksJDrekaQ_zwY62YGWEA_XdlE5_XM"
        />
<link rel="icon" href="https://github.com/fornfun.png" type="image/gif" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
          crossorigin="anonymous"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CWL59Y4TR7"
        ></script>
        <title>{data.title}</title>
        <meta name="description" content={data.description}/>
        <meta name="keywords" content={data.tag_list}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/* <link rel="canonical" href={"https://dev.sh20raj.com/"+data.path}/> */}
        <meta property="og:title" content={data.title}/>
        <meta property="og:description" content={data.description}/>
        <meta property="og:image" content={data.social_image}/>
        {/* <meta property="og:url" content={"https://dev.sh20raj.com/"+data.path}/> */}
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@sh20raj"/>
        <meta name="twitter:title" content={data.title}/>
        <meta name="twitter:description" content={data.description}/>
        <meta name="twitter:image" content={data.social_image}/>
        <meta name="robots" content="index, follow"/> 
        <link rel="shortcut icon" href="https://github.com/fornfun.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
