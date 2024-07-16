import React from 'react';

const Section5 = () => {
 


  return (
    <div>
      <div className='flex mt-40 items-center gap-10 mb-36'>
        <div className='-ml-[232px] slide-right'>
          <img
            className='h-[400px] w-[1550px] vert-move' // Initially hidden
            src="https://internee.pk/images/task.webp"
            alt=""
          />
        </div>
        <div className='h-[900px] w-[1200px] mr-32 text-black opacity-85'>
          <h4 className='text-xl font-bold tracking-tight'>Our own task portal</h4>
          <h1 className='text-[50px] leading-tight font-bold tracking-tight'>Manage Project Via Own Task Portal</h1>
          <p className='text-[21px] opacity-70 py-6'>Welcome to internee.pk task portal. Where Tasks Transform Into Skills</p>
          <div className='flex flex-wrap'>
            <div className='flex gap-4'>
              <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
                <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/presentation-play.svg" alt="" />
              </div>
              <div className='h-[300px] w-[200px]'>
                <h2 className='font-semibold text-base'>Hands on Projects <span className='font-normal'>we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.</span></h2>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
                <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/account-multiple-plus-outline.svg" alt="" />
              </div>
              <div className='h-[300px] w-[200px]'>
                <h2 className='font-semibold text-base'>How to represent yourself <span className='font-normal'>More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.</span></h2>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
                <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/cellphone-link.svg" alt="" />
              </div>
              <div className='h-[300px] w-[200px]'>
                <h2 className='font-semibold text-base'>SDLC Techniques <span className='font-normal'>Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.</span></h2>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
                <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/playlist-check.svg" alt="" />
              </div>
              <div className='h-[300px] w-[200px]'>
                <h2 className='font-semibold text-base'>Easy to understand <span className='font-normal'>Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
