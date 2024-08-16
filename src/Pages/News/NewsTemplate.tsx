import React, { useEffect } from "react";
import cardImg3 from "../../assets/home/cardImgs/cardImg1.svg";
import cardImg2 from "../../assets/home/cardImgs/cardImg2.svg";
import cardImg1 from "../../assets/home/cardImgs/cardImg3.svg";

import ContactTemp from "../Reuseable/UI/ContactTemp";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import LeftHeader from "../Reuseable/Templates/LeftHeader";
import { Image, Skeleton } from "@arco-design/web-react";
import { FaArrowRightLong } from "react-icons/fa6";

const imageSize = { width: 300, height: 320 };

function NewsTemplate() {
  const data = [
    {
      img: cardImg1,
      header:
        "Pan African Towers announces the appointment of Oladipo Badru as Chief Financial Officer.",
      posted: "Posted on 18th March, 2024",
      id: 1,
      next: "/see-news/2",
      content: (
        <div>
          <div>
            Nigeria’s leading provider of digital infrastructure, Pan African
            Towers (PAT), has announced the appointment of Oladipo Badru as its
            new Chief Financial Officer
          </div>
          <div>
            The appointment comes at a key moment in the company’s growth, with
            the recent influx of fresh investments from Development Partners
            International (DPI) and Verod Capital to solidify its position as
            Nigeria’s largest homegrown digital infrastructure provider.
          </div>
          <div className="py-[2rem]">
            <div>
              Taking full responsibility for the company’s financial strategy,
              Badru will play a key role in tracking cash flow and managing
              investments and capital structure for sustained profitability.
            </div>
            <div>
              Badru brings a robust skill set and an excellent reputation in
              financial management from over two decades of experience across
              diverse industries, where he has led significant transformation
              and change initiatives
            </div>
            <div>
              Until his appointment, Badru was the Group Director of Finance at
              Etisalat Dubai, leading the Finance, Commercial and Business
              Development teams. He previously served as the Head of Budget and
              Planning and Director of Finance at 9mobile. Earlier, he was the
              General Manager of Financial Reporting and Planning at Helios
              Towers Nigeria and Pfizer Global Pharmaceuticals
            </div>
          </div>
          <div className="">
            <div>
              “We are delighted to have Oladipo join the dynamic management team
              at PAT,” said Azeez Amida, Managing Director and Chief Executive
              Officer at Pan African Towers. “We’re confident in Oladipo’s
              capabilities and look forward to the immense value his experience
              will bring to PAT’s executive team,” he added.
            </div>
          </div>
          <div className="py-[2rem]">
            <div>
              In his response, Oladipo Badru conveyed his enthusiasm to embark
              on this new role, stating, “These are very exciting times for the
              Nigerian Telecommunication industry. I look forward to
              contributing my own quota to Nigeria’s largest homegrown digital
              infrastructure provider, especially at such an interesting time as
              this.”
            </div>
          </div>
          <div className="">
            <div>
              “Nigeria is a huge market, and I am optimistic about the growth we
              can achieve in collaboration with our clients,” he added
            </div>
            <div>
              An accomplished Finance Executive with a Master’s degree in
              International Business Management from the University of Cumbria,
              UK, Badru’s background is in Corporate Finance, Financial Planning
              and Budgeting, Financial Reporting, Mergers and acquisitions,
              Funding and capital Structure, Finance Transformation, Cost
              Savings, and Strategic Planning
            </div>
          </div>
          <div className="py-[2rem]">
            <div>
              He is a Fellow of the Institute of Chartered Accountants of
              Nigeria (FCA), an Associate member of the Institute of Chartered
              Accountants England and Wales, and a Business and Finance
              Professional (BFB). He is also an Associate member of the Nigeria
              Institute of Management and the National Institute of Marketing of
              Nigeria.
            </div>
          </div>
        </div>
      ),
    },
    {
      img: cardImg2,
      header:
        "DPI and Verod Capital partner to back management of Pan African Towers.",
      posted: "Posted on 27th November, 2023",
      id: 2,
      next: "/see-news/3",
      content: (
        <div>
          <div>
            (London and Lagos, 27 November 2023) Pan African Towers (PAT), a
            leading digital infrastructure company based in Nigeria, has
            announced a strategic investment from Development Partners
            International (DPI), a premier investment firm focused on Africa,
            and Verod Capital (Verod), one of the continent’s leading investment
            management firms. DPI and Verod are investing in PAT to fuel its
            continued growth and will work with management to build on the
            company’s recent achievements and reaffirm its position as Nigeria’s
            largest homegrown digital infrastructure provider.
          </div>
          <div className="py-[2rem]">
            <div>
              Established in Nigeria in 2017 to capitalise on the growing demand
              for wireless communications across Africa, PAT has emerged as a
              prominent telecommunications and tower infrastructure provider in
              Nigeria, playing an indispensable role in the nationwide expansion
              of mobile communications. Since founding, PAT has built a
              successful business model centred around establishing tailored,
              long-term contracts with blue-chip customers, including Nigeria’s
              leading mobile network operators (MNOs) and internet service
              providers (ISPs). The success and strong performance of the
              company to date has further accelerated under the leadership of
              Chief Executive Azeez Amida, who has a strong track record of
              executing successful growth strategies in emerging market
              telecommunications.
            </div>
          </div>
          <div className="">
            <div>
              Nigeria is an attractive market for digital infrastructure in
              Africa. Underpinned by its strong demographics, it is Africa’s
              leading telecommunications market by number of mobile subscribers
              (208m) and contributed c.13% of national GDP in 2021 compared to
              8% in 2015. As of December 2021, there were 41,120 towers in
              Nigeria mostly supporting third generation (3G) and fourth
              generation (4G) technology across the country. However, according
              to Nigeria’s Ministry of Communications, the country needs between
              70,000 to 80,000 towers to enable proper quality and coverage for
              4G and 5G technology, creating a supply gap of more than 30,000
              towers. This investment will enable PAT to capitalise on this
              opportunity and help close this gap, providing world-class digital
              infrastructure to support Africa’s economic development.
            </div>
          </div>
          <div className="py-[2rem]">
            <div>
              Nigeria is an attractive market for digital infrastructure in
              Africa. Underpinned by its strong demographics, it is Africa’s
              leading telecommunications market by number of mobile subscribers
              (208m) and contributed c.13% of national GDP in 2021 compared to
              8% in 2015. As of December 2021, there were 41,120 towers in
              Nigeria mostly supporting third generation (3G) and fourth
              generation (4G) technology across the country. However, according
              to Nigeria’s Ministry of Communications, the country needs between
              70,000 to 80,000 towers to enable proper quality and coverage for
              4G and 5G technology, creating a supply gap of more than 30,000
              towers. This investment will enable PAT to capitalise on this
              opportunity and help close this gap, providing world-class digital
              infrastructure to support Africa’s economic development.
            </div>
          </div>
          <div className="">
            <div>
              PAT’s experienced management team will work closely with DPI and
              Verod to accelerate its strategic plan, leveraging their expertise
              in areas such as market entry, operational efficiency, and talent
              management. With the support of both investors, PAT will deepen
              relationships with existing partners, expand its customer base,
              and grow its footprint of towers to reach new parts of the country
              where mobile and wireless penetration remains low. PAT will also
              benefit from DPI’s experience in scaling towers companies, as the
              first institutional investor in Eaton Towers, another of Africa’s
              leading telecoms businesses it exited in 2019.
            </div>
          </div>
          <div className="py-[2rem]">
            <div>
              Adefolarin Ogunsanya, Partner at DPI, said:{" "}
              <i>
                 “Pan African Towers is an exciting homegrown business with
                significant potential and is uniquely positioned to benefit from
                the opportunity presented by Nigeria’s digital innovation boom.
                We are incredibly excited to partner with PAT’s management team
                to help crystallize the Company’s vision of becoming Nigeria’s
                digital infrastructure provider of choice and look forward to
                sharing our deep knowledge and experience of Africa’s towers
                industry and the Nigerian market to help achieve this.”
              </i>
            </div>
          </div>

          <div className="py-[2rem]">
            <div>
              <div className="text-textColor font-bold">
                About Pan African Towers
              </div>
              <div>
                Pan African Towers is Nigeria’s leading provider of digital
                infrastructure. The company provides telecommunications
                infrastructure and wireless services such as Built-to-Suit,
                colocation, Distributed Antenna Solutions, buy-lease-back and
                other value-added services. In 2022, PAT completed a merger with
                SWAP Technologies and became the #3 tower company in Nigeria by
                number of towers and revenue. The company has a nationwide site
                presence with ~760 across Nigeria, primarily in the Southwest of
                Nigeria as of August 2022. PAT has a diverse customer base of
                1,147 tenants (including Nigeria’s leading Mobile Network
                Operators (“MNOs”), sharing space on existing sites alongside
                other telecom providers, with a colocation ratio of 1.60x, one
                of the strongest in the industry.
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-textColor font-bold">About DPI</div>
              <div>
                DPI is an Africa-focused private investment firm with over US$3
                billion in assets under management and co-investments across
                three funds, targeting high-growth, impact-driven, and
                innovation-led companies. DPI’s three funds, African Development
                Partners I, II and III (ADP I, II and III), are ranked in the
                top quartile for performance by Cambridge Associates. Since DPI
                was founded in 2007, its ADP funds have completed 28 investments
                in 25 companies across the continent, and its portfolio
                companies employ over 60,000 staff, with over 25,000 jobs
                created during DPI’s investment
              </div>
            </div>
          </div>
          <div className="py-[2rem]">
            <div>
              <div>
                In 2020, ADP III became the first 2X Flagship Fund, as part of
                the global 2X Challenge, committing to integrating a gender lens
                into its investment process, and reflecting DPI’s long-standing
                commitment to gender equity. DPI has a female co-founder and
                CEO; one-third of the partners are women, and 50% of the firm
                are women. As a signatory to the UN Principles for Responsible
                Investment (PRI) and the Operating Principles for Impact
                Management, DPI promotes high ESG and Impact standards and seeks
                to contribute to the UN Sustainable Development Goals.
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <div className="text-textColor font-bold">
                About Verod Capital Management
              </div>
              <div>
                Verod is a leading African investment management firm
                specialising in private equity, primarily focusing on
                high-growth businesses in Anglophone West Africa, particularly
                Nigeria and Ghana. The firm also operates a venture capital arm,
                Verod-Kepple Africa Ventures, which invests in early-stage
                tech-enabled businesses across the African continent, driving
                transformative change. Since its inception, Verod has raised
                over $400 million and has invested in more than 30 companies.
                Verod collaborates with partners to promote sustainable growth,
                job creation, gender equality, and improved access to education,
                health, and wellness, all in alignment with the United Nations
                Sustainable Development Goals (SDGs) while safeguarding the
                environment. As the first Nigerian private equity firm and the
                first in West Africa to commit to the UN Principles for
                Responsible Investment (PRI) and COP22, our dedication to
                sustainability and impact is evident through our alignment with
                the 2X Challenge, ILPA Diversity in Action initiatives, and our
                adoption of industry-standard ESG and Impact frameworks that
                contribute to the achievement of the SDGs.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      img: cardImg3,
      header: "Pan African Towers Appoints Azeez Amida as new CEO.",
      posted: "Posted on 15th October, 2022",
      id: 3,
      next: "/see-news/1",
      content: (
        <div>
          <div>
            Pan African Towers (PAT), one of Nigeria’s leading telecom and
            digital infrastructure provider has appointed Azeez Amida as its
            Chief Executive
          </div>
          <div>
            Officer to oversee its business operations. The appointment which
            took effect from April 1, 2022, will see Amida, 38, lead PAT in its
            drive to strengthen its position as Nigeria’s largest indigenous
            Telecom and Digital Infrastructure provider
          </div>
          <div className="py-[2rem]">
            Prior to this role in PAT, Amida had worked with IHS in Nigeria and
            Rwanda with his last role as CEO IHS Rwanda, where he led the
            company to become the fastest-growing operations in 13 markets. He
            was also the consulting Chief Operating and Growth Officer for Merit
            Telecoms where he supported the company to align its operations with
            global best practices and positioned it to attract institutional
            investors.
          </div>

          <div className="">
            He has a solid understanding of emerging markets and brings over 18
            years of professional experience, cutting across six countries and
            twelve industries including Telecommunications, FMCG, Healthcare,
            Agri-business, Investment Banking, Private equity, and financial
            advisory among others. Reacting to the appointment, the Chairman of
            PAT, Mr. Oluwole Adeleke said “Amida is a young professional who
            brings with him the expertise in the operations of telecom and
            digital infrastructure assets across markets in Africa. The Board of
            Directors is pleased to have Amida at this critical time when the
            telecom sector of the economy is growing rapidly”.
          </div>
        </div>
      ),
    },
  ];

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[5rem]">
      <div className="containers py-[4rem]">
        {Number(id) > data.length ? (
          <div className="flex ">
            <div onClick={() => navigate('/news')} className="cursor-pointer pe-2">
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
              <div onClick={() => navigate('/news')} className="cursor-pointer pe-2">
                <MdOutlineKeyboardBackspace size={30} />
              </div>
              <LeftHeader
                mt="0"
                py="1rem"
                title={"News"}
                text={data[id]?.header}
              />
            </div>

            <div className="pt-[5rem]" data-aos="fade-right">
              {data
                ?.filter((e) => Number(e.id) === Number(id))
                .map((e, i) => {
                  return (
                    <div key={i} className="flex justify-between">
                      <div className="w-[25%]">
                        <div className="flex justify-center flex-wrap sticky top-0">
                          <div className="w-[400px] flex justify-center items-center">
                            {/* <img src={Img} alt="" className="w-[100%]" /> */}
                            <Image
                              {...imageSize}
                              src={e?.img}
                              alt=""
                              preview={false}
                              lazyload={{ threshold: 0.5 }}
                              loader={
                                <Skeleton
                                  image={{ style: imageSize }}
                                  // className="h-[100%]"
                                  text={true}
                                  animation
                                />
                              }
                            />
                          </div>
                          <div className="flex justify-around items-center text-textColor text-[1.1rem] font-semibold gap-[.4rem]">
                            <div>{e?.posted}</div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[70%]">
                        <div className="border-l-[.8rem] border-textColor px-[.6rem]">
                          <div
                            className="text-textColor text-[1.5rem]"
                            style={{ fontFamily: "semibold1" }}
                          >
                            Pan African Towers
                          </div>
                          <div className="flex gap-4 items-center text-[1.1rem] ">
                            <div>Next post</div>
                            <Link to={e?.next}>
                              <FaArrowRightLong />
                            </Link>
                          </div>
                        </div>

                        <div className="text-gray-600 text-[1rem] py-[3rem]">
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

export default NewsTemplate;
