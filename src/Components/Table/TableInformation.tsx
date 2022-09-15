import {
  Box,
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import { Stack } from '@mui/system';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AddIcon from '@mui/icons-material/Add';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import HeaderTable from './views/HeaderTable/HeaderTable';

function createData(
  name: string,
  category: string,
  amount: number,
  inUse: number,
  available: number,
  maintenance: number
) {
  return { name, category, amount, inUse, available, maintenance };
}

const rows = [
  createData('Frozen yoghurt', 'Frozen yoghurt', 1, 1, 1, 1),
  createData('Frozen yoghurt', 'Frozen yoghurt', 1, 1, 1, 1),
  createData('Frozen yoghurt', 'Frozen yoghurt', 1, 1, 1, 1),
  createData('Frozen yoghurt', 'Frozen yoghurt', 1, 1, 1, 1),
  createData('Frozen yoghurt', 'Frozen yoghurt', 1, 1, 1, 1),
  createData('Frozen yoghurt', 'Frozen yoghurt', 1, 1, 1, 1),
  createData('Frozen yoghurt', 'Frozen yoghurt', 1, 1, 1, 1),
  createData('Frozen yoghurt', 'Frozen yoghurt', 1, 1, 1, 1),
];

const TableInformation = () => {
  return (
    <Box sx={{ width: '80%' }}>
      <Paper sx={{ width: '80%', mb: 2 }}>
        <HeaderTable title="Inventario" />
        <Divider variant="middle" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="center">Categoria</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Disponibles</TableCell>
                <TableCell align="center">En uso</TableCell>
                <TableCell align="center">Mantenimiento</TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <Divider variant="middle" />
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="center">{row.category}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="center">{row.inUse}</TableCell>
                  <TableCell align="center">{row.available}</TableCell>
                  <TableCell align="center">{row.maintenance}</TableCell>
                  <TableCell align="center">
                    <Stack
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                      direction="row"
                    >
                      <Tooltip title="Reabastecimiento">
                        <Button
                          variant="contained"
                          color="secondary"
                          size="large"
                        >
                          <AddIcon />
                        </Button>
                      </Tooltip>
                      <Tooltip title="Mantenimiento">
                        <Button
                          variant="contained"
                          color="warning"
                          size="large"
                        >
                          <WarningAmberIcon />
                        </Button>
                      </Tooltip>
                      <Tooltip title="Pedir Equipo">
                        <Button variant="outlined" color="primary" size="large">
                          <KeyboardDoubleArrowRightIcon color="action" />
                        </Button>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableInformation;
