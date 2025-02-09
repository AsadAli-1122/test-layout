"use client";
import { layoutConfig } from "@/config/layout";
import { toggleSidebar } from "@/redux/slices/sidebarSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed left-0 top-0 bottom-0 bg-orange-500 bg-opacity-30 flex flex-col items-center space-y-2 py-4 overflow-y-auto duration-1000 ease-in-out `}
      style={{ width: layoutConfig.sidebarWidth }}
    >
      <button
        className="w-10 h-10 rounded-xl flex justify-center items-center hover:bg-indigo-100 active:bg-indigo-600"
        onClick={() => dispatch(toggleSidebar())}
      >
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        >
          <g strokeLinecap="round">
            <path d="M20 7H4"></path>
            <path d="M20 12H4" opacity=".5"></path>
            <path d="M20 17H4"></path>
          </g>
        </svg>
      </button>

      side bar icons here
    </div>
  );
};

export default Sidebar;
