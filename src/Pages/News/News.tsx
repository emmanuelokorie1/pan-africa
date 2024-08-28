import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/news/newsHead.png";
import ImageCard from "../Reuseable/UI/ImageCard";
import ContactTemp from "../Reuseable/UI/ContactTemp";

import cardImg1 from "../../assets/home/cardImgs/cardImg1.png";
import cardImg2 from "../../assets/home/cardImgs/cardImg2.png";
import cardImg3 from "../../assets/home/cardImgs/cardImg3.png";
import cardImg5 from "../../assets/home/cardImgs/cardImg4.png";
import cardImg4 from "../../assets/news/pan.svg";

function News() {
  return (
    <div>
      <div>
        <HeaderNav
          title={"News"}
          headerText={
            "Our news section brings you up-to-date coverage on the most important events, announcements, and stories that matter to you."
          }
          text={
            "Discover the inspiring stories and remarkable achievements of Pan African Towers within our community. Our community spotlight section celebrates the talents, hard work, and dedication of people who make a difference. Whether it’s a local hero, a rising star, or an unsung champion, we shine a light on those who inspire us all."
          }
          Img={Img}
        />
      </div>

      <div className="containers flex justify-center md:mt-[5rem] mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1rem]">
          <ImageCard
            image={cardImg1}
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
          <ImageCard
            image={cardImg4}
            text="Pan African Towers becomes one of the leading telecommunication companies in Africa"
            link={'/see-news/4'}
          />
          <ImageCard
            image={cardImg5}
            text="Jyoti Desai and Vivek Gupta Join Pan African Towers Board of Management as Non-Executive Directors"
            link={'/see-news/5'}
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
