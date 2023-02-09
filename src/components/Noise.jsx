export default function Noise() {
  return (
    <svg
      viewBox='0 0 333 333'
      xmlns='http://www.w3.org/2000/svg'
      className='fixed top-0 left-0 grayscale -z-1 min-h-screen mix-blend-overlay'
    >
      <filter id='noiseFilter'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency='6.52'
          numOctaves='10'
          stitchTiles='stitch'
        />
      </filter>

      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  )
}
