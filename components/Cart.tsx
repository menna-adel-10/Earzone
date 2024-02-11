import { Box, Typography } from '@mui/material'
import React from 'react'
import {Button} from './Button'
import Image from 'next/image'
import { useAppSelector } from '../store/hooks'

const Cart = () => {
    const { cart } = useAppSelector((state) => state.cart)
  return (
      <Box sx={{
          position: "absolute",
          height: "100vh",
          width: "99.2vw",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          top: 100,
      }}>
          <Box sx={{
          position: "absolute",
          right: 290,
          top: 20,
          minHeight: "20vh",
          width: "20vw",
          backgroundColor: "white",
          color: "black",
          padding: "1.5rem",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column"
          
      }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Cart</Typography>
                <Typography>Remove All</Typography>
              </Box> 
              <Box>
              {cart.map((product) => {
                  return (
                      <Box key={product.id}>
                          <Image
                              src={product.image}
                              alt='headphones'
                              width={50}
                              height={50}
                          />
                      </Box>
                  );
              })} 
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant='body1'>{product.name}</Typography>
                  <Typography variant='body2'>{product.price}</Typography>
                  </Box>
             </Box>
              <Button
                  color='var(--primary)'
                  variant='contained'
                  sx={{ width: "100%" }}>
                  Checkout
              </Button>
    </Box>
      </Box>
  )
}

export default Cart