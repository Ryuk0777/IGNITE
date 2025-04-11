import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = ({cursorRef}) => {

    useEffect(()=>{
        document.addEventListener("mousemove", (e)=>{
            e.preventDefault();
            gsap.to(cursorRef.current, {
                x: e.clientX - 15,
                y: e.clientY - 15,
                duration: 0.5,
                ease: "power2.Out",
            })
        })

        document.addEventListener("mousedown", (e)=>{
            e.preventDefault();
            gsap.to(cursorRef.current, {
                scale: 0.8,
                duration: 0.5,
                ease: "power2.Out",
            })
        })

        document.addEventListener("mouseup", (e)=>{
            e.preventDefault();
            gsap.to(cursorRef.current, {
                scale: 1,
                duration: 0.5,
                ease: "power2.Out",
            })
        })

        return () => {
            document.removeEventListener("mousemove", ()=>{})
            document.removeEventListener("mousedown", ()=>{})
            document.removeEventListener("mouseup", ()=>{})
        }

    }, [])

  return (
    <div ref={cursorRef} className='lg:w-8 lg:h-8 lg:bg-black lg:z-30 lg:fixed lg:rounded-full lg:pointer-events-none cursor-none'>
      
    </div>
  )
}

export default Cursor
