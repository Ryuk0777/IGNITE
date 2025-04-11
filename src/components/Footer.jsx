import React, { useEffect } from 'react'
import CautionTape from './CautionTape'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Footer = ({cursorRef}) => {

    const socialMediaData = [
        { name: 'Discord', url: "https://discordapp.com/users/ryuk0138", icon: '/social media/Discord.png', className:"w-6.5 h-6.5"},
        { name: 'GitHub', url: "https://github.com/Ryuk0777", icon: '/social media/github.png', className:"w-7 h-7"},
        { name: 'LinkedIn', url: "https://www.linkedin.com/in/farhan-shaikh-7a6907250/", icon: '/social media/linkedin.png', className:"w-6 h-6.5"},
        { name: 'Reddit', url: "https://www.reddit.com/user/OfficeParking8993/", icon: '/social media/reddit.png', className:"w-6 h-6"},
        { name: 'Twitter', url:"https://x.com/farhan232004", icon: '/social media/twitter.png', className:"w-6 h-6"},
      ];


      useGSAP(()=>{
        document.querySelectorAll('a').forEach(element=>{
            element.addEventListener("mouseover",()=> {
                gsap.to(cursorRef.current, {
                    scale:0.5,
                    ease: "power2.out",
                    duration:1,
                })
            })
            element.addEventListener("mouseleave",()=> {
                gsap.to(cursorRef.current, {
                    scale:1,
                    ease: "power2.out",
                    duration:1,
                })
            })
        })
      })

  return (
<div className='h-[40vh] bg-white relative flex flex-col justify-center items-center gap-y-5'>
    <img 
        src="https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/66a6a65cb35fb503df1d8a31_Ryuk%20pfp%20400x400%20(13).png"
        alt="profile pic"
        className='w-15 h-15 rounded-full border-2'
        />
        <h1 className='text-[min(5vw,15px)] font-bold text-slate-400'>Ryuk_777</h1>
        <h1 className='text-[min(5vw,25px)] font-bold'>Farhan Shaikh</h1>

        <div className='h-auto flex justify-center items-center gap-x-10'>
        {socialMediaData.map(
        (media) =>
          media.url && (
            <a
              key={media.name}
              className="hover:opacity-30 cursor-none"
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={media.className} src={media.icon} alt={media.name} />
            </a>
          )
      )}
        </div>
</div>
  )
}

export default Footer