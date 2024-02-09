import React, { ReactElement } from 'react';
import MuiButton from "@mui/material/Button";

interface Props {
    color: string;
    variant: "text" | "outlined" | "contained";
    children: React.ReactNode;
}

const Button = ({color, variant, children}: Props) => {
  return (
      <MuiButton variant={variant}
          sx={{
              background: color,
              marginTop: "3rem",
              width: "10rem",  
              borderRadius: 0,
              padding: ".8rem 1rem",
              fontWeight: 800,
          }}>
          {children}
      </MuiButton>
  );
}

export default Button;
