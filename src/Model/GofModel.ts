import { makeAutoObservable } from "mobx";

import { GofObjData } from "../Types/CommonTypes";
import FieldModel from "./FieldsModel";

class GofModel {
  id: string;
  name: string;
  fields: FieldModel[];

  constructor(GofData: GofObjData) {
    this.name = GofData.name;
    this.id = GofData.id;
    this.fields = GofData.fields.map(
      (eachFields) => new FieldModel(eachFields)
    );
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setGofName(newName: string) {
    this.name = newName;
  }
}

export default GofModel;
