import { makeAutoObservable } from "mobx";
import { AssigneesData } from "../Types/CommonTypes";

class AssigneesModel {
  readonly id: string;
  name: string;
  profilePic: string;
  lastUpdated: string;

  constructor(assignees: AssigneesData) {
    this.id = assignees.id;
    this.name = assignees.name;
    this.profilePic = assignees.profilePic;
    this.lastUpdated = assignees.lastUpdated;
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setAssigneesName(newName: string) {
    this.name = newName;
  }
  setProfilePic(newPic: string) {
    this.profilePic = newPic;
  }
  setLastUpdated(newUpdate: string) {
    this.lastUpdated = newUpdate;
  }
}

export default AssigneesModel;
