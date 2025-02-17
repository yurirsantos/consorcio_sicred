import ActionsLoadingType from "./actionTypes";

export const loadingPage = (payload: boolean) => ({
  type: ActionsLoadingType.LOADING,
  payload: payload,
})