import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/career/careerr.svg";

function Career() {
  return (
    <div>
      <HeaderNav
        title={"Our career"}
        headerText={"Let’s rewrite the African connectivity story together."}
        text={
          "Join Nigeria’s leading telecom and digital infrastructure provider team and help connect Africa"
        }
        text2={
          "Pan African Towers connects people across the globe, fostering business growth and bridging digital divides. The work we do here has a meaningful impact on millions of lives."
        }
        Img={Img}
      />
    </div>
  );
}

export default Career;
