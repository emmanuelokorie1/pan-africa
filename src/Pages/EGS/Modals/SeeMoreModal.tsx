import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

interface customProps {
  headerText?: String;
  setModal?: any;
  children?: any;
}

const SeeMoreModal: React.FC<customProps> = ({
  headerText,
  setModal,
  children,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <div className="font-semibold md:text-[1.7rem] sm:text-[1.5rem] text-[1.2rem]">
          {headerText}
        </div>
        <button
          onClick={() => setModal(false)}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          <LiaTimesSolid size={40} />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default SeeMoreModal;
