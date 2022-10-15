import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo_bomberos from './assets/logo_bomberos.jpg';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {
  const style1 = {
    imagenlogo: {
      width: '85px',
    },
  };

  const form = {
    width: 100,
    marginTop: 1,
  };

  return (
    <>
      <AppBar color="neutral" position="static">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <img
              src="./src/assets/logo_bomberos.jpg"
              style={style1.imagenlogo}
            />
          </Toolbar>
        </Container>
      </AppBar>

      <CssBaseline />
      <Container disableGutters={true} maxWidth={false}>
        <Box
          sx={{ bgcolor: '#DDDDDD', height: '91vh' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              bgcolor: '#FFFFFF',
              height: '673px',
              width: 443,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={3}
          >
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: '585px',
                width: 375,
              }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <img width={150} src="./src/assets/logo_bomberos.jpg" />
              <Typography component="h1" variant="h5">
                Bienvenido
              </Typography>
              <Typography component="h3" variant="subtitle1">
                Inicia sesion con tu cuenta
              </Typography>
              <form>
                <TextField
                  fullWidth
                  autoFocus
                  color="primary"
                  margin="normal"
                  variant="outlined"
                  label="Usuario"
                  name="Usuario"
                />
                <TextField
                  fullWidth
                  type="password"
                  color="primary"
                  margin="normal"
                  variant="outlined"
                  label="Contraseña"
                  name="Password"
                />
                <Button fullWidth variant="contained" color="primary">
                  Iniciar Sesion
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
