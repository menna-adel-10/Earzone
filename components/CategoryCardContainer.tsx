import { Box, Container } from '@mui/material'
import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryCardContainer = () => {
  return (
      <div>
          <Box sx={{ margin: "4rem 0" }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
         <CategoryCard category="Headphones" />
         <CategoryCard category="Speakers" />
          <CategoryCard category="Earphones" />
        </Container>
      </Box></div>
  )
}

export default CategoryCardContainer