import dayjs from "dayjs";
import { IoCallOutline } from "react-icons/io5";

import { DATE_FORMAT } from "../../Constants";
import {
  commonFelidStyle,
  linkStyle,
  phoneNumberStyle,
  multiLineStyle,
} from "./Styles";
import {
  CHECKBOX_GROUP,
  DATE,
  DROPDOWN,
  EMAIL,
  LONG_TEXT,
  MULTI_SELECT,
  NUMBER,
  PHONE,
  SMALL_TEXT,
  IDENTIFY_URL,
  LIMIT_OF_SECTION,
} from "../../Constants";
import { FieldTypes } from "../../Types/FieldType";

//Remove sidebar as prop
//TODO: Update Field spelling
//rename the component as Field
//Remove li or rename the component as list item context
//It is not list, rename as Field
const Field = ({ type, value, textAlignment}:FieldTypes) => {
  const customStyles :string = `${commonFelidStyle} ${textAlignment}`;
  const customMultiStyles :string = `${multiLineStyle} ${textAlignment}`;
  switch (type) {
    case EMAIL: {
      return <li className={customStyles}>{value}</li>;
    }

    case PHONE: {
      return (
        <li className={phoneNumberStyle}>
          <IoCallOutline className="mr-1" /> {value.phoneNumber}
        </li>
      );
    }

    case SMALL_TEXT: {
      if (value.startsWith(IDENTIFY_URL)) {
        return (
          <a className={linkStyle} href={value}>
            {value}
          </a>
        );
      }
      return <li className={customStyles}>{value}</li>;
    }
    //Move the long text as s case
    //Handle truncate cases to all the field types
    case LONG_TEXT: {
      return <li className={customMultiStyles}>{value}</li>;
    }
    case DROPDOWN:
    case NUMBER: {
      return <li className={customStyles}>{value}</li>;
    }

    case DATE: {
      return (
        <li className={commonFelidStyle}>{dayjs(value).format(DATE_FORMAT)}</li>
      );
    }

    //Handle the no data cases
    //No magic numbers
    case MULTI_SELECT: {
      if (value.length > LIMIT_OF_SECTION) {
        const firstValue = value[0];
        const secondValue = value[1];
        return (
          <li className={customStyles}>
            {firstValue} {secondValue}
            {value.length - LIMIT_OF_SECTION > 0
              ? `+${value.length - LIMIT_OF_SECTION}`
              : ""}
          </li>
        );
      } else if (value.length === 0) {
        return <li className={customStyles}>No Data</li>;
      } else {
        return value.join(" ");
      }
    }

    //Handle the null case
    case CHECKBOX_GROUP: {
      if (value.length > 0) {
        return <li className={customMultiStyles}>{value.join(" ,")}</li>;
      }
      return <li className={customMultiStyles}>Data NotFound</li>;
    }

    default: {
      return (
        <li className={customMultiStyles}>{value ? value : "Not Data"}</li>
      );
    }
  }
};

export default Field;
