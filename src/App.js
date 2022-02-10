import React, { useEffect } from "react";
import { Route, Router, Routes, useLocation, useNavigate } from "react-router";
import DataSidePanel from "./Component/DataSidePanel/DataSidePanel";
import MainLayout from "./Component/MainLayout/MainLayout";
import Dashboard from "./Container/Dashboard/Dashboard";
import { ColorMap } from "./Container/InterActiveMap/InterActiveMap";
import OverviewStat from "./Container/OverviewStat/OverviewStat";
import ProjectManagment from "./Container/ProjectManagment/ProjectManagment";
import TrackingDashboard from "./Container/TrackingDashboard/TrackingDashboard";
import Users from "./Container/Users/Users";
import Investor from "./Container/Investor/Investor";
import StakeHolders from "./Container/StackHolders/StakeHolders";
import Admins from "./Container/Admins/Admin";
import ManageInvestor from "./Container/Investor/ManageInvestor";





function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/tracking-dashboard") {
      navigate("/create-dashboard");
    }
  }, []);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<OverviewStat />} />
        <Route path="/create-dashboard" element={<Dashboard />} />
        <Route path="/location-map" element={<ColorMap />} />
        <Route path="/tracking-dashboard" element={<TrackingDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/project-managment" element={<ProjectManagment />} />
        <Route path="/investors" element={<Investor />} />
        <Route path="/manage-investor" element={<ManageInvestor />} />

        <Route path="/stake-holders" element={<StakeHolders />} />
        <Route path="/admins" element={<Admins />} />





      </Routes>
    </MainLayout>
  );
}

export default App;
