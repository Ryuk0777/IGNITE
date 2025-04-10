import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[18vh] w-screen fixed top-0 left-0 z-10 font-karantina flex justify-center items-center gap-x-5'>
        <h1 className='text-[min(15vw,100px)] font-extrabold text-white font-stroke-black-sm'>JDM</h1>
        <h1 className='text-[min(15vw,100px)] font-extrabold text-transparent bg-[url("https://i.pinimg.com/originals/07/d9/a5/07d9a56450932d95e88b4c2e3ef716ae.gif")] bg-center bg-cover bg-no-repeat bg-clip-text font-stroke-white-lg'>IGNITE</h1>
    </div>
  )
}

export default Navbar



// className='text-[min(25vw,350px)] font-bold text-transparent bg-[url("https://i.pinimg.com/originals/07/d9/a5/07d9a56450932d95e88b4c2e3ef716ae.gif")] bg-center bg-cover bg-no-repeat bg-clip-text'