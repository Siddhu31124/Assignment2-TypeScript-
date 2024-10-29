import { observer } from "mobx-react";

import ListOfRemark from "./RemarkList";
import { RemarkUlStyle } from "./RemarkStyle";
import { NoRemarkStyle } from "./RemarkStyle";
import LeadsStore from "../../Store/LeadStore";

const Remarks = observer(() => {
  const remark = LeadsStore.activeLeadDetails?.remark;
  if (remark) {
    if (remark?.leadRemarks.length < 1) {
      return (
        <div className={NoRemarkStyle}>
          <h1 className="text-[32px] mt-1">No Remarks</h1>
        </div>
      );
    }
    return (
      <ul className={RemarkUlStyle}>
        {remark.leadRemarks.map((eachRemark) => {
          if (eachRemark.assignee !== undefined) {
            return <ListOfRemark remark={eachRemark} />;
          }
        })}
      </ul>
    );
  }
});

export default Remarks;
