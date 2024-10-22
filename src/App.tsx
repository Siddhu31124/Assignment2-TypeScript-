import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Router from "./utils/Routers";

function App() {
  const router = Router();
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
