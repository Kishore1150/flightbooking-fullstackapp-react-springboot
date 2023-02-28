import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Viewflightdetails from "./admingpages/Viewflightdetails";
import Landingpage from "./admingpages/Landingpage";
import Deleteflights from "./admingpages/Deleteflights";
import Addflightdetails from "./admingpages/Addflightdetails";
import Updateflightdetails from "./admingpages/Updateflightdetails";
import Landingpage1 from "./admingpages/Landingpage1";
import ViewSignup from "./admingpages/ViewSignup";
import { States } from "./States";
import LoginPage from "./admingpages/LoginPage";
import Admindetails from "./admingpages/Admindetails";
const Routers = () => {
  return (
    <BrowserRouter>
      <States>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/deleteflightdetails" element={<Deleteflights />} />
          <Route path="/viewflightdetails" element={<Viewflightdetails />} />
          <Route path="/addflightdetails" element={<Addflightdetails />} />
          <Route path="/updateflightdetails" element={<Updateflightdetails />} />
          <Route path="/Home" element={<Landingpage1 />} />
          <Route path="/signupdetails" element={<ViewSignup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admindetails" element={<Admindetails />} />
        </Routes>
      </States>
    </BrowserRouter>
  );
};

export default Routers;
