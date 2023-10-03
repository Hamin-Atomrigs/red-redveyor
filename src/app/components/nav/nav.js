'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

import { usePathname } from 'next/navigation';
import { navigationFont } from '../font/font'

export default function Nav() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: '서비스',
      id: '#services',
      pathName: '/#services'
    },
    {
      name: '포트폴리오',
      id: '#portfolio',
      pathName: '/#portfolio'
    },
    {
      name: '제품',
      id: '#products',
      pathName: '/#products'
    },
    {
      name: '연락처',
      id: '#contactUs',
      pathName: '/#contactUs'
    }
  ]

  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="flex h-36 w-screen justify-center hidden lg:flex">
          <div className="flex w-[680px] gap-x-11 justify-center items-center">
            <Link className={[navigationFont.className, 'w-24', 'text-center', 'mt-[1.5rem]'].join(' ')} href={`${pathName === '/' ? '#services' : '/#services'}`}>
              서비스
            </Link>
            <Link className={[navigationFont.className, 'w-24', 'text-center', 'mt-[1.5rem]'].join(' ')} href={`${pathName === '/' ? '#products' : '/#products'}`}>
              제품
            </Link>
            <Link href={'/'}>
              <Image src="/main-logo.png" width={162} height={77} alt="logo" />
            </Link>
            <Link className={[navigationFont.className, 'w-24', 'text-center', 'mt-[1.5rem]'].join(' ')} href={`${pathName === '/' ? '#portfolio' : '/#portfolio'}`}>
              포트폴리오
            </Link>
            <Link className={[navigationFont.className, 'w-24', 'text-center', 'mt-[1.5rem]'].join(' ')} href={`${pathName === '/' ? '#contactUs' : '/#contactUs'}`}>
              연락처
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex justify-end items-center h-20">
          <div className="w-24 h-10 relative">
            <Link href={'/'}>
              <Image className="object-cover" src="/main-logo.png" fill alt="logo" />
            </Link>
          </div>
          <div className="w-2/5 flex items-center justify-end pr-4">
            <button onClick={handleClick} className="w-3.5 h-3.5 relative">
              <Image className="object-cover" src="/hamburger-menu.svg" fill alt="hamburger" />
            </button>
          </div>
        </div>
      </nav>
      {isOpen &&
        <div className="flex flex-col h-screen w-screen py-8 text-base items-center">
          {links.map((l, i) => {
            return (
              <Link className={[navigationFont.className, 'w-80', 'text-base', 'text-center', 'h-12', 'pb-2.5', 'flex', 'items-center', 'justify-center'].join(' ')} key={i} href={pathName === '/' ? l.id : l.pathName}>{l.name}</Link>
            )
          })}
        </div>}
    </>
  );
}
