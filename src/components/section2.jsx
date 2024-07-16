import React from 'react'
import InterneeCart from './interneeCart'

const Section2 = () => {
  return (
    <div className=' relative'>
   <div className='flex flex-col items-center -mt-36'>
     <div className="flex flex-col gap-6 items-center justify-center w-[850px] text-center">
    <img src="https://internee.pk/images/fav.png " className=' h-20 w-20 rounded-3xl bg-gray-100 bg-opacity-60 object-contain p-2  shadow-xl' alt="" />
    <h1 className=' text-5xl tracking-tighter font-bold opacity-85'>Who is internee.pk?</h1>
    <span className=' text-[22px] text-gray-700 tracking-tighter font-normal'>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</span>
    <p className='text-[22px] tracking-tighter font-bold opacity-80'>👇 Click Below and grab your internship now 👇</p>
 </div>
 <div className=' h-[900px] w-[1250px] bg-customGreen rounded-2xl relative mt-12 shadow-lg shadow-orange-300'>
   <div className='absolute bottom-12 w-full flex gap-1 text-white text-2xl justify-center'>
   <span className=' '>Learn skills,</span>
   <p className=' font-bold'>Market will be yours.</p>
   </div>
 </div>
   </div>
   <InterneeCart />
   </div>
  )
}

export default Section2