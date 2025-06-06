import { LoginFormValues } from '../login/schema'
import axios from '@/core/api/axios'

export const login = async (data: LoginFormValues) => {
  const response = await axios.post('/auth/login', data)
  return response.data
}
