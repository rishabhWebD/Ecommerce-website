import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  background-image: url("//unsplash.it/800/800");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
`;

const Cart = () => {
  return (
    <CartContainer>
      <h1>Your Products</h1>
      <Button
        variant="contained"
        color="success"
        size="large"
        // startIcon={<SendIcon />}
      >
        Proceed
      </Button>
    </CartContainer>
  );
};

export default Cart;
