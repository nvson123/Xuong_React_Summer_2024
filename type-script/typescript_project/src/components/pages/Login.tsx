/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import FormComponent from './FormComponent'
import { useUserContext } from '../../context/UserContext'

const Login: React.FC = () => {
  const { loginUser } = useUserContext()

  return <FormComponent handleSubmit={loginUser} buttonText='Login' />
}

export default Login
