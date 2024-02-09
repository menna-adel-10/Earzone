import React from 'react'
import Nav from '../components/Nav'
import { Box } from '@mui/material'
import Product from '../components/Product'

const products = () => {
  return (
    <Box>
      <Nav />
      <Product/> 
    </Box>
  )
}

export default products