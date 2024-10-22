import { GoPencil } from "react-icons/go";

import leadInfo from "../../LeadData/LeadDetails.json";
import {
  contentTypeStyles,
  contentDetailsStyles,
  editButtonStyle,
  assignLiContainer,
  assignUlContainer,
  betweenStyle,
} from "./SidebarStyles";
import { LeadDataType,LeadIdType } from "../../Types/CommonTypes";

const Assignees = ({ leadId }:LeadIdType) => {
  const leadData : LeadDataType = leadInfo.filter((each) => leadId === each.leadId);
  const { assignees } = leadData[0];
  const assigneesTabHeader = () => {
    return (
      <li className={assignLiContainer}>
        <p className="text-[#344054] text-head">Assignees</p>
        <p className={editButtonStyle}>
          <GoPencil className="text-[#1507ef] text-[16px]" />
          Edit
        </p>
      </li>
    );
  };

  const assigneesItemsList = () => {
    return (
      <>
        {assignees.map((assigneesDetails) => (
          <li key={assigneesDetails.id} className={betweenStyle}>
            <p className={contentTypeStyles}>PRE</p>
            <p className={`${contentDetailsStyles}  flex`}>
              {assigneesDetails.name}
              <img
                src={assigneesDetails.profilePic}
                className="ml-2 w-8 rounded-full"
              />
            </p>
          </li>
        ))}
      </>
    );
  };

  return (
    <ul className={assignUlContainer}>
      {assigneesTabHeader()}
      {assigneesItemsList()}
    </ul>
  );
};

export default Assignees;
