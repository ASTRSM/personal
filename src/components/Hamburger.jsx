import Image from 'next/image'
import wave from '../../public/images/wave_stroke.svg'

const handleClick = () => {
  document.querySelector('#hamburger').classList.toggle('open')
  document.querySelector('#sidebar').classList.toggle('opacity-0')
}

export function Hamburger() {
  return (
    <button
      id='hamburger'
      className='w-8 h-8 fixed m-6 border border-primary z-50 p-2 flex flex-col justify-around right-0 lg:hidden'
      onClick={handleClick}
    >
      <div className='h-[2px] w-full'></div>
      <div id='middle-burger' className='h-[2px] w-full relative'>
        <div className='h-[2px] w-full absolute'></div>
        <div className='h-[2px] w-full absolute'></div>
      </div>
      <div className='h-[2px] w-full'></div>
    </button>
  )
}

export function Sidebar() {
  return (
    <div id='sidebar' className='opacity-0 transition-opacity duration-300 z-50 fixed w-full h-full bg-background lg:hidden'>
      <ul className='font-inter font-bold text-primary hover:[&>*]:text-secondary mx-12 my-24 text-3xl gap-6 flex flex-col'>
        <li className='text-xl font-thin font-notojp'>目次</li>
        <li>
          <a href='#profile' onClick={handleClick}>PROFILE</a>
        </li>
        <li>
          <a href='#timeline' onClick={handleClick}>TIMELINE</a>
        </li>
        <li>
          <a href='#works' onClick={handleClick}>WORKS</a>
        </li>
        <li>
          <a href='#contact' onClick={handleClick}>CONTACT</a>
        </li>
      </ul>
      <Image src={wave} alt='logo' className='absolute right-0 h-1/2 object-top object-cover'/>
    </div>
  )
}

