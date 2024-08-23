import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { RiMenu3Fill } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";

function NavBar() {
  const Links1 = [
    {
      name: "About Us",
      link: "about-us",
      dropdown: [
        { name: "Who are we", link: "who-are-we" },
        { name: "Our core values", link: "our-core-values" },
        { name: "Our focus", link: "our-focus" },
      ],
    },
    {
      name: "Services",
      link: "services",
      dropdown: [
        { name: "Core services", link: "core-services" },
        { name: "Value added services", link: "value-added-services" },
      ],
    },
  ];
  const Links2 = [
    { name: "ESG", link: "esg" },
    { name: "Career", link: "career" },
    { name: "News", link: "news" },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={`flex fixed top-0 z-50 w-full justify-between items-center bg-background2 text-textColor2 px-4 md:px-16 py-4`}
    >
      <NavLink to={"/"}>
        <div
          className="w-[100px] md:w-[120px]"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setActiveDropdown(null);
          }}
        >
          <img src={logo} alt="logo" className="w-full" />
        </div>
      </NavLink>

      <div className="hidden md:flex gap-8">
        <div className="flex gap-8">
          {Links1.map((e, i) => (
            <div
              key={i}
              className="relative flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div>{e?.name}</div>
              <IoIosArrowDown />

              {activeDropdown === i && e.dropdown && (
                <div
                  className="absolute top-full left-0 md:left-[-50%] py-2 bg-white text-gray-700 shadow-lg rounded-md w-[220px]"
                  data-aos="zoom-in"
                >
                  {e.dropdown.map((item, index) => (
                    <NavLink
                      key={index}
                      to={`${item.link}`}
                      onClick={() => setActiveDropdown(null)}
                      className="p-2 flex items-center gap-2 hover:bg-red-100"
                    >
                      <RxDotFilled size={20} className="text-textColor" />
                      <div className="text-sm">{item.name}</div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <section className="flex gap-8">
          {Links2.map((e, i) => (
            <div key={i}>
              <NavLink to={e?.link}>
                <div>{e?.name}</div>
              </NavLink>
            </div>
          ))}
        </section>
      </div>

      <div className="hidden md:block">
        <NavLink to={"contact"}>
          <div className="bg-textColor text-white px-6 py-2 rounded-md">Contact</div>
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div>
            {isMobileMenuOpen ? (
              <LiaTimesSolid size={30} />
            ) : (
              <RiMenu3Fill size={30} />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-background2 text-textColor2 flex flex-col gap-4 p-4 shadow-sm"
          data-aos="fade-down"
        >
          {Links1.map((e, i) => (
            <div key={i}>
              <div
                className="flex items-center justify-between"
                onClick={() =>
                  setActiveDropdown(activeDropdown === i ? null : i)
                }
              >
                <span>{e.name}</span>
                <IoIosArrowDown />
              </div>
              {activeDropdown === i && e.dropdown && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {e.dropdown.map((item, index) => (
                    <NavLink
                      key={index}
                      to={`${item.link}`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <RxDotFilled size={20} className="text-textColor" />
                        <div className="text-sm">{item.name}</div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          {Links2.map((e, i) => (
            <NavLink
              key={i}
              to={e?.link}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="mt-4">{e?.name}</div>
            </NavLink>
          ))}
          <NavLink to={"contact"} onClick={() => setIsMobileMenuOpen(false)}>
            <div className="bg-textColor text-white px-4 py-2 rounded-md mt-4 text-center">
              Contact
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default NavBar;
