import AssigneesModel from "../Model/Assignees";
import {
  FieldsTypes,
  GofDetailObjType as OverFieldType,
} from "./TabDetailsTypes";

//lead id undefined type is not valid
//use interface over type
export interface LeadIdType {
  leadId: string | undefined;
}
export interface AssigneesData {
  id: string;
  name: string;
  profilePic: string;
  lastUpdated: string;
}
export interface Value {
  value: number | string | { countryCode: string; phoneNumber: string };
}

export interface StageType {
  name: string;
  color: string;
}
export interface GofObjData {
  id: string;
  name: string;
  fields: FieldData[];
} //rename fields type
export interface FieldData {
  fieldId: string;
  name: string;
  fieldType: FieldsTypes;
  value: Value;
}

//remove array type from here
export interface LeadDataType {
  leadId: string;
  name: string;
  stage: StageType;
  assignees: AssigneesData[];
  overviewFields: FieldData[];
  gofs: GofObjData[];
}

export interface textArea {
  leadId: string;
  id: string;
  assignessName: AssigneesModel[] | undefined;
  content: string;
  created: string;
}
