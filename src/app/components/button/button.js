import Link from 'next/link';
import Image from 'next/image';

export default function Button(props) {

  if (props.bg === "yellow") {
    return (
      <>
        <Link href={props.link}>
          <div className={`${props.width} ${props.height} bg-button-yellow rounded-[1.875rem] flex pl-2 items-center justify-center relative`}>
            <div className={`${props.size} flex-initial text-center text-black leading-relaxed`}>{props.name}</div>
            <div className={`${props.height} w-[24px] 2xl:w-[35px] relative`}>
              <Image fill src="/bg-black-arrow.svg" alt="bg-black-arrow" />
            </div>
          </div>
        </Link>
      </>
    )
  }

  return (
    <>
      <Link href={props.link}>
        <div className={`${props.width} ${props.height} bg-black rounded-[1.875rem] flex pl-2 items-center justify-center relative`}>
          <div className={`${props.size} flex-initial text-center text-white leading-relaxed 2xl:pr-2`}>{props.name}</div>
          <div className={`${props.height} w-[28px] 2xl:w-[45px] relative`}>
            <Image fill src="/bg-yellow-arrow.svg" alt="bg-yellow-arrow" />
          </div>
        </div>
      </Link>
    </>
  );
}
