import HeaderNav from "../Reuseable/UI/HeaderNav";
import Img from "../../assets/conatct/contact.svg";
import { MdOutlineEmail } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Tooltip } from "@arco-design/web-react";
import Text from "@arco-design/web-react/es/Typography/text";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreement) {
      alert("You must agree to the privacy policy");
      return;
    }

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    const subject = `Message from ${templateParams.firstName} ${templateParams.lastName}`;
    const body = `
      First Name: ${templateParams.firstName}%0D%0A
      Last Name: ${templateParams.lastName}%0D%0A
      Email: ${templateParams.email}%0D%0A
      Message: ${encodeURIComponent(templateParams.message)}
    `;

    // Constructing the mailto URL
    const mailtoLink = `mailto:info@panafricantowers.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    // Open the user's email client with the pre-filled details
    window.location.href = mailtoLink;
  };

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
                        ) : item.includes("+") ? (
                          <a href={`tel:${item}`}>
                            <Tooltip content={<div>click to call {item}</div>}>
                              <Text
                                className="text-textColor"
                                style={{ marginRight: 20, color: "#e75425" }}
                              >
                                {item}
                              </Text>
                            </Tooltip>
                          </a>
                        ) : e.name === "Office" ? (
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=23,+Water+Corporation+Drive,+Victoria+Island,+Lagos"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Tooltip
                              content={<div>Click to open location on map</div>}
                            >
                              <Text
                                className="text-textColor"
                                style={{ marginRight: 20, color: "#e75425" }}
                              >
                                {item}
                              </Text>
                            </Tooltip>
                          </a>
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
          <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
            <div className="bg-[white] w-[100%] p-[2rem] shadow-lg rounded-xl">
              <div className="grid grid-cols-2 gap-[2rem]">
                <div>
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    className="w-[100%]"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last name"
                    className="w-[100%]"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="pt-[1rem]">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="youremail@gmail.com"
                  className="w-[100%]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pt-[1rem]">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="w-[100%]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="flex gap-[.8rem] items-center">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  name="agreement"
                  id="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  required
                />
                <div className="text-[.9rem]">
                  You agree to our friendly{" "}
                  <Link to={"/privacy"} className="underline cursor-pointer">
                    privacy policy
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="w-[100%] bg-textColor text-white text-center py-[.6rem] mt-[1.5rem] cursor-pointer rounded-lg"
              >
                Send message
              </button>
            </div>
          </FormContainer>
        </div>
      </section>
    </div>
  );
}

export default Contact;

const FormContainer = styled.form`
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
