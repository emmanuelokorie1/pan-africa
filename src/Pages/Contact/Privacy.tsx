import React, { useEffect } from "react";
import HeaderNav from "../Reuseable/UI/HeaderNav";
import { useLocation } from "react-router-dom";

function Privacy() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <div>
        <HeaderNav headerText={"SHARP policy"} noImage={true} />
      </div>

      <div className="containers pb-[3rem]">
        <div className="text-[1.8rem]" style={{fontFamily: 'semibold1'}}>Our Policy</div>
        <div className="text-gray-700 text-[1rem]">
          <div>
            Pan African Towers is committed to the highest standards of
            openness, probity, accountability and high ethical behaviour. The
            Company is committed to its core values through integrity and
            ethical behaviour by ensuring that it maintains an environment where
            employees and other stakeholders can act appropriately, without any
            fear of retaliation.
          </div>
          <div className="py-[1rem]">
            The policy is to help support and encourage employees and/or
            stakeholders to report and disclose improper and/or illegal
            activities. The Company is committed to investigate promptly any
            reported misconduct and protect those who come forward to report
            such activities. Pan African Towers further assures that all reports
            shall be treated in strict confidence. The Company’s operating
            procedures are intended to detect and prevent or deter improper
            activities taking cognizance that even the best systems of controls
            may not provide absolute safeguards against irregularities.
          </div>
          <div>
            This policy is intended to provide Pan African Towers with early and
            continuous insight on potential misconducts into which an
            investigation may be ordered, after which appropriate action will be
            administered against substantiated allegations.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
