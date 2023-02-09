import Noise from '@/components/Noise'
import Title from '@/components/Title'
import Head from 'next/head'
import Image from 'next/image'
//images
import glowie from '../../public/images/glowie.png'
import wave from '../../public/images/wave.svg'
import glowieWave from '../../public/images/glowieWave.png'
import star from '../../public/images/star.svg'
import circle from '../../public/images/circle.png'
import TimelineItem from '@/components/TimelineItem'

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
        <section id='profile' className='h-screen flex justify-center xl:justify-between xl:gap-0 relative items-center xl:items-start 2xl:m-44'>
          <div className='flex flex-col max-w-md gap-10 py-10 [&>*]:z-20 md:mr-10'>
            <div className='flex justify-center gap-10 xl:justify-start items-center'>
              <Title text={['PRO',<br key='profile'></br>,'FILE']} jp='プロファイル'/>
              <Image src={glowieWave} alt='glowie wave' width='auto' height={150} className='object-contain w-fit lg:hidden' />
            </div>
            <p className='text-white text-justify'>Hardworking College Student seeking opportunity. Bringing forth a motivated attitude and a variety of powerful skills. I'm honest and punctual, I work well in a team but also on my own as I like to set myself goals that I will achieve. I have a creative mind and am always up for new challenges.</p>
          </div>
          <Image src={star} alt='star' width='auto' height='auto' className='object-contain absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-50' />
          <Image src={glowieWave} alt='glowie wave' width='auto' height={900} className='object-contain w-fit h-3/6 xl:h-5/6 self-center hidden lg:block' />
        </section>
        <section id='timeline' className='flex flex-col md:flex-row justify-between 2xl:m-44 items-center xl:items-start [&>*]:z-20'>
          <div className='flex md:flex-col xl:justify-start items-center justify-center gap-10'>
            <Title text={['TIME',<br key='timeline'></br>,'LINE']} jp='歴史'/>
            <Image src={circle} alt='circle' width='auto' height={150} className='object-contain w-fit h-[150px] -z-10 md:hidden opacity-90' />
            <Image src={circle} alt='circle' width='auto' height={900} className='hidden object-contain w-fit absolute -z-10 md:block opacity-90'/>
          </div>
          <div className='flex flex-col justify-start my-20 text-white md:ml-10'>
            <TimelineItem date='Aug 2022 - Dec 2022' title='PT Jaklingko' work='IT Developer' />
            <TimelineItem date='Feb 2022 - Aug 2022' title='Dicoding Kampus Merdeka' work='Front-End & Back-End Web Developer' />
            <TimelineItem date='2019 - 2023' title='Gunadarma University' work='Informtaion System' />
            <TimelineItem date='2017 - 2019' title='SMKN 7 Jakarta' work='Computer & Network Engineering' />
          </div>
        </section>
      </main>
    </>
  )
}
