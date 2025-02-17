import { EsqueciSenhaType } from '@/types/LoginType'
import { api } from '../services/api'

const route = '/general'

export const esqueciSenha = async (data: EsqueciSenhaType) => {
  return await api
    .post(`${route}/solicitar/esqueci/senha`, data)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return undefined
    })
}
