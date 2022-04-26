import axios from 'axios'
import cookies from 'js-cookie'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
})

const onRequest = config => {
  if (!cookies.get('XSRF-TOKEN')) {
    return config
  }

  if (['post', 'put', 'delete'].includes(config.method)) {
    return setCSRFToken().then(response => config)
  }

  return config
}

const setCSRFToken = () => {
  return api.get('/csrf-cookie')
}

api.interceptors.request.use(onRequest, null)

export default api
