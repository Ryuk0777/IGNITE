import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { useSelector, useDispatch } from 'react-redux'
import { setWelcomaeAnimationState } from '../redux/animation/animationSlice';

const Welcome = () => {

    const welcomeRef = useRef();

    const dispatch = useDispatch()
    const ismodelLoaded = useSelector(state => state.animation.ismodelLoaded);

    useGSAP(()=>{

        if(!ismodelLoaded){
            gsap.from(welcomeRef.current.children,{
                opacity:0,
                ease: "power2.out",
                duration:1,
            })
        }

        if(ismodelLoaded){
        const t1 = gsap.timeline()
        t1.to(welcomeRef.current,{
                height: 0,
                ease: "power2.out",
                delay:1,
                duration:1,
            }).call(()=>dispatch(setWelcomaeAnimationState(true)))
        }
    },[ismodelLoaded])

  return (
    <div ref={welcomeRef} className='w-screen h-screen bg-cyan-100 absolute top-0 left-0 z-20 flex justify-center items-center font-karantina overflow-hidden cursor-none'> 
        <h1 className='text-[min(45vw,350px)] font-bold text-transparent bg-[url("https://i.pinimg.com/originals/07/d9/a5/07d9a56450932d95e88b4c2e3ef716ae.gif")] bg-center bg-cover lg:bg-auto bg-no-repeat bg-clip-text font-stroke-white-lg'>IGNITE</h1>
    </div>
  )
}

export default Welcome
