export default function Button(props) {
  return (
    <>
      <div className={`${props.width} ${props.height} relative`}>
        <div className={`${props.width} ${props.height} left-0 top-0 absolute bg-indigo-900 rounded-[10px]`} />
        <button className={`${props.width} ${props.height} left-0 top-0 absolute text-center text-white text-lg font-bold leading-relaxed`}>{props.name}</button>
      </div>
    </>
  );
}
