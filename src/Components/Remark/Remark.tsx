import { observer } from "mobx-react";

import ListOfRemark from "./RemarkList";
import { RemarkUlStyle } from "./RemarkStyle";
import { NoRemarkStyle } from "./RemarkStyle";
import RemarkStore from "../../Store/RemarkStore";

const Remarks = observer(() => {
  if (RemarkStore.specificRemark.length < 1) {
    return (
      <div className={NoRemarkStyle}>
        <h1 className="text-[32px] mt-1">No Remarks</h1>
      </div>
    );
  }
  return (
    <ul className={RemarkUlStyle}>
      {RemarkStore.specificRemark.map((eachRemark) => {
        if (eachRemark.assignessName !== undefined) {
          return <ListOfRemark remark={eachRemark} />;
        }
      })}
    </ul>
  );
});

export default Remarks;
