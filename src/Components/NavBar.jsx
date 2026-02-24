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

  {/* Resume button */}
  return (
    <nav
      className={`
        fixed top-3 left-1/2 -translate-x-1/2
        z-50
        transition-all duration-300 ease-in-out
        ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}
      `}
    >

      <div className="bg-[#ececf4] backdrop-blur-md shadow-md rounded-full px-6 py-2">
        <ul className="flex justify-center gap-5 py-4 px-4 list-none">
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
                    className="
                      uppercase cursor-pointer
                      rounded-full
                      transition-all duration-300 ease-in-out
                      px-4 py-2.5
                      bg-[#447da6] text-white
                    "
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
                      px-3 py-1.5
                      text-[#1e2950]
                      ${
                        active === item
                          ? "border-3 border-[#447da6]"
                          : "border-3 border-transparent"
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
