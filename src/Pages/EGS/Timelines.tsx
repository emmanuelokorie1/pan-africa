import { useState } from "react";
import { PiPlantThin } from "react-icons/pi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import Modal from "../Reuseable/UI/Modal";
import SeeMoreModal from "./Modals/SeeMoreModal";
import stackholder from "../../assets/egs/modals/stackHolder.svg";

import { Image, Skeleton } from "@arco-design/web-react";
import { BsDot } from "react-icons/bs";
const imageSize = { width: "100%", height: "100%" };

function Timelines() {
  const data = [
    {
      title: "Stakeholder engagement",
      text: "At PAT, our stakeholders are held in high esteem, we regularly communicate with all, seeking their views and evolving with them, hence creating positive impact.",
      conText: (
        <div className="text-gray-800 text-[.9rem]">
          <div>
            At PAT, our stakeholders are held in high esteem, we regularly
            communicate with all, seeking their views and evolving with them,
            hence creating positive impact. We are in good relationship with
            both internal and external stakeholders - employees, customers,
            suppliers, local communities, regulators and governments,
            shareholders and investors. Regular engagement gives us more insight
            into stakeholder's priorities, needs and concerns and allows us to
            respond proactively and promptly.
          </div>
          <div className="h-150px py-[1rem]">
            <Image
              {...imageSize}
              src={stackholder}
              alt=""
              preview={false}
              lazyload={{ threshold: 0.5 }}
              loader={
                <Skeleton image={{ style: imageSize }} text={false} animation />
              }
            />
          </div>
        </div>
      ),
    },
    {
      title: "Risk Management",
      text: "Our board of directors are supported by various management functions that check and undertake both regular and ad hoc risk assessment reviews in compliance with established controls and procedures.",
      conText: (
        <div className="text-gray-800 text-[.9rem]">
          <div>
            Our Board of Directors are responsible for the establishment and
            oversight of our risk management. They are supported by various
            management functions that check and undertake both regular and ad
            hoc risk assessment reviews in compliance with established controls
            and procedures. The aim of our risk management process is to ensure
            that our Board of Directors and management are aware of the key
            risks that could threaten the achievement of business objectives and
            that appropriate mitigation plans are in place to avoid, eliminate,
            or minimize the impact of such risks, should they arise. We plan to
            regularly review our risk registers for sufficiency and
            effectiveness or otherwise of our management plan
          </div>
        </div>
      ),
    },
    {
      title: "Climate Change Policy",
      text: "At Pan African Towers, we acknowledge the significant role that the telecoms industry can play in finding sustainable solutions to today's climate challenges.",
      conText: (
        <div className="text-gray-800 text-[.9rem]">
          <div>
            There is no greater threat to our collective future than climate
            change. At Pan African Towers, we acknowledge the significant role
            that the telecoms industry can play in finding sustainable solutions
            to today's climate challenges.
          </div>
          <div className="pt-[2rem]">
            In a bid to reducing our carbon footprint as the foremost indigenous
            telecommunications infrastructure company in Nigeria, PAT has
            committed to:
          </div>
          <div className="py-[1rem]">
            1. Connect all our Lagos sites to the national grid.
            <div>
              2. Ensure that majority of our sites in the Northern region of
              Nigeria operates on hybrid powered system (Solar and Generator)
            </div>
          </div>

          <div>
            These reduces our dependency on diesel powered generator and
            significantly reduces our scope 1 emission.
          </div>

          <div className="py-[2rem]">
            Our Carbon reduction commitment is fully aligned with our philosophy
            to support the socioeconomic development of our communities and to
            make a more positive environmental impact. In accordance with the
            Climate Change Policy and our overall Environmental Policy, we will
            strive to continually reduce emissions across our sites as much as
            possible by:
            <div className=" pt-[2rem]">
              {[
                " Hybridizing more of our sites (energy used), without compromising our Power Availability (PA) assurance agreement to client.",
                "Exploring more renewable energy technologies (where practicable). ",
                "Deploying more energy-efficient equipment to the field.",
                "Accelerating our site clean-up initiatives and proper waste management agenda.",
                "Ensuring sufficient bund walls (110% capacity) around our storage tanks, to contain spillage without polluting the environment.",
                "Engaging and partnering with relevant stakeholders to combat climate change.",
                "Working with suppliers to reduce their carbon footprint and to minimise their climate impacts.",
                "Setting and Implementing roadmaps for emissions reduction for all our sites.",
              ]?.map((e, i) => {
                return (
                  <div key={i} className="flex gap-2 py-[.5rem]">
                    <div>
                      <BsDot size={20} />
                    </div>
                    <div>{e}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>Complimentarily and importantly, we shall:</div>
          <div className=" pb-[2rem]">
            {[
              "Reinforce CO2 emission reduction targets as one of the critical elements of our business growth plan.",
              "Work with other partners (industries, academia, NGOs, government etc.) on climate change mitigation and climate change adaptation. ",
              "Consider all climate risks and opportunities and integrate them in our business strategy.",
              "Investigate the opportunities for finding solutions for our residual emissions such as net-offs, afforestation, trading, etc.",
              "Monitor, report, and audit our greenhouse gas emissions, targets, results, and activities, and publish transparently our progress, accordingly.",
            ]?.map((e, i) => {
              return (
                <div key={i} className="flex gap-2 py-[.5rem]">
                  <div>
                    <BsDot size={20} />
                  </div>
                  <div>{e}</div>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "Environmental & Social Policy",
      text: "Pan African Towers (PAT) is committed to becoming and remaining an industry leader in environmental protection and social management.",
      conText: (
        <div className="text-gray-800 text-[.9rem]">
          <div>
            Pan African Towers (PAT) is committed to becoming and remaining an
            industry leader in environmental protection and social management.
            We are committed to the integration of environmental and social
            considerations into all aspects of our business activities for the
            promotion of a sustainable company. We identify the environment as a
            vital natural capital to our operations and as such, we are devoted
            to operating in a manner that ensures sustainable interactions
            between all aspects of our operations and the environmental media,
            as well as employing best available techniques to address our
            environmental and social impacts.
          </div>
          <div className="pt-[1rem]">
            We are dedicated to continually balancing our operations as it
            relates to the people and profit, without sacrificing environmental
            and social protection on the altar of profitability.
          </div>

          <div className="py-[2rem]">
            In order to achieve this commitment, we will continuously:
            <div className=" pt-[2rem]">
              {[
                "Identify the environmental and social impacts of our operations and establish strategic environmental and social objectives and protection procedures that will be continuously incorporated into all operations, in a cost-effective manner.",
                "Ensure our operations are carried out in compliance with all applicable environmental and social laws, policies, and guidelines, as well as best international practices including IFC Environmental and Social Performance Standards. ",
                "Employ efficient use of energy and natural resources.",
                "Establish environmental and social requirement for PAT contractors and vendors.",
                " Proactively identify and manage environmental and social risks that the company's activities may pose to the environment and communities.",
                "Develop emergency planning, preparedness and management that will ensure quick response to incidents, if/when they occur and minimize their impact on the environment and communities.",
                "Develop effective methods for the proactive communication, consultation, and long-term engagement with all stakeholders.",
                "Prevent pollution from our base stations to the environmental media - land, air and water and maintain our facilities, workplaces, base stations and other assets in an environmentally conscious manner using the best practicable environmental option (BPEO).",
                "Set realistic and measurable objectives and targets and monitor progress to ensure continuous improvement in our environmental and social performance as much as is reasonably practicable",
                "Commit to reduce waste generation by following the Waste Hierarchy to reduce, reuse and recycle waste as much as is feasible",
                "Commit appropriate resources to the implementation of this policy and Ensure continuous improvement of all employee's company wide as it concerns their environmental and social responsibilities. Tailored trainings on environmental protection and management shall be organized as the need arises.",
              ]?.map((e, i) => {
                return (
                  <div key={i} className="flex gap-2 py-[.5rem]">
                    <div>
                      <BsDot size={20} />
                    </div>
                    <div>{e}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Occupational Health and Safety Policy",
      text: "In line with International Labor Organization (ILO) fundamental principles and rights at work (5th pillar: a safe and healthy working environment), we are committed to the provision of safe and healthy working conditions for the prevention occupational injury and ill health across our business operations.",
      conText: (
        <div className="text-gray-800 text-[.9rem]">
          <div>
            PAN AFRICAN TOWERS LIMITED considers health, safety, and
            environmental aspects of its operations to be of paramount
            importance.
          </div>
          <div className="py-[2rem]">
            In line with International Labor Organization (ILO) fundamental
            principles and rights at work (5th pillar: a safe and healthy
            working environment), we are committed to the provision of safe and
            healthy working conditions for the prevention occupational injury
            and ill health across our business operations. Thus, we have
            established and effectively communicated the importance of
            Occupational Health & Safety (OHS) to all our employees.
          </div>
          <div className="py-[2rem]">
            Additionally, this policy is in line with the provisions of ISO
            45001:2018. Accordingly, the management of PAT holds the
            accountability of ensuring that Health, Safety and Well-Being of her
            workforce as its topmost priority. Furthermore, employees shall act
            professionally and obey the laid down safe work practices and
            procedures.
          </div>

          <div className="py-[2rem]">
            To achieve these objectives, it is our commitment to:
            <div className=" pt-[2rem]">
              {[
                "Eliminate hazards and reduce Occupational Health & Safety (OH&S) risks to as low as reasonably practicable in all our operations by engaging in proactive and early identification of potential hazards and risks and taking early actions to eliminate such threats.",
                "Ensure compliance by all workers, employees, visitors and interested parties by developing a culture of strict compliance and responsibility at all levels",
                "Ensure continual improvement by periodically tracking and monitoring our OH&SMS for adequacy, effectiveness, and suitability.",
                "Ensure continuous consultation and participation of workers and other interested parties on OHS matters.",
                "Allocate sufficient financial and non-financial resources for the effective implementation of the OH&SMS",
                "Provide our employees with appropriate information, instructions, supervision, and periodic bespoke work task trainings to achieve better OHS outcomes.",
                "Ensure all contractors abide by this policy using industry standards, best practices, and procedures.",
                "Comply wholly with all relevant and applicable legislations, regulations, approved codes of practice, standards, guidelines, and other requirements for the overall safety of the work environment as well as the safety of all our employees and persons within our operating bases.",
                "Monitor issues related to working conditions affecting sick leave, accidents at work, work capacity evaluation, monitoring the amount of work strain, work atmosphere etc",
                " Ensure workplace safety for specific situations, e.g., working alone, threat of violence, early support on new directive, first aid etc",
                "Ensure attention around work orientation and guidance, procurement, training and communication, development activity and situations of change is in line with the provisions of ISO 45001:2018.",
              ]?.map((e, i) => {
                return (
                  <div key={i} className="flex gap-2 py-[.5rem]">
                    <div>
                      <BsDot size={20} />
                    </div>
                    <div>{e}</div>
                  </div>
                );
              })}
            </div>
            <div className="py-[2rem]">
              We shall also provide a framework for setting objectives and
              measurable targets which shall be monitored and reviewed at
              regular intervals, and our progress as it relates to OHS shall be
              periodically communicated to all interested parties
            </div>
            <div className="pb-[1rem]">
              PAT believes that the Health and Safety of all employees is vital
              for business continuity. As such, it is in our best interest to
              fully ensure that OHS is integrated into all aspects of our
              business.
            </div>
            <div className="py-[2rem]">
              We shall carry out regular monitoring to ensure full compliance
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Emission Reduction by Energy Mix",
      text: "Our resolve to reducing our carbon footprint remains a top priority. We have made some conscious efforts towards this.",
      conText: (
        <div className="text-gray-800 text-[.9rem]">
          <div>
            Our resolve to reducing our carbon footprint remains a top priority.
            Some of our efforts include but not limited to:
          </div>
          <div>
            1. Implementation of solar power for our sites (79nos) at the
            Northern, Nigeria. This provides complementary and significant power
            for our infrastructure, supporting the diesel-powered generator in a
            balance ratio, thereby reducing significant percentage of the
            associated emission. We are determined to implement the solar system
            for more sites and extends to other regions of the country
          </div>
          <div>
            2. Unlocking the national grid power provision for our
            infrastructure in Southwest, with Lagos as pilot (128 sites). This
            giant stride reveals our intentions to reduce our associated
            emission (especially scope 1), whilst we review the efficiency of
            this energy mix, we hope to extend same to other regions.
          </div>
        </div>
      ),
    },
    {
      title: "Community Relations",
      text: "At PAT, our stakeholders are held in high esteem, we regularly communicate with all, seeking their views and evolving with them, hence creating positive impact.",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [getContent, setGetContent] = useState(null);
  const [modalHead, setmodalHead] = useState(null);

  return (
    <div className="bg-secback py-[4rem] my-[3rem] ">
      <VerticalTimeline>
        {data?.map((e, i) => {
          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work h-[150px]"
              contentStyle={{ color: "#000" }}
              date={
                <div className="text-start px-[1rem]">
                  <div>{e?.text}</div>
                  {e?.title !== "Community Relations" ? (
                    <div
                      className="text-textColor mt-[1rem] cursor-pointer"
                      onClick={() => {
                        setShowModal(true);
                        setGetContent(e?.conText);
                        setmodalHead(e?.title);
                      }}
                    >
                      Read more
                    </div>
                  ) : <div></div>}
                </div>
              }
              icon={<PiPlantThin />}
            >
              <div style={{ fontFamily: "bold1" }} className="md:text-[2rem] sm:text-[1.5rem] text-[1.2rem]">
                {e?.title}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

      <Modal open={showModal}>
        <StyledModalBackground>
          <StyledModalContent data-aos="slide-down" className="s1000:w-[60%] md:w-[80%] w-[90%] md:px-[2rem] sm:px-[1rem] px-[.5rem]">
            <SeeMoreModal
              setModal={setShowModal}
              children={getContent}
              headerText={modalHead}
            />
          </StyledModalContent>
        </StyledModalBackground>
      </Modal>
    </div>
  );
}

export default Timelines;

const StyledModalContent = styled.div`
  border-radius: 0.4rem;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  max-height: 39rem;
  border: 1px solid #dcdbdb;
  overflow: auto;
`;

const StyledModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9000;
  transition: linear 0.3s;
  backdrop-filter: blur(3px);
`;
