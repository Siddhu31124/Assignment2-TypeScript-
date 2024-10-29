import { makeAutoObservable } from "mobx";
import { textArea } from "../Types/CommonTypes";
import RemarkEditModel from "../Model/RemarkEditModel";

class _RemarkStore {
  allRemarks: RemarkEditModel[];
  specificRemark: RemarkEditModel[];
  constructor() {
    this.allRemarks = [];
    this.specificRemark = [];
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setRemarks(remark: textArea) {
    const remarkData = new RemarkEditModel(remark);
    this.allRemarks.push(remarkData);
  }
  setLeadRemark(LeadId: string) {
    this.specificRemark = this.allRemarks.filter(
      (each) => each.leadId === LeadId
    );
  }
  deleteRemark(id: string) {
    this.allRemarks = this.allRemarks.filter(
      (eachRemark) => eachRemark.id !== id
    );
  }

  editRemark(editRemark: textArea) {
    let editData = this.allRemarks.find(
      (eachRemark) => (eachRemark.id = editRemark.id)
    );
    if (editData !== undefined) {
      editData.setEditRemark(editRemark);
    }
  }
}

const RemarkStore = new _RemarkStore();

export default RemarkStore;
