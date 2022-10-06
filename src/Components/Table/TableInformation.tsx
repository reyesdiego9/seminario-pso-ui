import {
  Box,
  Chip,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
import { useState, useEffect, useCallback } from 'react';
import { Data, getComparator, Order } from './utils/sortData';
import { useAppDispatch, useAppSelector } from '../../Redux/index';
import { getAllSupplies } from '../../Redux/TableSupplies/TableSupplies';

const TableInformation = () => {
  const dispatch = useAppDispatch();
  const {
    data: supplies,
    loading,
    error,
  } = useAppSelector((state) => state.dataSupplies);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('idSuministro');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const initSupplies = useCallback(async () => {
    await dispatch(getAllSupplies());
  }, [dispatch]);

  useEffect(() => {
    initSupplies();
  }, []);

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
      const newSelected = supplies.map((supplie) => supplie.idSuministro);
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
              rowCount={supplies.length}
            />
            <Divider variant="middle" />
            <TableBody>
              {supplies
                .slice()
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((supplie, index) => {
                  const isItemSelected = isSelected(supplie.idSuministro);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  let total =
                    parseFloat(supplie.valorUnitarioSuminstro) *
                    parseFloat(supplie.cantidadSuministro);
                  return (
                    <TableRow
                      sx={{
                        minHeight: 50,
                        maxHeight: 50,
                        overflow: 'hidden',
                      }}
                      hover
                      onClick={(event) =>
                        handleClick(event, supplie.idSuministro)
                      }
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={supplie.idSuministro}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="center"
                      >
                        {supplie.idSuministro}
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={supplie.catSuministro.descripcionCatSum}
                          color="primary"
                          size="medium"
                        />
                      </TableCell>
                      <TableCell align="center">
                        {supplie.cantidadSuministro}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          whiteSpace: 'normal',
                          wordWrap: 'break-word',
                        }}
                      >
                        {supplie.descripcionSuministro}
                      </TableCell>
                      <TableCell align="center">
                        {supplie.valorUnitarioSuminstro}
                      </TableCell>
                      <TableCell align="center">{total}</TableCell>
                      <TableCell align="center">
                        {supplie.estado.descripcionEstado}
                      </TableCell>
                      <TableCell align="center">
                        {supplie.donacionSuministro}
                      </TableCell>
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
          count={supplies.length}
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
