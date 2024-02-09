import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const ProductCounter = () => {
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

  return (
      <Box sx={{
          backgroundColor: "#f1f1f1",
          padding: ".5rem",
          marginRight: ".5rem",
          marginTop: "3rem"
      }}>
          <Button onClick={handleDecrement}>-</Button>
          {count}
          <Button onClick={() => setCount(count + 1)}>+</Button>
    </Box>
  )
}

export default ProductCounter