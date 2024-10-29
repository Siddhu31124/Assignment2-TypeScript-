import { makeAutoObservable } from "mobx";
import { Remark } from "../Types/CommonTypes";
import RemarkModel from "../Model/RemarkModel";

class RemarkStore {
  leadRemarks: RemarkModel[];
  constructor(leadRemarkData: RemarkModel[]) {
    this.leadRemarks = leadRemarkData;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setRemarks(remark: Remark) {
    const remarkData = new RemarkModel(remark);
    this.leadRemarks.push(remarkData);
  }

  deleteRemark(id: string) {
    this.leadRemarks = this.leadRemarks.filter(
      (eachRemark) => eachRemark.id !== id
    );
  }

  editRemark(editRemark: Remark) {
    let editData = this.leadRemarks.find(
      (eachRemark) => (eachRemark.id = editRemark.id)
    );
    if (editData !== undefined) {
      editData.setEditRemark(editRemark);
    }
  }
}

export default RemarkStore;
