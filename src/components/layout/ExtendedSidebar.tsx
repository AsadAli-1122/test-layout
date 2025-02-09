"use client";
import { layoutConfig } from "@/config/layout";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const ExtendedSidebar = () => {
  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);
  return (
    <div
      className={`flex fixed top-0 bottom-0 bg-green-500 transition-all duration-1000 ease-in-out bg-opacity-20`}
      style={{
        width: layoutConfig.extendedSidebarWidth,
        left: collapsed ? layoutConfig.sidebarWidth : -layoutConfig.extendedSidebarWidth + layoutConfig.sidebarWidth,
      }}
    >
      extented sidebar options here 
    </div>
  );
};

export default ExtendedSidebar;
