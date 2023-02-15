import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&family=Fraunces:ital,opsz,wght@0,9..144,900;1,9..144,600&family=Imbue:opsz@10..100&family=Inter:wght@200&family=Noto+Serif+Display&family=Noto+Serif+JP:wght@200;900&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-background w-screen overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
