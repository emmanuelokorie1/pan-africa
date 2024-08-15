import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/news/newsHead.svg";
import ImageCard from "../Reuseable/UI/ImageCard";
import ContactTemp from "../Reuseable/UI/ContactTemp";

import cardImg1 from "../../assets/home/cardImgs/cardImg1.svg";
import cardImg2 from "../../assets/home/cardImgs/cardImg2.svg";
import cardImg3 from "../../assets/home/cardImgs/cardImg3.svg";
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

      <div className="containers flex justify-center my-[5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1rem]">
          <ImageCard
            image={cardImg1}
            text="Pan African Towers Appoints Azeez Amida as CEO"
            link={<div>Learn more</div>}
          />
          <ImageCard
            image={cardImg2}
            text="DPI and Verod Capital partner to back management of Pan African Towers."
            link={<div>Learn more</div>}
          />
          <ImageCard
            image={cardImg3}
            text="Pan African announces the appointment of Oladipo Badru as Chief Financial Officer "
            link={<div>Learn more</div>}
          />
          <ImageCard
            image={cardImg4}
            text="Pan African Towers becomes one of the leading telecommunication companies in Africa"
            link={<div>Learn more</div>}
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
