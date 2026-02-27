import { useRef , useState} from "react";
import NavBar from "./Components/NavBar"
import frontpic from './assets/frontpic.png'
import rightArrow from './assets/right-arrow.png';
import leftArrow from './assets/left-arrow.png';
import rightArrowblck from './assets/right-arrow-black.png';
import aboutMe from './assets/about-me.jpg'
import gradient1 from './assets/gradient-1.png'
import gradient2 from './assets/gradient-2.png'
import gradient3 from './assets/gradient-3.png'
import gradient4 from './assets/gradient-4.png'
import email from './assets/email.png'
import phoneCall from './assets/phone-call.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import medium from './assets/medium.png'
import facebook from './assets/facebook.png'
import gubi1 from './assets/gubi-1.jpg'
import gubi2 from './assets/gubi-2.jpg'
import python from './assets/python.png'
import Rlogo from './assets/Rlogo.png'
import Rshiny from './assets/logo-shiny.png'
import html from './assets/html.png'
import css from './assets/css.png'
import php from './assets/php.png'
import react from './assets/react.svg'
import chatgpt from './assets/chatgpt.png'
import canva from './assets/canva.png'
import figma from './assets/figma.png'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'
import diagonalArrow from './assets/diagonalArrow.png'
import diagonalArrowWhite from './assets/arrow-diagonal.png'
import { link } from "framer-motion/client";

