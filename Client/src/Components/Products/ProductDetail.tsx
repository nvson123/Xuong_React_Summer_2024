import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Grid, Typography, Box, Button, TextField } from '@mui/material';
import Banner from '../Layout/Banner';
import { IProduct } from '../../types/Product';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import StarIcon from '@mui/icons-material/Star';
import Loading from '../Loading';


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const fetchProductData = useCallback(async () => {
    try {
        const response = await axios.get<IProduct>(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
    } catch (err) {
        setError('Error fetching the product data');
    } finally {
        setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon key={i} style={{ color: i <= rating ? 'gold' : 'gray' }} />
      );
    }
    return stars;
  };

  if (loading) {
    return <Loading message="Loading product details..." />;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <>
      <Header />
      <Banner image={product.image} title="Product Details" subtitle={product.name} />
      <Container>
        <Box mt={2}>
          <Typography variant="h6" component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link> &gt;{' '}
            <Link to={`/category/${product.category}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product.category}</Link> &gt;{' '}
            <span>{product.name}</span>
          </Typography>
        </Box>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <Box mt={2}>
              <Grid container spacing={2}>
                {product.images.map((img, index) => (
                  <Grid item xs={3} key={index}>
                    <img src={img} alt={`${product.name} ${index}`} style={{ width: '100%', height: 'auto' }} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ${product.price}
            </Typography>
            <Typography variant="body1" mt={2}>
              {product.description}
            </Typography>
            <Box mt={2} display="flex" alignItems="center">
              <TextField
                type="number"
                label="Quantity"
                value={quantity}
                onChange={handleQuantityChange}
                InputProps={{ inputProps: { min: 1 } }}
                size="small"
                sx={{ maxWidth: '100px', mr: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#f50057',
                  '&:hover': {
                    backgroundColor: '#c51162',
                  },
                  textTransform: 'none',
                  fontSize: '16px',
                }}
              >
                Add to Cart
              </Button>
            </Box>
            <Box mt={4}>
              <Typography variant="h6">Rating</Typography>
              <Box display="flex" alignItems="center">
                {renderRating(product.rating)}
                <Typography variant="body2" ml={1}>{product.rating}/5</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
