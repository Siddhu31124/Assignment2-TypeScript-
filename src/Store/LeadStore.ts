import { makeAutoObservable } from "mobx";
import { LeadDetailsData } from "../Types/HomeTypes";
import LeadInfo from "../LeadData/LeadSummary.json";
import LeadDetails from "../LeadData/LeadDetails.json";
import LeadModel from "../Model/LeadModel";

class _LeadStore {
  // selectedLeadDetails: LeadModel | null;
  activeLeadId: string | null;
  allLeads: LeadDetailsData[];
  constructor() {
    this.allLeads = LeadInfo;
    this.activeLeadId = null;
    // this.selectedLeadDetails = null;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLeadId(leadId: string) {
    this.activeLeadId = leadId;
  }

  get activeLeadDetails(): LeadModel | undefined {
    const Lead = LeadDetails.find(
      (eachLead) => eachLead.leadId === this.activeLeadId
    );

    if (Lead) {
      const selectedLeadDetails = new LeadModel(Lead as any);
      return selectedLeadDetails;
    }
  }
  // get selectedLeadRemarks() {
  //   return this.selectedLeadDetails?.remark;
  // }
}

const LeadsStore = new _LeadStore();
export default LeadsStore;
