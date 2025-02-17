import ActionsSidebarType from "./actionTypes";

interface SidebarState {
  openSidebar: any;
}

const initialState: SidebarState = {
  openSidebar: false,
};

const sidebarReducer = (
  state: SidebarState = initialState,
  action: any
): SidebarState => {
  switch (action.type) {
    case ActionsSidebarType.SHOWSIDEBAR:
      return {
        ...state,
        openSidebar: action.payload,
      };

    default:
      return state;
  }
};

export default sidebarReducer;