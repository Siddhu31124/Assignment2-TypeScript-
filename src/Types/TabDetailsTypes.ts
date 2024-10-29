//https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
//allow only valid field type
//
import { FieldData } from "./CommonTypes";
export type GofDetailObjType =
  | { fieldId: string; name: string; fieldType: "SMALL_TEXT"; value: string }
  | { fieldId: string; name: string; fieldType: "LONG_TEXT"; value: string }
  | { fieldId: string; name: string; fieldType: "EMAIL"; value: string }
  | { fieldId: string; name: string; fieldType: "NUMBER"; value: number }
  | { fieldId: string; name: string; fieldType: "DROPDOWN"; value: number }
  | {
      fieldId: string;
      name: string;
      fieldType: "PHONE_NUMBER";
      value: { countryCode: string; phoneNumber: string };
    };

export type GofInfoPropsTypes = {
  gofName: string;
  gofDetails: FieldData[];
};

export type ExpandableStateType = boolean;

export type FieldsTypes =
  | "SMALL_TEXT"
  | "LONG_TEXT"
  | "EMAIL"
  | "NUMBER"
  | "DROPDOWN"
  | "PHONE_NUMBER";

//make this invalid
