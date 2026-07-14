import { useRef , useState} from "react";
import NavBar from "./Components/NavBar"
import frontpic from './assets/frontpic.png'
import leftArrow from './assets/left-arrow.png';
import rightArrowblck from './assets/right-arrow-black.png';
import aboutMe from './assets/about-me.jpg'
import gradient1 from './assets/gradient-1.png'
import gradient2 from './assets/gradient-2.png'
import email from './assets/email.png'
import phoneCall from './assets/phone-call.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import medium from './assets/medium.png'
import facebook from './assets/facebook.png'
import gubi1 from './assets/gubi-1.png'
import python from './assets/python.png'
import Rlogo from './assets/Rlogo.png'
import Rshiny from './assets/logo-shiny.png'
import html from './assets/html.png'
import css from './assets/css.png'
import php from './assets/php.png'
import react from './assets/react.svg'
import dart from './assets/dart.png'
import chatgpt from './assets/chatgpt.png'
import claude from './assets/claude.png'
import canva from './assets/canva.png'
import figma from './assets/figma.png'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'
import project5 from './assets/project5.jpg'
import diagonalArrow from './assets/diagonalArrow.png'
import diagonalArrowWhite from './assets/arrow-diagonal.png'
import { div, link } from "framer-motion/client";

const App = () => {

  const aboutRef = useRef(null);

  const glowRef = useRef(null);
  const [glowOffset, setGlowOffset] = useState({ x: 0, y: 0 });

  const skills = [
    { img: python, label: "Python", level: 90, imgClass: "w-30 h-30 sm:w-30 sm:h-30", textClass: "text-[13px] sm:text-xl md:mt-1"},
    { img: dart, label: "Dart", imgClass: "w-28 h-27 sm:w-25 sm:h-25", textClass: "sm:text-xl mt-3" },
    { img: Rlogo, label: "R Programming", imgClass: "w-25 h-25 sm:w-25 sm:h-22", textClass: "text-[13px] sm:text-sm mt-5" },
    { img: html, label: "HTML", imgClass: "w-33 h-27 sm:w-30 sm:h-25 mt-2", textClass: "sm:text-xl mt-2" },
    { img: css, label: "CSS", imgClass: "w-28 h-27 sm:w-25 sm:h-25 mt-2", textClass: "sm:text-xl mt-2" },
    { img: php, label: "PHP", imgClass: "w-28 h-27 sm:w-30 sm:h-30", textClass: "sm:text-xl mt-0" },
    { img: react, label: "React", imgClass: "w-28 h-27 sm:w-25 sm:h-25", textClass: "sm:text-xl mt-3" },
    { img: Rshiny, label: "R Shiny", imgClass: "w-25 h-28 sm:w-23 sm:h-25", textClass: "text-[13px] sm:text-xl mt-3" },
    { img: canva, label: "Canva", imgClass: "w-28 h-27 sm:w-25 sm:h-25 mt-1", textClass: "sm:text-xl mt-3" },
    { img: figma, label: "Figma", imgClass: "w-20 h-25 sm:w-18 sm:h-25 mt-1", textClass: "sm:text-xl mt-3" },
    { img: chatgpt, label: "ChatGPT", imgClass: "w-28 h-27 sm:w-25 sm:h-25 mt-1", textClass: "sm:text-xl mt-3" },
    { img: claude, label: "Claude", imgClass: "w-28 h-27 sm:w-25 sm:h-25 mt-1", textClass: "sm:text-xl mt-3" },
  ];
  
  const keyStrCol1 = [
    "Data Analytics",
    "Data Visualization",
    "Research & Development",
  ];

  const keyStrCol2 = [
    "Machine Learning",
    "UX Research",
    "Prototyping",
  ];

  const softSklCol1 = [
    "Collaborative Teamwork",
    "Organizational Skills",
    "Adaptability",
  ]

  const softSklCol2 = [
    "Well Mannered",
    "Effective Communication Skills",
    "Technical Documentation",
  ]

  const projects = [
    {
      title: "ToxiCrab Mobile App",
      desc: "An AI powered mobile application that detets toxic and non-toxic crab.",
      image: project5,
      link: "https://drive.google.com/file/d/1qK45Mik_mzS0GMTrFkFsn3Fx0avrJfeQ/view?usp=sharing",
      role: "Front-end Developer",
      tools: ["Flutter", "Dart",],
      buttonLabel: "Download APK",
      isDownload: true,
    },
    {
      title: "Inflation & Rice Price Watch",
      desc: " The dashboard was developed to present an overview of rice inflation rates in the Philippines across various rice classifications.",
      image: project1,
      link: "https://www.figma.com/proto/52Ae3Sv463OebBDcK80haH/ADS-Dashboard?node-id=8-2&t=W0FwWxDOcE2VJbM6-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A2",
      role: "Data Analyst | UI/UX Designer",
      tools: ["R", "R Shiny",],
    },
    {
      title: "Viral Skin Infection Identifier",
      desc: "A prototype website was developed to identify common viral skin infections using machine learning–based image classification.",
      image: project2,
      link: "https://www.figma.com/proto/aHqYCWCsiFxnRQJfihrini/Viral-Skin-Infection-Identifier?node-id=1-2&p=f&t=eulzs0rTLoB1oOn6-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
      role: "UI/UX Designer | Front-end Developer",
      tools: ["CSS", "HTML", "Python", "Figma"],
    },
    {
      title: "Davao Jeepney Fare Guide",
      desc: "A prototype mobile app was developed to help users determine correct Davao jeepney fares and track recent trips.",
      image: project3,
      link: "https://www.figma.com/proto/ZKf2ImuXsjYnDMItHBksqm/Davao-Jeepney-Fare-Guide?node-id=1-3&t=Xl0ZKrMsDwbStqFR-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A4",
      role: "UI/UX Designer",
      tools: ["Figma"],
    },
    {
      title: "Housekeeping Management Website",
      desc: "A prototype housekeeping app to simulate room management - tracking, cleaning schedules, item monitoring, and status updates.",
      image: project4,
      link: "https://www.figma.com/proto/6N1VNAa5ufdR9D8j4OvdUp/Housekeeping-Management-Prototype1?node-id=1339-2655&starting-point-node-id=1339%3A2655&scaling=contain&content-scaling=fixed&t=lvDuBRdaDo3tDv1r-1",
      role: "System Analyst | UX Designer",
      tools: ["Figma"],
    },
  ];

  const blogs = [
    {title: "Put on Your War Paint! Conquering the Challenges of Research Publication", 
     desc: "Title’s inspiration is from The Pheonix by Fall Out Boy btw. HI gois I hope you enjoy reading this.", 
     link: "https://medium.com/@djfboo00089/put-on-your-war-paint-conquering-the-challenges-of-research-publication-a0e05d739f88",},
    {title: "First Day Blues: God knows how I feel so out of place", 
     desc: "Well, it’s interesting how I made it to my third year despite the lack of confidence I had in myself while taking this course. This is the first time I’ve ever admitted it outside of my subconscious and quiet thoughts. Nevertheless...",
     link: "https://medium.com/@djfboo00089/god-knows-how-i-feel-so-out-of-place-63a2343af5f3",
    },
    {title: "404: Sanity Not Found (A Data Scientist’s Life)", 
     desc: "Hi! It’s me again, bear with me as I chatter through this blog again. Hope you enjoy!",
     link: "https://medium.com/@djfboo00089/404-sanity-not-found-a-data-scientists-life-dd7155e2890c",
    },
    {title: "Lost in the Literature? A Guide to Navigating the Research Maze", 
     desc: "Pidro, a CS undergraduate student, was investigating the efficacy of online learning in higher education. He had to produce a thorough literature review as part of his thesis to lay the theoretical groundwork for his research...",
     link: "https://medium.com/@djfboo00089/lost-in-the-literature-a-guide-to-navigating-the-research-maze-135f9e39291d",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleMouseMove = (e) => {
    if (!glowRef.current) return;

    const rect = glowRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = centerX - e.clientX;
    const dy = centerY - e.clientY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 300;
    const strength = Math.max(0, 1 - distance / maxDistance);

    const maxOffset = 25;
    setGlowOffset({
      x: (dx / distance || 0) * strength * maxOffset,
      y: (dy / distance || 0) * strength * maxOffset,
    });
  };

  const handleMouseLeave = () => {
    setGlowOffset({ x: 0, y: 0 });
  };


  return (
    <div id="home" className="relative min-h-screen bg-[#101526] px-4 md:px-10 lg:px-16 flex flex-col overflow-x-hidden">

      <NavBar />

        <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen gap-10 md:gap-20 px-2 ml-4 md:ml-9">
          
          <div className="relative flex flex-col gap-2 text-center md:text-left max-w-full md:max-w-lg md:ml-12"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={glowRef}
              src={gradient1}
              alt=""
              className="absolute top-1/2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 
                        w-[300px] md:w-[550px] z-0 pointer-events-none select-none
                        transition-transform duration-600 ease-out"
              style={{
                transform: `translate(${glowOffset.x}px, ${glowOffset.y}px)`,
              }}
            />

            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl text-[#ececf4]">Hi, I'm</h1>

              <p className="text-5xl md:text-9xl text-[#ececf4]"
                style={{ fontFamily: 'Shrikhand, cursive' }}>
                DESIREE
              </p>
              <p className="text-sm md:text-lg text-[#ececf4]">
                An aspiring <span className="font-bold">Data Scientist</span> creating visual analytics, dashboards, and intuitive frontend experiences.
              </p>

              <div className="flex justify-center md:justify-start mt-3">
                <button
                  onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
                  className="px-4 py-3 bg-[#447da6] text-white shadow-lg font-bold rounded-full inline-flex items-center justify-center gap-2 hover:bg-[#516094] hover:scale-110 transition-all duration-300 min-w-[230px]"
                >
                  Learn more about me
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <img
            src={frontpic}
            alt="Front"
            className="w-60 h-60 md:w-150 md:h-160 object-cover rounded-lg mt-6 md:mt-16"
          />
        </div>

      {/* ABOUT ME SECTION */}
      <div id="about" className="mt-32 flex justify-center">
        <div ref={aboutRef}></div>

        <div className="bg-[#070d20] w-full max-w-8xl shadow-lg px-4 sm:px-10 py-6 sm:py-10 min-h-[130vh] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:gap-13">
            
            <div className="flex justify-center">
              <img src={aboutMe} alt="About Me"
                className="w-80 h-60 md:w-96 md:h-130 shadow-2xs object-cover"/>
            </div>

            <div className="flex-1 w-full sm:w-auto flex flex-col items-start">
              <h2 className="mt-4 sm:mt-0 text-xl sm:text-2xl text-[#ececf4] font-bold mb-4 sm:mb-6 border-[3px] border-[#786ec8] 
                rounded-full px-4 py-1 sm:px-6 sm:py-2 bg-[#0e1930] inline-block transition-transform duration-300 ease-out 
                hover:scale-105">
                ABOUT ME
              </h2>

              <p className="text-sm sm:text-base md:text-1xl text-[#f5f8fd] leading-relaxed text-justify mb-4 sm:mb-6">
                My name is <span className="font-bold text-[#91bedd]">Desiree Joice F. Boo</span>, a graduate of the <span className="font-bold text-[#91bedd]">Bachelor of Science in Computer Science</span> majoring 
                in <span className="font-bold text-[#91bedd]">Data Science at the University of Southeastern Philippines.</span> My academic journey has shaped a flexible skill 
                set that moves between data analysis, machine learning, data visualization, frontend development, and UX 
                design. 
                <br /><br />
                <span className="text-[#91bedd] italic">I transform data into visual analytics and ML-powered dashboards</span>, designing structured, user-centered 
                interfaces with clarity and balance. I adapt quickly to new tools and am seeking opportunities to grow as a 
                data scientist, contributing analytics-driven, well-designed solutions to real-world projects.
              </p>
              
              <div className="bg-[#0e1930] w-full rounded-2xl p-7 md:px-20 flex flex-col md:flex-row md:items-start gap-8 md:gap-40 mt-8 md:mt-8">

                <div className="flex flex-col gap-3">
                  <p className="text-white text-xl font-bold">Contact Me</p>

                  <div className="flex items-center gap-2">
                    <img src={email} alt="Email" className="w-8 h-8"/>
                    <p className="text-white/90">desireejoice@gmail.com</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={phoneCall} alt="Phone" className="w-8 h-8"/>
                    <p className="text-white/90">+63 935 749 8306</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-white text-xl font-bold">Connect With Me</p>

                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://www.linkedin.com/in/desiree-joice-boo-1082183a4/" target="_blank" rel="noopener noreferrer" 
                      className="group flex items-center gap-2 pl-1 pr-4 py-0 rounded-full bg-gradient-to-r from-[#4a3f8f] to-[#2f6fa8] 
                      transition-transform duration-300 ease-out hover:scale-105">
                      <span className="flex items-center justify-center w-6 h-6">
                        <img src={linkedin} alt="LinkedIn" className="w-6 h-6 object-contain"/>
                      </span>
                      <span className="text-white text-sm font-medium flex-1">LinkedIn</span>
                      <img src={diagonalArrowWhite} alt="arrow" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"/>
                    </a>

                    <a href="https://medium.com/@djfboo00089" target="_blank" rel="noopener noreferrer" 
                      className="group flex items-center gap-2 pl-1 pr-4 py-1 rounded-full bg-gradient-to-r from-[#4a3f8f] to-[#2f6fa8] 
                      transition-transform duration-300 ease-out hover:scale-105">
                      <span className="flex items-center justify-center w-6 h-6">
                        <img src={medium} alt="Medium" className="w-6 h-6 object-contain"/>
                      </span>
                      <span className="text-white text-sm font-medium flex-1">Medium</span>
                      <img src={diagonalArrowWhite} alt="arrow" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"/>
                    </a>

                    <a href="https://github.com/ddesiree" target="_blank" rel="noopener noreferrer" 
                      className="group flex items-center gap-2 pl-1 pr-4 py-1 rounded-full bg-gradient-to-r from-[#4a3f8f] to-[#2f6fa8] 
                      transition-transform duration-300 ease-out hover:scale-105">
                      <span className="flex items-center justify-center w-6 h-6">
                        <img src={github} alt="GitHub" className="w-6 h-6 object-contain"/>
                      </span>
                      <span className="text-white text-sm font-medium flex-1">GitHub</span>
                      <img src={diagonalArrowWhite} alt="arrow" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"/>
                    </a>

                    <a href="https://www.facebook.com/desireejoice.boo" target="_blank" rel="noopener noreferrer" 
                      className="group flex items-center gap-2 pl-1 pr-4 py-1 rounded-full bg-gradient-to-r from-[#4a3f8f] to-[#2f6fa8] 
                      transition-transform duration-300 ease-out hover:scale-105">
                      <span className="flex items-center justify-center w-6 h-6">
                        <img src={facebook} alt="Facebook" className="w-6 h-6 object-contain"/>
                      </span>
                      <span className="text-white text-sm font-medium flex-1">Facebook</span>
                      <img src={diagonalArrowWhite} alt="arrow" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"/>
                    </a>
                  </div>
                </div>

              </div>
        
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-20 px-4">

            <div className="relative z-0 text-center md:text-left max-w-md">
              <p className="relative z-10 text-[#ececf4] text-base md:text-lg leading-relaxed">
                <span className="italic">Oh,</span> meet my daughter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center">
              <img 
                src={gubi1} 
                alt="Gubi1" 
                className="w-60 h-72 md:w-120 md:h-110 shadow-2xs object-cover"
              />
            </div>

            <div className="relative z-0 text-center md:text-left max-w-md">
              <p className="relative z-10 text-[#ececf4] text-base md:text-lg leading-relaxed md:ml-15">
                Her name's Gubi!
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* SKILLS SECTION */}
      <div id="skills" className="relative mt-15 flex flex-col items-center">

        <div className="relative z-10 w-full max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="mt-4 sm:mt-0 text-xl sm:text-2xl text-[#ececf4] font-bold mb-4 sm:mb-6 border-[3px] border-[#786ec8] 
                rounded-full px-4 py-1 sm:px-12 sm:py-2 bg-[#0e1930] inline-block transition-transform duration-300 ease-out 
                hover:scale-105">
              SKILLS
            </h2>

            <p className="text-xs sm:text-base sm:text-1xl text-[#ececf4] max-w-7xl px-6 tracking-wide">
              I’ve always been drawn to website design and intuitive functionality. Through my Computer
              Science studies, I’ve been able to expand beyond design, developing strong skills in data
              analysis, system thinking, and problem-solving.
              <span className="font-bold"> Skills I’ve developed over time include:</span>
            </p>
          </div>

          <p className="text-xl md:text-2xl text-[#ececf4] font-bold mb-4 mt-10">
            SOFTWARE TOOLS
          </p>

          <div className="flex flex-wrap gap-3 mt-1 justify-center">
            {skills.map((skill, i) => (
              <div key={i} className="w-35 h-40 sm:w-35 sm:h-40 
                                bg-[#081022] rounded-xl
                                shadow-[0_8px_16px_rgba(0,0,0,0.4)]
                                flex flex-col items-center justify-center
                                transform transition duration-300 ease-out
                                hover:scale-105 hover:shadow-[0_10px_25px_rgba(30,64,92,0.8)]
                                active:shadow-[0_0_20px_rgba(120,110,200,0.6)]
                                active:scale-105">
                <img src={skill.img} alt={skill.label} className={skill.imgClass} />
                <p className={` text-[#ececf4] font-bold mt-1 ${skill.textClass || ""}`}>
                  {skill.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-10 mt-10 px-6">
            {/* KEY STRENGTHS */}
            <div className="flex flex-col w-full md:w-1/2">
              <p className="text-xl md:text-2xl text-[#ececf4] font-bold mb-4">
                KEY STRENGTHS
              </p>

              <div className="flex flex-wrap bg-[#081022] rounded-xl p-6 shadow-[0_8px_16px_rgba(0,0,0,0.4)]">

                <div className="flex flex-col">
                  {keyStrCol1.map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex flex-col items-center mr-4 mt-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#786ec8] rounded-full"></div>
                        {i !== keyStrCol1.length - 1 && (
                          <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#786ec8]"></div>
                        )}
                      </div>
                      <p className="text-[#ececf4] font-semibold transition-transform duration-300 ease-out hover:scale-105">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:ml-9">
                  {keyStrCol2.map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex flex-col items-center mr-4 mt-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#786ec8] rounded-full"></div>
                        {i !== keyStrCol2.length - 1 && (
                          <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#786ec8]"></div>
                        )}
                      </div>
                      <p className="text-[#ececf4] font-semibold transition-transform duration-300 ease-out hover:scale-108">{item}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="flex flex-col w-full md:w-1/2">
              <p className="text-xl md:text-2xl text-[#ececf4] font-bold mb-4">
                SOFT SKILLS
              </p>

              <div className="flex flex-wrap bg-[#081022] rounded-xl p-6 shadow-[0_8px_16px_rgba(0,0,0,0.4)]">

                <div className="flex flex-col">
                  {softSklCol1.map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex flex-col items-center mr-4 mt-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#786ec8] rounded-full"></div>
                        {i !== softSklCol1.length - 1 && (
                          <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#786ec8]"></div>
                        )}
                      </div>
                      <p className="text-[#ececf4] font-semibold transition-transform duration-300 ease-out hover:scale-108">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:ml-9">
                  {softSklCol2.map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex flex-col items-center mr-4 mt-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#786ec8] rounded-full"></div>
                        {i !== softSklCol2.length - 1 && (
                          <div className="w-[1px] sm:w-[2px] h-6 sm:h-8 bg-[#786ec8]"></div>
                        )}
                      </div>
                      <p className="text-[#ececf4] font-semibold transition-transform duration-300 ease-out hover:scale-108">{item}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="mt-32 flex justify-center">
        <div className="bg-[#070d20] w-full max-w-8xl shadow-lg px-10 py-10 min-h-[150vh] relative">
          <img src={gradient2} alt="gradient4" className="absolute top-0 right-0 w-100 h-150"/>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="mt-0 sm:mt-0 text-xl sm:text-2xl text-[#ececf4] font-bold mb-4 sm:mb-2 border-[3px] border-[#786ec8] 
                rounded-full px-4 py-1 sm:px-9 sm:py-2 bg-[#0e1930] inline-block transition-transform duration-300 ease-out 
                hover:scale-105">
              PROJECTS
            </h2>
            <p className="text-[#ececf4] text-xs sm:text-base mt-0">Here are some of my works:</p>
          </div>

          {/* Card Carousel */}
          <div className="relative sm:mt-15 flex items-center justify-center">

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
                    <div className="w-[240px] min-h-[320px] h-auto sm:w-130 sm:h-107 bg-[#0e1930] rounded-2xl overflow-hidden cursor-pointer
                                    shadow-lg hover:scale-105 hover:shadow-[0_10px_25px_rgba(30,64,92,0.8)]
                                    hover:-translate-y-2 transition-all duration-300 ease-out">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-30 sm:w-full sm:h-60 object-cover"
                      />

                      <div className="p-2 sm:p-4">
                        <h3 className="text-sm sm:text-xl font-bold text-[#ececf4] leading-tight">
                          {project.title}
                        </h3>

                        <span className="text-[8px] sm:text-xs text-gray-500 leading-tight ml-1">
                          {project.role || ""}
                        </span>

                        <p className="mt-0 text-[#ececf4] text-[10px] sm:text-sm">
                          {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 mb-1 sm:mb-2">
                          {project.tools?.map((tool, i) => (
                            <span
                              key={i}
                              className="text-[10px] sm:text-xs text-[#ddddeb] border-[1px] border-[#786ec8]
                                rounded-full px-2 py-1 sm:px-2 sm:py-1 bg-[#0e1930] inline-block
                                transition-transform duration-300 ease-out hover:scale-105"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <div className="w-full flex justify-end">
                          <button 
                            onClick={() => {
                              if (project.isDownload) {
                                const a = document.createElement("a");
                                a.href = project.link;
                                a.download = ""; 
                                document.body.appendChild(a);
                                a.click();
                                a.remove();
                              } else {
                                window.open(project.link, "_blank");
                              }
                            }}
                            className="sm:mt-0 sm:px-1 py-1.5 text-[#447da6] font-bold hover:underline
                                      inline-flex items-center gap-1 text-xs sm:text-lg"
                          >
                            {project.buttonLabel || "View Prototype"}
                            <img src={diagonalArrow} alt="arrow" className="w-3 h-3"/>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <button
              onClick={nextProject}
              className="absolute top-1/2 -translate-y-1/2 right-[-50px] sm:right-8 bg-white rounded-full px-3 py-3 sm:px-4 sm:py-4 shadow-lg
                        hover:scale-110 transition"
            >
              <img src={rightArrowblck} alt="right arrow black" className="w-4 h-4 sm:w-6 sm:h-6"/>
            </button>

            <button
              onClick={prevProject}
              className="absolute top-1/2 -translate-y-1/2 left-[-50px] sm:left-8 bg-white rounded-full px-3 py-3 sm:px-4 sm:py-4 shadow-lg
                        hover:scale-110 transition"
            >
              <img src={leftArrow} alt="left arrow" className="w-4 h-4 sm:w-6 sm:h-6"/>
            </button>
          </div>

          {/* BLOGS SECTION */}
          <div className="sm:mt-30 px-6 w-full">

            {/* Title */}
            <p className="text-2xl sm:text-2xl text-[#ececf4] font-bold mb-6 text-left">
              BLOGS:
            </p>

            <div
              className="space-y-5 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#447da6] 
                scrollbar-track-gray-200"
            >
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="relative flex flex-col sm:flex-row border-3 border-[#447da6]
                    rounded-xl bg-[#0e1930] px-2 py-2 sm:px-8 sm:py-7 pb-16 sm:pb-7 shadow-lg hover:border-[#8bb8d9]
                    transition-all duration-300 ease-out"
                >
                  <div className="max-w-full sm:max-w-[75%]">
                    <h3 className="font-bold text-1xl sm:text-2xl text-[#ececf4] mb-2">
                      {blog.title}
                    </h3>

                    <p className="text-[10px] sm:text-sm text-gray-300 leading-relaxed">
                      {blog.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => window.open(blog.link, "_blank")}
                    className="absolute bottom-2 right-2 sm:bottom-14 sm:right-6 sm:mt-0 sm:ml-4
                      bg-[#447da6] text-white font-medium text-sm px-4 py-2 sm:px-4 sm:py-2
                      inline-flex items-center gap-1 shadow-md shadow-[#121120] rounded-full
                      hover:bg-[#516094] transition"
                  >
                    View More
                    <img src={diagonalArrowWhite} alt="arrow" className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

          </div>

          <div className="text-center mt-6 pb-1">
            <p className="text-xs sm:text-sm text-gray-500">
              © 2026 Desiree Joice Boo. All rights reserved.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
export default App