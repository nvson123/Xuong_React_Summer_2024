import { useEffect, useState } from 'react'




import axios from 'axios';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Product } from '../types/product';
import Loading from '../compontes/Loading';

import { useParams } from 'react-router-dom';


function ProductDetail() {
    const { id } = useParams();
  
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState<boolean>(false);
  
    const getProductDetail = async (id: string) => {
      try {
        setLoading(true);
        const { data } = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      if (!id) return;
      getProductDetail(id);
    }, [id]);
  
    return (
      <>
        {loading && <Loading isShow={loading} />}
        <Container>
          {product && (
            <Stack direction={"row"} gap={3}>
              <img src={product.image} width={"500px"} />
              <Stack gap={2}>
                <Typography variant="h4" component={"h1"}>
                  {product.title}
                </Typography>
                <Typography variant="body1">
                  Mo ta: {product.description}
                </Typography>
                <Typography variant="body2" color={"red"}>
                  Price: {product.price}
                </Typography>
                <Typography variant="body1">
                  Category: {product.category}
                </Typography>
                <Typography variant="body1">
                  Rate: {product.rating.rate}
                </Typography>
                <Typography variant="body1">
                  Rate Count: {product.rating.count}
                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </Stack>
            </Stack>
          )}
        </Container>
      </>
    );
  }
  
  export default ProductDetail;



