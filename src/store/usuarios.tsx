import { LoginUserType } from '@/types/LoginUserType'
import { api } from '../services/api'

const route = '/usuarios'

export const listUsuarios = async (data: any) => {
  return await api
    .post(`${route}`, data)
    .then(response => {
      return response.data.usuarios
    })
    .catch(error => {
      return undefined
    })
}

export const loginUserFunction = async (dadosLogin: LoginUserType) => {
  return await api
    .post('/auth', dadosLogin)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return undefined
    })
}
