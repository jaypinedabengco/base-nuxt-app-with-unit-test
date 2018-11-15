import axios from 'axios'
// setup axios here
const axiosInstance = axios.create({
  baseURL: `${process.env.mockJSONBaseLocation}`
})

// before request is done.
axiosInstance.interceptors.request.use(config => {
  console.log('*******THIS IS A MOCK REQUEST***********')
  console.log(`url : ${config.url}`)

  // change all request to GET
  config.method = 'get'
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
    console.log('****MOCK REQUEST ERROR*****', error)
    throw error
  }
)

export default axiosInstance
