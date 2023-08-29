import Link from 'next/link';

export default function Button(props) {
  return (
    <>
      <Link href={props.link}>
        <div className={`${props.width} ${props.height} relative`}>
          <div className={`${props.width} ${props.height} left-0 top-0 absolute bg-[#162A4A] rounded-[1.875rem]`} />
          <button className={`${props.width} ${props.height} left-0 top-0 absolute text-center text-white text-lg font-bold leading-relaxed`}>{props.name}</button>
        </div>
      </Link>
    </>
  );
}
