import { observer } from "mobx-react";

import TabInfoBlock from "./TabInfoBlock";
import { tabTypeBorderStyle, gofsListStyle } from "./TabDetailsStyles";
import LeadsStore from "../../Store/LeadStore";

const TabDetails = observer(() => {
  const gofs = LeadsStore.selectedLeadDetails?.gofs;

  const tabName = () => {
    return (
      <div className="flex flex-row items-center gap-3">
        <p className="text-[18px] w-[108px]">Lead Details</p>
        <p className={tabTypeBorderStyle}></p>
      </div>
    );
  };

  const listOfGofs = () => {
    if (gofs !== undefined) {
      return (
        <ul className={gofsListStyle}>
          {gofs.map((gofsDetails) => (
            <TabInfoBlock
              key={gofsDetails.id}
              gofName={gofsDetails.name}
              gofDetails={gofsDetails.fields}
            />
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="pr-40 pl-4 pt-6">
      {tabName()}
      {listOfGofs()}
    </div>
  );
});
export default TabDetails;
