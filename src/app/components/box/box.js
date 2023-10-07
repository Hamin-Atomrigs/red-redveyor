import Button from '../button/button';
import { headerFont, subHeaderFont } from '../font/font';

export default function Box(props) {
  return (
    <>
      <div className="flex flex-col basis-44 md:basis-2/6 items-center">
        <div className="rounded-[25px] shadow py-5 px-7 md:py-3 md:px-3.5 bg-white w-48 2xl:w-80 2xl:px-7 2xl:py-6">
          <div className={[headerFont.className, 'text-xs', 'md:text-xs', '2xl:text-xl', 'mb-4'].join(' ')}>{props.title}</div>
          <div className={[subHeaderFont.className, 'text-xs', '2xl:text-base', 'mb-4'].join(' ')}>{props.subTitle}</div>
          <Button bg="yellow" height="h-8 2xl:h-10" width="w-32" size="text-xs 2xl:text-base" name="더 보기" link={props.link} />
        </div>
      </div>
    </>
  );
}
