import { GoPencil } from "react-icons/go";
import { observer } from "mobx-react";

import {
  contentTypeStyles,
  contentDetailsStyles,
  editButtonStyle,
  assignLiContainer,
  assignUlContainer,
  betweenStyle,
} from "./SidebarStyles";
import LeadsStore from "../../Store/LeadStore";
const Assignees = observer(() => {
  const assignees = LeadsStore.selectedLeadDetails?.assignees;

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
    if (assignees !== undefined) {
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
    }
  };

  return (
    <ul className={assignUlContainer}>
      {assigneesTabHeader()}
      {assigneesItemsList()}
    </ul>
  );
});

export default Assignees;
