import ActionsLoadingType from "./actionTypes";

interface LoadingState {
  loading: any;
}

const initialState: LoadingState = {
  loading: false,
};

const loadingReducer = (
  state: LoadingState = initialState,
  action: any
): LoadingState => {
  switch (action.type) {
    case ActionsLoadingType.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default loadingReducer;
