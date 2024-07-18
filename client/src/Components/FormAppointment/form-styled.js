import styled from 'styled-components'
const FormContainer = styled.form`
  display: flex;
  flex-direction: column; /* Arrange elements vertically */
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`

const Label = styled.label`
  margin-bottom: 10px; /* Add spacing between labels */
`

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`

const SubmitButton = styled.button`
  /* Set the type attribute */
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`

export { FormContainer, Label, Input, SubmitButton }
