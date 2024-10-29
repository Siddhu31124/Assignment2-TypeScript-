import { Remark } from "../Types/CommonTypes";
import { makeAutoObservable } from "mobx";
import AssigneesModel from "./Assignees";

class RemarkModel {
  id: string;
  assignee: AssigneesModel[];
  content: string;
  created: string;
  constructor(text: Remark) {
    this.id = text.id;
    this.assignee = text.assignee;
    this.content = text.content;
    this.created = text.created;
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setEditRemark(data: Remark) {
    this.id = data.id;
    this.assignee = data.assignee;
    this.content = data.content;
    this.created = data.created;
  }
}

export default RemarkModel;
