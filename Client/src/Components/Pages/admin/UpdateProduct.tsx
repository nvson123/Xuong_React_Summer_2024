import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Container, Grid, TextField, Typography, CircularProgress, Card, CardMedia } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import FlashError from 'src/Components/FlashError';

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  category: string;
}

const UpdateProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { control, handleSubmit, setValue } = useForm<IProduct>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [flashMessage, setFlashMessage] = useState<{ open: boolean; message: string; severity: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<IProduct>(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
        setValue('name', response.data.name);
        setValue('price', response.data.price);
        setValue('description', response.data.description);
        setValue('image', response.data.image);
        setValue('images', response.data.images);
        setValue('category', response.data.category);
      } catch (error) {
        setFlashMessage({ open: true, message: 'Error fetching product data', severity: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, setValue]);

  const onSubmit = async (data: IProduct) => {
    try {
      await axios.put(`http://localhost:3000/products/${id}`, data);
      setFlashMessage({ open: true, message: 'Product updated successfully', severity: 'success' });
      navigate('/admin');
    } catch (error) {
      setFlashMessage({ open: true, message: 'Failed to update product', severity: 'error' });
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {product?.images.map((img, index) => (
              <Card key={index} sx={{ mb: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image={img}
                  alt={`Product image ${index + 1}`}
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Update Product
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <TextField {...field} label="Name" fullWidth margin="normal" />}
            />
            <Controller
              name="price"
              control={control}
              render={({ field }) => <TextField {...field} label="Price" type="number" fullWidth margin="normal" />}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => <TextField {...field} label="Description" fullWidth margin="normal" multiline rows={4} />}
            />
            <Controller
              name="image"
              control={control}
              render={({ field }) => <TextField {...field} label="Main Image URL" fullWidth margin="normal" />}
            />
            <Controller
              name="images"
              control={control}
              render={({ field }) => <TextField {...field} label="Additional Images URLs (comma separated)" fullWidth margin="normal" />}
            />
            <Controller
              name="category"
              control={control}
              render={({ field }) => <TextField {...field} label="Category" fullWidth margin="normal" />}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Update Product
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UpdateProduct;
