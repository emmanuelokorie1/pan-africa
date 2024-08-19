import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/coreValue.svg";

import customer1 from "../../../assets/ourcore/customer.svg";
import cosumer2 from "../../../assets/ourcore/cosumer2.svg";
import customer3 from "../../../assets/ourcore/customer3.svg";

import story from "../../../assets/ourcore/story.svg";
import { useEffect, useState } from "react";
import OurVision from "../../Reuseable/UI/OurVision";
import ImageAndGridTextRight from "../../Reuseable/Templates/ImageAndGridTextRight";

import { Image, Skeleton } from "@arco-design/web-react";

function OurCoreValue() {
  const [customerTab, setCustomerTab] = useState("Customer Focus");
  const customer = [
    {
      img: customer1,
      name: "Customer Focus",
      text: "We invest time and resources in getting to know our customers. By listening to their feedback, studying their behaviors, and anticipating their needs, we gain valuable insights that help us tailor our products and services to better serve them.",
    },
    {
      img: cosumer2,
      name: "Service Guaranty",
      text: "We stand behind the quality of our services. Our rigorous standards ensure that every interaction, product, and solution meets our customers' expectations. We continually monitor and improve our processes to maintain the highest level of service excellence.",
    },
    {
      img: customer3,
      name: "Technology Driven",
      text: "At Pan African Towers, we believe that technology is the key to innovation and success. Our Technology Driven core value emphasizes our commitment to leveraging cutting-edge technology to enhance our services and deliver exceptional value to our customers.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageSize = { width: '100%', height: '100%' };
  return (
    <section>
      <div>
        <HeaderNav
          title={"Our core values"}
          headerText={
            "At Pan African Towers Limited, our core values are the foundation of everything we do."
          }
          text={
            "We uphold the highest standards of integrity in all our actions. We are committed to doing what is right, even when it is difficult. Our honesty and transparency build trust with our stakeholders and ensure we maintain a strong ethical foundation."
          }
          Img={Img}
        />
      </div>

      <section className="containers md:mt-[6rem] mt-[1rem]">
        <div className="flex flex-col lg:flex-row xl:justify-evenly justify-between items-center">
          <div className="w-full lg:w-[50%] flex justify-center mb-[2rem] lg:mb-0">
            {customer?.map((e, i) => {
              return (
                <div key={i} className="w-full lg:w-auto">
                  <div className="transition-all flex justify-center items-center w-[100%]">
                    {customerTab === e?.name && (
                      <div className="w-[400px]">
                        <Image
                          {...imageSize}
                          src={e?.img}
                          alt=""
                          preview={false}
                          lazyload={{ threshold: 0.5 }}
                          loader={
                            <Skeleton
                              image={{ style: imageSize }}
                              text={false}
                              animation
                            />
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-[50%]">
            {customer?.map((e, i) => {
              return (
                <div
                  className="py-[1rem] my-1 px-[1rem] w-full lg:w-[85%] transition-all"
                  key={i}
                  style={{
                    background: customerTab === e?.name ? "white" : undefined,
                    cursor: customerTab === e?.name ? "text" : "pointer",
                    borderLeft:
                      customerTab === e?.name
                        ? "3px solid #E75425"
                        : "3px solid #fce5dd",
                  }}
                  onClick={() => setCustomerTab(e?.name)}
                >
                  <div>
                    <div
                      className="text-[1.4rem]"
                      style={{ fontFamily: "semibold1" }}
                    >
                      {e?.name}
                    </div>
                    <div className="text-gray-600 text-[.95rem] py-1">
                      {e?.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <OurVision />
      </section>

      <div className="bg-gray-50">
        <ImageAndGridTextRight
          title={"Our Proposition to our clients"}
          headerText={
            "Our business model is centred around creating unique services that meet the needs of our customers"
          }
          text={
            "We make use of cutting edge technology to provide premium service quality with superior cost advanatge. Our use of cutting-edge technology and renewable energy, will enable our clients across Africa lower costs and deliver high quality and reliable service levels across their operations."
          }
          text2={
            "Thanks to our staff, processes and technology, we guarantee uparalleled network uptime levels and service reliability"
          }
          link="/career"
          img={story}
        />
      </div>
    </section>
  );
}

export default OurCoreValue;
