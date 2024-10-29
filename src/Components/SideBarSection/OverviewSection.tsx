import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { observer } from "mobx-react";
import Field from "../Fields/Fields";
import LeadsStore from "../../Store/LeadStore";
import {
  contentTypeStyles,
  assignOverviewContainer,
  showMoreStyles,
  arrowStyles,
  betweenStyle,
} from "./SidebarStyles";

const Overview = observer(() => {
  const [isShowMore, setIsShowMore] = useState(true);

  const overviewFields = LeadsStore.selectedLeadDetails?.overviewFields;
  const topThreeData = overviewFields ? overviewFields.slice(0, 2) : undefined;

  function handelShowMore() {
    setIsShowMore((preVal) => !preVal);
  }

  const overviewSection = () => {
    switch (true) {
      case isShowMore && topThreeData !== undefined:
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
      case !isShowMore && overviewFields !== undefined:
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
    }
  };

  return (
    <ul className={`${assignOverviewContainer} max-h-[240px] overflow-y-auto `}>
      <li className="flex flex-row ">
        <p className="text-[#344054] text-head">Overview</p>
      </li>
      {overviewSection()}
    </ul>
  );
});

export default Overview;
