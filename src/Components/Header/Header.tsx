import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { RiLink } from "react-icons/ri";
import { useParams } from "react-router";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

import leadInfo from "../../LeadData/LeadDetails.json";
import ActionButtons from "./ActionButtons";
import {
  profileCircleStyle,
  mainNavbarStyle,
  leadTypeStyle,
  copyStyle,
  leadContainerStyle,
  downArrow,
  refreshSection,
  profileContainer,
} from "./HeadersStyles";
import { INITIAL_PATH } from "../../Constants";
import { LeadIdType,StringType } from "../../Types/CommonTypes";
import { LeadDataType } from "../../Types/CommonTypes";

const Header = () => {
  const { leadId } = useParams<LeadIdType>();
  const leadData :LeadDataType = leadInfo.filter((each) => leadId === each.leadId);
  const { name, stage } = leadData[0];

  function extractInitials(name:StringType) {
    let words = name.split(" ");
    let initials = words.map((word) => word[0]).join("");
    return initials.toUpperCase();
  }

  const Logo = () => {
    return (
      <div className="flex flex-row gap-3">
        <Link to={INITIAL_PATH}>
          <MdArrowBackIos className="text-blue-600" />
        </Link>
        <BsFillRocketTakeoffFill className="text-xl text-blue-800" />
        <p className="text-[14px] text-[#344054]">Academy CGA</p>
        <div className={refreshSection}>
          <LuRefreshCcw className="text-[20px]" />
          <RxCross2 className="text-[20px] text-gray-400" />
        </div>
      </div>
    );
  };

  const leadDetails = () => {
    return (
      <div className={leadContainerStyle}>
        <div className={profileContainer}>
          <div
            className={`${profileCircleStyle}`}
            style={{
              backgroundColor: stage.color,
              fontSize: "24px",
            }}
          >
            <p>{extractInitials(name)}</p>
          </div>
          <p className="text-[24px]">{name}</p>
          <p className={leadTypeStyle}>
            {stage.name}
            <FaChevronDown className={downArrow} />
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className={copyStyle}>
            <RiLink className="mr-2 text-[16px] inline" />
            Copy
          </p>
          <ActionButtons />
        </div>
      </div>
    );
  };

  return (
    <div className={mainNavbarStyle}>
      {Logo()}
      {leadDetails()}
    </div>
  );
};

export default Header;
