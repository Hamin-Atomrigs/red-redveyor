'use client';
import FifthLanding from '../landing/fifth/fifth';
import { Nunito_Sans } from 'next/font/google';

const footerFont = Nunito_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <>
      <FifthLanding />
      <div className="flex items-center justify-center h-10 border-t-2 border-border-line bg-black">
        <div className={[footerFont.className, 'text-[6px]', 'text-white', '2xl:text-xs	'].join(' ')}>© 2023 Red Conveyor 레드컨베이어. All rights reserved.</div>
      </div>
    </>
  );
}
