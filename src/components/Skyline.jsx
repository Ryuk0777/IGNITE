import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skyline({cursorRef}) {
    const imgRef = useRef();
    const divRef = useRef();

    useGSAP(()=>{
        gsap.from(imgRef.current,{
            height:50,
            ease:"power2.out",
            duration:1,
            scrollTrigger:{
                trigger: divRef.current,
                start: "top bottom",
                end: "top top",
                scrub: 1,
                markers:false,
                snap: 1,
            }
        })
    },[])


    useEffect(()=>{
        document.querySelectorAll('.ImageSection').forEach((element)=>{
            element.addEventListener("mouseover",()=>{
                gsap.to(cursorRef.current,{
                    backgroundColor: "white",
                    ease:"power2.out",
                    duration:1,
                })
            })
            element.addEventListener("mouseleave",()=>{
                gsap.to(cursorRef.current,{
                    backgroundColor: "black",
                    ease:"power2.out",
                    duration:1,
                })
            })
        })

        return () => {
            document.removeEventListener("mouseover", ()=>{})
            document.removeEventListener("mouseleave", ()=>{})
        }
    },[])
  return (
    <div ref={divRef} className='ImageSection relative h-screen w-full cursor-none'>
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        src="cars images/skyline.gif" 
        alt="Skyline" 
        ref={imgRef}
      />
      <div className='absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center gap-x-10 text-[min(30vw,250px)] font-bold'>
        <h1 className='font-bold font-stroke-white-lg text-transparent'>Nissan</h1>
        <h1 className='font-stroke-white-lg text-white font-stroke-black-md'>Skyline</h1>
        <h1 className=' font-stroke-white-lg text-transparent'>GTR</h1>
      </div>
    </div>
  )
}

export default Skyline