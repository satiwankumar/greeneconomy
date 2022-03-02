import React, { useEffect } from "react";
import { Route, Router, Routes, useLocation, useNavigate } from "react-router";
import DataSidePanel from "./Component/DataSidePanel/DataSidePanel";
import MainLayout from "./Component/MainLayout/MainLayout";
import Dashboard from "./Container/Dashboard/Dashboard";
import { ColorMap } from "./Container/InterActiveMap/InterActiveMap";
// import Map from "./Container/InterActiveMap/Map.js";

import OverviewStat from "./Container/OverviewStat/OverviewStat";
import ProjectManagment from "./Container/ProjectManagment/ProjectManagment";
import TrackingDashboard from "./Container/TrackingDashboard/TrackingDashboard";
import Users from "./Container/Users/Users";
import Investor from "./Container/Investor/Investor";
import StakeHolders from "./Container/StackHolders/StakeHolders";
import Admins from "./Container/Admins/Admin";
import ManageInvestor from "./Container/Investor/ManageInvestor";
import TeamCollaboration from "./Container/TeamCollaboration/TeamCollaboration";
import RoleManager from "./Container/RoleManager/RoleManager";
import { DataPreference } from "./Container/DataPreferenceList/DataPreference";
import AddAdmin from "./Container/Admins/AddAdmin";
import UpdateAdmin from "./Container/Admins/UpdateAdmin";
import AddStakeHolder from "./Container/StackHolders/AddStakeHolder";
import UpdateStakeHolder from "./Container/StackHolders/UpdateStakeHolder";
import AddInvestor from "./Container/Investor/AddInvestor";
import Notes from "./Container/Notes/Notes";
import Reminder from "./Container/Reminders/Reminder";
import CreateDataPreference from "./Container/DataPreferenceList/CreateDataPreference";
import CreateAndViewDataPoint from "./Container/DataPreferenceList/CreateAndViewDataPoints";
import { AuthenticationLog } from "./Container/AuthenticationLog/Authentication";
import { ContentManager } from "./Container/ContentManager/ContentManager";
import ViewProjectManagment from "./Container/ProjectManagment/ViewProjectManagment";
import EditNotes from  "./Container/Notes/EditNotes"
import  SessionLog from "./Container/SessionLog/SessionLog";
import  ActivityLog from "./Container/ActivityLog/ActivityLog";











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
        {/* <Route path="/maps" element={<Map />} /> */}
        <Route path="/tracking-dashboard" element={<TrackingDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/project-managment" element={<ProjectManagment />} />
        <Route path="/investors" element={<Investor />} />
        <Route path="/manage-investor" element={<ManageInvestor />} />
        <Route path="/add-investor" element={<AddInvestor />} />
        <Route path="/team-collaboration" element={<TeamCollaboration />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/role-manager" element={<RoleManager />} />
        <Route path="/data-preference" element={<DataPreference />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/stake-holders" element={<StakeHolders />} />
        <Route path="/add-stakeholder" element={<AddStakeHolder />} />
        <Route path="/manage-stakeholder" element={<UpdateStakeHolder />} />
        <Route path="/manage-admin" element={<UpdateAdmin />} />
        <Route path="/personal-notes" element={<Notes />} />
        <Route path="/session-log" element={<SessionLog/>} />
        <Route path="/activity-log" element={<ActivityLog/>} />
        <Route path="/my-reminder" element={<Reminder />} />
        <Route path="/manage-data-preference" element={<CreateDataPreference />} />
        <Route path="/create-and-view-data-point" element={<CreateAndViewDataPoint />} />
        <Route path="/authentication-log" element={<AuthenticationLog />} />
        <Route path="/content-managermaps" element={<ContentManager />} />
        <Route path="/edit-notes/:id" element={<EditNotes />} />
        <Route path="/manage-projects" element={<ViewProjectManagment/>} />











      </Routes>
    </MainLayout>
  );
}

export default App;
