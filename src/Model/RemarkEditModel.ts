import { textArea } from "../Types/CommonTypes";
import { makeAutoObservable } from "mobx";
import AssigneesModel from "./Assignees";

class RemarkEditModel {
  leadId: string;
  id: string;
  assignessName: AssigneesModel[] | undefined;
  content: string;
  created: string;
  constructor(text: textArea) {
    this.leadId = text.leadId;
    this.id = text.id;
    this.assignessName = text.assignessName;
    this.content = text.content;
    this.created = text.created;
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setEditRemark(data: textArea) {
    this.id = data.id;
    this.assignessName = data.assignessName;
    this.content = data.content;
    this.created = data.created;
  }
}

export default RemarkEditModel;
