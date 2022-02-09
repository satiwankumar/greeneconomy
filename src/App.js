import React, { useEffect } from "react";
import { Route, Router, Routes, useLocation, useNavigate } from "react-router";
import DataSidePanel from "./Component/DataSidePanel/DataSidePanel";
import MainLayout from "./Component/MainLayout/MainLayout";
import Dashboard from "./Container/Dashboard/Dashboard";
import { ColorMap } from "./Container/InterActiveMap/InterActiveMap";
import OverviewStat from "./Container/OverviewStat/OverviewStat";
import TrackingDashboard from "./Container/TrackingDashboard/TrackingDashboard";

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
      </Routes>
    </MainLayout>
  );
}

export default App;
