import ContactTemp from "../Reuseable/UI/ContactTemp";
import HeaderNav from "../Reuseable/UI/HeaderNav";

function EGS() {
  return (
    <div>
      <div>
        <HeaderNav
          title={"ESG"}
          headerText={"Environmental, Social and Goverance"}
          text={
            "We are committed to the integration of environmental and social considerations into all aspects of our business activities for the promotion of a sustainable company."
          }
          noImage={true}
        />
      </div>

      <div className="py-[2rem]">
        <ContactTemp />
      </div>
    </div>
  );
}

export default EGS;
