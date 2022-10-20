import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useAppSelector } from '../../../../Redux';

const InformationBox = () => {
  const { data } = useAppSelector((state) => state.dataSupplies);

  return (
    <Card
      style={{ backgroundColor: '#FF6F6F', color: '#fff' }}
      sx={{ minWidth: 100, minHeight: 100, maxHeight: 350 }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs>
          <CardContent sx={{ padding: '25px' }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 'bold',
              }}
              gutterBottom
            >
              Todos los productos
            </Typography>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 'bold',
              }}
              gutterBottom
            >
              {data.length}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs>
          <CardContent sx={{ padding: '25px 50px 0 50px' }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 'bold',
              }}
              gutterBottom
            >
              En uso
            </Typography>
            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} gutterBottom>
              0
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InformationBox;
