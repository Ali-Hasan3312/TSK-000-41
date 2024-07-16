import React from 'react'

const Section4 = () => {
  const data = [
    {
      img: "https://internee.pk/certificate.jpeg",
      heading: "Complete all of the task but didn't get certification yet? 😓🤦‍♀️",
      p: `📧 Drop us a quick email at issues@internee.pk with the subject "Didn't get certification yet." Our team will swiftly resolve the matter, ensuring you get your recognition promptly.`,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7189609599837093888"
    },
    {
      img: "https://internee.pk/mentor.jpeg",
      heading: "🚀 Are you a tech expert looking to make a meaningful impact in the community?🌟🎉",
      p: `Our goal is to make Pakistan as an IT Hub. For this, we need more hands-on developers and tech enthusiast who will lift the Pakistan's IT export into the top👨‍💻. Your guidance and help may create a significant impact on some one's career. 🚀`,
      link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7190418478086942720"
    },
    {
      img: "https://internee.pk/comunity.jpeg",
      heading: "🚀Calling communities to Empower Students, Collaborate with Internee.pk!✌",
      p: `We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially with students.`,
      link: "https://www.linkedin.com/posts/internee-pk_universites-socities-institutes-activity-7182846863824281600-clqx?utm_source=share&utm_medium=member_desktop"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/internee-pk.appspot.com/o/11.PNG?alt=media&token=8a893fce-8cfe-47fa-a5bd-93da505edda2",
      heading: "Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟",
      p: `To complete the process, send us all the task details via email at careers@internee.pk. This ensures that we have all the necessary information to validate your certification.`,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7186095364330897409"
    },
  ]
  return (
    <div className='w-full h-[1000px] bg-gray-100'>
     <div className=' mt-36 text-center pt-32'>
     <p className=' text-[20px] tracking-tight font-[400]'>Our Blog</p>
     <h1 className=' text-4xl tracking-tight font-bold'>Recent Blog</h1>
     </div>
            <div className='w-full absolute flex items-center justify-center gap-4 mt-12'>
              
                    {data.map((d, index) => (
                        <div key={index} className=' flex items-center justify-center gap-2'>
                            <div className='h-[680px] w-[270px] mx-1 rounded-xl flex flex-col items-center text-center relative'>
                                <div className='bg-gray-100 w-full flex justify-center pt-8 rounded-lg'>
                                    <img src={d.img} className='w-[260px]' alt="" />
                                </div>
                                <a href={d.link} className=' absolute top-8 w-[270px] h-[300px]'>a</a>
                                <div>

                                <a  href={d.link} className='w-[240px] mt-8 text-xl font-bold hover:opacity-70 hover:transition-all cursor-pointer'>{d.heading}
                                </a>
                                </div>
                                <p className='w-[240px] mt-7 text-gray-500'>{d.p}</p>
                                
                            </div>
                        </div>
                    ))}
               
            </div>
        </div>
  )
}

export default Section4