import React from 'react'

const Section7 = () => {
  return (
    <div>
      <div className='flex mt-40 items-center gap-10 mb-36'>
        <div className='-ml-[232px] slide-right'>
          <img
            className='h-[400px] w-[1550px] vert-move' // Initially hidden
            src="https://internee.pk/images/instructor.png"
            alt=""
          />
        </div>
        <div className='h-[900px] w-[1200px] mr-32 text-black opacity-85'>
          <h4 className='text-xl font-bold tracking-tight'>Are you Tech Instructor or Content Creator?</h4>
          <h1 className='text-[50px] leading-tight font-bold tracking-tight'>Create Courses In Local Language & Generate Income</h1>
          <p className='text-[21px] opacity-70 py-6'>Are you a professional want to start your journey as a tech instructor and content creator to make some revenue? Just visit Our LMS Intructor Portal</p>
          <div className='flex flex-wrap'>
            <div className='flex gap-4'>
              <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
                <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/text-box-search-outline.svg" alt="" />
              </div>
              <div className='h-[300px] w-[200px]'>
                <h2 className='font-semibold text-base'>Upload Tutorials & Excersice <span className='font-normal'>Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners.</span></h2>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
                <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/shape-outline.svg" alt="" />
              </div>
              <div className='h-[300px] w-[200px]'>
                <h2 className='font-semibold text-base'>Generate Revenue <span className='font-normal'>each what you love and earn what you deserve. Internee.pk LMS offers instructors the opportunity to generate revenue. Monetize your expertise, reach a global audience, and make a meaningful income from your passion.</span></h2>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
                <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/download.svg" alt="" />
              </div>
              <div className='h-[300px] w-[200px]'>
                <h2 className='font-semibold text-base'>Instructor Identity <span className='font-normal'>Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in the world of online education.</span></h2>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
                <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/playlist-check.svg" alt="" />
              </div>
              <div className='h-[300px] w-[200px]'>
                <h2 className='font-semibold text-base'>Perfact Share Ratio <span className='font-normal'>We believe in fair partnerships. we enjoy a perfect share ratio that ensures transparency and fairness. Your hard work deserves to be rewarded, and we make sure you get your share.</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7