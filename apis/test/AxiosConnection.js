import axios from 'axios'

// setup axios here
const axiosInstance = axios.create({
  baseURL: `${process.env.testApiBaseUrl}/api/`
})

// before request is done.
axiosInstance.interceptors.request.use(config => {
  // setup authentication
  return config
})

// response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // response log &/or just return data
    return response.data
  },
  error => {
    // error logging
    console.log('we encountered an error', error)
    throw error
  }
)

export default axiosInstance
