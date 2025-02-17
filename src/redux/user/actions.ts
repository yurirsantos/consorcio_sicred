import { ReturnUsuarioLoginType } from "@/types/UsuarioType";
import ActionsUserType from "./actionTypes";
import { CaminhoType } from "@/types/General";

export const loginUser = (payload: ReturnUsuarioLoginType, token: string, acessos: CaminhoType) => ({
  type: ActionsUserType.LOGIN,
  payload,
  token,
  acessos
})

export const logoutUser = () => ({
  type: ActionsUserType.LOGOUT
})