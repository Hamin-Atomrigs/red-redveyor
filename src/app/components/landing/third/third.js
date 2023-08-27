import { Nunito_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const portfolios = [
  {
    num: '01',
    name: 'Project name',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    pics: '/first-project.png',
    tags: '#hashtags',
  },
  {
    num: '02',
    name: 'Project name',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    pics: '/second-project.png',
    tags: '#hashtagsss',
  },
];

const headerFont = Nunito_Sans({
  weight: '900',
  style: 'normal',
  subsets: ['latin'],
});

const subHeaderFont = Nunito_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

const descFont = Nunito_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function ThirdLanding() {
  return (
    <>
      <div id="portfolio">
        <div className="text-center">
          <div className={[headerFont.className, 'text-4xl', 'mb-6'].join(' ')}>포트폴리오</div>
        </div>
        <div className="flex flex-row justify-center mt-32 mb-20 max-w-6xl mx-auto">
          <div className="flex flex-row max-w-lg pr-14">
            <div className={[subHeaderFont.className, 'text-7xl', 'text-[#333333]', 'opacity-20', 'pr-6'].join(' ')}>{portfolios[0].num}</div>
            <div>
              <div className={[subHeaderFont.className, 'text-2xl'].join(' ')}>{portfolios[0].name}</div>
              <div className={[descFont.className, 'text-xl', 'pt-1.5'].join(' ')}>{portfolios[0].desc}</div>
              <div>
                <Image className="pt-5 pb-4" src={portfolios[0].pics} width={358} height={358} alt="first-portfolio" />
              </div>
              <div className="rounded-3xl bg-[#D9D9D9] inline-block">
                <span className={[descFont.className, 'text-base', 'text-[#333333]', 'opacity-80', 'px-2.5'].join(' ')}>{portfolios[0].tags}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row max-w-lg">
            <div className={[subHeaderFont.className, 'text-7xl', 'text-[#333333]', 'opacity-20', 'pr-6'].join(' ')}>{portfolios[1].num}</div>
            <div>
              <div className={[subHeaderFont.className, 'text-2xl'].join(' ')}>{portfolios[1].name}</div>
              <div className={[descFont.className, 'text-xl', 'pt-1.5'].join(' ')}>{portfolios[1].desc}</div>
              <div>
                <Image className="pt-5 pb-4" src={portfolios[1].pics} width={358} height={358} alt="second-portfolio" />
              </div>
              <div className="rounded-3xl bg-[#D9D9D9] inline-block">
                <span className={[descFont.className, 'text-base', 'text-[#333333]', 'opacity-80', 'px-2.5'].join(' ')}>{portfolios[1].tags}</span>
              </div>
            </div>
          </div>
        </div>
        <Link href="/portfolio">
          <div className={[descFont.className, 'text-xl', 'text-[#333333]', 'underline', 'underline-offset-1', 'max-w-6xl', 'mx-auto', 'text-end'].join(' ')}>Check more projects</div>
        </Link>
      </div>
    </>
  );
}
