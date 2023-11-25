import axios from 'axios'
import { ILogin } from '../types'
import { IResponse } from '../../modules/common/types/api'

/**
 * @returns
 */
export const login = (payload: ILogin) => {
  return axios.post<IResponse>('/login', payload)
}
