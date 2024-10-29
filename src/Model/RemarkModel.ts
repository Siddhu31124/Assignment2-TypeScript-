// import RemarkEditModel from "./RemarkEditModel";
// import { textArea } from "../Types/CommonTypes";
// import { makeAutoObservable } from "mobx";

// class RemarkModel {
//   remarkContent: RemarkEditModel[];
//   constructor() {
//     this.remarkContent = [];
//     makeAutoObservable(this, {}, { autoBind: true });
//   }

//   deleteRemark(id: string) {
//     this.remarkContent = this.remarkContent.filter(
//       (eachRemark) => eachRemark.id !== id
//     );
//   }

//   editRemark(editRemark: textArea) {
//     let editData = this.remarkContent.find(
//       (eachRemark) => (eachRemark.id = editRemark.id)
//     );
//     if (editData !== undefined) {
//       editData.setEditRemark(editRemark);
//     }
//   }
// }
// export default RemarkModel;