const App = () => {

  const aboutRef = useRef(null);
  
  const projects = [
    {
      title: "Inflation & Rice Price Watch",
      desc: " The dashboard was developed to present an overview of rice inflation rates in the Philippines across various rice classifications.",
      image: project1,
      link: "https://www.figma.com/proto/52Ae3Sv463OebBDcK80haH/ADS-Dashboard?node-id=8-2&t=W0FwWxDOcE2VJbM6-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A2",
      role: "Data Analyst | UI/UX Designer",
    },
    {
      title: "Viral Skin Infection Identifier",
      desc: "A prototype website was developed to identify common viral skin infections using machine learning–based image classification.",
      image: project2,
      link: "https://www.figma.com/proto/aHqYCWCsiFxnRQJfihrini/Viral-Skin-Infection-Identifier?node-id=1-2&p=f&t=eulzs0rTLoB1oOn6-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
      role: "UI/UX Designer | Frontend Developer",
    },
    {
      title: "Davao Jeepney Fare Guide",
      desc: "A prototype mobile app was developed to help users determine correct Davao jeepney fares and track recent trips.",
      image: project3,
      link: "https://www.figma.com/proto/ZKf2ImuXsjYnDMItHBksqm/Davao-Jeepney-Fare-Guide?node-id=1-3&t=Xl0ZKrMsDwbStqFR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A4",
      role: "UI/UX Designer",
    },
    {
      title: "Housekeeping Management Website",
      desc: "A prototype housekeeping app to simulate room management - tracking, cleaning schedules, item monitoring, and status updates.",
      image: project4,
      link: "https://www.figma.com/proto/6N1VNAa5ufdR9D8j4OvdUp/Housekeeping-Management-Prototype1?node-id=1339-2655&starting-point-node-id=1339%3A2655&scaling=contain&content-scaling=fixed&t=lvDuBRdaDo3tDv1r-1",
      role: "System Analyst | UX Designer",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };


  return (
    <div id="home" className="relative min-h-screen bg-[#ececf4] px-4 md:px-10 lg:px-16 flex flex-col overflow-x-hidden">

      <NavBar />

        <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen gap-10 md:gap-20 px-2">
          {/* Text */}
          <div className="flex flex-col gap-2 text-center md:text-left max-w-full md:max-w-lg md:ml-12">
            <h1 className="text-2xl md:text-3xl text-[#1e2950]">Hi, I'm</h1>
            
            <p className="text-5xl md:text-9xl text-[#1e2950]"
              style={{ fontFamily: 'Shrikhand, cursive' }}>
              Desiree
            </p>
            <p className="text-sm md:text-lg text-[#1e2950]">
              An aspiring <span className="font-bold">Data Scientist</span> creating visual analytics, dashboards, and intuitive frontend experiences.
            </p>

            <div className="flex justify-center md:justify-start mt-3">
              <button
                onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-4 py-2 bg-[#447da6] text-white shadow-lg font-bold rounded-full inline-flex items-center justify-center overflow-hidden hover:bg-[#35648b] transition-all duration-300 min-w-[230px]"
              >
                <span className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">
                  Learn more about me
                </span>

                <img
                  src={rightArrow}
                  alt="arrow"
                  className="w-8 h-8 opacity-0 transition-all duration-300 group-hover:opacity-100"
                />
              </button>
            </div>
          </div>

          {/* Image */}
          <img
            src={frontpic}
            alt="Front"
            className="w-60 h-60 md:w-150 md:h-160 object-cover rounded-lg"
          />
        </div>

      {/* ABOUT ME SECTION */}
      <div id="about" className="mt-32 flex justify-center">
        <div ref={aboutRef}></div>

        <div className="bg-[#f5f8fd] w-full max-w-8xl shadow-lg px-4 sm:px-10 py-6 sm:py-10 min-h-[130vh] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:gap-13">
            
            <div className="flex justify-center">
              <img src={aboutMe} alt="About Me"
                className="w-80 h-60 md:w-96 md:h-130 shadow-2xs object-cover"/>
            </div>

            <div className="flex-1 w-full sm:w-auto flex flex-col items-start">
              <h2 className="mt-4 sm:mt-0 text-xl sm:text-2xl text-[#1e2950] font-bold mb-4 sm:mb-6 border-[3px] border-[#447da6] 
                rounded-full px-4 py-1 sm:px-6 sm:py-2 bg-white sm:bg-transparent inline-block transition-transform duration-300 ease-out 
                hover:scale-105">
                ABOUT ME
              </h2>

              <p className="text-sm sm:text-base md:text-1xl text-[#1e2950] leading-relaxed text-justify mb-4 sm:mb-6">
                My name is <span className="font-bold text-[#447da6]">Desiree Joice F. Boo</span>, a fourth-year <span className="font-bold text-[#447da6]">Bachelor of Science in Computer Science</span> student majoring 
                in Data Science at the University of Southeastern Philippines. My academic journey has shaped a flexible skill 
                set that moves between data analysis, machine learning, data visualization, frontend development, and UX 
                design. 
                <br /><br />
                <span className="text-[#447da6] italic">I transform data into visual analytics and ML-powered dashboards</span>, designing structured, user-centered 
                interfaces with clarity and balance. I adapt quickly to new tools and am seeking opportunities to grow as a 
                data scientist, contributing analytics-driven, well-designed solutions to real-world projects.
              </p>
              
              <div className="flex flex-col md:flex-row md:items-start md:gap-20 md:mt-15">

                <div className="flex flex-col gap-3 mt-10 md:mt-0">
                  <p className="text-[#1e2950] text-1xl md:text-xl font-bold">Contact Me</p>

                  <div className="flex items-center gap-2">
                    <img src={email} alt="Email" className="w-9 h-9 object-cover"/>
                    <p className="text-[#1e2950]">desireejoice@gmail.com</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={phoneCall} alt="Phone" className="w-9 h-9 object-cover"/>
                    <p className="text-[#1e2950]">+63 935 749 8306</p>
                  </div>
                </div>

                <div className="hidden md:block border-l-2 border-[#1e2950] self-stretch"></div>

                <div className="flex flex-col gap-3 mt-10 md:mt-0">
                  <p className="text-[#1e2950] text-1xl md:text-xl font-bold">Connect With Me</p>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    <a href="https://www.linkedin.com/in/desiree-joice-boo-1082183a4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                      <img src={linkedin} alt="LinkedIn" className="w-9 h-9"/>
                      <span className="text-[#1e2950] md:text-2xl">LinkedIn</span>
                    </a>

                    <a href="https://medium.com/@djfboo00089" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                      <img src={medium} alt="Medium" className="w-9 h-9"/>
                      <span className="text-[#1e2950] md:text-2xl">Medium</span>
                    </a>

                    <a href="https://github.com/ddesiree" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                      <img src={github} alt="GitHub" className="w-9 h-9"/>
                      <span className="text-[#1e2950] md:text-2xl">GitHub</span>
                    </a>

                    <a href="https://www.facebook.com/desireejoice.boo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                      <img src={facebook} alt="Facebook" className="w-9 h-9"/>
                      <span className="text-[#1e2950] md:text-2xl">Facebook</span>
                    </a>
                  </div>
                </div>

              </div>
        
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-60 mt-20 px-4">

            <div className="relative z-0 text-center md:text-left max-w-md">
              <img 
                src={gradient2} 
                alt="Gradient2"
                className="hidden md:block absolute left-1/2 -top-40 -translate-x-1/2 h-[400px] object-contain -z-10"
              />

              <p className="relative z-10 text-[#1e2950] text-base md:text-lg leading-relaxed md:ml-15">
                <span className="italic">Oh,</span> I also have a cat. Her name's Gubi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <img 
                src={gubi1} 
                alt="Gubi1" 
                className="w-60 h-72 md:w-70 md:h-80 shadow-2xs object-cover"
              />
              <img 
                src={gubi2} 
                alt="Gubi2" 
                className="w-60 h-72 md:w-70 md:h-80 shadow-2xs object-cover"
              />
            </div>

          </div>

        </div>

      </div>

      {/* SKILLS SECTION */}
      <div id="skills" className="relative mt-15 flex flex-col items-center">

        <img
          src={gradient3}
          alt="Gradient3"
          className="absolute top-[-250px] left-1/2 -translate-x-1/2
                    w-[900px] h-[900px] object-contain z-0 opacity-100"
        />

        <div className="relative z-10 w-full max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="mt-0 sm:mt-0 text-xl sm:text-2xl text-[#1e2950] font-bold mb-4 sm:mb-6 border-[3px] border-[#447da6] 
                rounded-full px-6 py-1 sm:px-12 sm:py-2 bg-white inline-block transition-transform duration-300 ease-out 
                hover:scale-105">
              SKILLS
            </h2>

            <p className="text-xs sm:text-base sm:text-1xl text-[#1e2950] max-w-7xl px-6 tracking-wide">
              I’ve always been drawn to website design and intuitive functionality. Through my Computer
              Science studies, I’ve been able to expand beyond design, developing strong skills in data
              analysis, system thinking, and problem-solving.
              <span className="font-bold"> Skills I’ve developed over time include:</span>
            </p>
          </div>

          <p className="mt-10 pl-6 text-1xl md:text-2xl text-[#1e2950] font-bold text-left">
            SOFTWARE TOOLS
          </p>

          <div className="flex flex-wrap gap-2 mt-1 justify-center">
            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={python} alt="python icon" className="w-30 h-30 sm:w-40 sm:h-40" />
              <p className="text-base sm:text-2xl text-[#1e2950] font-bold mt-1">
                Python
              </p>
            </div>

            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={Rlogo} alt="Rlogo" className="w-25 h-25 sm:w-35 sm:h-35"/>
              <p className="text-[13px] sm:text-xl text-[#1e2950] font-bold mt-3">R Programming</p>
            </div>

            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={Rshiny} alt="Rshiny" className="w-25 h-28 sm:w-33 sm:h-35"/>
              <p className="text-base sm:text-2xl text-[#1e2950] font-bold mt-1">R Shiny</p>
            </div>

            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={html} alt="html" className="w-33 h-27 sm:w-43 sm:h-35"/>
              <p className="text-base sm:text-2xl text-[#1e2950] font-bold mt-1">HTML</p>
            </div>

            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={css} alt="css" className="w-28 h-27 sm:w-37 sm:h-35 mt-2"/>
              <p className="text-base sm:text-2xl text-[#1e2950] font-bold mt-2">CSS</p>
            </div>

            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={php} alt="php" className="w-28 h-27 sm:w-35 sm:h-35 mt-5"/>
              <p className="text-base sm:text-2xl text-[#1e2950] font-bold">PHP</p>
            </div>

            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={react} alt="php" className="w-28 h-27 sm:w-35 sm:h-35"/>
              <p className="text-base sm:text-2xl text-[#1e2950] font-bold mt-3">React</p>
            </div>

            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={chatgpt} alt="chatgpt" className="w-28 h-27 sm:w-35 sm:h-35 mt-1"/>
              <p className="text-base sm:text-2xl text-[#1e2950] font-bold mt-3">ChatGPT</p>
            </div>

            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={canva} alt="canva" className="w-28 h-27 sm:w-35 sm:h-35 mt-1"/>
              <p className="text-base sm:text-2xl text-[#1e2950] font-bold mt-3">Canva</p>
            </div>

            <div className="w-35 h-40 sm:w-45 sm:h-50 
                bg-[#f5f8fd] rounded-xl shadow-xl
                flex flex-col items-center justify-center
                transform transition duration-300 ease-out
                hover:scale-105 hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]
                active:shadow-[0_0_25px_rgba(68,125,166,0.8)]
                active:scale-105">
              <img src={figma} alt="figma" className="w-20 h-25 sm:w-25 sm:h-35 mt-1"/>
              <p className="text-base sm:text-2xl text-[#1e2950] font-bold mt-3">Figma</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 mt-10 px-6">
            {/* SOFTWARE TOOLS */}
            <div className="flex flex-col w-full md:w-1/2">
              <p className="text-xl md:text-2xl text-[#1e2950] font-bold mb-4">
                SOFTWARE TOOLS
              </p>

              <div className="flex flex-wrap bg-[#f5f8fd] rounded-xl shadow-xl p-6
                              transition duration-300 ease-out
                              hover:scale-105 
                              hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]">

                <div className="flex flex-col">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Data Analytics
                    </p>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Data Visualization
                    </p>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="block sm:hidden w-[1px] h-6 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Research & Development
                    </p>
                  </div>

                </div>

                <div className="flex flex-col sm:ml-9">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Machine Learning
                    </p>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      UX Research
                    </p>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Prototyping
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="flex flex-col w-full md:w-1/2">
              <p className="text-xl md:text-2xl text-[#1e2950] font-bold mb-4">
                SOFT SKILLS
              </p>

              <div className="flex flex-wrap bg-[#f5f8fd] rounded-xl shadow-xl p-6
                              transition duration-300 ease-out
                              hover:scale-105 
                              hover:shadow-[0_10px_20px_rgba(68,125,166,0.6)]">

                <div className="flex flex-col">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Collaborative Teamwork
                    </p>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Organization Skills
                    </p>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="block sm:hidden w-[1px] h-6 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Adaptability
                    </p>
                  </div>

                </div>

                <div className="flex flex-col sm:ml-9">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Well Mannered
                    </p>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                      <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#1e2950]"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Effective Communication
                    </p>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-4 mt-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1e2950] rounded-full"></div>
                    </div>
                    <p className="text-[#1e2950] font-semibold">
                      Technical Documentation
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="mt-32 flex justify-center">
        <img src={gradient4} alt="gradient4" className="absolute left-285 w-90 h-120 top-664"/>
        <div className="bg-[#f5f8fd] w-full max-w-8xl shadow-lg px-10 py-10 min-h-[150vh]">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl text-[#1e2950] font-bold mb-6 border-[3px] border-[#447da6] 
              rounded-full px-6 py-2 inline-block transition-transform duration-300 ease-out 
              hover:scale-105">
              PROJECTS
            </h2>
            <p className="text-[#1e2950] text-1xl mt-3">Here are some of my works:</p>
          </div>

          {/* Card Carousel */}
          <div className="relative mt-15 flex items-center justify-center">

            <div
              className="relative w-full h-[420px] flex items-center justify-center"
              style={{ perspective: "1200px" }}
            >
              {projects.map((project, index) => {
                const offset = index - activeIndex;

                let transform = "";
                let zIndex = 0;
                let opacity = 1;

                if (offset === 0) {
                  transform = "translateZ(200px) scale(1)";
                  zIndex = 30;
                } else if (offset === -1 || offset === projects.length - 1) {
                  transform = "translateX(-260px) rotateY(35deg) scale(0.9)";
                  zIndex = 20;
                  opacity = 0.6;
                } else if (offset === 1 || offset === -(projects.length - 1)) {
                  transform = "translateX(260px) rotateY(-35deg) scale(0.9)";
                  zIndex = 20;
                  opacity = 0.6;
                } else {
                  transform = "scale(0)";
                  opacity = 0;
                }

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500 ease-out"
                    style={{ transform, zIndex, opacity }}
                  >
                    <div className="w-130 h-100 bg-white rounded-2xl overflow-hidden cursor-pointer
                                    shadow-lg hover:shadow-[0_24px_48px_rgba(68,125,166,0.45)]
                                    hover:-translate-y-2 transition-all duration-300 ease-out">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 object-cover"
                      />

                     <div className="p-4">
                        <h3 className="text-xl font-bold text-[#1e2950] leading-tight">
                          {project.title}
                        </h3>

                        <span className="text-xs text-gray-500 leading-tight ml-1">
                          {project.role || ""}
                        </span>

                        <p className="mt-0 text-[#1e2950] text-sm">
                          {project.desc}
                        </p>

                        <button 
                          onClick={() => window.open(project.link, "_blank")}
                          className="mt-2 px-2 py-1.5 text-[#447da6] font-bold hover:underline
                                    inline-flex items-center gap-1"
                        >
                          View Prototype
                          <img src={diagonalArrow} alt="arrow" className="w-3 h-3"/>
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <button
              onClick={prevProject}
              className="absolute left-15 bg-white rounded-full px-4 py-4 shadow-lg
                        hover:scale-110 transition"
            >
              <img src={leftArrow} alt="left arrow" className="w-6 h-6"/>
            </button>

            <button
              onClick={nextProject}
              className="absolute right-15 bg-white rounded-full px-4 py-4 shadow-lg
                        hover:scale-110 transition"
            >
              <img src={rightArrowblck} alt="right arrow black" className="w-6 h-6"/>
            </button>
          </div>

          {/* BLOGS SECTION */}
          <div className="mt-30 px-6 w-full">

            {/* Title */}
            <p className="text-2xl text-[#1e2950] font-bold mb-6 text-left">
              BLOGS:
            </p>

            {/* Scrollable Container */}
            <div
              className="space-y-5 
                        max-h-[320px] 
                        overflow-y-auto 
                        pr-2
                        scrollbar-thin 
                        scrollbar-thumb-[#447da6] 
                        scrollbar-track-gray-200"
            >

              {/* Blogs */}
              <div className="flex items-center justify-between
                              border-3 border-[#447da6]
                              rounded-xl
                              bg-white
                              px-8 py-7
                              shadow-lg

                              hover:border-[#8bb8d9]

                              transition-all duration-300 ease-out"
              >
                <div className="max-w-[75%]">
                  <h3 className="font-bold text-2xl text-[#1e2950] mb-2">
                    Put on Your War Paint! Conquering the Challenges of Research Publication
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Title’s inspiration is from The Pheonix by Fall Out Boy btw. HI gois I hope 
                    you enjoy reading this.
                  </p>
                </div>

                <button
                  onClick={() => window.open("https://medium.com/@djfboo00089/put-on-your-war-paint-conquering-the-challenges-of-research-publication-a0e05d739f88", "_blank")}
                  className="bg-[#447da6] text-white text-bold text-sm font-medium px-4 py-2 
                  inline-flex items-center gap-1 shadow-md shadow-[#afafaf] rounded-full 
                  hover:bg-[#35668c] transition"
                >
                  View More
                  <img src={diagonalArrowWhite} alt="arrow" className="w-4 h-4"/>
                </button>
              </div>

              <div className="flex items-center justify-between
                              border-3 border-[#447da6]
                              rounded-xl
                              bg-white
                              px-8 py-7
                              shadow-lg

                              hover:border-[#8bb8d9]

                              transition-all duration-300 ease-out"
              >
                <div className="max-w-[75%]">
                  <h3 className="font-bold text-2xl text-[#1e2950] mb-2">
                    First Day Blues: God knows how I feel so out of place
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Well, it’s interesting how I made it to my third year despite the lack of 
                    confidence I had in myself while taking this course. This is the first time 
                    I’ve ever admitted it outside of my subconscious and quiet thoughts. Nevertheless...
                  </p>
                </div>

                <button
                  onClick={() => window.open("https://medium.com/@djfboo00089/god-knows-how-i-feel-so-out-of-place-63a2343af5f3", "_blank")}
                  className="bg-[#447da6] text-white text-bold text-sm font-medium px-4 py-2 
                  inline-flex items-center gap-1 shadow-md shadow-[#afafaf] rounded-full 
                  hover:bg-[#35668c] transition"
                >
                  View More
                  <img src={diagonalArrowWhite} alt="arrow" className="w-4 h-4"/>
                </button>
              </div>

              <div className="flex items-center justify-between
                              border-3 border-[#447da6]
                              rounded-xl
                              bg-white
                              px-8 py-7
                              shadow-lg

                              hover:border-[#8bb8d9]

                              transition-all duration-300 ease-out"
              >
                <div className="max-w-[75%]">
                  <h3 className="font-bold text-2xl text-[#1e2950] mb-2">
                    404: Sanity Not Found (A Data Scientist’s Life)
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Hi! It’s me again, bear with me as I chatter through this blog again. Hope you enjoy!
                  </p>
                </div>

                <button
                  onClick={() => window.open("https://medium.com/@djfboo00089/404-sanity-not-found-a-data-scientists-life-dd7155e2890c", "_blank")}
                  className="bg-[#447da6] text-white text-bold text-sm font-medium px-4 py-2 
                  inline-flex items-center gap-1 shadow-md shadow-[#afafaf] rounded-full 
                  hover:bg-[#35668c] transition"
                >
                  View More
                  <img src={diagonalArrowWhite} alt="arrow" className="w-4 h-4"/>
                </button>
              </div>

              <div className="flex items-center justify-between
                              border-3 border-[#447da6]
                              rounded-xl
                              bg-white
                              px-8 py-7
                              shadow-lg

                              hover:border-[#8bb8d9]

                              transition-all duration-300 ease-out"
              >
                <div className="max-w-[75%]">
                  <h3 className="font-bold text-2xl text-[#1e2950] mb-2">
                    Lost in the Literature? A Guide to Navigating the Research Maze
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Pidro, a CS undergraduate student, was investigating the efficacy of online learning 
                    in higher education. He had to produce a thorough literature review as part of his 
                    thesis to lay the theoretical groundwork for his research...
                  </p>
                </div>

                <button
                  onClick={() => window.open("https://medium.com/@djfboo00089/lost-in-the-literature-a-guide-to-navigating-the-research-maze-135f9e39291d", "_blank")}
                  className="bg-[#447da6] text-white text-bold text-sm font-medium px-4 py-2 
                  inline-flex items-center gap-1 shadow-md shadow-[#afafaf] rounded-full 
                  hover:bg-[#35668c] transition"
                >
                  View More
                  <img src={diagonalArrowWhite} alt="arrow" className="w-4 h-4"/>
                </button>
              </div>

            </div>

            
          </div>

        </div>

      </div>

    </div>
  )
}
export default App