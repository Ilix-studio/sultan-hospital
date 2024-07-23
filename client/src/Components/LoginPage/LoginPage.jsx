import axios from 'axios'
import useAuth from '../../hooks/useAuth.js'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Title, FormWrapper, Container } from './Login-styled.js'

const LOGIN_URL = 'http://localhost:5000/api/admin/login'

const login = async ({ email, password }) => {
  const response = await axios.post(
    LOGIN_URL,
    JSON.stringify({ email, password }),
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  )
  return response.data
}

const LoginPage = () => {
  const { setAuth } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setError] = useState('')
  const navigate = useNavigate()

  const { mutate, isLoading, error } = useMutation(login, {
    onSuccess: (data) => {
      const accessToken = data?.accessToken
      setAuth({ email, password, accessToken })
      setEmail('')
      setPassword('')
      navigate('/adminDashboard')
    },
    onError: (error) => {
      if (!error.response) {
        setError('No Server Response')
      } else if (error.response?.status === 400) {
        setError('Missing Email or Password')
      } else if (error.response?.status === 401) {
        setError('Unauthorized')
      } else {
        setError('Login Failed')
      }
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate({ email, password })
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Admin Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            autocomplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={isLoading}>
            Login
          </Button>
        </form>
        {error && <p>{errorMsg}</p>}
        {mutate.isLoading && <p>Loading</p>}
      </FormWrapper>
    </Container>
  )
}

export default LoginPage
