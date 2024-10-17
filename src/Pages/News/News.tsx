import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/news/newsHead.png";
import ImageCard from "../Reuseable/UI/ImageCard";
import ContactTemp from "../Reuseable/UI/ContactTemp";

import cardImg1 from "../../assets/home/cardImgs/cardImg1.png";
import cardImg2 from "../../assets/home/cardImgs/cardImg2.png";
import cardImg3 from "../../assets/home/cardImgs/cardImg3.png";
import cardImg5 from "../../assets/home/cardImgs/cardImg4.png";
import cardImg4 from "../../assets/news/pan.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllPages } from "../../lib/apiServices";

function News() {
  const { pathname } = useLocation();
  const [message, setMessage] = useState();
  const { data: pageDetails, isLoading } = useQuery({
    queryKey: ["getAllPages"],
    queryFn: () => getAllPages(),
    onError: (err) => {
      // @ts-ignore
      setMessage(err?.response?.data?.detail || err.message);
    },
  });

  let heroData = null;
  const BASE_URL = "http://89.38.135.41:9920";

  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${BASE_URL}${imagePath}` : null;
  };

  let cardsData = [] ;
  if (!isLoading && pageDetails) {
    const newsPage = pageDetails.find(
      (page) => page.title === "News"
    );
    if (newsPage) {
      heroData = newsPage.heroes[0];
      const cardsSection = newsPage.sections.find(
        (section) => section.title === "Header" && section.id === 13
      );

      if (cardsSection) {
        cardsData = cardsSection.cards; // Extract cards data
  
      }
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div>
        <HeaderNav
          title={heroData?.title}
          headerText={
            heroData?.subtitle
          }
          text={
            heroData?.description
          }
          Img={
            heroData?.image instanceof File
            ? URL.createObjectURL(heroData?.image)
            : getFullImageUrl(heroData?.image)

          }
        />
      </div>

      <div className="containers flex justify-center md:mt-[5rem] mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1rem]">
          <ImageCard
            image={cardImg1}
            // text="Pan African Towers Appoints Azeez Amida as CEO"
            text="Pan African Towers Appoints Azeez Amida as CEO"

            link={'/see-news/1'}
          />
          <ImageCard
            image={cardImg2}
            text="DPI and Verod Capital partner to back management of Pan African Towers."
            link={'/see-news/2'}
          />
          <ImageCard
            image={cardImg3}
            text="Pan African announces the appointment of Oladipo Badru as Chief Financial Officer "
            link={'/see-news/3'}
          />
          {/* <ImageCard
            image={cardImg4}
            text="Pan African Towers becomes one of the leading telecommunication companies in Africa"
            link={'/see-news/5'}
          /> */}
          <ImageCard
            image={cardImg5}
            text="Jyoti Desai and Vivek Gupta Join Pan African Towers Board of Management as Non-Executive Directors"
            link={'/see-news/4'}
          />
        </div>
      </div>

      <div>
        <ContactTemp />
      </div>
    </div>
  );
}

export default News;
