import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";


const InterneeCart = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true, 
        pauseOnHover: true,
        customPaging: (i,isActive) => (
            <div className={`mt-8 flex gap-2 w-4 h-4 justify-center items-center border border-solid border-white rounded-full cursor-pointer custom-dot ${isActive ? 'active' : ''}`}
            >
                
            </div>
        ),
        dotsClass: "slick-dots custom-dots",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        {
            img: "https://internee.pk/images/jobs/FrontEnd.webp",
            heading: "Frontend Internship",
            p: `Choosing Internee.pk means more than just learning to code. It's about career advancement and propelling your journey towards becoming a proficient frontend developer. We believe in sculpting future tech leaders, and with us, you become part of a vibrant community committed to excellence.`,
            link: "https://internee.pk/web-design.html"
        },
        {
            img: "https://internee.pk/images/jobs/cloud.webp",
            heading: "Cloud Computing Internship",
            p: `Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.`,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfuyq_LSLbiHml7NlnsgvFKBHIa1iuOvJ4y3FGH0hLpFCSOpA/closedform?pli=1"
        },
        {
            img: "https://internee.pk/images/jobs/logo-designer-working-computer-desktop.webp",
            heading: "Graphic Designing Internship",
            p: `What sets our Graphic Designing internship apart? It's the perfect blend of theory and hands-on practice. You'll not only grasp the principles of design but also dive into real-world projects that challenge and enhance your creative skills.`,
            link: "https://docs.google.com/forms/d/1Ss56SkzTy3kBS3DJsoiGbRSnHKqWBB4MqwBIMKSuFro/"
        },
        {
            img: "https://internee.pk/images/jobs/BackendDevelopment.webp",
            heading: "Backend Internship",
            p: `Backend internship? It's not just about learning; it's about crafting scalable solutions that power the digital landscape. Throughout the internship, you'll engage in hands-on projects, tackling real-world challenges alongside seasoned developers who are passionate about mentoring the next generation.`,
            link: "https://internee.pk/web-development.html"
        },
        {
            img: "https://internee.pk/images/jobs/portrait-woman-customer-service-worker.webp",
            heading: "Video Editing Internship",
            p: `It's not just about splicing clips; it's about understanding the nuances of pacing, rhythm, and visual aesthetics. Throughout the internship, you'll work on diverse projects, refining your skills under the guidance of experienced professionals passionate about visual storytelling.`,
            link: "https://docs.google.com/forms/d/1Ss56SkzTy3kBS3DJsoiGbRSnHKqWBB4MqwBIMKSuFro/"
        },
        {
            img: "https://internee.pk/images/jobs/Mobile%20App%20Developer.webp",
            heading: "Mobile App Internship",
            p: `Our internship goes beyond coding; it's about understanding user behavior, mastering UI/UX principles, and creating apps that leave a lasting impression. Whether you're a seasoned coder or a budding developer, our program is tailored to nurture your skills and broaden your understanding of app architecture.`,
            link: "https://internee.pk/mobile-development.html"
        },
        {
            img: "https://internee.pk/images/jobs/chatbotDevelopment.webp",
            heading: "Chatbot Development Internship",
            p: `Our program is designed for enthusiasts eager to explore natural language processing, machine learning, and the art of crafting intelligent conversational agents. From understanding user intents to deploying chatbots in real-world scenarios, you'll gain hands-on experience with cutting-edge technologies.`,
            link: "https://internee.pk/chatbot.html"
        },
        {
            img: "https://internee.pk/images/jobs/marketing-assistant.webp",
            heading: "Digital Marketing Internship",
            p: `Choosing Internee.pk means more than just learning to code. It's about career advancement and propelling your journey towards becoming a proficient frontend developer. We believe in sculpting future tech leaders, and with us, you become part of a vibrant community committed to excellence.`,
            link: "https://docs.google.com/forms/d/1E6PYo6PzqIj6M5Jo8NxX6etLw5npKEzwbEbsIgqHEgs"
        },
        {
            img: "https://internee.pk/images/jobs/hack.webp",
            heading: "Cyber Security Internship",
            p: `We believe in nurturing talent that can tackle evolving cyber threats. Our interns don't just learn; they engage with cutting-edge technologies, analyze vulnerabilities, and develop robust security strategies.`,
            link: "https://forms.gle/5sN5DA6NQZEHZB9f9"
        },
        {
            img: "https://internee.pk/images/jobs/BackendDevelopment.webp",
            heading: "Backend Internship",
            p: `Backend internship? It's not just about learning; it's about crafting scalable solutions that power the digital landscape. Throughout the internship, you'll engage in hands-on projects, tackling real-world challenges alongside seasoned developers who are passionate about mentoring the next generation.`,
            link: "https://forms.gle/JcuPCUi9BR2NcvsE9"
        },
        {
            img: "https://internee.pk/images/jobs/young-woman-teaching-english-lessons.webp",
            heading: "Technical Writing Internship",
            p: `We understand the importance of effective communication in the tech world. Our Technical Writing Internship offers a unique blend of hands-on experience in translating technical jargon into clear, concise, and engaging content.`,
            link: "https://docs.google.com/forms/d/1Ss56SkzTy3kBS3DJsoiGbRSnHKqWBB4MqwBIMKSuFro/"
        },
    ];

    return (
        <div className='absolute top-[465px] w-full'>
            <div className='w-full'>
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className='p-1'>
                            <div className='bg-white h-[680px] w-[270px] mx-1 rounded-xl flex flex-col items-center text-center relative'>
                                <div className='bg-gray-100 w-full flex justify-center pt-8 rounded-lg'>
                                    <img src={d.img} className='w-[260px]' alt="" />
                                </div>
                                <h2 className='w-[240px] mt-8 text-xl font-bold'>{d.heading}</h2>
                                <p className='w-[240px] mt-7 text-gray-500'>{d.p}</p>
                                <button className='py-2 px-4 bg-customGreen mt-6 rounded-lg text-white'>Apply Now</button>
                                <a href={d.link} className='h-full w-full absolute'></a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default InterneeCart;
