import { makeAutoObservable } from "mobx";
import { LeadDetailsData } from "../Types/HomeTypes";
import LeadInfo from "../LeadData/LeadSummary.json";
import LeadDetails from "../LeadData/LeadDetails.json";
import LeadModel from "../Model/LeadModel";
import RemarkModel from "../Model/RemarkEditModel";
class Leads {
  selectedLeadDetails: LeadModel | null;
  allLeads: LeadDetailsData[];
  specificLeadRemark: RemarkModel[];
  constructor() {
    this.specificLeadRemark = [];
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
}

const LeadsStore = new Leads();
export default LeadsStore;
