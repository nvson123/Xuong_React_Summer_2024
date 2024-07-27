/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { IFormInput, Product } from '../interfaces/Products'

interface ProductContextProps {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  deleteProduct: (id: number) => void
  showSuccess: boolean
  showConfirm: boolean
  confirmDelete: (id: number) => void
  handleConfirmClose: () => void
  handleConfirmDelete: () => void
  fetchProduct: (id: number) => Promise<Product | undefined>
  updateProduct: (id: number, updatedProduct: Partial<Product>) => Promise<void>
  addProduct: (data: IFormInput) => Promise<void>
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined)

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [showConfirm, setShowConfirm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('http://localhost:3000/products')
      setProducts(data)
    })()
  }, [])

  const deleteProduct = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`)
      setProducts(products.filter((product) => product.id !== id))
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 2000)
    } catch (error) {
      console.error('There was an error deleting the product!', error)
    }
  }

  const confirmDelete = (id: number) => {
    setDeleteId(id)
    setShowConfirm(true)
  }

  const handleConfirmClose = () => {
    setShowConfirm(false)
    setDeleteId(null)
  }

  const handleConfirmDelete = () => {
    if (deleteId !== null) {
      deleteProduct(deleteId)
      setShowConfirm(false)
    }
  }

  const fetchProduct = async (id: string): Promise<Product | undefined> => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`)
      return response.data
    } catch (error) {
      console.error('There was an error fetching the product!', error)
      return undefined
    }
  }

  const updateProduct = async (id: string, updatedProduct: Partial<Product>) => {
    try {
      const numericId = Number(id) // Convert string id to number
      await axios.put(`http://localhost:3000/products/${id}`, updatedProduct)
      setProducts(products.map((product) => (product.id === numericId ? { ...product, ...updatedProduct } : product)))
    } catch (error) {
      console.error('There was an error updating the product!', error)
    }
  }

  const addProduct = async (data: IFormInput) => {
    try {
      const response = await axios.post('http://localhost:3000/products', data)
      setProducts([...products, response.data])
    } catch (error) {
      console.error('There was an error adding the product!', error)
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        deleteProduct,
        showSuccess,
        showConfirm,
        confirmDelete,
        handleConfirmClose,
        handleConfirmDelete,
        fetchProduct,
        updateProduct,
        addProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}
