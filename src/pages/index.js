import Noise from '@/components/Noise'
import Title from '@/components/Title'
import Head from 'next/head'
import Image from 'next/image'
//images
import glowie from '../../public/images/glowie.png'
import wave from '../../public/images/wave.svg'
import glowieWave from '../../public/images/glowieWave.png'
import star from '../../public/images/star.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhafa&apos;s Personal Website</title>
        <meta name='description' content='Dhafa personal portofolio website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=' text-primary mx-5 md:mx-20'>
        <Noise />
        <section className='[&_*]:transition-all'>
          <div className='[&>*]:z-20 flex flex-col items-center justify-center h-screen'>
            <Image src={wave} alt='wave logo' width='auto' height='auto' className='mb-8 h-36 w-auto lg:absolute lg:top-0 lg:right-0 lg:m-8 -z-10' />
            <h2 className='text-2xl font-notojp font-black self-start md:self-auto'>新世界へようこそ</h2>
            <h1 className="text-7xl md:text-8xl font-crake font-black lg:text-center">DHAFA DEFRITA RAMA YUDISTIRA</h1>
            <nav className='flex flex-row space-x-5 mt-5'>
              <a href='#profile' className='text-lg md:text-2xl font-inter font-extralight hover:text-secondary'>PROFILE</a>
              <a href='#timeline' className='text-lg md:text-2xl font-inter font-extralight hover:text-secondary'>TIMELINE</a>
              <a href='#works' className='text-lg md:text-2xl font-inter font-extralight hover:text-secondary'>WORKS</a>
              <a href='#contact' className='text-lg md:text-2xl font-inter font-extralight hover:text-secondary'>CONTACT</a>
            </nav>
            <div className='bg-primary w-40 lg:w-1/12 h-px my-2' /> 
          </div>
          <Image src={glowie} priority alt='glowie' width='auto' height='auto' className='absolute top-0 left-0 w-fit h-[1000px] md:h-screen object-contain -z-10'/>
        </section>
        <section id='profile' className='h-screen flex justify-center gap-32 xl:gap-60 relative items-center xl:items-start'>
          <div className='flex flex-col max-w-md gap-10'>
            <div className='flex justify-around items-center'>
            <Title text={['PRO',<br key='profile'></br>,'FILE']} jp='プロファイル'/>
            <Image src={glowieWave} alt='glowie wave' width='auto' height={150} className='object-contain w-fit lg:hidden' />
            </div>
            <p className='text-white text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit repellendus dicta, eos architecto temporibus exercitationem inventore eligendi qui, ipsam, animi ipsum optio quaerat expedita commodi nemo quisquam libero provident facilis!</p>
          </div>
          <Image src={star} alt='star' width='auto' height='auto' className='object-contain absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-50' />
          <Image src={glowieWave} alt='glowie wave' width='auto' height={900} className='object-contain w-fit h-3/6 xl:h-5/6 self-center hidden lg:block' />
        </section>
      </main>
    </>
  )
}
