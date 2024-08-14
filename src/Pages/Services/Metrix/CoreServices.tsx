import HeaderNav from "../../Reuseable/UI/HeaderNav";
import Img from "../../../assets/valueAdded.svg";

function CoreServices() {
  return (
    <div>
      <HeaderNav
        title={"Value added services"}
        headerText={"We are at the heart of technology penetration."}
        text={
          "In the competitive world of telecommunications, delivering superior value to customers goes beyond providing basic voice and data services. At Pan African Towers, we are committed to enriching our customers' experience through an array of innovative Value-Added Services (VAS). These services are designed to meet diverse needs, enhance convenience, and bring more value to our customers' lives."
        }
        Img={Img}
      />
    </div>
  );
}

export default CoreServices;
