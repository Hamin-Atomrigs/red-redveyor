'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

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

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <nav>
        <div className="flex h-36 w-screen justify-center hidden lg:flex">
          <div className="flex w-[680px] gap-x-11 justify-center items-center">
            <Link className={[navigationFont.className, 'w-24', 'text-center', 'mt-[1.5rem]'].join(' ')} href={`${pathName === '/' ? '#services' : '/#services'}`} onClick={closeMenu}>
              서비스
            </Link>
            <Link className={[navigationFont.className, 'w-24', 'text-center', 'mt-[1.5rem]'].join(' ')} href={`${pathName === '/' ? '#products' : '/#products'}`} onClick={closeMenu}>
              제품
            </Link>
            <Link href={'/'}>
              <Image src="/main-logo.png" width={162} height={77} alt="logo" />
            </Link>
            <Link className={[navigationFont.className, 'w-24', 'text-center', 'mt-[1.5rem]'].join(' ')} href={`${pathName === '/' ? '#portfolio' : '/#portfolio'}`} onClick={closeMenu}>
              포트폴리오
            </Link>
            <Link className={[navigationFont.className, 'w-24', 'text-center', 'mt-[1.5rem]'].join(' ')} href={`${pathName === '/' ? '#contactUs' : '/#contactUs'}`} onClick={closeMenu}>
              연락처
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex justify-end items-center h-20">
          <div className="w-28 h-14 relative">
            <Link href={'/'}>
              <Image className="object-cover" src="/main-logo.png" fill alt="logo" />
            </Link>
          </div>
          <div className="w-2/5 flex items-center justify-end pt-4 pr-6">
            <button onClick={handleClick} className="w-4 h-3.5 relative">
              <Image className="object-cover" src="/hamburger-menu.svg" fill alt="hamburger" />
            </button>
          </div>
        </div>
      </nav>
      {isOpen &&
        <div className="flex flex-col h-screen w-screen py-8 text-base items-center overflow-y-hidden">
          {links.map((l, i) => {
            return (
              <Link className={[navigationFont.className, 'w-80', 'text-base', 'text-center', 'h-12', 'pb-2.5', 'flex', 'items-center', 'justify-center'].join(' ')} key={i} href={pathName === '/' ? l.id : l.pathName} onClick={closeMenu}>
                {l.name}
              </Link>
            )
          })}
        </div>}
    </>
  );
}
