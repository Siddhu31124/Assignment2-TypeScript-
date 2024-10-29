import { makeAutoObservable } from "mobx";
import { Remark } from "../Types/CommonTypes";
import RemarkModel from "../Model/RemarkModel";

class RemarkStore {
  leadRemark: RemarkModel[];
  constructor(leadRemarkData: RemarkModel[]) {
    this.leadRemark = leadRemarkData;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setRemarks(remark: Remark) {
    const remarkData = new RemarkModel(remark);
    this.leadRemark.push(remarkData);
  }

  deleteRemark(id: string) {
    this.leadRemark = this.leadRemark.filter(
      (eachRemark) => eachRemark.id !== id
    );
  }

  editRemark(editRemark: Remark) {
    let editData = this.leadRemark.find(
      (eachRemark) => (eachRemark.id = editRemark.id)
    );
    if (editData !== undefined) {
      editData.setEditRemark(editRemark);
    }
  }
}

export default RemarkStore;
