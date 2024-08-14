import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/conatct/contact.svg";

function Contact() {
  return (
    <div>
      <HeaderNav
        title={"Contact us"}
        headerText={"Need Help?"}
        size={'2rem'}
        text={
          "Get in touch with us"
        }
        Img={Img}
      />
    </div>
  )
}

export default Contact
