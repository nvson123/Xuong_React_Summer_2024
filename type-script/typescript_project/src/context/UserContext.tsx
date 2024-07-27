/* eslint-disable prettier/prettier */
import React, { createContext, useContext, ReactNode } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { UserFormData } from '../components/pages/FormComponent'

type UserContextProps = {
  registerUser: (data: UserFormData) => Promise<void>
  loginUser: (data: UserFormData) => Promise<void>
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate()

  const registerUser = async (data: UserFormData) => {
    try {
      const response = await axios.post('http://localhost:3000/register', data)
      localStorage.setItem('token', response.data.accessToken)
      toast.success('Registration successful! Redirecting to login page...')
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (error) {
      console.error('There was an error registering!', error)
      toast.error('There was an error registering!')
    }
  }

  const loginUser = async (data: UserFormData) => {
    try {
      const response = await axios.post('http://localhost:3000/login', data)
      localStorage.setItem('token', response.data.accessToken)
      toast.success('Login successful! Redirecting to admin page...')
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (error) {
      console.error('There was an error logging in!', error)
      toast.error('There was an error logging in!')
    }
  }

  return (
    <UserContext.Provider value={{ registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
