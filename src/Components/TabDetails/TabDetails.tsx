import { useParams } from "react-router";

import TabInfoBlock from "./TabInfoBlock";
import leadInfo from "../../LeadData/LeadDetails.json";
import { tabTypeBorderStyle, gofsListStyle } from "./TabDetailsStyles"
import { LeadIdType } from "../../Types/CommonTypes";
import { LeadDataType} from "../../Types/CommonTypes";

const TabDetails = () => {
  const { leadId } = useParams<LeadIdType>();

  const leadData : LeadDataType = leadInfo.filter((each) => leadId === each.leadId);
  const { gofs } = leadData[0];
  console.log(gofs)

  console.log(gofs)

  const tabName = () => {
    return (
      <div className="flex flex-row items-center gap-3">
        <p className="text-[18px] w-[108px]">Lead Details</p>
        <p className={tabTypeBorderStyle}></p>
      </div>
    );
  };

  const listOfGofs = () => {
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
  };

  return (
    <div className="pr-40 pl-4 pt-6">
      {tabName()}
      {listOfGofs()}
    </div>
  );
};
export default TabDetails;
