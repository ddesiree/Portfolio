import { useState, useEffect } from "react";

const NavBar = () => {
  const navItems = ["Home", "About Me", "Skills", "Projects", "Resume"];
  const [active, setActive] = useState("Home");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActive("Home");
      }

      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const sections = [
      { id: "home", name: "Home" },
      { id: "about", name: "About Me" },
      { id: "skills", name: "Skills" },
      { id: "projects", name: "Projects" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (sec) => sec.id === entry.target.id
            );
            if (section) setActive(section.name);
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  const handleNavClick = (item) => {
    setActive(item);

    if (item === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (item === "About Me") {
      const aboutSection = document.getElementById("about");
      aboutSection?.scrollIntoView({ behavior: "smooth" });
    }

    if (item === "Skills") {
      const skillsSection = document.getElementById("skills");
      skillsSection?.scrollIntoView({ behavior: "smooth" });
    }

    if (item === "Projects") {
      const projectsSection = document.getElementById("projects");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        absolute top-0 left-0 w-full flex justify-center
        z-50
        transition-all duration-300 ease-in-out
        ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}
      `}
    >

      <div className="mt-4 bg-[#ececf4]/80 backdrop-blur-md shadow-md rounded-full px-4 md:px-6 py-1.5 md:py-2">
        <ul className="flex flex-nowrap justify-center gap-2 md:gap-5 py-2 md:py-3 px-2 md:px-4 list-none text-[10px] md:text-sm">
          {navItems.map((item) => {
            const isResume = item === "Resume";
            const isActive = active === item;

            return (
              <li key={item}>
                {isResume ? (
                  <a
                    href="https://drive.google.com/file/d/1NDf0k9mig2D8vbrb3Qaw1uTZxBnfMlI1/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase cursor-pointer rounded-full transition-all duration-300 ease-in-out px-3 md:px-4 py-1.5 md:py-2 bg-[#447da6] text-white text-[10px] md:text-sm whitespace-nowrap"
                  >
                    {item}
                  </a>
                ) : (
                  <span
                    onClick={() => handleNavClick(item)}
                    className={`
                      uppercase cursor-pointer
                      rounded-full
                      transition-all duration-300 ease-in-out
                      px-2 md:px-3
                      py-1 md:py-1.5
                      text-[#1e2950]
                      whitespace-nowrap
                      ${
                        active === item
                          ? "border-2 md:border-3 border-[#447da6]"
                          : "border-2 md:border-3 border-transparent"
                      }
                    `}
                  >
                    {item}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
