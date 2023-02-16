import ai from '../../public/images/icons/ai.svg'
import figma from '../../public/images/icons/figma.svg'
import css from '../../public/images/icons/css.svg'
import html from '../../public/images/icons/html.svg'
import js from '../../public/images/icons/js.svg'
import react from '../../public/images/icons/react.svg'
import next from '../../public/images/icons/next.svg'
import tailwind from '../../public/images/icons/tailwind.svg'
import firebase from '../../public/images/icons/firebase.svg'
import express from '../../public/images/icons/express.svg'
import cypress from '../../public/images/icons/cypress.svg'
import jest from '../../public/images/icons/jest.svg'
import hapi from '../../public/images/icons/hapi.svg'
import jquery from '../../public/images/icons/jquery.svg'
import mysql from '../../public/images/icons/mysql.svg'
import postman from '../../public/images/icons/postman.svg'
import ps from '../../public/images/icons/ps.svg'
import psql from '../../public/images/icons/psql.svg'
import router from '../../public/images/icons/router.svg'
import redux from '../../public/images/icons/redux.svg'
import Image from 'next/image'

export default function Icons() {
  return (
    <div className='flex flex-wrap gap-5 justify-center items-center mt-10 md:mt-20 md:mx-10 xl:mx-40'>
      <Image src={ai} alt='Adobe Illustrator' title='Adobe Illustrator' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={figma} alt='Figma' title='Figma' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={css} alt='CSS' title='CSS' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={html} alt='HTML' title='HTML' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={js} alt='JavaScript' title='JavaScript' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={react} alt='React' title='React' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={next} alt='Next.js' title='Next.js' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={tailwind} alt='Tailwind CSS' title='Tailwind CSS' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={firebase} alt='Firebase' title='Firebase' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={express} alt='Express' title='Express' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={cypress} alt='Cypress' title='Cypress' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={jest} alt='Jest' title='Jest' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={hapi} alt='Hapi' title='Hapi' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={jquery} alt='jQuery' title='jQuery' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={mysql} alt='MySQL' title='MySQL' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={postman} alt='Postman' title='Postman' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={ps} alt='Adobe Photoshop' title='Adobe Photoshop' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={psql} alt='PostgreSQL' title='PostgreSQL' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={router} alt='React Router' title='React Router' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
      <Image src={redux} alt='Redux' title='Redux' width={80} height={80} className='h-14 lg:h-20 hover:scale-110 transition-all duration-300' />
    </div>
  )
}