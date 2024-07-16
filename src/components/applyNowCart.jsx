import React from 'react'

const ApplyNowCart = () => {
    const data = [
        {
          img: "https://internee.pk/images/jobs/BackendDevelopment.webp",
          heading: "Backend Development",
          link: "https://internee.pk/web-development.html"
        },
        {
          img: "https://internee.pk/images/jobs/Mobile%20App%20Developer.webp",
          heading: "App Development Internship",
          link: "https://internee.pk/mobile-development.html"
        },
        {
          img: "https://internee.pk/images/jobs/logo-designer-working-computer-desktop.webp",
          heading: "Graphic Design",
          link: "https://internee.pk/graphic.html"
        },
        {
          img: "https://internee.pk/images/jobs/chatbotDevelopment.webp",
          heading: "Chatbot Development",
          link: "https://internee.pk/chatbot.html"
        },
        {
          img: "https://internee.pk/images/jobs/analysis.webp",
          heading: "Data Analytics",
          link: "https://docs.google.com/forms/d/1_bHw7VJtORYTRULqAjlRvhhxkRRQRCpGOVmMcEgApyU/"
        },
        {
          img: "https://internee.pk/figma.png",
          heading: "Figma Internship",
          link: "https://forms.gle/8EoXsFtTRfRErSYW9"
        },
       
        
    ]
  return (
    <div className='  mt-10 flex flex-wrap items-center gap-4 justify-center '>
        {data.map((d,index)=>(
            <div key={index} className=' h-[400px] w-[350px] border border-gray-300 rounded-xl relative hover:shadow-[0_15px_80px_-25px_rgba(0,0,0,0.8)] transition-shadow duration-[1000ms] ease-in-out'>
           
           <img className=' rounded-tl-xl rounded-tr-xl' src={d.img} alt="" />
         
           <div className='flex items-center justify-center mt-2'>
           <h2 className=' font-bold tracking-wide text-lg py-4   w-[300px] border-gray-300 border-b-[1px]'>{d.heading}</h2>
           </div>
           
           <button className='py-[7px] px-[14px] bg-customGreen mt-6 rounded-md text-white absolute bottom-8 right-8'>Apply Now</button>
           <a href={d.link} className=' h-full w-full absolute top-0 left-0'></a>
          
        </div>
        ))}
    </div>
  )
}

export default ApplyNowCart