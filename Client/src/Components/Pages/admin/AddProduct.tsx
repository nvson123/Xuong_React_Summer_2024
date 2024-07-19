import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Container, TextField, Typography, CircularProgress } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { IProduct } from 'src/types/Product';
import FlashError from 'src/Components/FlashError';


const AddProduct: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm<IProduct>({
    defaultValues: {
      name: '',
      price: 0,
      description: '',
      image: '',
      images: [],
      category: ''
    }
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const [flashMessage, setFlashMessage] = React.useState<{ open: boolean; message: string; severity: 'success' | 'error' } | null>(null);

  const onSubmit = async (data: IProduct) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:3000/products', data);
      setFlashMessage({ open: true, message: 'Product added successfully', severity: 'success' });
      navigate('/admin');
    } catch (error) {
      setFlashMessage({ open: true, message: 'Failed to add product', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseFlash = () => {
    setFlashMessage(null);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      {flashMessage && (
        <FlashError
          open={flashMessage.open}
          message={flashMessage.message}
          onClose={handleCloseFlash}
          severity={flashMessage.severity}
        />
      )}
      <Typography variant="h5" gutterBottom>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          rules={{ required: 'Price is required', min: { value: 0, message: 'Price must be greater than 0' } }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Price"
              type="number"
              fullWidth
              margin="normal"
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: 'Description is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          )}
        />
        <Controller
          name="image"
          control={control}
          rules={{ required: 'Main Image URL is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Main Image URL"
              fullWidth
              margin="normal"
              error={!!errors.image}
              helperText={errors.image?.message}
            />
          )}
        />
        <Controller
          name="category"
          control={control}
          rules={{ required: 'Category is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Category"
              fullWidth
              margin="normal"
              error={!!errors.category}
              helperText={errors.category?.message}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add Product
        </Button>
      </form>
    </Container>
  );
};

export default AddProduct;
