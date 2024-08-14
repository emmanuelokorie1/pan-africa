import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

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
    { name: "EGS", link: "egs" },
    { name: "Career", link: "career" },
    { name: "News", link: "news" },
  ];

  // const location = window.location.pathname;

  // console.log(location);

  const [activeDropdown, setActiveDropdown] = useState(null);

  // ${
  //   location === "/" ? "bg-background" : ""
  // }
  return (
    <div
      className={`flex absolute top-0 z-50 w-[100%] justify-between items-center bg-background text-white px-[4rem] py-[1rem]`}
    >
      <NavLink to={"/"}>
        <div className="w-[120px]">
          {" "}
          <img src={logo} alt="logo" className="w-[100%]" />
        </div>
      </NavLink>

      <div className="flex gap-[3rem]">
        <div className="flex gap-[3rem]">
          {Links1.map((e, i) => (
            <div
              key={i}
              className="relative flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="">{e?.name}</div>
              <div>
                <IoIosArrowDown />
              </div>

              {activeDropdown === i && e.dropdown && (
                <div className="absolute top-full left-[-50%] py-1 bg-white text-gray-700 shadow-lg rounded-md w-[220px]">
                  {e.dropdown.map((item, index) => (
                    <NavLink
                      key={index}
                      to={`${item.link}`}
                      onClick={() => setActiveDropdown(null)}
                      className=" p-2 flex items-center gap-2 hover:bg-red-100"
                    >
                      <RxDotFilled size={20} className="text-textColor" />{" "}
                      <div className="text-[.9rem]">{item.name}</div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <section className="flex gap-[3rem]">
          {Links2?.map((e, i) => (
            <div key={i}>
              <NavLink to={e?.link}>
                <div>{e?.name}</div>
              </NavLink>
            </div>
          ))}
        </section>
      </div>

      <div>
        <NavLink to={"contact"}>
          <div className="bg-textColor px-[1.4rem] py-[.5rem] rounded-md">
            Contact
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
