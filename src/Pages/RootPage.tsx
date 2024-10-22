import { Outlet } from "react-router";
import { useParams } from "react-router";

import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBarSection/Sidebar";
import TabBar from "../Components/TabBar/TabBar";
import { LeadIdType } from "../Types/CommonTypes";

const RootPage = () => {
  const { leadId } = useParams<LeadIdType>();
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
};
export default RootPage;
