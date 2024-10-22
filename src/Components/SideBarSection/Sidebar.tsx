import { MdOutlinePushPin } from "react-icons/md";
import { useParams } from "react-router";

import AssigneesSection from "./AssigneesSection";
import OverviewSection from "./OverviewSection";
import {
  sidebarMainStyle,
  containerStyles,
  contentTypeStyles,
  contentDetailsStyles,
  pinIconStyle,
  pinTextStyle,
} from "./SidebarStyles";
import { TYPE_OF_INPUT, CHECKBOX_ID } from "../../Constants";
import { LeadIdType } from "../../Types/CommonTypes";

const Sidebar = () => {
  const  {leadId}= useParams<LeadIdType>();
  const pinnedContainer = () => {
    return (
      <div className={containerStyles}>
        <p className="flex gap-2 items-center">
          <MdOutlinePushPin className={pinIconStyle} />
          <span className={pinTextStyle}>Pinned</span>
        </p>
        <div className="toggle-switch">
          <input
            type={TYPE_OF_INPUT}
            id={CHECKBOX_ID}
            className="toggle-input"
          />
          <label htmlFor={CHECKBOX_ID} className="toggle-label"></label>
        </div>
      </div>
    );
  };

  const createdOnContainer = () => {
    return (
      <div className={containerStyles}>
        <p className={contentTypeStyles}>Created On</p>
        <p className={contentDetailsStyles}>17 Oct 2024, 7:12 PM</p>
      </div>
    );
  };

  return (
    <aside className={sidebarMainStyle}>
      {pinnedContainer()}
      {createdOnContainer()}
      <AssigneesSection leadId={leadId}/>
      <OverviewSection leadId={leadId} />
    </aside>
  );
};

export default Sidebar;