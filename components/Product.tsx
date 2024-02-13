import { Container, Box, Typography, Button as MuiButton } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import {Button} from './Button';
import ProductCounter from './ProductCounter';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, startNewCart } from '../store/cartSlice';

interface Props {
    product: any;
}

const Product = ({ product }: Props) => {
    const {cart} = useAppSelector((state) => state.cart);
     const [count, setCount] = useState(0);

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const dispatch = useAppDispatch();
    console.log(cart);

  return (
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
              src={product.image?.desktop.replace(".", "")}
              alt='headphones'
              width={500}
              height={500}
              
          />
          <Box
          sx={{
              display: "flex",
              flexDirection: "column",
              height: "75vh", 
              width: "50vw",
              justifyContent: "center",
              marginLeft: "8rem"
          }}
      >
          <Typography
              variant="h3"
              sx={{
                  textTransform: "uppercase",
                  fontSize: "1.5rem",
                  letterSpacing: ".5rem",
                  color: "var(--primary)",
                  marginBottom: "1rem"
                
              }}
          >
              Our Latest Products</Typography>
          <Typography
              variant="h1"
              sx={{
                  fontWeight: 600,
                  marginBottom: "2rem",
                  textTransform: "uppercase",
                  fontSize: "5rem",
              }}
          >
                  {product.name}
              </Typography>
              <Typography
                  variant="body1"
                  sx={{ color: "#727272", width: "35vw", fontSize: "1.2rem" }}
              >
               {product.description}
              </Typography>
              <Typography variant="h5">{ product.price }</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{
          backgroundColor: "#f1f1f1",
          padding: ".7rem",
          marginRight: ".5rem",
          marginTop: "3rem"
      }}>
          <MuiButton onClick={handleDecrement}>-</MuiButton>
          {count}
          <MuiButton onClick={() => setCount(count + 1)}>+</MuiButton>
    </Box>
                  <Button
                      sx={{ marginTop: "3rem" }}
                  variant='contained'
                      color='var(--primary)'
                      onClick={() =>
                      
                      {
                          dispatch(startNewCart());
                          dispatch(
                              addToCart({
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  itemCount: count,
                                  image: product.image?.mobile.replace(".", ""),
                              })
                          )}
                      }
                  >
                  Add to Cart
                  </Button>  
              </Box>
    
      </Box>
    </Container>
  )
}

export default Product