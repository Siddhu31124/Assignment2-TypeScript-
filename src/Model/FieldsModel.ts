import { makeAutoObservable } from "mobx";
import { FieldData } from "../Types/CommonTypes";
import { FieldsTypes } from "../Types/TabDetailsTypes";
import { Value } from "../Types/CommonTypes";

class FieldModel {
  fieldId: string;
  name: string;
  fieldType: FieldsTypes;
  value: Value;

  constructor(OverviewData: FieldData) {
    this.fieldId = OverviewData.fieldId;
    this.name = OverviewData.name;
    this.fieldType = OverviewData.fieldType;
    this.value = OverviewData.value;
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setFieldName(newName: string) {
    this.name = newName;
  }
  setFieldType(newField: FieldsTypes) {
    this.fieldType = newField;
  }
  setValue(newValue: Value) {
    this.value = newValue;
  }
}
export default FieldModel;
