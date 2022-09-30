import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from '@mui/material';
import { Stack } from '@mui/system';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AddIcon from '@mui/icons-material/Add';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import HeaderTable from './views/HeaderTable/HeaderTable';
import ButtonAction from './views/ButtonAction/ButtonAction';
import { EnhancedTableHead } from './views/HeaderTable/EnhancedTableHead';
import { useState } from 'react';
import { Data, getComparator, Order } from './utils/sortData';

function createDataInventory(
  id: number,
  codigo: string,
  categoria: string,
  cantidad: number,
  descripcion: string,
  unitValue: number,
  total: number,
  activo: string,
  donacion: number,
  ubicacion: string
) {
  return {
    id,
    codigo,
    categoria,
    cantidad,
    descripcion,
    unitValue,
    total,
    activo,
    donacion,
    ubicacion,
  };
}

const rows = [
  createDataInventory(
    1,
    'a',
    'test',
    4,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, metus quis pretium posuere, quam risus elementum nisi, sit amet mattis ipsum tellus tristique nisi.',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'b',
    'test',
    4,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, metus quis pretium posuere, quam risus elementum nisi, sit amet mattis ipsum tellus tristique nisi.',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'c',
    'test',
    4,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, metus quis pretium posuere, quam risus elementum nisi, sit amet mattis ipsum tellus tristique nisi.',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'd',
    'test',
    4,
    'Lorem ipsum dolor sit amet, consectetur sit amet, consectetur adipiscing elit. Duis sagittis, metus quissit amet, consectetur adipiscing elit. Duis sagittis, metus quissit amet, consectetur adipiscing elit. Duis sagittis, metus quissit amet, consectetur adipiscing elit. Duis sagittis, metus quissit amet, consectetur adipiscing elit. Duis sagittis, metus quissit amet, consectetur adipiscing elit. Duis sagittis, metus quissit amet, consectetur adipiscing elit. Duis sagittis, metus quisadipiscing elit. Duis sagittis, metus quis pretium posuere, quam risus elementum nisi, sit amet mattis ipsum tellus tristique nisi.',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'e',
    'test',
    4,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, metus quis pretium posuere, quam risus elementum nisi, sit amet mattis ipsum tellus tristique nisi.',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
  createDataInventory(
    1,
    'f',
    'test',
    4,
    'testtsetststestestes',
    5,
    5,
    'activo',
    5,
    'prueba'
  ),
];

const TableInformation = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('codigo');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.codigo);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;
  return (
    <Box sx={{ width: '85%' }}>
      <Paper sx={{ width: '85%', mb: 2 }}>
        <HeaderTable title="Inventario" />
        <Divider variant="middle" />
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 750,
              maxWidth: 2000,
              minHeight: 550,
              maxHeight: 550,
            }}
            aria-label="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <Divider variant="middle" />
            <TableBody>
              {rows
                .slice()
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.categoria);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      sx={{
                        minHeight: 50,
                        maxHeight: 50,
                        overflow: 'hidden',
                      }}
                      hover
                      onClick={(event) => handleClick(event, row.categoria)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.categoria}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="center"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.codigo}</TableCell>
                      <TableCell align="center">
                        <Chip
                          label={row.categoria}
                          color="primary"
                          size="medium"
                        />
                      </TableCell>
                      <TableCell align="center">{row.cantidad}</TableCell>
                      <TableCell
                        align="center"
                        style={{
                          whiteSpace: 'normal',
                          wordWrap: 'break-word',
                        }}
                      >
                        {row.descripcion}
                      </TableCell>
                      <TableCell align="center">{row.unitValue}</TableCell>
                      <TableCell align="center">{row.total}</TableCell>
                      <TableCell align="center">{row.activo}</TableCell>
                      <TableCell align="center">{row.donacion}</TableCell>
                      <TableCell align="center">{row.ubicacion}</TableCell>
                      <TableCell align="center">
                        <Stack
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                          direction="row"
                        >
                          <ButtonAction
                            title="Reabastecimiento"
                            variant="contained"
                            color="secondary"
                            size="large"
                            IconButton={<AddIcon />}
                          />
                          <ButtonAction
                            title="Mantenimiento"
                            variant="contained"
                            color="warning"
                            size="large"
                            IconButton={<WarningAmberIcon />}
                          />
                          <ButtonAction
                            title="Pedir Equipo"
                            variant="outlined"
                            color="primary"
                            size="large"
                            IconButton={
                              <KeyboardDoubleArrowRightIcon color="action" />
                            }
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default TableInformation;
