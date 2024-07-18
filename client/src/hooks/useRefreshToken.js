import axios from 'axios'
import useAuth from './useAuth'

const refreshTokenAPI = async () => {
  const { datas } = await axios.get('http://localhost:5000/api/admin/refresh', {
    withCredentials: true,
  })
  return datas
}

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await refreshTokenAPI()
    setAuth((prev) => {
      console.log(JSON.stringify(prev))
      console.log(response.data.accessToken)
      return { ...prev, accessToken: response.data.accessToken }
    })
    return response.data.accessToken
  }

  return refresh
}

export default useRefreshToken
// I made this function because to call when the access token will expire.
// It will refresh and get a new token and retry
