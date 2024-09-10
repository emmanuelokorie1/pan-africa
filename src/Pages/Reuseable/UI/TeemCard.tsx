import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface customProps {
  image?: string;
  name?: string;
  fullrole?: string;
  role?: string;
  link?: any;
  id: number;
}

const TeemCard: React.FC<customProps> = ({
  image,
  name,
  link,
  fullrole,
  role,
  id,
}) => {
  return (
    <Link to={`/our-team/${id}`} className="my-[3rem] cursor-pointer">
      <Card>
      <div>
        <CardImage src={image} alt="Card" />
      </div>
      <CardText>
        <div className=" ps-2 ">
          <div className="flex justify-between items-center w-[100%]">
            <div className="font-bold text-[1rem]">{name}</div>
            <div className=" cursor-pointer flex items-center gap-2 text-[.8rem] mt-3 text-textColor">
              <div>View</div>
              <div>
                <GoArrowUpRight size={15} />
              </div>
            </div>
          </div>
          <div className="">
            <div className="shorttext text-[.9rem] text-gray-600">{fullrole}</div>
            <div className="fulltext text-[.8rem] text-gray-600">
              {fullrole}
            </div>
          </div>
        </div>
      </CardText>
    </Card>
    </Link>
  );
};

export default TeemCard;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  display: block;
  background-color: transparent;
`;

const CardText = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  transition: 0.2s linear;
  border-left: 0.8rem solid #e75425;
  margin-top: 0.5rem;

  .fulltext {
    display: none;
    transition: 0.2s linear;
  }

  .shorttext {
    transition: 0.2s linear;
  }

  ${Card}:hover & {
    border-left: 1.8rem solid #e75425;

    .shorttext {
      display: none;
    }
    .fulltext {
      display: block;
    }
  }
`;
