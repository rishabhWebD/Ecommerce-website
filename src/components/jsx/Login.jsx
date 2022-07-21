import React from "react";
import styled, { keyframes } from "styled-components";
import { Button, TextField, Typography } from "@mui/material";

const rotate = keyframes`
    100% {
		transform: rotate(1turn);
	}
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("//unsplash.it//1000/700");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
  margin-top: 75px;
  position: relative;
  z-index: 0;
  width: 400px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953),
      linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33),
      linear-gradient(#377af5, #377af5);
    animation: ${rotate} 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: whitesmoke;
    border-radius: 5px;
  }
`;

function Login() {
  return (
    <Main>
      <Container>
        <Typography variant="h4" gutterBottom component="div">
          Enter Username
        </Typography>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <Typography variant="h4" gutterBottom component="div">
          Enter Password
        </Typography>
        <TextField
          id="outlined-password-input"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button variant="contained">Log In</Button>
      </Container>
    </Main>
  );
}

export default Login;
