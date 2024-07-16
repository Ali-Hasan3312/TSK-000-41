import React from 'react'

const Section8 = () => {
  return (
    <div>
    <div className='flex mt-40 items-center gap-0 mb-36'>
      
      <div className='h-[900px] w-[800px] text-black opacity-85 ml-32'>
        <h4 className='text-xl font-bold tracking-tight'>Already have a good skill but looking for job?</h4>
        <h1 className='text-[50px] leading-tight font-bold tracking-tight'>Job Portal, Ultimate Place To Find The Best Job</h1>
        <p className='text-[21px] opacity-70 py-6 w-[600px]'>Streamline the approval process with your customer to quickly close the deal, get the sale, and start production.</p>
        <div className='flex flex-wrap'>
          <div className='flex gap-4'>
            <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
              <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/cellphone-link.svg" alt="" />
            </div>
            <div className='h-[300px] w-[200px]'>
              <h2 className='font-semibold text-base'>100% Mobile friendly <span className='font-normal'>online art approvals</span></h2>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
              <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/checkbox-multiple-marked-outline.svg" alt="" />
            </div>
            <div className='h-[100px] w-[200px]'>
              <h2 className='font-semibold text-base'>Speed up the design process <span className='font-normal'>Everything is done online, from mockup to final design.</span></h2>
            </div>
          </div>
          <div className='flex gap-4 -mt-32'>
            <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
              <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/account-multiple-plus-outline.svg" alt="" />
            </div>
            <div className='h-[100px] w-[200px]'>
              <h2 className='font-semibold text-base'>Communicate easier <span className='font-normal'>Add multiple recipients to an Art Approval to reduce traditional email clutter.</span></h2>
            </div>
          </div>
          <div className='flex gap-4 -mt-32'>
            <div className='h-[68px] w-[72px] rounded-lg bg-customPink flex items-center justify-center'>
              <img className='slide-up' src="https://internee.pk/wp-content/uploads/2021/03/order-bool-ascending-variant.svg" alt="" />
            </div>
            <div className='h-[100px] w-[200px]'>
              <h2 className='font-semibold text-base'>Add changes faster <span className='font-normal'>Students can add comments to approvals for changes, saving you both time on finalizing designs.

</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div className='slide-left mr-8'>
        <img
          className='h-[600px] w-[600px] vert-move' // Initially hidden
          src="https://internee.pk/images/jobs/job.png"
          alt=""
        />
      </div>
    </div>
  </div>
  )
}

export default Section8