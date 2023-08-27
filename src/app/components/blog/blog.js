import { Nunito_Sans } from 'next/font/google';
import Image from 'next/image';

const headerFont = Nunito_Sans({
  weight: '900',
  style: 'normal',
  subsets: ['latin'],
});

const subHeaderFont = Nunito_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

const descFont = Nunito_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function Blog(props) {
  return (
    <>
      <div className="flex flex-row max-w-6xl mx-auto mb-24">
        <div>
          <div className={[subHeaderFont.className, 'text-xl', 'text-[#333333]'].join(' ')}>{props.name}</div>
          <div className="pt-1.5 pb-3.5">
            <span className={[descFont.className, 'text-xl', 'text-[#333333]', 'opacity-80', 'text-lg'].join(' ')}>
              Project duration: {props.duration} | Project type: {props.type} | Location: {props.location}
            </span>
          </div>
          <div className={[descFont.className, 'text-xl', 'text-[#333333]', 'max-w-3xl'].join(' ')}>{props.desc}</div>
          <div className="pt-7">
            <div className="rounded-3xl bg-[#D9D9D9] inline-block mr-4">
              <span className={[descFont.className, 'text-base', 'text-[#333333]', 'opacity-80', 'px-2.5'].join(' ')}>{props.firstTags}</span>
            </div>
            <div className="rounded-3xl bg-[#D9D9D9] inline-block">
              <span className={[descFont.className, 'text-base', 'text-[#333333]', 'opacity-80', 'px-2.5'].join(' ')}>{props.secondTags}</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={props.pics} width={358} height={358} alt={props.pics}></Image>
        </div>
      </div>
    </>
  );
}
