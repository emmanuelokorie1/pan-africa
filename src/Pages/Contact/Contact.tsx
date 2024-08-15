import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/conatct/contact.svg";
import { MdOutlineEmail } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import styled from "styled-components";

function Contact() {
  const data = [
    {
      icon: <MdOutlineEmail />,
      name: "Email",
      text: "Our friendly team is here to help",
      value: ["info@panafricantowers.com"],
    },
    {
      icon: <BsChat />,
      name: "Live chat",
      text: "Our friendly team is here to help.",
      value: ["Start new chat"],
    },
    {
      icon: <IoLocationOutline />,
      name: "Office",
      text: "Come say hello at our office HQ",
      value: ["23, Water corporation drive, Victoria Island, Lagos"],
    },
    {
      icon: <IoCallOutline />,
      name: "Phone",
      text: "Mon-Fri from 8am to 5pm.",
      value: ["+234 (01) 462 37827", "+234 (0) 803 528 3267"],
    },
  ];
  return (
    <div>
      <div>
        <HeaderNav
          title={"Contact us"}
          headerText={"Need Help?"}
          size={"2rem"}
          text={"Get in touch with us"}
          Img={Img}
        />
      </div>

      <section className="containers p-[2rem]">
        <div data-aos="fade-right">
          <div
            className="text-textColor  text-[1.1rem] mt-[2rem]"
            style={{ fontFamily: "MediumItalic" }}
          >
            Contact us
          </div>

          <div
            className="text-[1.6rem] py-[1.5rem]"
            style={{ fontFamily: "semibold1" }}
          >
            Chat to our friendly team
          </div>

          <div className="text-[#3F3F3F] pb-[2rem]">
            We’d love to hear from you. Please fill out this form or shoot us an
            email
          </div>
        </div>

        <div className="grid grid-cols-2" data-aos="fade-left">
          <aside className="grid grid-cols-2 h-[400px]">
            {data?.map((e, i) => {
              return (
                <div className="py-[1rem] pe-[2rem] " key={i}>
                  <div className="text-textColor text-[1.4rem] ">{e?.icon}</div>
                  <div
                    className="py-[.4rem]"
                    style={{ fontFamily: "semibold1" }}
                  >
                    {e?.name}
                  </div>
                  <div className="text-[.95rem] text-gray-600">{e?.text}</div>
                  <div>
                    {e?.value?.map((item, index) => (
                      <div
                        className="py-[.4rem] text-textColor text-[.8rem]"
                        key={index}
                      >
                        {item.includes("@") ? (
                          <a href={`mailto:${item}`}>{item}</a>
                        ) : (
                          <span>{item}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </aside>
          <FormContainer data-aos="fade-up">
            <div className="bg-[white] w-[100%] p-[2rem] shadow-lg rounded-xl">
              <div className="grid grid-cols-2 gap-[2rem]">
                <div>
                  <label>First name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="First name"
                    className="w-[100%]"
                  />
                </div>
                <div>
                  <label>Last name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Last name"
                    className="w-[100%]"
                  />
                </div>
              </div>

              <div className="pt-[1rem]">
                <label>Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="youremail@gmail.com"
                  className="w-[100%]"
                />
              </div>
              <div className="pt-[1rem]">
                <label>Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="w-[100%]"
                ></textarea>
              </div>

              <div className="flex gap-[.8rem] items-center">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  name=""
                  id=""
                />
                <div className="text-[.9rem]">
                  You agree to our friendly <span className="underline cursor-pointer">privacy policy</span>
                </div>
              </div>

              <div className="w-[100%] bg-textColor text-white text-center py-[.6rem] mt-[1.5rem] cursor-pointer rounded-lg">Send message</div>
            </div>
          </FormContainer>
        </div>
      </section>
    </div>
  );
}

export default Contact;

const FormContainer = styled.div`
  label {
    font-family: semibold1;
    color: #555555;
    font-size: 0.95rem;
  }

  input,
  textarea {
    border: 1px solid #bdbdbd;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    outline: none;
    color: #575757;
    margin: 0.4rem 0;

    &::placeholder {
      font-size: 0.9rem;
    }
  }
`;
