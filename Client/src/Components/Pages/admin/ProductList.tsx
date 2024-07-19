import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Button, Card, CardActions, CardContent, Container, Grid, Typography, Box, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { IProduct } from 'src/types/Product';
import FlashError from 'src/Components/FlashError';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [flashMessage, setFlashMessage] = useState<{ open: boolean; message: string; severity: 'success' | 'error' } | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [productIdToDelete, setProductIdToDelete] = useState<number | null>(null);
  const navigate = useNavigate(); // Add useNavigate hook

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get<IProduct[]>('http://localhost:3000/products');
      setProducts(response.data);
    } catch (err) {
      setFlashMessage({ open: true, message: 'Error fetching products', severity: 'error' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = async () => {
    if (productIdToDelete === null) return;

    try {
      await axios.delete(`http://localhost:3000/products/${productIdToDelete}`);
      setFlashMessage({ open: true, message: 'Product deleted successfully', severity: 'success' });
      fetchProducts(); // Refresh the product list
    } catch (err) {
      setFlashMessage({ open: true, message: 'Failed to delete product', severity: 'error' });
    } finally {
      setDialogOpen(false);
      setProductIdToDelete(null);
    }
  };

  const handleConfirmDelete = (id: number) => {
    setProductIdToDelete(id);
    setDialogOpen(true);
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
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2">${product.price}</Typography>
                <Typography variant="body2">{product.description}</Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={() => navigate(`/admin/update-product/${product.id}`)} // Navigate to the update page
                    sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleConfirmDelete(product.id)}
                    sx={{ backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#b71c1c' } }}
                  >
                    Delete
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FlashError Component */}
      {flashMessage && (
        <FlashError
          open={flashMessage.open}
          message={flashMessage.message}
          onClose={handleCloseFlash}
          severity={flashMessage.severity}
        />
      )}

      {/* Confirmation Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="confirm-delete-dialog-title"
        aria-describedby="confirm-delete-dialog-description"
      >
        <DialogTitle id="confirm-delete-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography id="confirm-delete-dialog-description">
            Are you sure you want to delete this product?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProductList;
