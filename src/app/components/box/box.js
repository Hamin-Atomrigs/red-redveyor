import Button from '../button/button';
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

export default function Box(props) {
  return (
    <>
      <div className="flex flex-col basis-2/6 items-center">
        <div className="max-w-xs rounded-[25px] shadow py-5 px-7 bg-white max-w-sm">
          <div className={[headerFont.className, 'text-xl', 'mb-6'].join(' ')}>{props.title}</div>
          <div className={[subHeaderFont.className, 'text-lg', 'mb-11'].join(' ')}>{props.subTitle}</div>
          <Button height="h-[2.75rem]" width="w-[7.1875rem]" name="더 보기" link={props.link} />
        </div>
      </div>
    </>
  );
}
