import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/core/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  if (profileLoading || authLoading) {
    return <div className="spinner mt-10"></div>;
  }
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] w-full overflow-auto">
        <div className="mx-auto w-11/12 max-w-[62.6rem] py-10">
        <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
