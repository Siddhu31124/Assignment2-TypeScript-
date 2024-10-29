import { makeAutoObservable } from "mobx";
import { LeadDataType } from "../Types/CommonTypes";
import AssigneesModel from "./Assignees";
import GofModel from "./GofModel";
import FieldModel from "./FieldsModel";
import StageModel from "./StageModel";

class LeadModel {
  leadId: string;
  name: string;
  stage: StageModel;
  assignees: AssigneesModel[];
  overviewFields: FieldModel[];
  gofs: GofModel[];

  constructor(LeadData: LeadDataType) {
    this.leadId = LeadData.leadId;
    this.name = LeadData.name;
    this.stage = new StageModel(LeadData.stage);
    this.assignees = LeadData.assignees.map(
      (eachAssignees) => new AssigneesModel(eachAssignees)
    );
    this.overviewFields = LeadData.overviewFields.map(
      (eachOverview) => new FieldModel(eachOverview)
    );
    this.gofs = LeadData.gofs.map((eachGof) => new GofModel(eachGof));
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLeadName(newName: string) {
    this.name = newName;
  }
}

export default LeadModel;