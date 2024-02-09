import { Container, Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Button from './Button';
import ProductCounter from './ProductCounter';


const Product = () => {
  return (
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
              src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
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
              WH-1000XM5</Typography>
          <Typography variant="body1" sx={{ color: "#727272", width: "35vw", fontSize: "1.2rem" }}>
              See how these noise cancelling headphones combine our best ever noise cancelling technology with superlative sound for a truly remarkable listening experience.</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <ProductCounter />
              <Button
                  variant='contained'
                  color='var(--primary)'>
                  Add to Cart
                  </Button>  
              </Box>
    
      </Box>
    </Container>
  )
}

export default Product