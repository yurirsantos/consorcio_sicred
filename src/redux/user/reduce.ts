import ActionsUserType from "./actionTypes";

interface UserState {
  user: any;
  useredit: any;
  token: any;
  acessos: any;
}

const initialState: UserState = {
  user: null,
  useredit: null,
  token: null,
  acessos: null,
};

const userReducer = (
  state: UserState = initialState,
  action: any
): UserState => {
  switch (action.type) {
    case ActionsUserType.LOGIN:
      return {
        ...state,
        user: action.payload,
        token: action.token,
        acessos: action.acessos,
      };

    case ActionsUserType.USEREDIT:
      return {
        ...state,
        useredit: action.payload,
      };

    case ActionsUserType.USEREDITCLEAN:
      return {
        ...state,
        useredit: null,
      };

    case ActionsUserType.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
