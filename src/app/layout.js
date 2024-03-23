import "./globals.css";

export const metadata = {
  title: "DevArt - Programming Related Articles",
  description:
    "Get Programming Related Articles on Daily Basis on DevArt a better place to spend time....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="exvbD16MWo-o_oksJDrekaQ_zwY62YGWEA_XdlE5_XM"
        />
        <link
          rel="icon"
          href="https://github.com/fornfun.png"
          type="image/gif"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
          crossorigin="anonymous"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CWL59Y4TR7"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-CWL59Y4TR7');
        </script>
        <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=65fe7f28fb0d80001211056b&product=sop"
          async="async"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
