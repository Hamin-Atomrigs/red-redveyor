import Link from 'next/link';
import Image from 'next/image';

export default function Button(props) {

  if (props.bg === "yellow") {
    return (
      <>
        <Link href={props.link}>
          <div className={`${props.width} ${props.height} bg-button-yellow rounded-[1.875rem] flex pl-2 items-center justify-center relative`}>
            <div className={`${props.size} flex-initial text-center text-black font-bold leading-relaxed`}>{props.name}</div>
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
          <div className={`text-[${props.size}] flex-initial text-center text-black font-bold leading-relaxed`}>{props.name}</div>
          <div className={`${props.height} w-[24px] relative`}>
            <Image fill src="/bg-black-arrow.svg" />
          </div>
        </div>
      </Link>
    </>
  );
}
