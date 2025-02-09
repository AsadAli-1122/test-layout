"use client";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import ExtendedSidebar from "./ExtendedSidebar";
import Header from "./Header";
import { RootState } from "@/redux/store";
import { layoutConfig } from "@/config/layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const collapsed = useSelector((state: RootState) => state.sidebar.collapsed);

  return (
    <div className="flex">
      <Header />
      <ExtendedSidebar />
      <Sidebar />
      <div
        className={`flex-1 min-h-screen transition-all duration-1000 ease-in-out`}
        style={{
            marginLeft: collapsed? layoutConfig.sidebarWidth : layoutConfig.sidebarWidth
        }}
      >
        <main className="px-6 duration-1000 ease-in-out" style={{
          marginTop: layoutConfig.headerHeight+ 24,
          marginBottom: 24
        }}>
          <div className={`p-6 bg-indigo-50/50 rounded-3xl duration-1000 ease-in-out`} style={{
                marginLeft: collapsed? layoutConfig.extendedSidebarWidth: 0
              }}>
          {children}
              </div>
          </main>
      </div>
    </div>
  );
};

export default Layout;
