'use client';
import { useState } from 'react';
import { Nunito_Sans } from 'next/font/google';
import Button from '../components/button/button';
import { useSearchParams } from 'next/navigation';

const headerFont = Nunito_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

const subHeaderFont = Nunito_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function Services() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service');

  const [openTab, setOpenTab] = useState(service === 'conveyor' ? 1 : 2);

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <ul className="flex list-none flex-wrap pt-3 pb-4 flex-row mt-24 mb-36" role="tablist">
          <li className="mr-2 last:mr-0 flex-auto text-center">
            <a
              className={[`text-3xl font-bold px-5 py-3 ${openTab === 1 ? 'text-black underline underline-offset-[10px]' : 'text-slate-300'} ${headerFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              콘베이어 제작
            </a>
          </li>
          <li className="mr-2 last:mr-0 flex-auto text-center">
            <a
              className={[`text-3xl font-bold px-5 py-3 ${openTab === 2 ? 'text-black underline underline-offset-[10px]' : 'text-slate-300'} ${headerFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#autocad"
              role="tablist"
            >
              도면 제작
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? 'block' : 'hidden'} id="conveyor">
                <h2 className={[`text-xl font-bold mb-8 ${headerFont.className}`]}>Main Services_1</h2>
                <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                  1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                  2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                  3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="flex justify-center">
                  <Button height="h-11" width="w-52" name="견적문의" link="/quote" />
                </div>
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'} id="autocad">
                <h2 className={[`text-xl font-bold mb-8 ${headerFont.className}`]}>Main Services_2</h2>
                <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                  1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                  2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                  3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="flex justify-center">
                  <Button height="h-11" width="w-52" name="견적문의" link="/quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
