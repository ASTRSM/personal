export default function Title({text, jp}) {
  return (
    <div className='w-fit'>
      <h1 className='text-center font-imbue text-8xl leading-[5rem] md:text-[10rem] md:leading-[8rem]'>{text}</h1>
      <h2 className='text-center font-notojp text-xl'>{jp}</h2>
    </div>
  )
}