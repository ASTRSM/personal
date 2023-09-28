import TimelineDot from './TimelineDot'

export default function TimelineItem({ date, title, work }) {
  return (
    <div className='flex items-center gap-10'>
      <h3 className='font-notojp font-black text-background bg-primary px-2 py-1 min-w-[100px] w-[100px] md:min-w-[180px] text-center text-sm md:text-base'>{date}</h3>
      <TimelineDot />
      <div>
        <p className='font-noto-jp font-extralight'>{title}</p>
        <p className='font-noto-jp'>{work}</p>
      </div>
    </div>
  )
}
