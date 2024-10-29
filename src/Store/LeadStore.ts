import { makeAutoObservable } from "mobx";
import { LeadDetailsData } from "../Types/HomeTypes";
import LeadInfo from "../LeadData/LeadSummary.json";
import LeadDetails from "../LeadData/LeadDetails.json";
import LeadModel from "../Model/LeadModel";

class Leads {
  selectedLeadDetails: LeadModel | null;
  allLeads: LeadDetailsData[];
  constructor() {
    this.allLeads = LeadInfo;
    this.selectedLeadDetails = null;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setAllDetails(leadId: string) {
    const Lead = LeadDetails.find((eachLead) => eachLead.leadId === leadId);

    if (Lead) {
      this.selectedLeadDetails = new LeadModel(Lead as any);
    }
  }
  get remark() {
    return this.selectedLeadDetails?.remark;
  }
}

const LeadsStore = new Leads();
export default LeadsStore;
