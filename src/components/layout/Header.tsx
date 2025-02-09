"use client"
import { layoutConfig } from '@/config/layout';
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from "react-redux";

const Header = () => {
  const {collapsed} = useSelector((state: RootState) => state.sidebar);
  return (
    <div className={`fixed top-0 right-0 duration-1000 ease-in-out bg-green-400 bg-opacity-30 flex justify-between`} style={{
      height: layoutConfig.headerHeight,
        left: !collapsed ? layoutConfig.sidebarWidth : layoutConfig.sidebarWidth + layoutConfig.extendedSidebarWidth,
      }}
      >
      <span>Header Here</span>
      <span>Header Here</span>
    </div>
  )
}

export default Header;
