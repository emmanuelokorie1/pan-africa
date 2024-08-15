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

const imageSize = { width: 400, height: 350 };


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
    <div className=" pb-[6rem]">
      <BackgroundImg className="bg-background pt-[6rem]">
        {noImage ? (
          <div className="flex justify-center items-center text-center" data-aos="fade-up">
            <div className="w-[40%] pt-[3rem]">
              <div className="text-textColor text-[1.3rem] ps-2">{title}</div>
              <div className="text-[2rem] pt-2">{headerText}</div>
              <div className="text-[.9rem] text-[#FFFFFF] pt-[1rem]">
                {text}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between mt-[3rem]" data-aos="fade-left">
            <div className="w-[58%] ps-[8rem]">
              <div className="text-textColor border-l-[2px] border-textColor ps-2">
                {title}
              </div>
              <div className={`text-[${size || "1.6rem"}] pt-2 font-bold`}>
                {headerText}
              </div>
              <div className="text-[.9rem] text-[#FFFFFF] pt-[1rem]">
                {text}
              </div>
              <div className="text-[.9rem] text-[#FFFFFF] pt-[1rem]">
                {text2}
              </div>
            </div>
            <div className="w-[40%]">
              <div className="w-[400px]" data-aos="fade-up">
                {/* <img src={Img} alt="" className="w-[100%]" /> */}
                <Image
                  {...imageSize}
                  className="h-[100%]"
                  src={Img}
                  alt=""
                  preview={false}
                  lazyload={{ threshold: 0.5 }}
                  loader={
                    <Skeleton
                      image={{ style: imageSize }}
                      // className="h-[100%]"
                      text={true}
                      animation
                    />
                  }
                />
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
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  color: white;
  /* font-size: 2rem; */
  border-radius: 0 0 0 8rem;
`;
