import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import Field from "../Fields/Fields";
import leadInfo from "../../LeadData/LeadDetails.json";
import { LeadIdType } from "../../Types/CommonTypes";
import {
  contentTypeStyles,
  assignOverviewContainer,
  showMoreStyles,
  arrowStyles,
  betweenStyle,
} from "./SidebarStyles";
import { LeadDataType } from "../../Types/CommonTypes";


const Overview = ({ leadId }:LeadIdType) => {
  const [isShowMore, setIsShowMore] = useState(true);

  const leadData :LeadDataType = leadInfo.filter((each) => leadId === each.leadId);
  const { overviewFields } = leadData[0];
  const topThreeData = overviewFields.slice(0, 2);

  function handelShowMore() {
    setIsShowMore((preVal) => !preVal);
  }

  const overviewSection = () => {
    if (isShowMore) {
      return (
        <>
          {topThreeData.map((overviewDetails) => (
            <li key={overviewDetails.fieldId} className={betweenStyle}>
              <p className={contentTypeStyles}>{overviewDetails.name}</p>
              <Field
                type={overviewDetails.fieldType}
                value={overviewDetails.value}
                textAlignment={"text-right"}
              />
            </li>
          ))}
          <li onClick={handelShowMore} className={showMoreStyles}>
            See more
            <IoIosArrowDown className={arrowStyles} />
          </li>
        </>
      );
    }
    return (
      <>
        {overviewFields.map((overviewDetails) => (
          <li key={overviewDetails.fieldId} className={betweenStyle}>
            <p className={contentTypeStyles}>{overviewDetails.name}</p>
            <Field
              type={overviewDetails.fieldType}
              value={overviewDetails.value}
              textAlignment={"text-right"}
            />
          </li>
        ))}
        <li onClick={handelShowMore} className={showMoreStyles}>
          See less
          <IoIosArrowUp className={arrowStyles} />
        </li>
      </>
    );
  };

  return (
    <ul className={`${assignOverviewContainer} max-h-[240px] overflow-y-auto `}>
      <li className="flex flex-row ">
        <p className="text-[#344054] text-head">Overview</p>
      </li>
      {overviewSection()}
    </ul>
  );
};

export default Overview;
