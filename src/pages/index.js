import Noise from '@/components/Noise'
import Title from '@/components/Title'
import Head from 'next/head'
import Image from 'next/image'
import TimelineItem from '@/components/TimelineItem'
import Slideshow from '@/components/slideshow'
import Icons from '@/components/Icons'
import Music from '../components/Music'
import playlist from '@/helpers/playlist'
//images
import glowie from '../../public/images/glowie.png'
import wave from '../../public/images/wave.svg'
import glowieWave from '../../public/images/glowieWave.png'
import star from '../../public/images/star.svg'
import circle from '../../public/images/circle.png'
import frameworkgif from '../../public/images/framework.gif'
import tools from '../../public/images/tools.png'
import sun from '../../public/images/sun.png'
import linkedin from '../../public/images/icons/linkedin.svg'
import github from '../../public/images/icons/github.svg'
import mail from '../../public/images/icons/mail.svg'
import whatsapp from '../../public/images/icons/whatsapp.svg'
import triangle from '../../public/images/triangle.png'

export default function Home({ videos }) {
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
              <Image src={glowieWave} alt='glowie wave' width='auto' height={150} className='object-contain w-fit lg:hidden -z-10' />
            </div>
            <p className='text-white text-justify'>Hardworking College Student seeking opportunity. Bringing forth a motivated attitude and a variety of powerful skills. I&apos;m honest and punctual, I work well in a team but also on my own as I like to set myself goals that I will achieve. I have a creative mind and am always up for new challenges.</p>
          </div>
          <Image src={star} alt='star' width='auto' height='auto' className='object-contain absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-50' />
          <Image src={glowieWave} alt='glowie wave' width='auto' height={900} className='object-contain w-fit h-3/6 xl:h-5/6 self-center hidden lg:block -z-10' />
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
        <section id='works' className='flex flex-col justify-between 2xl:mx-44 2xl:mt-44 items-center xl:items-start [&>*]:z-20'>
          <Title text={['WORKS']} jp='作品'/>
          <div className='border border-primary w-full h-full flex justify-center items-center 2xl:px-14 2xl:pt-14 my-10 md:my-20 relative overflow-visible'>
            <Image src={wave} alt='wave logo' width='auto' height='auto' className='hidden md:block mb-8 h-36 w-auto absolute lg:-top-20 lg:-left-20 lg:m-8 -z-10' />
            <Slideshow keyword='jasmine' />
          </div>
        </section>
        <section id='framework' className='flex flex-col justify-between 2xl:mx-44 items-center xl:items-start [&>*]:z-20'>
          <div className='flex justify-center w-full gap-5'>
            <Image src={frameworkgif} alt='framework gif' width='auto' height='auto' className='w-fit h-32 sm:h-60 object-contain' />
            <Image src={tools} alt='tools' width='auto' height='auto' className='w-fit h-32 sm:h-60 object-contain'/>
          </div>
          <Icons />
        </section>
        <section id='contact' className='h-screen flex justify-center xl:justify-between xl:gap-0 relative items-center xl:items-start 2xl:mx-44 2xl:mt-44'>
          <div className='flex flex-col gap-0 xl:gap-10 py-10 [&>*]:z-20 md:mr-10 w-full'>
            <div className='flex justify-center gap-2 xl:justify-start items-center mb-10'>
              <Title text={['CONTACT']} jp='連絡'/>
              <Image src={sun} alt='sun' width='auto' height={100} className='object-contain w-fit lg:hidden -z-10' />
            </div>
            <div className='flex justify-between w-full relative bg-custom-gradient p-10 border border-primary text-xs sm:text-base'>
              <div className='max-w-md space-y-5 text-white'>
                <p className='text-justify'>I&apos;m always open to new opportunities and challenges. If you have any questions or just want to say hi, feel free to contact me.</p>
                <div className='grid grid-cols-2 gap-5 font-notojp font-extralight text-xs sm:text-lg'>
                  <a href='mailto:dhafadefrita@gmail.com' target='_blank' rel='noreferrer' className='space-y-1 p-1 outline-1 hover:outline hover:outline-primary hover:bg-background transition-all'>
                    <Image src={mail} alt='gmail' width={30} height={30} className='w-fit  h-7 object-contain' />
                    <p className='font-inter'>dhafadefrita@gmail.com</p>
                  </a>
                  <a href='https://www.linkedin.com/in/dhafad/' target='_blank' rel='noreferrer' className='space-y-1 p-1 outline-1 hover:outline hover:outline-primary hover:bg-background transition-all'>
                    <Image src={linkedin} alt='linkedin' width={30} height={30} className='w-fit h-7 object-contain' />
                    <p className='font-inter'>dhafad</p>
                  </a>
                  <a href='https://github.com/ASTRSM' target='_blank' rel='noreferrer' className='space-y-1 p-1 outline-1 hover:outline hover:outline-primary hover:bg-background transition-all'>
                    <Image src={github} alt='github' width={30} height={30} className='w-fit h-7 object-contain' />
                    <p className='font-inter'>ASTRSM</p>
                  </a>
                  <a href='https://wa.me/6285959400546' target='_blank' rel='noreferrer' className='space-y-1 p-1 outline-1 hover:outline hover:outline-primary hover:bg-background transition-all'>
                    <Image src={whatsapp} alt='whatsapp' width={30} height={30} className='w-fit h-7 object-contain' />
                    <p className='font-inter'>(+62)85959400546</p>
                  </a>
                </div>
              </div>
              <Image src={sun} alt='sun' width='auto' height={700} className='object-contain absolute self-center hidden lg:block -z-10 -right-36 xl:-right-32 w-fit h-[500px] xl:h-[700px]' />
            </div>
          </div>
        </section>
        <section className='2xl:mx-44 relative flex items-center xl:items-start flex-col gap-20'>
          <Title text={['MISC.']} jp='その他'/>
          <div className='flex flex-col md:flex-row text-lg w-full gap-y-10 gap-x-40 xl:gap-x-10 flex-wrap xl:flex-nowrap justify-center xl:justify-between [&>*]:z-20] mb-44'>
            <div className='flex flex-col gap-2'>
              <h2 className='bg-primary font-inter font-extralight text-white text-center'>LANGUAGE</h2>
              <p className='font-inter font-extralight text-white'>Indonesian / <span className='inter-notojp'>母語</span></p>
              <p className='font-inter font-extralight text-white'>English / <span className='inter-notojp'>英語</span></p>
              <p className='font-inter font-extralight text-white'>Japanese / <span className='inter-notojp'>日本語</span></p> 
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-primary font-crake font-extralight border border-primary md:border-none text-center md:text-left'>HOBBY</h2>
              <p className='font-inter font-extralight text-white'>Reading / <span className='inter-notojp'>読書</span></p>
              <p className='font-inter font-extralight text-white'>Guitar Jamming / <span className='inter-notojp'>弾き語り</span></p>
              <p className='font-inter font-extralight text-white'>Learning Japanese / <span className='inter-notojp'>日本語勉強</span></p>
            </div>
            <div className='flex flex-col gap-2 max-w-2xl'>
              <a href='https://www.youtube.com/playlist?list=PL7lkTmqIlvrG1_2RRpLbsqBZ4jQufKudB' className='text-primary font-inter font-extralight hover:text-white transition-colors w-fit' target='_blank' rel='noreferrer'>MUSIC PLAYLIST /</a>
              <Music videos={videos} />
            </div>
          </div>
          <Image src={triangle} alt='triangle' width='auto' height='auto' className='object-contain w-fit absolute xl:-bottom-0 xl:-left-96 -z-10 bottom-1/2 -right-52 ' />
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = await playlist();

  return {
    props: {
      videos: data,
    },
  };
}