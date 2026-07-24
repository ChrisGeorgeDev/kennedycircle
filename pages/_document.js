import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { GA_MEASUREMENT_ID } from '../lib/gtag'
import { FB_PIXEL_ID } from '../lib/fpixel'

export default function Document() {

  return (
    <Html lang="en">
    <Head>
    <Script
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-base"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
    <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <body>
      <a className="skip-to-content-link sr-only focus:not-sr-only" href="#main" > Skip to content </a>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}