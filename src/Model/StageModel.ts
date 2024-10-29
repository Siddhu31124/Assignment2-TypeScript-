import { makeAutoObservable } from "mobx";
import { StageType } from "../Types/CommonTypes";

class StageModel {
  name: string;
  color: string;
  constructor(stage: StageType) {
    this.name = stage.name;
    this.color = stage.color;
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setColor(newColor: string) {
    this.color = newColor;
  }
  setStageName(newName: string) {
    this.name = newName;
  }
}
export default StageModel;
