'use client';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/button';

import { usePathname } from 'next/navigation';
import { Nunito_Sans } from 'next/font/google';

const navFont = Nunito_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

export default function Nav() {
  const pathName = usePathname();

  return (
    <>
      <nav>
        <div className="flex h-36 w-screen">
          <div className="flex items-center justify-center w-3/12">
            <Link href={'/'}>
              <Image className="h-12" src="/logo.png" width={250} height={50} alt="logo" />
            </Link>
          </div>
          <div className="flex w-6/12 gap-x-11 justify-center items-center">
            <Link className={[navFont.className, 'w-24', 'text-center'].join(' ')} href={`${pathName === '/' ? '#services' : '/#services'}`}>
              서비스
            </Link>
            <Link className={[navFont.className, 'w-24', 'text-center'].join(' ')} href={`${pathName === '/' ? '#portfolio' : '/#portfolio'}`}>
              포트폴리오
            </Link>
            <Link className={[navFont.className, 'w-24', 'text-center'].join(' ')} href={`${pathName === '/' ? '#products' : '/#products'}`}>
              제품
            </Link>
            <Link className={[navFont.className, 'w-24', 'text-center'].join(' ')} href={`${pathName === '/' ? '#contactUs' : '/#contactUs'}`}>
              연락처
            </Link>
          </div>
          <div className="flex w-3/12 justify-center items-center quote">
            <Button height="h-10" width="w-36" name="견적문의" link="/quote" />
          </div>
        </div>
      </nav>
    </>
  );
}
