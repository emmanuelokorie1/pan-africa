import value from "../../../assets/ourcore/vision/values.png";
import mission from "../../../assets/ourcore/vision/mission.png";
import vision from "../../../assets/ourcore/vision/vision.png";
import { useState } from "react";
import { useQuery } from "react-query";
import { getAllPages } from "../../../lib/apiServices";

function OurVision() {
  const [activeIndex, setActiveIndex] = useState(2); // State to track the active hovered card

  let tabs = [];

  const BASE_URL = "http://89.38.135.41:9920/";

const getFullImageUrl = (imagePath) => {
  return imagePath ? `${BASE_URL}${imagePath}` : null;
};
const [message , setMessage] = useState()
const { data: pageDetails, isLoading } = useQuery({
  queryKey: ["getAllPages"],
  queryFn: () => getAllPages(),
  onError: (err) => {
          // @ts-ignore
    setMessage(err?.response?.data?.detail || err.message);
  },
});



if (!isLoading && pageDetails) {
  const aboutusPage = pageDetails.find((page) => page.title === "Our core values");
  if (aboutusPage) {
    const subNavs = aboutusPage.sub_navs || [];
    tabs = subNavs.flatMap((subNav) => {
      return subNav.nav_sections.flatMap((navSection) => {
        return navSection.nav_items.map((navItem) => ({
          name: navSection.title,
          title: navItem.title,
          text: navItem.subtitle || "",
          img: getFullImageUrl(navItem.image || ""),
          desc: navItem.description || "",
          btn: "main_btn",
        }));
      });
    });


  }
}

  const values = [
    {
      img: value,
      name: "Our Values",
      text: [
        "Innovation",
        "Customer Focus",
        "Service Quality",
        "Cost Advantage",
        "Speed",
      ],
    },
    {
      img: mission,
      name: "Our Mission",
      text: [
        "To provide sustainable, dynamic and innovative infrastructure solutions and platforms to transform communities through technology in an efficient manner.",
      ],
    },
    {
      img: vision,
      name: "Our Vision",
      text: ["To become the best infrastructure solution provider in Africa."],
    },
  ];

  return (
    <div className="containers py-[4rem] mt-[2rem] bg-secback">
      <div className="flex flex-col lg:flex-row gap-4">
        {tabs?.map((e, i) => {
          return (
            <div
              key={i}
              className={`relative bg-cover bg-center flex text-white p-4 rounded-lg shadow-lg transition-all duration-700 ${
                activeIndex === i ? "lg:w-[50%]" : "lg:w-[25%] w-full"
              } h-[400px] lg:h-[500px]`}
              style={{ backgroundImage: `url(${e?.img})` }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(2)}
            >
              <div className="p-4 rounded-md top-[40%] absolute">
                <h2
                  className="text-xl mb-4 border-s-[4px] px-[.7rem]"
                  style={{ fontFamily: "semibold1" }}
                >
                  {e?.name}
                </h2>
                {activeIndex === i ? (
                  <ul>
                    {e?.text?.map((item, j) => (
                      <li key={j} className="text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurVision;
