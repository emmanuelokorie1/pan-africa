import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/focus.svg";

function OurFocus() {
  return (
    <div>
       <HeaderNav
        title={"Our focus"}
        headerText={
          "We are Passionate about Africa and we exist to rewrite thee African connectivity story."
        }
        text={
          "At Pan African Towers, our focus is to connect people, businesses, and communities through innovative and reliable telecommunications solutions. We believe in the power of communication to transform lives and drive progress. Our mission is to provide seamless connectivity and exceptional service, ensuring that our customers can stay connected anytime, anywhere."
        }
        Img={Img}
      />
    </div>
  )
}

export default OurFocus
