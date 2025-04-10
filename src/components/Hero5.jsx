import React from 'react'

const Hero5 = ({hero5Ref}) => {
  return (

    <div ref={hero5Ref} className="panel h-full w-screen flex justify-center items-center shrink-0">
        <div className='absolute w-[5vw] h-auto right-0 top-0 z-20 font-bold text-[min(10vw,100px)] text-white font-stroke-black-sm'><h1>5</h1></div>
        <h1 className='text-[min(45vw,350px)] font-bold text-transparent bg-[url("https://i.pinimg.com/originals/07/d9/a5/07d9a56450932d95e88b4c2e3ef716ae.gif")] bg-center bg-cover lg:bg-auto bg-no-repeat bg-clip-text font-stroke-white-lg'>IGNITE</h1>
    </div>
  )
}

export default Hero5