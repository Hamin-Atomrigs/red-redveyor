'use client';
import Script from 'next/script'
import FirstLanding from './components/landing/first/first';
import SecondLanding from './components/landing/second/second';
import ThirdLanding from './components/landing/third/third';
import FourthLanding from './components/landing/fourth/fourth';

import './globals.css';

export default function Home() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <FirstLanding style={{ marginLeft: '30px', marginRight: '30px' }} />
      <SecondLanding style={{ marginLeft: '30px', marginRight: '30px' }} />
      <ThirdLanding />
      <FourthLanding />
    </>
  );
}
