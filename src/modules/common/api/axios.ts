import axios from 'axios'
import { getAuthItem, getRefreshToken, setAuth, setRefresh } from '../utils/localStorage'
import { BASE_URL } from '../constant/envVariable'

const axiosConfig = () => {
  axios.defaults.baseURL = `${BASE_URL}`
  axios.defaults.headers.Accept = 'application/json'

  axios.interceptors.request.use(
    (config) => {
      // if (config.method !== 'get') {
      // }

      /**
       * * Set loading indicator for every API's call
       */
      // document.body.classList.add('loading-indicator');

      /**
       * * set token, if the user is logged in
       */
      const auth = getAuthItem()
      if (auth && auth.api_token) {
        config.headers.Authorization = `Bearer ${auth.api_token}`
      }

      return config
    },

    (err) => Promise.reject(err)
  )
  axios.interceptors.response.use(
    (res) => {
      /**
       * * remove loading indicator
       */
      // document.body.classList.remove('loading-indicator');
      return res
    },
    async (err) => {
      const originalConfig = err.config
      const lastSegment = originalConfig.url.split('/').pop()
      // const current_ url = window.location.href.split('/').pop()

      if (err.response) {
        if (lastSegment !== 'auth') {
          // Access Token was expired
          if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true
            try {
              const rs = await axios.post(`${BASE_URL}/refresh_token`, getRefreshToken())
              const { api_token, refreshToken } = rs.data

              const access_token = { api_token: api_token }
              const refresh_token = { refreshToken: refreshToken }

              setAuth(access_token)
              setRefresh(refresh_token)
              return axios(originalConfig)
            } catch (_error) {
              return Promise.reject(_error)
            }
          } else if (err.response.status === 500 && lastSegment === 'refresh_token') {
            /**
             *
             */
            localStorage.clear()
            window.location.reload()
          }
          return Promise.reject(err)
        } else {
          return Promise.reject(err)
        }
      }
    }
  )
}

export default axiosConfig
