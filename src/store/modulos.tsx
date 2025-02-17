import { api } from '../services/api'

const route = '/modulos'

export const listModusloVinculados = async () => {
  return await api
    .post(`${route}/usuarios/vinculados`)
    .then(response => {
      return response.data.modulos
    })
    .catch(error => {
      return undefined
    })
}
