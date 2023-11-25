// src/components/Login.js
import React from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';

const Login = () => {
    const handleLogin = () => {
        // Lógica de autenticação (não implementada neste exemplo)
        console.log('Usuário autenticado');
      };
    
      return (
        <Container component="article" maxWidth="sm">
          <Typography variant="h3" component="h1" align="center">Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              id="email"
              label="E-mail"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              id="password"
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Entrar
            </Button>
          </form>
        </Container>
      );
}
export default Login;