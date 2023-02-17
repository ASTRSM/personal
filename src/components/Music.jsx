import Image from 'next/image'
import Link from 'next/link'

function Music({ videos }) {
  return (
    <div className='grid grid-cols-2 text-white gap-7 max-w-xl p-5'>
      {videos?.map((item) => (
        <Link key={item.id} href={`https://youtu.be/${item.snippet.resourceId.videoId}`} target='_blank' className='text-md text-left hover:opacity-70 transition-all w-full space-y-2 group'>
          <Image src={item.snippet.thumbnails.medium.url} width={item.snippet.thumbnails.medium.width} height={item.snippet.thumbnails.medium.height} alt={item.snippet.title} className='w-full' />
          <p className='w-fit text-base text-left'>{item.snippet.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default Music
