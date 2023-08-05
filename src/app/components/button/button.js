export default function Button(props) {
  return (
    <>
      <div className="w-[162px] h-[41.46px] relative">
        <div className="w-[162px] h-[41.46px] left-0 top-0 absolute bg-indigo-900 rounded-[10px]" />
        <button className="w-[162px] h-[41.46px] left-0 top-0 absolute text-center text-white text-lg font-bold leading-relaxed">{props.name}</button>
      </div>
    </>
  );
}
