import React, { useRef } from 'react'
import CautionTape from "./CautionTape"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section1 = ({navbarRef}) => {

    const divRef = useRef()

    useGSAP(()=>{

        if(!navbarRef) return;

        gsap.to(navbarRef.current,{
            yPercent:-100,
            duration: 1,
            ease: "power2.out",
            scrollTrigger:{
                trigger: divRef.current,
                start: "top bottom",
                end: "top top",
                scrub: 1,
                markers:false,
                snap: 1,
            }
        })

    },[navbarRef])

  return (
    <div ref={divRef} className="h-screen bg-white overflow-hidden flex flex-col justify-center items-center gap-y-5 cursor-none">
    <CautionTape className="" extraClass="lg:px-20" title="Caution" direction={-1}/>
    <div className='w-auto h-auto flex text-[min(25vw,170px)] font-bold z-10 gap-x-8'>
    <h1>Explore</h1>
    <h1 className='text-transparent font-stroke-black-md'>The</h1>
    <h1>Legends</h1>
    </div>
    <CautionTape className="" extraClass="lg:px-20" title="Caution" direction={1}/>
  </div>
  )
}

export default Section1