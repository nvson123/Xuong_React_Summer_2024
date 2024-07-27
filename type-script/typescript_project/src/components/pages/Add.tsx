import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useProductContext } from '../../context/ProductsContext'
import { IFormInput } from '../../interfaces/Products'

const AddProduct: React.FC = () => {
  const navigate = useNavigate()
  const { addProduct } = useProductContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await addProduct(data)
      toast.success('Create product successful')
      navigate('/')
    } catch (error) {
      console.error('There was an error adding the product!', error)
    }
  }

  return (
    <Container className='my-5'>
      <h1>Add Product</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='title' className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product title'
            {...register('title', { required: 'Title is required' })}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type='invalid'>{errors.title?.message}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='price' className='mb-3'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter product price'
            {...register('price', { required: 'Price is required', valueAsNumber: true })}
            isInvalid={!!errors.price}
          />
          <Form.Control.Feedback type='invalid'>{errors.price?.message}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='description' className='mb-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter product description'
            {...register('description', { required: 'Description is required' })}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type='invalid'>{errors.description?.message}</Form.Control.Feedback>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Add Product
        </Button>
      </Form>
    </Container>
  )
}

export default AddProduct
