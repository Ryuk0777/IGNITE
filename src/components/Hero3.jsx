import React, {useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSelector } from 'react-redux';

const Hero3 = ({hero3Ref}) => {

  const div1Ref = useRef();
  const div2Ref = useRef();

  const hero3 = useSelector(state => state.animation.hero3);

  useGSAP(()=>{
      if(hero3){
      const t1 = gsap.timeline()
      t1.to([div1Ref.current, div2Ref.current],{
          opacity:1,
          ease:"power2.out",
        })
      }
      else if(!hero3){
      const t2 = gsap.timeline()
      t2.to([div1Ref.current, div2Ref.current],{
          opacity:0,
          ease:"power2.out",
        })
      }
    },[hero3])

  return (
    <div ref={hero3Ref} className="panel h-full w-screen flex justify-between items-center shrink-0">
        <div className='absolute w-[7vw] h-auto left-0 top-0 z-20 font-bold text-[min(10vw,100px)] text-white font-stroke-black-sm flex justify-center items-center'><h1>3</h1></div>
        <div ref={div1Ref} className='w-[40vw] h-[50vh] flex justify-center items-center bg-red-60 lg:px-5'>
            <h1 className='text-[min(6vw,100px)] font-bold text-teal-300 font-stroke-black-sm'>Why is JDM Cars Popular ?</h1>
        </div>
        <div ref={div2Ref} className='lg:w-[30vw] w-[40vw] h-[40vh] bg-green-60 text-[min(3vw,30px)] font-bold flex flex-col justify-center items-start pl-8 lg:px-10'>
            <h1 className='text-rose-600'>Due to There :</h1>
            <h1>Unique Design</h1>
            <h1>Tuning Potential</h1>
            <h1>Exclusivity and Rarity</h1>
            <h1>Performance Excellence</h1>
        </div>
    </div>  
  )
}

export default Hero3