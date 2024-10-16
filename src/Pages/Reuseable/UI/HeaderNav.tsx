import styled from "styled-components";
import { Image, Skeleton } from "@arco-design/web-react";

interface customProps {
  title?: String;
  headerText?: String;
  text?: String;
  text2?: String;
  size?: String;
  Img?: any;
  noImage?: boolean;
}

const imageSize = { width: "100%", height: "100%" };

const HeaderNav: React.FC<customProps> = ({
  title,
  headerText,
  text,
  text2,
  Img,
  noImage,
  size,
}) => {
  return (
    <div
      className={`${
        !noImage
          ? "lg:pb-[6rem] md:pb-[8rem] sm:pb-[5rem] pb-[3rem]"
          : "sm:pb-[2rem] pb-[1rem]"
      }`}
    >
      <BackgroundImg className="bg-background2 pt-[3rem]">
        {noImage ? (
          <div
            className="flex justify-center items-center text-center"
            data-aos="fade-up"
          >
            <div className="w-[80%] md:w-[60%] lg:w-[40%] pt-[3rem] pb-[2rem]">
              <div className="text-textColor text-[1.3rem] ps-2">{title}</div>
              <div
                className="text-[2rem] pt-2 text-textColor2"
                style={{ fontFamily: "semibold1" }}
              >
                {headerText}
              </div>
              <div className="text-[1rem] text-gray-700 pt-[1rem]">{text}</div>
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col lg:flex-row justify-between  px-[2rem] pb-[2rem] lg:px-0"
            data-aos="fade-left"
          >
            <div className="w-full lg:w-[58%] lg:ps-[8rem] text-center lg:text-left">
              <div className="text-textColor border-l-[2px] border-textColor ps-2">
                {title}
              </div>
              <div
                className={`text-[${
                  size || "1.6rem"
                }] pt-2 font-bold text-textColor2`}
              >
                {headerText}
              </div>
              <div className="text-[.9rem] text-gray-700 pt-[1rem]">{text}</div>
              <div className="text-[.9rem] text-gray-700 pt-[1rem]">
                {text2}
              </div>
            </div>
            <div className="w-full lg:w-[40%] mt-8 lg:mt-0">
              <div
                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[90%] lg:h-[400px] mx-auto lg:mx-0 "
                data-aos="fade-up"
              >
                {/* <Image
                  {...imageSize}
                  className="h-full w-[100%] object-cover" // Use object-cover to fill the container
                  // style={{height: '100%', width: "100%", objectFit: "cover"}}
                  src={Img}
                  alt=""
                  preview={false}
                  lazyload={{ threshold: 0.5 }}
                  loader={
                    <Skeleton
                      image={{ style: imageSize }}
                      text={true}
                      animation
                    />
                  }
                /> */}

                <img src={Img} alt="" className="h-full w-[100%] object-cover rounded-[.5rem]" />
                
              </div>
            </div>
          </div>
        )}
      </BackgroundImg>
    </div>
  );
};

export default HeaderNav;

const BackgroundImg = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 0 0 0 8rem;

  @media (max-width: 1024px) {
    height: 60vh;
    border-radius: 0;
    padding-top: 4rem;
  }
  @media (min-width: 1500px) {
    height: 100%;
    border-radius: 0;
    padding-top: 4rem;
    padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    height: 70vh;
    padding-top: 3rem;
  }

  @media (max-width: 480px) {
    height: auto;
    padding-top: 2rem;
  }
`;
