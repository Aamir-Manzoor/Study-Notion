import React from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import { VscSettingsGear, VscSignOut } from "react-icons/vsc";

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[15rem] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div>;
      </div>
    );
  }
  return (
    <>
      <div className="hidden lg:flex h-[calc(100vh-3.5rem)] min-w-[15rem] flex-col border-r-richblack-700 bg-richblack-800 py-10">
        <div className="lex flex-col">
          {sidebarLinks.map((link, index) => {
            if (link.type && user?.accountType !== link.type) return null;

            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />

          <button className="px-8 py-2 ttext-sm font-medium text-richblack-300">
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>logout</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
