import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';

const Hero4 = ({hero4Ref}) => {

    const upperdiv1 = useRef();
    const upperdiv2 = useRef();

    const lowerdiv1 = useRef();
    const lowerdiv2 = useRef();


    const animationRef1 = useRef(); 
    const animationRef2 = useRef(); 

    let upperXPercent = 0;
    let UpperDirection = -1;
    let UpperLastTime = 0;

    let lowerXPercent = 0;
    let lowerDirection = 1;
    let lowerLastTime = 0;

    const upperAnimation = (currentTime) => {
        if (!UpperLastTime) UpperLastTime = currentTime;
        let deltaTime = (currentTime - UpperLastTime) / 1000;
        UpperLastTime = currentTime;
    
        let speed = 5;
        let movement = speed * deltaTime;
    
        if (upperXPercent <= -100) {
          upperXPercent = 0;
        }
        gsap.set(upperdiv1.current, { xPercent: upperXPercent });
        gsap.set(upperdiv2.current, { xPercent: upperXPercent });
    
        upperXPercent += movement * UpperDirection;
        animationRef1.current = requestAnimationFrame(upperAnimation);
      };


    const lowerAnimation = (currentTime) => {
        if (!lowerLastTime) lowerLastTime = currentTime;
        let deltaTime = (currentTime - lowerLastTime) / 1000;
        lowerLastTime = currentTime;
    
        let speed = 5;
        let movement = speed * deltaTime;
    
        if (lowerXPercent > 0) {
          lowerXPercent = -100;
        }
        gsap.set(lowerdiv1.current, { xPercent: lowerXPercent });
        gsap.set(lowerdiv2.current, { xPercent: lowerXPercent });
    
        lowerXPercent += movement * lowerDirection;
        animationRef1.current = requestAnimationFrame(lowerAnimation);
      };


      useEffect(()=>{
        cancelAnimationFrame(animationRef1.current); 
        animationRef1.current = requestAnimationFrame(upperAnimation);

        cancelAnimationFrame(animationRef2.current); 
        animationRef2.current = requestAnimationFrame(lowerAnimation);
      })

  return (
    <div ref={hero4Ref} className="panel h-full w-screen flex flex-col justify-end items-center">
        <div className='absolute w-[5vw] h-auto right-0 top-0 z-20 font-bold text-[min(10vw,100px)] text-white font-stroke-black-sm'><h1>4</h1></div>
        <div className='h-[20vh] w-full flex text-[min(4vw,50px)] font-bold overflow-x-hidden text-white font-stroke-black-sm'>
            <div ref={upperdiv1} className='h-full w-full flex justify-between items-center px-3 lg:px-18 shrink-0'>
                <h1 className='text-transparent'>CUSTOMIZATION</h1>
                <h1>CUSTOMIZATION</h1>
                <h1 className='text-transparent'>CUSTOMIZATION</h1>
                <h1>CUSTOMIZATION</h1>
            </div>
            <div ref={upperdiv2} className='h-full w-full flex justify-between items-center px-3 lg:px-18 shrink-0'>
                <h1 className='text-transparent'>CUSTOMIZATION</h1>
                <h1>CUSTOMIZATION</h1>
                <h1 className='text-transparent'>CUSTOMIZATION</h1>
                <h1>CUSTOMIZATION</h1>
            </div>
        </div>


        <div className='h-[39vh] w-full bg-green-00 flex justify-between text-[min(10vw,100px)] font-bold'>
            <div className='bg-emerald-30 h-full w-[36.5vw] flex justify-center items-center px-5 text-teal-300 font-stroke-black-lg'>
                <h1>It's The Part</h1>
            </div>
            <div className='bg-emerald-30 h-full w-[33vw] flex justify-center items-center px-5 text-transparent bg-[url("https://cdna.artstation.com/p/assets/images/images/045/508/332/original/dmitry-bondarenko-x-anim.gif?1642886396")] bg-center bg-auto bg-no-repeat bg-clip-text font-stroke-black-lg'>
                <h1>Of JDM Culture</h1>
            </div>
        </div>


        <div className='h-[27vh] w-full text-[min(4vw,50px)] font-bold flex overflow-x-hidden font-stroke-black-sm'>
            <div ref={lowerdiv1} className='h-[25vh] w-full flex justify-between items-center px-4 lg:px-20 shrink-0'>
                    <h1 className='text-transparent'>TUNING</h1>
                    <h1>TUNING</h1>
                    <h1 className='text-transparent'>TUNING</h1>
                    <h1>TUNING</h1>
                    <h1 className='text-transparent'>TUNING</h1>
                    <h1>TUNING</h1>
                </div>
                <div ref={lowerdiv2} className='h-[25vh] w-full flex justify-between items-center px-4 lg:px-20 shrink-0'>
                    <h1 className='text-transparent'>TUNING</h1>
                    <h1>TUNING</h1>
                    <h1 className='text-transparent'>TUNING</h1>
                    <h1>TUNING</h1>
                    <h1 className='text-transparent'>TUNING</h1>
                    <h1>TUNING</h1>
                </div>          
            </div>
        </div>
  )
}

export default Hero4