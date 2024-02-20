import Image from 'next/image'

export default function Icon({ image, title }) {
  return (
    <Image
      src={image}
      alt={title}
      title={title}
      width={80}
      height={80}
      className='h-14 lg:h-20 hover:scale-110 transition-all duration-300 overflow-hidden'
    />
  )
}