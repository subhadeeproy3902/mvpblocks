'use client';

import Script from 'next/script';

const GoogleAnalytics = () => {
  const gid = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gid}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gid}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
