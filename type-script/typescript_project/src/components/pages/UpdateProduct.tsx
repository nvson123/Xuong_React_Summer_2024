import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useProductContext } from '../../context/ProductsContext' // Import the ProductContext hook

const UpdateProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { fetchProduct, updateProduct } = useProductContext()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const loadProduct = async () => {
      const product = await fetchProduct(Number(id))
      if (product) {
        setTitle(product.title)
        setPrice(product.price.toString()) // Convert price to string
        setDescription(product.description)
      }
    }
    loadProduct()
  }, [id, fetchProduct])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateProduct(Number(id), { title, price: parseFloat(price), description }) // Convert price back to number
      navigate('/')
    } catch (error) {
      console.error('There was an error updating the product!', error)
    }
  }

  return (
    <Container className='my-5'>
      <h1>Update Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='title' className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter product title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId='price' className='mb-3'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter product price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId='description' className='mb-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter product description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Update Product
        </Button>
      </Form>
    </Container>
  )
}

export default UpdateProduct
