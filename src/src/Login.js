import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthStore from "./AuthStore";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await AuthStore.login(loginData);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="E-mail"
        fullWidth
        margin="normal"
        variant="outlined"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <TextField
        label="Senha"
        fullWidth
        margin="normal"
        variant="outlined"
        type="password" // Add this line to make it a password field
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Entrar
      </Button>
    </Container>
  );
};

export default Login;
