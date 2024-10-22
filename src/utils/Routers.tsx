import { createBrowserRouter } from "react-router-dom";

import RootPage from "../Pages/RootPage";
import ComingSoonPage from "../Pages/ComingSoonPage";
import Homepage from "../Pages/HomePage";
import TabDetails from "../Components/TabDetails/TabDetails";
import {
  INITIAL_PATH,
  LEAD_DETAILS_PATH,
  ACTIVITIES_PATH,
  REMARK_PATH,
  DOCS_PATH,
  CALL_LOG_PATH,
  HISTORY_PATH,
} from "../Constants";

const Router = () => {
  return createBrowserRouter([
    { path: INITIAL_PATH , element: <Homepage /> },
    {
      path: LEAD_DETAILS_PATH,
      element: <RootPage />,
      children: [
        { path: LEAD_DETAILS_PATH, element: <TabDetails /> },
        { path: ACTIVITIES_PATH, element: <ComingSoonPage /> },
        { path: REMARK_PATH, element: <ComingSoonPage /> },
        { path: DOCS_PATH, element: <ComingSoonPage /> },
        { path: CALL_LOG_PATH, element: <ComingSoonPage /> },
        { path: HISTORY_PATH, element: <ComingSoonPage /> },
      ],
    },
  ]);
};

export default Router;
