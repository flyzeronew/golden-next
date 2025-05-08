import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV;
  const adEnv = appEnv === 'production' ? 'prod' : 'stage';
  return (
    <Html lang="zh-Hant-TW">
      <Head>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <script async='async' src='https://securepubads.g.doubleclick.net/tag/js/gpt.js' />
        <script async='async' src = {`https://power.adhacker.online/tvbs/news/${adEnv}/news.js`} />
        <script
            dangerouslySetInnerHTML={{
              __html: `    
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
      </Head>
      <body>
        {/* GTM noscript 放在 body 內 */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
