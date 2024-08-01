import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  let ga_id = "G-CWL59Y4TR7";
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
     crossorigin="anonymous"></script>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CWL59Y4TR7"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-CWL59Y4TR7');`}
        </script> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}
        ></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
          }}
        ></Script>
        <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=65fe7f28fb0d80001211056b&product=sop"
          async="async"
        ></script>
                <Script
          dangerouslySetInnerHTML={{
            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_gwuiWCosj2Qgm2i5I4p1gS6RiBogbWNc0Jd3wEl5tIq',{api_host:'https://app.posthog.com'})`,
          }}
        ></Script>
      </head>
      <body>{children}</body>
      <Analytics/>
          <yadexmat/>
          <a href="https://www.terabox.tech/" rel="dofollow">Terabox Video Player</a>
    </html>
  );
}


export const yadexmeta = async () => {
  let i = `
  <script>
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(97056210, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true,
       ecommerce:"dataLayer"
  });
  </script>
  <noscript><div><img src="https://mc.yandex.ru/watch/97056210" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
     crossorigin="anonymous"></script>

  `
return (
  <>
  <div  dangerouslySetInnerHTML={{ __html : i}}></div>
  </>
)}
