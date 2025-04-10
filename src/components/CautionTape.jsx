import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';


const CautionTape = ({className, title, extraClass}) => {

    const div1Ref = useRef();
    const div2Ref = useRef();

    const animationRef = useRef(); 

    let xPercent = 0;
    let direction = -1;
    let lastTime = 0;

    const desktopAnimation = (currentTime) => {
        if (!lastTime) lastTime = currentTime;
        let deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;
    
        let speed = 3;
        let movement = speed * deltaTime;
    
        if (xPercent <= -100) {
          xPercent = 0;
        }
        gsap.set(div1Ref.current, { xPercent: xPercent });
        gsap.set(div2Ref.current, { xPercent: xPercent });
    
        xPercent += movement * direction;
        animationRef.current = requestAnimationFrame(desktopAnimation);
      };


      useEffect(()=>{
        cancelAnimationFrame(animationRef.current); 
        animationRef.current = requestAnimationFrame(desktopAnimation);
      })


  return (
    <div className={`bg-amber-300 h-[5vh] lg:h-[7vh] w-[200vw] lg:w-screen absolute ${className} flex`}>
        <div ref={div1Ref} className={`h-full w-full bg-red-30 shrink-0 flex justify-between items-center gap-x-5 ${extraClass}`}>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
        </div>
        <div ref={div2Ref} className={`h-full w-full bg-green-30 shrink-0 flex justify-between items-center gap-x-5 ${extraClass}`}>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
            <h1 className='text-[min(5vw,35px)] font-bold'>{title}</h1>
        </div>
    </div>
  )
}

export default CautionTape