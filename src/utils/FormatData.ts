import leadDetails from "../LeadData/LeadDetails.json";
import { FieldData } from "../Types/CommonTypes";

const fieldType = (fields: FieldData[]) => {
  return fields.map((each) => {
    return each.fieldType ? { field_Type: each.fieldType } : each;
  });
};

const formatData = leadDetails.map((eachLead) => {
  if (eachLead.overviewFields) {
    return { ...eachLead, overviewFields: fieldType(eachLead.overviewFields) };
  } else if (eachLead.gofs && eachLead.gofs.fields) {
    return {
      ...eachLead,
      gofs: { ...eachLead.gofs, fields: fieldType(eachLead.gofs.fields) },
    };
  }
  return eachLead;
});

export default formatData;
