import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsActivity } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { IoDocumentText } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { GoHistory } from "react-icons/go";

import {
  detailsLiStyle,
  detailsNavStyle,
  detailsUlStyle,
  detailsIconStyle,
  activeStyle,
  width,
} from "./TabBarStyles";
import {
  getLeadDetailedViewPath,
  getLeadActivitiesViewPath,
  getLeadRemarkViewPath,
  getLeadDocumentViewPath,
  getLeadCallViewPath,
  getLeadHistoryViewPath,
} from "../../Constants";
import {IsActiveType } from "../../Types/TabBarTypes";
import { PropLeadIdType} from "../../Types/CommonTypes";

const TabBar = ( {leadId} :PropLeadIdType) => {
  //Use the lead Id from the props
  const isActivePathStyle = ({ isActive }:IsActiveType) =>
    isActive ? activeStyle : detailsLiStyle;
  const tabElements = () => {
    return (
      <ul className={detailsUlStyle}>
        <NavLink
          to={getLeadDetailedViewPath(leadId)}
          end
          className={isActivePathStyle}
        >
          <li className={width}>
            <CgProfile className={detailsIconStyle} />
            Lead Details
          </li>
        </NavLink>
        <NavLink
          to={getLeadActivitiesViewPath(leadId)}
          className={isActivePathStyle}
        >
          <li className={width}>
            <BsActivity className={detailsIconStyle} />
            Activities
          </li>
        </NavLink>
        <NavLink
          to={getLeadRemarkViewPath(leadId)}
          className={isActivePathStyle}
        >
          <li className={width}>
            <TfiWrite className={detailsIconStyle} />
            Remarks
          </li>
        </NavLink>
        <NavLink
          to={getLeadDocumentViewPath(leadId)}
          className={isActivePathStyle}
        >
          <li className={width}>
            <IoDocumentText className={detailsIconStyle} />
            Documents
          </li>
        </NavLink>
        <NavLink to={getLeadCallViewPath(leadId)} className={isActivePathStyle}>
          <li className={width}>
            <IoCallOutline className={detailsIconStyle} />
            Call Log
          </li>
        </NavLink>
        <NavLink
          to={getLeadHistoryViewPath(leadId)}
          className={isActivePathStyle}
        >
          <li className={width}>
            <GoHistory className={detailsIconStyle} />
            History Log
          </li>
        </NavLink>
      </ul>
    );
  };

  return (
    <nav className={detailsNavStyle}>
      {tabElements()}
      <hr />
    </nav>
  );
};

export default TabBar;
