import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'
import Hero5 from './Hero5'

gsap.registerPlugin(ScrollTrigger);

const Hero = ({setContainerAnimation, hero1Ref, hero2Ref, hero3Ref, hero4Ref, hero5Ref}) => {
  const mainDivRef = useRef();

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel");
    const totalPanels = sections.length;


    const tween = gsap.to(sections, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        id:"mainScroll",
        trigger: mainDivRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        end: () => `+=${mainDivRef.current.offsetWidth}`,
        markers: false,
      },
    })

    setContainerAnimation(tween.scrollTrigger)

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainDivRef} className="flex h-screen w-[100vw]">
      <Hero1 hero1Ref={hero1Ref}/>
      <Hero2 hero2Ref={hero2Ref}/>
      <Hero3 hero3Ref={hero3Ref}/>
      <Hero4 hero4Ref={hero4Ref}/>
      <Hero5 hero5Ref={hero5Ref}/>
    </div>
  );
}

export default Hero;


