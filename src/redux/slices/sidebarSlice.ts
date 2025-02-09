import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  collapsed: boolean;
  
}

const initialState: SidebarState = {
  collapsed: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
