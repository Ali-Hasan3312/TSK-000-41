import React from 'react'
import ApplyNowCart from './applyNowCart'

const Section3 = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-between'>
           <div className=' mt-40 ml-24 text-[22px] w-[560px] tracking-tight'>
           <h3 className=' font-bold text-gray-500'>Internships every months 
           <span className=' font-light'>  Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</span>
           </h3>
          
           </div>
           <div className=' mr-24 mt-36 text-lg font-normal tracking-tighter'>
            <a href="https://internee.pk/web-design.html">Browse Internship</a>
           </div>
         

        </div>
        <ApplyNowCart />
    </div>
  )
}

export default Section3