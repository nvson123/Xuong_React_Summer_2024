import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

export interface UserFormData {
  email: string
  password: string
}

interface FormComponentProps {
  handleSubmit: (data: UserFormData) => void
  buttonText: string
}

const FormComponent: React.FC<FormComponentProps> = ({ handleSubmit, buttonText }) => {
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors }
  } = useForm<UserFormData>()

  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    handleSubmit(data)
  }

  return (
    <form onSubmit={formSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input {...register('email', { required: 'Email is required' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type='password' {...register('password', { required: 'Password is required' })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type='submit'>{buttonText}</button>
    </form>
  )
}

export default FormComponent
