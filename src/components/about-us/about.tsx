'use client'

import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const headerFont = localFont({
  src: '../../fonts/ashford-bold-webfont.woff2',
  weight: '700',
  variable: '--font-header',
  display: 'swap',
});

gsap.registerPlugin(ScrollTrigger);


const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const h1 = h1Ref.current;
    const p = pRef.current;

    gsap.set([h1, p], { transformOrigin: 'center center' });

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top', // Pin when section top hits viewport top
          end: '+=300%', // Extended scroll distance for both animations
          scrub: true, // Tie animation to scroll position
          pin: section, // Pin the section
          pinSpacing: false, // No extra space during pinning
          immediateRender: false, // Prevent immediate animation on load
          invalidateOnRefresh: true, // Recalculate on resize/refresh
          markers: true, // Uncomment for debugging
        },
      });

      // First animation: h1 scales, fades out, and translates
      tl.to(h1, {
        scale: 5, // Maximum scale value
        opacity: 0, // Fade out
      })
      // Second animation: p fades in
      .to(
        p,
        {
          opacity: 1, // Fade in
          ease: 'none', // Linear animation
          duration: 0.5, // Second half of the timeline
        },
        '>' // Start immediately after h1 animation
      );

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-[400vh]">
      <div className="h-screen flex flex-col items-center justify-center" ref={sectionRef}>
        <h1 
          ref={h1Ref}
          className={`${headerFont.variable} inset-x-0 text-[18.5vw] scale-y-125 text-[#333]!` }
          style={{ fontFamily: 'var(--font-header)'}}>
          POWERBERRY
        </h1>
        <p
          ref={pRef}
          className={`${headerFont.variable} text-[5vw] text-[#333] text-center absolute opacity-0`}
          style={{ fontFamily: 'var(--font-header)' }}
        >
          WELCOME TO THE FUTURE
        </p>
      </div>
    </div>
  )
}
export default About