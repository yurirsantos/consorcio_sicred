import ActionsSidebarType from "./actionTypes";

export const showSidebar = (payload: boolean) => ({
  type: ActionsSidebarType.SHOWSIDEBAR,
  payload: payload,
})