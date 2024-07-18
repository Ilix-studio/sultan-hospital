import { useState } from 'react'
import axios from 'axios'
import { FormContainer, Label, Input, SubmitButton } from './form-styled'
import { useMutation } from 'react-query'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const AppointEndpoint = 'http://localhost:5000/api/form/create'

const form = async ({ patientName, phoneNumber }) => {
  const response = await axios.post(
    AppointEndpoint,
    JSON.stringify({ patientName, phoneNumber }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )
  return response.data
}

const AppointmentForm = () => {
  const [patientName, setPatientName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errorMsg, setError] = useState('')

  const { mutate, isLoading, error } = useMutation(form, {
    onSuccess: (data) => {
      setPatientName('')
      setPhoneNumber('')
      toast.success('Appointment created successfully')
    },
    onError: (error) => {
      if (!error.response) {
        setError('No Server Response')
      } else if (error.response?.status === 400) {
        toast.error('Something is wrong')
      }
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate({ patientName, phoneNumber })
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Label>
          Patient Name:
          <Input
            type="text"
            name="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </Label>
        <Label>
          Enter Phone Number
          <Input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Label>
        <SubmitButton type="submit" disabled={isLoading}>
          Submit
        </SubmitButton>
      </FormContainer>
      {error && <p>{errorMsg}</p>}
      {mutate.isLoading && <p>Loading</p>}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}
export default AppointmentForm
