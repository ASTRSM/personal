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
import laravel from '../../public/images/icons/laravel.svg'
import typescript from '../../public/images/icons/typescript.svg'
import php from '../../public/images/icons/php.svg'
import Image from 'next/image'
import Icon from './Icon'

export default function Icons() {
  return (
    <div className='flex flex-wrap gap-5 justify-center items-center mt-10 md:mt-20 md:mx-10 xl:mx-40'>
      <Icon image={ai} title='Adobe Illustrator' />
      <Icon image={figma} title='Figma' />
      <Icon image={css} title='CSS' />
      <Icon image={html} title='HTML' />
      <Icon image={js} title='Javascript' />
      <Icon image={react} title='React' />
      <Icon image={next} title='NextJs' />
      <Icon image={tailwind} title='Tailwind' />
      <Icon image={firebase} title='Firebase' />
      <Icon image={express} title='ExpressJs' />
      <Icon image={cypress} title='Cypress' />
      <Icon image={jest} title='Jest' />
      <Icon image={hapi} title='HapiJS' />
      <Icon image={jquery} title='JQuery' />
      <Icon image={mysql} title='MySQL' />
      <Icon image={postman} title='Postman' />
      <Icon image={ps} title='Photoshop' />
      <Icon image={psql} title='PostgreSQL' />
      <Icon image={router} title='React Router' />
      <Icon image={redux} title='React Redux' />
      <Icon image={laravel} title='Laravel' />
      <Icon image={typescript} title='Typescript' />
      <Icon image={php} title='php' />
    </div>
  )
}
