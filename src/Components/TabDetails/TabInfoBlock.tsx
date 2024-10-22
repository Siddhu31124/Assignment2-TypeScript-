import { useState } from "react";

import Field from "../Fields/Fields";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
  blueIndicatorStyle,
  typeInfoStyle,
  infoBlockStyle,
  typeOfInfoStyle,
  fieldDetailsListStyle,
} from "./TabDetailsStyles";
import { TabInfoPropsTypes,ExpandableStateType} from "../../Types/TabDetailsTypes";
//Rename and check the props names
const TabInfoBlock = ({ gofName, gofDetails }:TabInfoPropsTypes) => {
  //rename as isExpanded
  const [isExpanded, setIsExpanded] = useState<ExpandableStateType>(false);

  function handelShowMore() {
    setIsExpanded((preVal) => !preVal);
  }

  const tabInfoBlockClose = () => {
    if (!isExpanded) {
      return (
        <div className={typeInfoStyle} onClick={handelShowMore}>
          <div className="flex flex-row gap-3">
            <div className={blueIndicatorStyle}></div>
            <p className="text-basic">{gofName}</p>
          </div>
          <p>
            <IoIosArrowDown className="mr-6" />
          </p>
        </div>
      );
    }
  };

  const tabInfoBlockOpen = () => {
    if (isExpanded) {
      return (
        <div className={infoBlockStyle} onClick={handelShowMore}>
          <div className={typeOfInfoStyle}>
            <div className="flex flex-row gap-3">
              <div className={blueIndicatorStyle}></div>
              <p className="text-basic">{gofName}</p>
            </div>
            <p>
              <IoIosArrowUp className="mr-6" />
            </p>
          </div>
          <ul className="pb-4 px-4 flex flex-row flex-wrap">
            {gofDetails.map((fieldDetails) => (
              <li className={`${fieldDetailsListStyle} item`}>
                <p className="text-basic text-[#667085]">{fieldDetails.name}</p>
                <Field
                  type={fieldDetails.fieldType}
                  value={fieldDetails.value}
                  textAlignment={"text-left"}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <>
      {tabInfoBlockClose()}

      {tabInfoBlockOpen()}
    </>
  );
};
export default TabInfoBlock;
