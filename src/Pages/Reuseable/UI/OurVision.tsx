import value from "../../../assets/ourcore/vision/value.svg";
import mission from "../../../assets/ourcore/vision/mission.svg";
import vision from "../../../assets/ourcore/vision/vision.svg";
import { useState } from "react";

function OurVision() {
  const [activeIndex, setActiveIndex] = useState(2); // State to track the active hovered card

  const values = [
    {
      img: vision,
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
      img:  value,
      name: "Our Vision",
      text: ["To become the best infrastructure solution provider in Africa."],
    },
  ];

  return (
    <div className="containers py-[4rem] mt-[2rem] bg-secback">
      <div className="flex gap-4">
        {values?.map((e, i) => {
          return (
            <div
              key={i}
              className={`relative bg-cover bg-center h-[500px] flex  text-white p-4 rounded-lg shadow-lg transition-all duration-700 ${
                activeIndex === i ? "w-[50%]" : "w-[25%]"
              }`}
              style={{ backgroundImage: `url(${e?.img})` }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(2)}
            >
              <div className=" p-4 rounded-md top-[40%] absolute">
                <h2 className="text-xl mb-4 border-s-[4px] px-[.7rem]" style={{fontFamily: 'semibold1'}}>{e?.name}</h2>
                {activeIndex === i ? (
                  <ul>
                    {e?.text?.map((item, j) => (
                      <li key={j} className="text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : <div></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurVision;
