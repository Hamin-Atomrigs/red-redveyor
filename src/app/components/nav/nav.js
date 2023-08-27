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
        <div className="flex h-36 w-screen justify-center">
          <div className="flex w-6/12 gap-x-11 justify-center items-center">
            <Link className={[navFont.className, 'w-24', 'text-center'].join(' ')} href={`${pathName === '/' ? '#services' : '/#services'}`}>
              서비스
            </Link>
            <Link className={[navFont.className, 'w-24', 'text-center'].join(' ')} href={`${pathName === '/' ? '#portfolio' : '/#portfolio'}`}>
              포트폴리오
            </Link>
            <Link href={'/'}>
              <Image src="/main-logo.png" width={162} height={77} alt="logo" />
            </Link>
            <Link className={[navFont.className, 'w-24', 'text-center'].join(' ')} href={`${pathName === '/' ? '#products' : '/#products'}`}>
              제품
            </Link>
            <Link className={[navFont.className, 'w-24', 'text-center'].join(' ')} href={`${pathName === '/' ? '#contactUs' : '/#contactUs'}`}>
              연락처
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
