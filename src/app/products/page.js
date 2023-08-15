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

export default function Products() {
  const searchParams = useSearchParams();
  const service = searchParams.get('products');

  const pageNum = service === 'belt-conveyor' ? 1 : service === 'roller-conveyor' ? 2 : service == 'mash-conveyor' ? 3 : service === 'chain-conveyor' ? 4 : 5;

  const [openTab, setOpenTab] = useState(pageNum);

  return (
    <div className="flex flex-column justify-center">
      <div className="w-1/4 bg-[#E9F0FB]">
        <ul className="flex list-none flex-col mt-36" role="tablist">
          <li className="mr-2 last:mr-0 flex-auto text-center mb-24">
            <a
              className={[`text-xl font-bold px-5 py-3 ${openTab === 1 ? 'text-black underline underline-offset-[9px]' : 'text-slate-300'} ${headerFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              벨트 콘베이어
            </a>
          </li>
          <li className="mr-2 last:mr-0 flex-auto text-center mb-24">
            <a
              className={[`text-xl font-bold px-5 py-3 ${openTab === 2 ? 'text-black underline underline-offset-[9px]' : 'text-slate-300'} ${headerFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              롤러 콘베이어
            </a>
          </li>
          <li className="mr-2 last:mr-0 flex-auto text-center mb-24">
            <a
              className={[`text-xl font-bold px-5 py-3 ${openTab === 3 ? 'text-black underline underline-offset-[9px]' : 'text-slate-300'} ${headerFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              메쉬 콘베이어
            </a>
          </li>
          <li className="mr-2 last:mr-0 flex-auto text-center mb-24">
            <a
              className={[`text-xl font-bold px-5 py-3 ${openTab === 4 ? 'text-black underline underline-offset-[9px]' : 'text-slate-300'} ${headerFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              체인 콘베이어
            </a>
          </li>
          <li className="mr-2 last:mr-0 flex-auto text-center mb-24">
            <a
              className={[`text-xl font-bold px-5 py-3 ${openTab === 5 ? 'text-black underline underline-offset-[9px]' : 'text-slate-300'} ${headerFont.className}`].join(' ')}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(5);
              }}
              data-toggle="tab"
              href="#conveyor"
              role="tablist"
            >
              효율적인 콘베이어 제작
            </a>
          </li>
        </ul>
      </div>
      <div className="w-3/4 pl-20 pt-36 relative flex flex-col break-words">
        <div className="px-4 py-5 max-w-4xl flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? 'block' : 'hidden'} id="belt">
              <h2 className={[`text-xl font-bold mb-8 ${headerFont.className}`]}>Belt conveyor</h2>
              <p className={[`text-lg mb-32	${subHeaderFont.className}`]}>
                1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="mb-52">
                <Button height="h-11" width="w-52" name="견적문의" link="/quote" />
              </div>
            </div>
            <div className={openTab === 2 ? 'block' : 'hidden'} id="roller">
              <h2 className={[`text-xl font-bold mb-8 ${headerFont.className}`]}>Roller conveyor</h2>
              <p className={[`text-lg mb-32	${subHeaderFont.className}`]}>
                1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="mb-52">
                <Button height="h-11" width="w-52" name="견적문의" link="/quote" />
              </div>
            </div>
            <div className={openTab === 3 ? 'block' : 'hidden'} id="mash">
              <h2 className={[`text-xl font-bold mb-8 ${headerFont.className}`]}>Mash conveyor</h2>
              <p className={[`text-lg mb-32	${subHeaderFont.className}`]}>
                1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="mb-52">
                <Button height="h-11" width="w-52" name="견적문의" link="/quote" />
              </div>
            </div>
            <div className={openTab === 4 ? 'block' : 'hidden'} id="chain">
              <h2 className={[`text-xl font-bold mb-8 ${headerFont.className}`]}>Chain conveyor</h2>
              <p className={[`text-lg mb-32	${subHeaderFont.className}`]}>
                1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="mb-52">
                <Button height="h-11" width="w-52" name="견적문의" link="/quote" />
              </div>
            </div>
            <div className={openTab === 5 ? 'block' : 'hidden'} id="new">
              <h2 className={[`text-xl font-bold mb-8 ${headerFont.className}`]}>Don’t know what to build?</h2>
              <p className={[`text-lg mb-32	${subHeaderFont.className}`]}>
                1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className={[`text-lg mb-16	${subHeaderFont.className}`]}>
                3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="mb-52">
                <Button height="h-11" width="w-52" name="견적문의" link="/quote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
