import { Outlet } from "react-router";
import { useParams } from "react-router";
import { observer } from "mobx-react";

import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBarSection/Sidebar";
import TabBar from "../Components/TabBar/TabBar";
import LeadsStore from "../Store/LeadStore";
import RemarkStore from "../Store/RemarkStore";

const RootPage = observer(() => {
  const { leadId } = useParams<string>();
  if (leadId) {
    LeadsStore.setAllDetails(leadId);
    RemarkStore.setLeadRemark(leadId);
  }
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row bg-slate-100 w-screen">
        <SideBar />
        <div>
          <TabBar leadId={leadId ?? ""} />
          <Outlet />
        </div>
      </div>
    </div>
  );
});
export default RootPage;
