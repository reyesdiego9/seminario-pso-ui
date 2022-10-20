import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const Auth = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://localhost:3001/login', {
        email: email,
        password: password,
      });
      console.log('resp', resp);
      // history.push('/dashboard');
    } catch (error: any) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const style1 = {
    imagenlogo: {
      width: '85px',
    },
  };

  return (
    <>
      <AppBar color="inherit" position="static">
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  fullWidth
                  type="password"
                  color="primary"
                  margin="normal"
                  variant="outlined"
                  label="Contraseña"
                  name="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Link to="/home">
                  <Button fullWidth variant="contained" color="primary">
                    Iniciar Sesion
                  </Button>
                </Link>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
