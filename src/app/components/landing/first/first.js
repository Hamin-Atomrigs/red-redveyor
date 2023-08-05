import { Nunito_Sans } from 'next/font/google';

const headerFont = Nunito_Sans({
  weight: '900',
  style: 'normal',
  subsets: ['latin'],
});

const subHeaderFont = Nunito_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function FirstLanding() {
  return (
    <>
      <div className="py-72 pl-44 opacity-90 bg-cover" style={{ backgroundImage: 'url(/landing-first-part-bg.jpeg)' }}>
        <div className={[headerFont.className, 'text-7xl', 'text-white', 'mb-5'].join(' ')}>콘베이어 제작의 최강자</div>
        <div className={[subHeaderFont.className, 'text-xl', 'max-w-xl', 'text-white'].join(' ')}>
          30년간 검증된 컨베이어 제작의 노하우를 바탕으로, 탁월한 기술과 신뢰로 고객의 요구를 만족시키는 최적화된 솔루션을 제공합니다
        </div>
      </div>
    </>
  );
}
