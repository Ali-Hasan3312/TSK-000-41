import React from 'react'

const Section6 = () => {
  return (
    <div>
    <div className='flex mt-40 items-center gap-0 mb-36'>
      
      <div className='h-[900px] w-[800px] text-black opacity-85 ml-32'>
        <h4 className='text-xl font-bold tracking-tight'>Our LMS</h4>
        <h1 className='text-[50px] leading-tight font-bold tracking-tight'>Guided Tutorials in Learning Management System</h1>
        <p className='text-[21px] opacity-70 py-6 w-[600px]'>Want to learn something but don't know what's the roadmap or your english is not too good? That's why we launch LMS for you.</p>
        <div className='flex flex-wrap'>
          <div className='flex gap-4'>
            <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
              <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/cloud-check-outline.svg" alt="" />
            </div>
            <div className='h-[300px] w-[200px]'>
              <h2 className='font-semibold text-base'>Sell Courses and Earn <span className='font-normal'>Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise.</span></h2>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
              <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/magnify-plus-outline.svg" alt="" />
            </div>
            <div className='h-[300px] w-[200px]'>
              <h2 className='font-semibold text-base'>Certification <span className='font-normal'>Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape.</span></h2>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
              <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/information-outline.svg" alt="" />
            </div>
            <div className='h-[300px] w-[200px]'>
              <h2 className='font-semibold text-base'>Courses in Urdu <span className='font-normal'>Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home.</span></h2>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
              <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/folder-multiple-outline.svg" alt="" />
            </div>
            <div className='h-[300px] w-[200px]'>
              <h2 className='font-semibold text-base'>Practice Exercises <span className='font-normal'>Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence.</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div className='slide-left mr-24'>
        <img
          className='h-[600px] w-[600px] vert-move' // Initially hidden
          src="https://internee.pk/images/lms.png"
          alt=""
        />
      </div>
    </div>
  </div>
  )
}

export default Section6