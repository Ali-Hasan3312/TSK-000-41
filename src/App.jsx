import { useEffect, useState } from "react";
import  Section2  from "./components/section2.jsx";
import "./app.css"
import Section3 from "./components/section3.jsx";
import Section4 from "./components/section4.jsx";
import Section5 from "./components/section5.jsx";
import Section7 from "./components/section7.jsx";
import Section8 from "./components/section8.jsx";
import Section6 from "./components/section6.jsx";
import Section9 from "./components/section9.jsx";
import Section10 from "./components/section10.jsx";
import Section11 from "./components/section11.jsx";

function App() {
  const texts = [
    "On your desire domain",
    "Gives hands on experience",
    "Get a compitative job"
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isTyping) {
      const blinkTimeout = setTimeout(() => {
        setIsBlinking(false);
        setIsTyping(true);
      }, 2000); // 2 seconds blinking before starting typing
      return () => clearTimeout(blinkTimeout);
    } else if (index < texts[textIndex].length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(displayedText + texts[textIndex].charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust the delay for typing speed
      return () => clearTimeout(typingTimeout);
    } else if (textIndex < texts.length - 1) {
      const newLineTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setTextIndex(textIndex + 1);
        setIsTyping(false);
        setIsBlinking(true);
      }, 1000); // Adjust the delay between lines
      return () => clearTimeout(newLineTimeout);
    } else {
      const restartTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setTextIndex(0);
        setIsTyping(false);
        setIsBlinking(true);
      }, 2000); // 2 seconds blinking after the last line
      return () => clearTimeout(restartTimeout);
    }
  }, [index, textIndex, displayedText, texts, isTyping]);

 
  return (
   
     <div className=" overflow-hidden">
      <div className="flex items-center justify-between mt-6 ml-12">
        <div>
          <img src="https://internee.pk/images/logo.webp" className=" h-10 w-54 cursor-pointer" />
        </div>
        <div>
      <a className=" text-lg tracking-tighter font-semibold mr-12 hover:text-gray-400 transition-all" href="https://internee.pk/internship.html">Internship</a>
      <a className=" text-lg tracking-tighter font-semibold mr-12 hover:text-gray-400 transition-all" href="https://internee.pk/company.html">Company Collaborations</a>
      <a className=" text-lg tracking-tighter font-semibold mr-12 hover:text-gray-400 transition-all" href="https://career.internee.pk">Contact Us</a>
      <button className=" py-3 text-center bg-customGreen rounded-[30px] hover:opacity-90 mr-12 border-green-900 px-6 ">
      <a className=" text-lg tracking-tighter  text-white font-semibold " href="https://portal.internee.pk">Job Portal</a>
      </button>
      <button className=" py-3 text-center text-customGreen border-2 rounded-[30px] mr-12 border-customGreen px-6 ">
      <a className=" text-lg tracking-tighter font-bold " href="https://internee.pk/internship.html">Internee's Login</a>
      </button>
        </div>
      </div>
      <div className="flex -mt-4">
        <div className=" h-[1000px] w-[720px] ml-12 mt-12">
          <h1 className=" text-[54px] leading-tight font-bold tracking-tighter opacity-80">Looking for dream internship?</h1>
         
        <div className="text-[54px] leading-tight font-bold tracking-tighter h-44 w-[400px] text-customGreen">
          {displayedText}
          <span className={`absolute font-normal ml-12 ${isBlinking ? 'animate-blink' : ''}`} style={{ left: `${displayedText.length}ch` }}>
            |
          </span>
      </div>
      <div className=" w-[500px] -mt-8 text-gray-700">
      <span className="text-[21px] font-light">Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</span>
      </div>
      <div className="flex -ml-4 mt-4">
      <div className="flex flex-col w-60 items-center justify-center gap-6">
        <img className="h-14 w-52" src="https://internee.pk/incubation.jpg" alt="" />
        <button className=" py-3 text-center text-customGreen border-2 rounded-[30px] w-44 border-customGreen px-6 ">
      <a className=" text-lg tracking-tighter font-bold" href="https://career.internee.pk">Job Portal</a>
      </button>
      <span className=" -mt-5 text-sm tracking-tighter font-medium italic">Comming soon</span>
      </div>
      <div className="flex flex-col w-60 items-center justify-center gap-6">
        <div className="flex w-44">
          <img className="h-14 " src="https://internee.pk/nep.png" alt="" />
        <img className="h-14 " src="https://internee.pk/nic.png" alt="" />
        </div>
        <button className=" py-3 text-center text-white bg-gradient-to-r from-lightGreen to-customGreen rounded-[30px] w-44 px-6 ">
      <a className=" text-lg tracking-tighter font-bold" href="https://learn.internee.pk">Our LMS</a>
      </button>
      <span className=" -mt-5 text-sm tracking-tighter font-medium italic">90% Courses are in Urdu</span>
      </div>
      </div>
        </div>
        <div className=" h-[1000px] w-[720px]">
          <div className=" h-[700px] ml-8 -mt-24 w-[720px] bg-gray-100 relative -z-10"></div>
          <img className=" relative z-10 -mt-[550px] slide-up"  src="https://internee.pk/images/hero.webp" alt="" />
        </div>
      </div>
      <div className=" fixed bottom-5 right-6 h-16 w-16 shadow shadow-black rounded-full z-10">
      <img src="https://s3.amazonaws.com/kommunicate-prod.s3/profile_pic/17197127999321719712800483-image523.png"  />
      <a href="https://internee.pk" className="fixed bottom-5 right-6 h-16 w-16 "></a>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
     </div>
  
  )
}

export default App
