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
    <div className='flex flex-wrap gap-5 justify-center items-center mt-20 md:mx-10 xl:mx-40'>
      <Image src={ai} alt='Adobe Illustrator' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={figma} alt='Figma' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={css} alt='CSS' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={html} alt='HTML' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={js} alt='JavaScript' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={react} alt='React' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={next} alt='Next.js' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={tailwind} alt='Tailwind CSS' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={firebase} alt='Firebase' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={express} alt='Express' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={cypress} alt='Cypress' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={jest} alt='Jest' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={hapi} alt='Hapi' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={jquery} alt='jQuery' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={mysql} alt='MySQL' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={postman} alt='Postman' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={ps} alt='Adobe Photoshop' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={psql} alt='PostgreSQL' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={router} alt='React Router' width={80} height={80} className='h-14 lg:h-20' />
      <Image src={redux} alt='Redux' width={80} height={80} className='h-14 lg:h-20' />
    </div>
  )
}