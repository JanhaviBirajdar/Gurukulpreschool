import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || ''

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
})

export const submitInquiry = async (data) => {
  const response = await api.post('/api/inquiries', data)
  return response.data
}

export const subscribeNewsletter = async (email) => {
  const response = await api.post('/api/newsletter', { email })
  return response.data
}

export default api
