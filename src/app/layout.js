import '@/styles/globals.css'
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Inter, Noto_Serif_JP, Noto_Serif_Display, Playfair_Display, Bodoni_Moda, Fraunces, Imbue } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['200', '700'],
})

const notoSerifJp = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-notojp',
  weight: ['200', '900'],
})

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ['latin'],
  variable: '--font-noto-serif-display',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['700'],
  style: ['normal', 'italic'],
})

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni-moda',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['600', '900'],
  style: ['normal', 'italic'],
})

const imbue = Imbue({
  subsets: ['latin'],
  variable: '--font-imbue',
})

export const metadata = {
  title: "Dhafa's Personal Website",
  description: 'Dhafa personal portofolio website',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerifJp.variable} ${notoSerifDisplay.variable} ${playfairDisplay.variable} ${bodoniModa.variable} ${fraunces.variable} ${imbue.variable}`}>
      <GoogleTagManager gtmId="GTM-NPWLJGQW" />
      <GoogleAnalytics gaId="G-E7D0JQVXNZ" />
      <body className='bg-background w-screen overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}
