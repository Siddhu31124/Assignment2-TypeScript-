import { observer } from "mobx-react";

import HomeHeader from "./HomeHeader";
import LeadInfo from "./LeadInfo";
import { homeMainContainer } from "./HomeStyles";
import LeadsStore from "../../Store/LeadStore";

const Home = observer(() => {
  return (
    <div className="h-[100%] bg-slate-100">
      <HomeHeader />
      <div className={homeMainContainer}>
        {LeadsStore.allLeads.map((lead) => (
          <LeadInfo key={lead.leadId} leadDetails={lead} />
        ))}
      </div>
    </div>
  );
});

export default Home;
