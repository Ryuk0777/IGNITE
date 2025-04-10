import React, {useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSelector } from 'react-redux';

const Hero5 = ({hero5Ref}) => {

    const titleRef = useRef();
  
    const hero5 = useSelector(state => state.animation.hero5);
  
    useGSAP(()=>{
        if(hero5){
        const t1 = gsap.timeline()
        t1.to([titleRef.current],{
            opacity:1,
            ease:"power2.out",
          })
        }
        else if(!hero5){
        const t2 = gsap.timeline()
        t2.to([titleRef.current],{
            opacity:0,
            ease:"power2.out",
          })
        }
      },[hero5])

  return (

    <div ref={hero5Ref} className="panel h-full w-screen flex justify-center items-center shrink-0">
        <div className='absolute w-[7vw] h-auto left-0 top-0 z-20 font-bold text-[min(10vw,100px)] text-white font-stroke-black-sm flex justify-center items-center'><h1>5</h1></div>
        <h1 ref={titleRef} className='text-[min(45vw,350px)] font-bold text-transparent bg-[url("https://i.pinimg.com/originals/07/d9/a5/07d9a56450932d95e88b4c2e3ef716ae.gif")] bg-center bg-cover lg:bg-auto bg-no-repeat bg-clip-text font-stroke-white-lg opacity-0'>IGNITE</h1>
    </div>
  )
}

export default Hero5