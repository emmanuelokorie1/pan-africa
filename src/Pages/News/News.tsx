import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/news/newsHead.svg";

function News() {
  return (
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
  )
}

export default News
