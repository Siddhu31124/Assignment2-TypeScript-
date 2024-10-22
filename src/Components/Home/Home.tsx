import leadSummary from "../../LeadData/LeadSummary.json";
import HomeHeader from "./HomeHeader";
import LeadInfo from "./LeadInfo";
import { homeMainContainer } from "./HomeStyles";

const Home = () => {
  return (
    <div className="h-[100%] bg-slate-100">
      <HomeHeader />
      <div className={homeMainContainer}>
        {leadSummary.map((lead) => (
          <LeadInfo key={lead.leadId} leadDetails={lead} />
        ))}
      </div>
    </div>
  );
};

export default Home;