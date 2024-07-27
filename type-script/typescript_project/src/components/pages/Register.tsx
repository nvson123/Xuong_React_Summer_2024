import React from 'react'
import FormComponent from './FormComponent'
import { useUserContext } from '../../context/UserContext'

const Register: React.FC = () => {
  const { registerUser } = useUserContext()

  return <FormComponent handleSubmit={registerUser} buttonText='Register' />
}

export default Register
