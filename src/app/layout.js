import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { headers } from "next/headers";

import './globals.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  let title, description, keywords;


  switch (pathname) {
    case '/':
      title = '컨베이어 제작 업체 | 레드컨베이어';
      description = '30년 이상의 노하우를 자랑하는 컨베이어 제작 업체로, 스크류, 롤러, 벨트 컨베이어 등 다양한 컨베이어 시스템을 맞춤 제작합니다. 고객 만족을 최우선으로 하는 최적의 솔루션을 제공해 드립니다.';
      keywords = '컨베이어 제작업체, 컨베이어 롤러, 벨트 컨베이어, 스크류 컨베이어, 산업용 컨베이어, 맞춤형 컨베이어, 컨베어, 콘베어, 콘베이어';
      break;
    case '/products':
      title = '컨베이어 설계 및 제작의 중요 고려사항 | 레드컨베이어';
      description = '컨베이어 설계 및 제작 시 필수적인 고려사항에 대해 알아보세요. 레드컨베이어는 효율적이고 신뢰할 수 있는 컨베이어 솔루션을 제공합니다.';
      keywords = '컨베이어 설계, 컨베이어 제작, 컨베이어 고려사항, 컨베이어 설계 요소, 효율적인 컨베이어 제작, 신뢰할 수 있는 컨베이어, 컨베이어 제작 전문, 컨베이어벨트 구조, 컨베어, 콘베어, 콘베이어';
      break;
    case '/quotes':
      title = '컨베이어 제작 무료 상담 | 레드컨베이어';
      description = '최고의 컨베이어 제작 서비스를 제공합니다. 전문가와의 무료 상담을 통해 귀하의 필요에 맞는 맞춤형 컨베이어 솔루션을 찾아보세요. 전문가가 친절하게 상담해 드립니다.';
      keywords = '컨베이어 제작, 무료 상담, 컨베이어 솔루션, 맞춤형 컨베이어, 컨베이어 상담, 컨베이어 설계, 컨베이어 전문가, 컨베이어 시스템, 산업용 컨베이어';
      break;
    default:
      title = '컨베이어 제작 업체 | 레드컨베이어';
      description = '30년 이상의 노하우를 자랑하는 컨베이어 제작 업체로, 스크류, 롤러, 벨트 컨베이어 등 다양한 컨베이어 시스템을 맞춤 제작합니다. 고객 만족을 최우선으로 하는 최적의 솔루션을 제공해 드립니다.';
      keywords = '컨베이어 제작업체, 컨베이어 롤러, 벨트 컨베이어, 스크류 컨베이어, 산업용 컨베이어, 맞춤형 컨베이어, 컨베어, 콘베어, 콘베이어';
  }

  return {
    title,
    description,
    keywords
  }
}

export default function RootLayout({ children }) {

  return (
    <html>
      <Head>
        <meta name="naver-site-verification" content="c52f35e4f46faadc684cde98b05b551ace43a16b" />
      </Head>
      <body>
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
