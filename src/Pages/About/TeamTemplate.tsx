import React, { useEffect } from "react";
import ContactTemp from "../Reuseable/UI/ContactTemp";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LeftHeader from "../Reuseable/Templates/LeftHeader";
import { Image, Skeleton } from "@arco-design/web-react";

const imageSize = { width: 230, height: 320 };

import cardImg1 from "../../assets/WhoAreWe/teams/team1.png";
import oladipo from "../../assets/WhoAreWe/teams/oladipo.png";
import panda from "../../assets/WhoAreWe/teams/panda.png";
import babatunde from "../../assets/WhoAreWe/teams/babatunde.png";
import chisom from "../../assets/WhoAreWe/teams/chisom.png";
import abimbola from "../../assets/WhoAreWe/teams/abimbola.png";
import ife from "../../assets/WhoAreWe/teams/ife.png";

import saya from "../../assets/WhoAreWe/teams/saya.png";
import daniel from "../../assets/WhoAreWe/teams/daniel.png";
import marc from "../../assets/WhoAreWe/teams/marc.png";
import deisel from "../../assets/WhoAreWe/teams/deisel.png";
import gupta from "../../assets/WhoAreWe/teams/gupta.png";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TeamTemplate() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const data = [
    {
      img: cardImg1,
      name: "Azeez Amida",
      role: "Managing Director & Chief Executive Officer",
      fb: "",
      x: "",
      id: 1,
      linkedin: "",
      content: (
        <div>
          <div>
            Azeez Amida is the Chief Executive Officer of Pan African Towers. He
            has the passion and drive to strengthen Pan African Towers as
            Nigeria’s largest indigenous telecom and digital infrastructure
            provider. He has a firm understanding of emerging markets and brings
            over 18 years of professional experience, cutting across six
            countries and twelve industries including Telecommunications, FMCG,
            Healthcare, Agri-business, Investment Banking, Private equity, and
            financial advisory among others.
          </div>
          <div className="py-[2rem]">
            Prior to his appointment as CEO, Amida was the CEO of IHS Rwanda,
            where he led the company to become the fastest-growing operations in
            13 markets. He was also the consulting Chief Operating and Growth
            Officer for Merit Telecoms where he supported the company to align
            its operations with global best practices and positioned it to
            attract institutional investors.
          </div>
          <div>
            Amida is a graduate of Economics and an alumnus of the IE Business
            School, Spain. He is a member of the Chartered Institute of
            Management Accountants (CIMA) and the author of the
            soon-to-be-released book, EPE Principle: Understanding the
            Opportunity Cycle.
          </div>
        </div>
      ),
    },
    {
      img: oladipo,
      name: "Oladipo Badru",
      role: "Chief Financial Officer",
      fb: "",
      x: "",
      id: 2,
      linkedin: "",
      content: (
        <div>
          <div>
            Oladipo, an accomplished Finance Executive has over 21-years
            impressive experience, cutting across diverse industries. He has a
            background in Corporate Finance, Financial Planning and Budgeting,
            Financial Reporting, M&A, Funding & Capital Structure, Finance
            Transformation and Strategic Planning. He has held various
            leadership roles with top multi-national companies. He most recently
            served as the Group Director of Finance, Etisalat Dubai, Prior to
            that, he served as the general manager, Financial Reporting and
            Planning at Helios Towers, and Pfizer Global Pharmaceuticals.
          </div>
          <div className="pt-[2rem]">
            Oladipo holds an MSc from the University of Cumbria, UK. He is a
            Fellow member of the Institute of Chartered Accountant of Nigeria
            (FCA), an Associate member of the Institute of Chartered Accountant
            England and Wales, and a Business and Finance Professional (BFB). He
            is also an Associate member of both Nigeria Institute of Management
            and National Institute of Marketing of Nigeria.
          </div>
        </div>
      ),
    },
    {
      img: panda,
      name: "Arun Panda",
      role: "Chief Technology Officer",
      fb: "",
      x: "",
      id: 3,
      linkedin: "",
      content: (
        <div>
          <div>
            Arun Panda is the Chief Technical Officer (CTO) of Pan African
            Towers (PAT). He has over 27 years of experience in telecoms;
            network operations, maintenance, and project management for reputed
            telecom operators in India such as BSNL, MTNL, and Reliance, and
            recently he was responsible for 4G LTE Broadband Business in
            Nigeria.
          </div>
          <div className="py-[2rem]">
            Prior to joining Pan African Towers Limited, he worked as Chief
            Technical Officer – Spectranet Ltd, Nigeria. Besides working In
            Nigeria, he has also worked in Tanzania and Liberia. Mr. Arun’s
            competency includes the ability to develop and execute strategic
            plans with a focus on efficiency and growth through an empowered
            team.
          </div>
          <div>
            He holds a Bachelor’s degree in Electronics and Telecommunications
            and a Master’s degree in Communication Systems.
          </div>
        </div>
      ),
    },
    {
      img: babatunde,
      name: "Babatunde Omoyemi Olaniyan",
      role: "General Council",
      fb: "",
      x: "",
      id: 4,
      linkedin: "",
      content: (
        <div>
          <div>
            Experienced legal practitioner with a proficiency for providing
            ethical legal solutions to meet business exigencies. I have notable
            skills in structuring transactions for tax efficiency; and for
            driving efficient and productive Legal departments on very lean
            budgets.
          </div>
          <div className="pt-[2rem]">
            I have been described variously- by colleagues and reviewers as ‘a
            solution provider with incredible analytic abilities’ and ‘a
            tenacious worker and organiser’
          </div>
        </div>
      ),
    },
    {
      img: chisom,
      name: "Chisom Ndukwe",
      role: "Senior Vice President Human Resources",
      fb: "",
      x: "",
      id: 5,
      linkedin: "",
      content: (
        <div>
          <div>
            Chisom Ndukwe is the Senior Vice President Human Resources at Pan
            African Towers. She is a seasoned HR professional with over a decade
            of experience in the telecoms regulatory sector. She is passionate
            about the HR profession, its dynamism, and how it constantly impacts
            an employee’s knowledge and progress and the company’s overall
            success.
          </div>
          <div className="py-[2rem]">
            Before joining Pan African Towers, she worked with the Nigerian
            Communications Commission, where her responsibilities encompassed
            consumer affairs, regulatory services and human resources. She was
            also passionate about the improvement systems and policies,
            including onboarding processes for new takes in the Commission.
          </div>
          <div>
            She holds a bachelor’s degree in Industrial Relations and Human
            Resources Management from the University of Kent, Canterbury, and an
            MSc in Human Resources Management and Business from Aston
            University, Birmingham, amongst other HR certifications (CIPD, CIPM,
            SPHRi). She is also a member of the Nigerian Institute of Management
            (NIM).
          </div>
        </div>
      ),
    },
    {
      img: abimbola,
      name: "Abimbola Folape",
      role: "Senior Vice President Commercial",
      fb: "",
      x: "",
      id: 6,
      linkedin: "",
      content: (
        <div>
          <div>
            Abimbola Falope is a Senior Vice President, and currently the Acting
            Head of Commercial at Pan African Towers. She holds a BSc. degree in
            Mass Communications, with majors in Public Relations and Advertising
            from the University of Lagos, Nigeria; and an MSc. Degree in
            Psychology with a focus on Organisational Psychology from the
            University of South Wales, UK.
          </div>
          <div className="py-[2rem]">
            She is an alumnus of the Lagos Business School having attended two
            Executive Programmes – Key Account Management and Mastering
            Competitive Strategy & Blue Ocean Strategy. She also attended the
            University of Central Missouri for the Dale Carnegie Organisational
            Leadership Certificate Program. Abimbola is a Member of EAPA
            (Employee Assistance Programme Association Nigeria/Worldwide) and an
            Associate member of NITAD (Nigerian Institute of Training and
            Development).
          </div>
          <div>
            She has over 20 years of accumulated experience in Business
            Development, Partner Management, CRM, Key Account Management and
            Project Management in the telecommunications industry having worked
            with Globacom Limited/CIL Limited; Helios Towers Nigeria Limited,
            and IHS Towers where she directly managed the relationships of
            telecom companies and service providers such as MTN, Airtel, Glo,
            Etisalat, INQ, SWIFT, Cyberspace Networks, Spectranet etc.
          </div>
          <div className="pt-[2rem]">
            Abimbola has been an integral part of the Commercial team for almost
            two years, demonstrating exceptional leadership as the GM
            Commercial. Her deep understanding of our commercial strategy,
            industry dynamics, and key client relationships makes her the ideal
            candidate to lead the department. Under Abimbola’s guidance, the
            Commercial Department has achieved remarkable milestones and forged
            impactful partnerships crucial to PAT’s success.
          </div>
        </div>
      ),
    },
    {
      img: saya,
      name: "Adefolarin Ogunsaya",
      role: "Non Executive Director",
      fb: "",
      x: "",
      id: 8,
      linkedin: "",
      content: (
        <div>
          <div>
            Adefolarin joined DPI in July 2014. Prior to DPI, he was an
            investment professional at Helios Investment Partners where he
            evaluated new and follow on investment opportunities across multiple
            industries including technology, telecommunications, financial
            services, retail and consumer in sub-Saharan Africa. Prior to
            Helios, Folarin was an investment banker at Credit Suisse working
            within the Leveraged Finance and Restructuring group in New York
            where he evaluated financing and strategic alternatives for numerous
            corporations, including high yield bond and leveraged loan
            issuances, recapitalizations, loan amendments, distressed M&A   and
            restructurings across multiple industries. Folarin has a BSc. (Hons)
            in Computer Engineering (summa cum  laude) from NJIT and an MBA in
            Finance and Entrepreneurial Management from The Wharton School,
            University of  Pennsylvania.
          </div>
        </div>
      ),
    },
    {
      img: daniel,
      name: "Daniel Adeoye",
      role: "Non Executive Director",
      fb: "",
      x: "",
      id: 9,
      linkedin: "",
      content: (
        <div>
          <div>
            Within Verod, Daniel Adeoye serves as a Partner, specializing in
            Private Equity. He spearheads origination efforts; and,
            collaborating closely with founders, CEOs, and senior management
            teams, supporting partner companies to accelerate growth and execute
            value-creation plans. Daniel moved to Verod in 2009 from Zenith
            Capital Management, where he focused on equity and debt offerings,
            strategic advisory initiatives, and M&A. He is involved in managing
            the firm’s investments in Greensprings School, Rainbow Educational
            Services, ISON Experiences, Pan African Towers, iFitness, and
            Rotoprint. He serves on the boards of these companies. He played a
            significant role in Verod’s investments in various companies,
            including GZI, Rotoprint, Sac Oil (JSE: SCL), HFP Industries,
            African Lifestyle, Transnationals Academic group, Daystar Power
            group, and Central Securities Clearing Systems Plc (NASD:
            SDCSCSPLC). Daniel holds a BA (Hons) in Economics from Ahmadu Bello
            University and an MBA from Kellogg School of Management,
            Northwestern University. Daniel is a member of the Institute of
            Directors.
          </div>
        </div>
      ),
    },
    {
      img: ife,
      name: "Ife-Olorun Ajayi",
      role: "Head Shared Services",
      fb: "",
      x: "",
      id: 7,
      linkedin: "",
      content: (
        <div>
          <div>
            Ife-Olorun Ajayi is the Head, Shared Services of Pan African Towers
            with over 30 years working experience. Ife brings a lot of
            experience in finance, audit, accounting, management and leadership
            to the Pan African Towers family and will significantly be
            instrumental in helping the company in growing revenue, saving cost
            and adequately engaging with stakeholders on key policies and
            regulations that will significantly improve the financial strength
            of the company.
          </div>
          <div className="py-[2rem]">
            Ife has held several leadership/management positions in highly
            reputable institutions with his most recent as the Senior Vice
            President, Finance and Performance in Chapel Hill Advisory Partners
            for over three years, and a short spell as the Chief Finance Officer
            of Standard Alliance Insurance Plc. from April 2016 to September
            2017. He was also the Group Chief Finance Officer in Greenwich Trust
            Ltd., a position he held for two and a half years.
          </div>
          <div>
            Mr. Ajayi has a rich background in internal and external audit,
            capital market operations and financial control. He started his
            working career at Ernst and Young, Osindero Oni and Lasebikan
            (Chartered Accountants) in 1993 as an audit staff. In 1997, he moved
            on to WAPCO Plc(Now Lafarge) as an Internal Audit Supervisor and by
            January 2000, he was already the pioneer accountant of Securities
            Solutions Ltd (Stockbroking Firm and Subsidiary of FSB International
            Bank), a position he held till February 2004 when he moved on to the
            Investment Banking Group of FCMB Plc as the Deputy Head Of
            Operations and within the space of nine and a half years rose to
            become the Financial Controller after heading the Operations unit,
            before joining Greenwich Trust Ltd in September 2013 as the Group
            Chief Finance Officer. Ife-Olorun has demonstrated exceptional
            leadership and a deep commitment to enhancing organisational
            performance during his tenure as acting CFO.
          </div>
          <div className="pt-[2rem]">
            Ife holds a Bachelors’ Degree in Accounting from Ogun State
            University (1992) and in 1997 qualified as an Associate of the
            Institute of Chartered Accountants of Nigeria. He is now a Fellow of
            both Institute of Chartered Accountants of Nigeria and The Certified
            Pension Institute of Nigeria, attending various professional,
            leadership and senior management courses.
          </div>
        </div>
      ),
    },
    {
      img: marc,
      name: "Marc Stoneham",
      role: "Non Executive Director",
      fb: "",
      x: "",
      id: 10,
      linkedin: "",
      content: (
        <div>
          <div>
            Marc is a partner and senior lead of the portfolio management team
            at DPI.  He is a member and observer of multiple portfolio company
            boards and committees across the portfolio, including Food Concepts
            where he chairs the Remuneration Committee, CMGP, EGIC, Touax, MNT
            and B.TECH. of the company.
          </div>
          <div className="py-[2rem]">
            Prior to DPI, Marc worked at McKinsey & Company serving African and
            other emerging market clients across multiple industries and
            functions mainly from Lagos, Nigeria. Prior to McKinsey, Marc worked
            in private equity at Actis and Kingdom Zephyr, and for Accenture
            strategy consulting. He has lived and worked across Africa for over
            15 years including many years in Nigeria and Egypt. In 2020, he was
            named by Private Equity International as one of the Future 40
            Leaders of Private Equity.
          </div>
          <div>
            Marc holds a BA(Hons) in Modern History from the University of
            Oxford (1st class) and an MBA from INSEAD.
          </div>
        </div>
      ),
    },
    {
      img: deisel,
      name: "Jyoti Desai",
      role: "Non Executive Director",
      fb: "",
      x: "",
      id: 11,
      linkedin: "",
      content: (
        <div>
          <div>
            A former Group Chief Operating Officer of MTN, Jyoti Desai is a
            banking and telecoms professional with more than 35 years in the
            industry. Her achievements in banking (Standard Bank) include
            driving large scale transformation in the banking industry to
            streamline operational cost and shifting focus to customer centric,
            segment-based value propositions. An experienced Professional with a
            demonstrated history of working in the financial services industry
            as well as fixed and mobile telecoms, she has more than 15 years’
            experience in Africa and the Middle East. Jyoti is skilled in
            startups in emerging markets in the technical, commercial and
            operational aspects of the telecom business with more than 25 years’
            experience in cost and operational transformation which includes
            digital transformation, large scale project execution, Service
            Delivery, 3G, LTE, Mobile Communications, and Universal Mobile
            Telecommunications System (UMTS) and more recently 5G.
          </div>
        </div>
      ),
    },
    {
      img: gupta,
      name: "Vivek Gupta",
      role: "Non Executive Director",
      fb: "",
      x: "",
      id: 12,
      linkedin: "",
      content: (
        <div>
          <div>
            Vivek Gupta, is a first-generation entrepreneur, investor and
            telecoms veteran. As Founder and Director of iSON Group, Vivek has
            built a dynamic ecosystem of businesses in IT & ITeS, BPO and
            Telecom Infrastructure and Services, employing 20,000+ resources,
            spanning 40 countries across Africa, Asia and Middle East. Vivek
            became an entrepreneur in 2008 as CEO of Zamil Infra, iSON’s first
            joint venture with the $8B Saudi conglomerate-Zamil, that
            specializes in build and managed services for telecom passive
            infrastructure. Under his leadership, iSON Group diversified in
            Renewable energy, Digital infrastructure, Digital Healthcare &
            Health insurance sector. iSON Group has grown both organically &
            inorganically in last few years. Vivek spent two decades creating an
            illustrious career within telecom working for multinationals such as
            Ericsson and IBM. In 2008, he was recognized by Fortune as “IBM’s
            All-Star Salesman” for contracting over $5 Billion worth of business
            and executing high value transformational and ‘out of box’ deals,
            particularly path-breaking strategic outsourcing deals with Bharti
            Airtel, Idea & Vodafone that have gone on to become one of the most
            successful business models for the company.
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-[5rem]">
      <div className="containers py-[4rem]">
        {Number(id) > data.length ? (
          <div className="flex ">
            <div onClick={() => navigate(-1)} className="cursor-pointer pe-2">
              <MdOutlineKeyboardBackspace size={30} />
            </div>
            <LeftHeader
              mt="0"
              py="1rem"
              title={"Our Team"}
              text={"Team ID not found"}
            />
          </div>
        ) : (
          <div>
            <div className="flex ">
              <div onClick={() => navigate(-1)} className="cursor-pointer pe-2">
                <MdOutlineKeyboardBackspace size={30} />
              </div>
              <LeftHeader
                mt="0"
                py="1rem"
                title={"Our Team"}
                text={
                  Number(id) > 10 && Number(id) < data.length
                    ? "Meet the board members" 
                    : "Meet the management team"
                }
                text2={
                  "Our industry experience and specialist insight allow us to maintain market leadership"
                }
              />
            </div>

            <div className="pt-[5rem]">
              {data
                ?.filter((e) => Number(e.id) === Number(id))
                .map((e, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col lg:flex-row justify-between gap-[2rem] lg:gap-0"
                    >
                      <div className="w-full lg:w-[25%]">
                        <div className="flex flex-col items-center lg:items-start">
                          <div className="w-full lg:w-[400px] flex justify-center items-center">
                            <Image
                              {...imageSize}
                              src={e?.img}
                              alt=""
                              preview={false}
                              lazyload={{ threshold: 0.5 }}
                              loader={
                                <Skeleton
                                  image={{ style: imageSize }}
                                  text={true}
                                  animation
                                />
                              }
                            />
                          </div>
                          <div className="flex justify-around items-center text-textColor gap-[.4rem] mt-[1rem]">
                            <div className="w-[30px] border-t-[2px] border-textColor"></div>
                            <div className="bg-[#FAEBE7] p-[.6rem] rounded-[50%] cursor-pointer">
                              <FaFacebookF size={10} />
                            </div>
                            <div className="bg-[#FAEBE7] p-[.6rem] rounded-[50%] cursor-pointer">
                              <FaXTwitter size={10} />
                            </div>
                            <div className="bg-[#FAEBE7] p-[.6rem] rounded-[50%] cursor-pointer">
                              <FaLinkedinIn size={10} />
                            </div>
                            <div className="w-[30px] border-t-[2px] border-textColor"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-[70%]">
                        <div className="border-l-[.8rem] border-textColor px-[.6rem]">
                          <div
                            className="text-textColor text-[1.5rem]"
                            style={{ fontFamily: "semibold1" }}
                          >
                            {e?.name}
                          </div>
                          <div className="font-bold text-[1.1rem]">
                            {e?.role}
                          </div>
                        </div>

                        <div className="text-gray-600 text-[1rem] py-[2rem] lg:py-[3rem]">
                          {e?.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
      <div>
        <ContactTemp />
      </div>
    </div>
  );
}

export default TeamTemplate;
