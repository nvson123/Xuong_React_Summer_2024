import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, CardActions, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { IProduct } from '../../types/Product';
import Loading from '../Loading';


const List = () => {
    const [products, setProducts] = useState<IProduct[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showProducts, setShowProducts] = useState<boolean>(false);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products');
            setProducts(response.data);
        } catch (err) {
            setError('Error fetching the product data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();

        const timer = setTimeout(() => {
            setShowProducts(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!showProducts) {
        return <Loading message="Loading products..." />;
    }

    if (loading) {
        return <Loading message="Loading products..." />;
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    if (!products || products.length === 0) {
        return <Typography variant="h6">No products available</Typography>;
    }

    return (
        <Container>
            <Grid container spacing={3} style={{ padding: '20px' }}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent style={{ textAlign: 'center' }}>
                                <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                                <Typography variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ${product.price}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }}>
                                <Button size="small" component={Link} to={`/product/${product.id}`}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default List;
