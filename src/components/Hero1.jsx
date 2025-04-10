import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

function Hero1({containerAnimation, hero1Ref}) {

      const div1Ref = useRef();
      const div2Ref = useRef();
      const div3Ref = useRef();
  
      const animationRef = useRef(); 
  
      let xPercent = 0;
      let direction = -1;
      let lastTime = 0;

      const dispatch = useDispatch()

      const ismodelLoaded = useSelector(state => state.animation.ismodelLoaded);
      const welcomeAnimationState = useSelector(state => state.animation.welcomeAnimationState);

  
      const desktopAnimation = (currentTime) => {
          if (!lastTime) lastTime = currentTime;
          let deltaTime = (currentTime - lastTime) / 1000;
          lastTime = currentTime;
      
          let speed = 3;
          let movement = speed * deltaTime;
      
          if (xPercent <= -200) {
            xPercent = 0;
          }
          gsap.set(div1Ref.current, { xPercent: xPercent });
          gsap.set(div2Ref.current, { xPercent: xPercent });
          gsap.set(div3Ref.current, { xPercent: xPercent });
      
          xPercent += movement * direction;
          animationRef.current = requestAnimationFrame(desktopAnimation);
        };
  
  
        useEffect(()=>{
          cancelAnimationFrame(animationRef.current); 
          animationRef.current = requestAnimationFrame(desktopAnimation);
        })


        useGSAP(()=>{
          if(ismodelLoaded && welcomeAnimationState){
            gsap.to([div1Ref.current, div2Ref.current, div3Ref.current],{
              opacity:1,
              duration:2,
              ease: "power2.out",
            })
          }
        },[ismodelLoaded, welcomeAnimationState]);




  return (
    <div ref={hero1Ref} className="panel h-[107vh] lg:h-[100vh] w-[100vw] shrink-0 flex items-center overflow-x-hidden" >
        <div className='absolute w-[5vw] h-auto right-0 top-0 z-20 font-bold text-[min(10vw,100px)] text-white font-stroke-black-sm'><h1>1</h1></div>
        <div ref={div1Ref} className='h-[25vh] w-full bg-green-40 flex justify-center items-center shrink-0 p-0 opacity-0'>
          <h1 className='text-[min(10vw,150px)] font-bold lg:whitespace-nowrap text-rose-600 font-stroke-black-md'>Ignite Your Passion for JDM</h1>
        </div>
        <div ref={div2Ref} className='h-[25vh] w-full bg-red-40 flex justify-center items-center shrink-0 p-0 opacity-0'>
          <h1 className='text-[min(10vw,150px)] font-bold lg:whitespace-nowrap text-transparent font-stroke-black-lg'>Ignite Your Passion for JDM</h1>
        </div>
        <div ref={div3Ref} className='h-[25vh] w-full bg-green-40 flex justify-center items-center shrink-0 p-0 opacity-0'>
          <h1 className='text-[min(10vw,150px)] font-bold lg:whitespace-nowrap text-rose-600 font-stroke-black-md'>Ignite Your Passion for JDM</h1>
        </div>
    </div>
  )
}

export default Hero1