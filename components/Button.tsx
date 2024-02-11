import React from 'react';
import MuiButton from "@mui/material/Button";

interface Props {
    color: string;
    variant: "text" | "outlined" | "contained";
    children: React.ReactNode;
    sx?: any;
    onClick?: () => void;
}

const Button = ({color, variant, children, sx}: Props) => {
  return (
      <MuiButton variant={variant}
          sx={{
              background: color,
              marginTop: "3rem",
              width: "10rem",  
              borderRadius: 0,
              padding: ".8rem 1rem",
              fontWeight: 800,
              ...sx
          }}>
          {children}
      </MuiButton>
  );
}

export default Button;
