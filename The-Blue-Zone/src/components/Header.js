"use client";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      label: "Information & Support",
      submenu: [
        "Prostate Cancer Information",
        "Risks & Symptoms",
        "Prostate Tests",
        "Prevention",
        "Just Diagnosed",
        "Get Support",
      ],
    },
    {
      label: "Learner Zone",
      submenu: ["Beginner's Guide", "Interactive Zone"],
    },
    { label: "News & Stories",
      submenu: ["Latest News", "Events", "Real Stories"],
     },
    {
      label: "Research",
      submenu: ["Clinical Trials", "Latest Findings"],
    },
    {
      label: "About us",
      submenu: ["Who we are", "Contact us"],
    },
  ];

  return (
    <header className="relative z-50">
      <div className="bg-[#0070C0] p-4 flex flex-col shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="/">
              <img src="/images/TBZLogo.png" alt="TBZ Logo" className="h-24 w-24 object-contain" />
            </a>
            <h1
              className="text-white text-4xl md:text-7xl font-bold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              The Blue Zone
            </h1>
          </div>

          <div className="relative w-full max-w-xs md:mr-10 mt-4 md:mt-0">
            <img
              src="/images/searchicon.png"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search The Blue Zone"
              className="border border-black rounded-full pl-10 pr-4 py-2 w-full bg-white"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            />
          </div>
        </div>

        <div className="mt-4 self-start">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-white bg-white px-4 py-2 rounded cursor-pointer"
          >
            <span className="text-[#00B0F0]">☰</span>{" "}
            <span
              style={{ fontFamily: "Open Sans, sans-serif" }}
              className="text-black font-bold"
            >
              MENU
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="absolute left-0 w-90 bg-white shadow-lg">
          <nav
            className="p-4 space-y-2 text-black font-bold"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={
                    item.label === "Information & Support"
                      ? "/information-support"
                      : item.label === "Learner Zone"
                      ? "/learner-zone"
                      : item.label === "News & Stories"
                      ? "/news-stories"
                      : item.label === "Research"
                      ? "/research"
                      : item.label === "About us"
                      ? "/about-us"
                      : "#"
                  }
                  className="flex items-center justify-between px-5 py-3 hover:bg-[#00B0F0] hover:text-white cursor-pointer w-full"
                >
                  <span className="truncate">{item.label}</span>
                  {item.submenu && <span className="pl-4">&gt;</span>}
                </a>

                {item.submenu && activeSubmenu === item.label && (
                  <div className="absolute left-full top-0 w-90 bg-white text-black p-3 space-y-1 z-40 shadow-lg">
                    {item.submenu.map((subItem, subIdx) => (
                      <a
                        href={
                          item.label === "Information & Support"
                            ? subItem === "Prostate Cancer Information"
                              ? "/information-support/prostate-cancer-info"
                              : subItem === "Risks & Symptoms"
                              ? "/information-support/risks-symptoms"
                              : subItem === "Prostate Tests"
                              ? "/information-support/prostate-tests"
                              : subItem === "Prevention"
                              ? "/information-support/prevention"
                              : subItem === "Just Diagnosed"
                              ? "/information-support/just-diagnosed"
                              : subItem === "Get Support"
                              ? "/information-support/get-support"
                              : "#"
                              : item.label === "Learner Zone"
                              ? subItem === "Beginner's Guide"
                              ? "/learner-zone/beginners-guide"
                              : subItem === "Interactive Zone"
                              ? "/learner-zone/interactive-zone"
                              : "#"
                              : item.label === "News & Stories"
                              ? subItem === "Latest News"
                              ? "/news-stories?category=Latest%20News"
                              : subItem === "Events"
                              ? "/news-stories?category=Events"
                              : subItem === "Real Stories"
                              ? "/news-stories?category=Real%20Stories"
                              : "#"
                              : item.label === "Research"
                              ? subItem === "Clinical Trials"
                              ? "/research?category=Clinical%20Trials"
                              : subItem === "Latest Findings"
                              ? "/research?category=Latest%20Findings"
                              : "#"
                              : item.label === "About us"
                              ? subItem === "Who we are"
                              ? "/about-us/who-we-are"
                              : subItem === "Contact us"
                              ? "/about-us/contact-us"
                              : "#"
                            : "#"
                        }
                        key={subIdx}
                        className="block px-3 py-1 hover:bg-[#00B0F0] hover:text-white cursor-pointer"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
