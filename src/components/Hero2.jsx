import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useSelector, useDispatch } from 'react-redux';

gsap.registerPlugin(useGSAP,ScrollTrigger);


const Hero2 = ({containerAnimation, hero2Ref}) => {

    const heroAnimationState = useSelector(state => state.animation.heros1);

    // useEffect(()=>{
    //     if(heroAnimationState){
    //       gsap.from(hero2Ref.current,{
    //         opacity:0,
    //         ease:"power2.out",
    //       })
    //     }
    //     // else if(!heroAnimationState){
    //     //   gsap.from(hero1Ref.current,{
    //     //     opacity:1,
    //     //     ease:"power2.out",
    //     //   })
    //     // }
    //   },[heroAnimationState])

  return (
    <div ref={hero2Ref} className="panel h-full w-screen flex flex-col justify-end items-center shrink-0 px-3 lg:px-15">
        <div className='absolute w-[5vw] h-auto right-0 top-0 z-20 font-bold text-[min(10vw,100px)] text-white font-stroke-black-sm'><h1>2</h1></div>
        <div className='h-[25vh] w-full flex items-center lg:items-end px-5'>
            <div className="h-auto w-auto text-[min(15vw,100px)] font-bold flex gap-x-5">
                <h1>What is</h1>
                <h1 className='text-white font-stroke-black-sm'>JDM ?</h1>
            </div>
        </div>
        <div className='h-[45vh] w-full text-[min(5vw,30px)] flex justify-center items-center lg:pt-18 px-5'>
            <h1>
                JDM stands for Japanese Domestic Market. It refers to vehicles that are specifically manufactured for the 
                Japanese market, known for their unique designs, performance specifications, and cultural significance. 
                JDM cars often have features and specifications that differ from their international counterparts, making 
                them highly sought after by car enthusiasts worldwide.
            </h1>
        </div>
    </div>
  )
}

export default Hero2
