'use client';

import { useMediaQuery } from 'react-responsive'
import MobileHeroImage from '../../../public/hero.jpg'
import DesktopHeroImage from '../../../public/hero-desktop.png'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ImageWithSkeleton from '../image-with-skeleton';
import localFont from 'next/font/local';

const headerFont = localFont({
  src: '../../fonts/ashford-bold-webfont.woff2',
  weight: '700',
  variable: '--font-header',
  display: 'swap',
});

type HeroProps = {
  data: {
    text: string
    heading: string
    position: Position
  }
}
type Position = 'top' | 'middle' | 'bottom'

const textPositionMap: Record<Position, string> = {
  top: 'absolute top-35 left-1/2 transform -translate-x-1/2',
  middle: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  bottom: 'absolute bottom-20 left-1/2 transform -translate-x-1/2',
}
const Hero: React.FC<HeroProps> = ({ data }) => {
    // Define breakpoints (e.g., 1024px for desktop)
  const [hasMounted, setHasMounted] = useState<boolean>(false)
  const isTablet = useMediaQuery({ minWidth: 768 })
  const positionClass = textPositionMap[data.position]

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null // or a skeleton loader

  return (
    <div className="relative w-full h-screen">
      {isTablet ? (
        // 16:9 aspect ratio for desktop
        <div className="relative w-full aspect-[9/16] max-h-screen">
          <ImageWithSkeleton 
            src={DesktopHeroImage}
            alt="Hero"
            className='object-cover'
          />
        </div>
      ) : (
        // 9:16 aspect ratio for mobile
        <div className="relative w-full h-full aspect-[9/16]">
          <ImageWithSkeleton 
            src={MobileHeroImage}
            alt="Hero"
            className='object-cover'
          />
        </div>
      )}

      <div className={`absolute ${positionClass} transform text-center w-full px-[5%] max-w-[800px]`}>
        <h1 
          className={`${headerFont.variable} text-[16vw] md:text-8xl lg:text-9xl text-stroke text-white! mb-4! scale-y-115`}
          style={{ fontFamily: 'var(--font-header)'}}>
            {data.heading || ''}
        </h1>
        <p className='mb-8! md:mb-16! text-white! text-xl text-stroke-sm'>{data.text || ''}</p>
        <Link href="/all-products" className="btn w-full max-w-[320px]! m-auto rounded-md">Shop Now</Link>
      </div>
    </div>
  )
}
export default Hero