import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';

export const metadata = {
  title: '레드컨베이어',
  description: '30년간 검증된 컨베이어 제작의 노하우를 바탕으로, 탁월한 기술과 신뢰로 고객의 요구를 만족시키는 최적화된 솔루션을 제공합니다.',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="naver-site-verification" content="c52f35e4f46faadc684cde98b05b551ace43a16b" />
      </head>
      <body>
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
