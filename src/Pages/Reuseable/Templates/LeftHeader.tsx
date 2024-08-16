// function LeftHeader() {

interface customProps {
  title?: String;
  text?: String;
  text2?: String;
  mt?: String;
  py?: String;
}

const LeftHeader: React.FC<customProps> = ({ title, text, text2, mt, py }) => {
  return (
    <div>
      <div
        className={`text-textColor border-l-[2px] border-textColor text-[1.1rem] ps-2 mt-[${
          mt || "2rem"
        }]`}
        style={{ fontFamily: "MediumItalic" }}
        data-aos="fade-up"
      >
        {title}
      </div>
      <div
        data-aos="fade-right"
        className={`text-[1.6rem] py-[${py || "2rem"}]`}
        style={{ fontFamily: "semibold1" }}
      >
        {text}
      </div>
      <div className="">{text2}</div>
    </div>
  );
};

export default LeftHeader;
