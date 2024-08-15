import { PiPlantThin } from "react-icons/pi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timelines() {
  const data = [
    {
      title: "Stakeholder engagement",
      text: "At PAT, our stakeholders are held in high esteem, we regularly communicate with all, seeking their views and evolving with them, hence creating positive impact.",
      link: "#",
    },
    {
      title: "Risk Management",
      text: "Our board of directors are supported by various management functions that check and undertake both regular and ad hoc risk assessment reviews in compliance with established controls and procedures.",
      link: "#",
    },
    {
      title: "Climate Change Policy",
      text: "At Pan African Towers, we acknowledge the significant role that the telecoms industry can play in finding sustainable solutions to today’s climate challenges.",
      link: "#",
    },
    {
      title: "Environmental & Social Policy",
      text: "Pan African Towers (PAT) is committed to becoming and remaining an industry leader in environmental protection and social management.",
      link: "#",
    },
    {
      title: "Occupational Health and Safety Policy",
      text: "In line with International Labor Organization (ILO) fundamental principles and rights at work (5th pillar: a safe and healthy working environment), we are committed to the provision of safe and healthy working conditions for the prevention occupational injury and ill health across our business operations.",
      link: "#",
    },
    {
      title: "Emission Reduction by Energy Mix",
      text: "Our resolve to reducing our carbon footprint remains a top priority. We have made some conscious efforts towards this.",
      link: "#",
    },
    {
      title: "Community Relations",
      text: "At PAT, our stakeholders are held in high esteem, we regularly communicate with all, seeking their views and evolving with them, hence creating positive impact.",
      link: "#",
    },
  ];

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
                  <div className="text-textColor mt-[1rem]">Read more</div>
                </div>
              }
              icon={<PiPlantThin />}
            >
              <div style={{ fontFamily: "bold1" }} className="text-[2rem]">
                {e?.title}
              </div>
            </VerticalTimelineElement>
          );
        })}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work text-end bg-[blue] mt-[2rem]"
          contentStyle={{ color: "#000" }}
          date={
            <div className="text-start px-[1rem]">
              <div>
                At PAT, our stakeholders are held in high esteem, we regularly
                communicate with all, seeking their views and evolving with
                them, hence creating positive impact.
              </div>
              <div className="text-textColor mt-[1rem]">Read more</div>
            </div>
          }
          icon={<PiPlantThin />}
        >
          <div style={{ fontFamily: "bold1" }} className="text-[2rem]">
            Stakeholder engagement
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          icon={<PiPlantThin />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-end"
          date="2008 - 2010"
          //   iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<PiPlantThin />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          icon={<PiPlantThin />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-end"
          date="April 2013"
          icon={<PiPlantThin />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<PiPlantThin />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-end"
          date="2002 - 2006"
          icon={<PiPlantThin />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<PiPlantThin />} /> */}
      </VerticalTimeline>
    </div>
  );
}

export default Timelines;
