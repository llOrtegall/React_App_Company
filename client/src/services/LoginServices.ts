import axios, { type AxiosResponse } from 'axios'
import { type User } from '../types/User'

interface LoginResponse {
  auth: boolean
  token: string
}

export const getLogin = async ({ username, password }: { username: string, password: string }): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post('/login', { username, password })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getProfile = async ({ token }: { token: string }): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await axios.get('/profile', { headers: { Authorization: `Bearer ${token}` } })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
