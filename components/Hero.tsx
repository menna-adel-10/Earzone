import React from 'react'
import {Box, Typography} from '@mui/material'
import Button from './Button';


const Hero = () => {
  return (
      <Box
          sx={{
              display: "flex",
              flexDirection: "column",
              height: "75vh", 
              width: "50vw",
              justifyContent: "center"
          }}
      >
          <Typography
              variant="h3"
              sx={{
                  textTransform: "uppercase",
                  fontSize: "1.5rem",
                  letterSpacing: ".5rem",
                  color: "#4f4f4f",
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
          <Button variant='contained' color='var(--primary)'>
              See Product
          </Button>
    
      </Box>
  )
}

export default Hero