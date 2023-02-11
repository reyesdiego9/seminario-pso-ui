import { useState, useEffect, useCallback } from 'react';
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
import { Data, getComparator, Order } from './utils/sortData';
import { useAppDispatch, useAppSelector } from '../../Redux/index';
import {
  getAllSupplies,
  getDataById,
} from '../../Redux/TableSupplies/TableSupplies';
import ModalInventory from './views/Modal/ModalInventory';
import addInventoy from '../../config/informationType/addInventory.json';
import resupplyInventory from '../../config/informationType/resupplyInventory.json';
import agregarDatoInventario from '../../config/informationType/agregarDatoInventario.json';
import mantenimiento from '../../config/informationType/mantenimiento.json';
import InformationBox from './views/InformationBox/InformationBox';
import Navbar from './views/Navbar/Navbar';
import axios from 'axios';
import fileDownload from 'js-file-download';

interface HandelOpenInterface {
  config: any;
  idModalData: any;
}

const TableInformation = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [idModal, setIdModal] = useState(0);
  const handleOpen = (props: HandelOpenInterface) => {
    const { config, idModalData } = props;

    setConfig(config);
    setOpen(true);

    console.log('open', open);
    if (idModalData != 0) {
      console.log('estoy dentro');
      console.log('idModalData:', idModalData);
      dispatch(getDataById(idModalData));
      setIdModal(idModalData);
    }
  };
  const [configModal, setConfig] = useState('');

  const { data: supplies } = useAppSelector((state) => state.dataSupplies);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('id_inventario');
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
      const newSelected = supplies.map((supplie) => supplie.id_inventario);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handelPdf = async () => {
    return await axios
      .get('http://192.168.194.95:8080/generate/pdf', {
        responseType: 'blob',
      })
      .then((response) => fileDownload(response.data, 'filename.pdf'));
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
    <>
      <Navbar />
      <Box
        sx={{
          width: 80,
          height: 80,
        }}
      />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack spacing={4} sx={{ width: '90%' }}>
          <Box sx={{ width: '100%' }}>
            <InformationBox />
          </Box>
          <Box>
            <ButtonAction
              title="Agregar Producto"
              variant="contained"
              color="secondary"
              size="large"
              IconButton={null}
              onClick={() =>
                handleOpen({
                  config: addInventoy,
                  idModalData: 0,
                })
              }
            />
            <ButtonAction
              title="Agregar a Inventario"
              variant="contained"
              color="warning"
              size="large"
              IconButton={null}
              onClick={() =>
                handleOpen({
                  config: agregarDatoInventario,
                  idModalData: 0,
                })
              }
            />
            <ButtonAction
              title="Importar en PDF"
              variant="contained"
              color="neutral"
              size="large"
              IconButton={null}
              onClick={() => handelPdf()}
            />
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          width: 10,
          height: 10,
        }}
      />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ width: '90%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
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
                    .map((supplie: any, index: any) => {
                      const isItemSelected = isSelected(supplie.id_inventario);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          sx={{
                            minHeight: 50,
                            maxHeight: 50,
                            overflow: 'hidden',
                          }}
                          hover
                          onClick={(event) =>
                            handleClick(event, supplie.id_inventario)
                          }
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={supplie.id_inventario}
                          selected={isItemSelected}
                        >
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            align="center"
                          >
                            {supplie.id_inventario}
                          </TableCell>
                          <TableCell align="center">
                            <Chip
                              label={supplie.categoria}
                              color="primary"
                              size="medium"
                            />
                          </TableCell>
                          <TableCell align="center">
                            {supplie.cantidad}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              whiteSpace: 'normal',
                              wordWrap: 'break-word',
                            }}
                          >
                            {supplie.nombre_producto}
                          </TableCell>
                          <TableCell align="center">
                            {supplie.descripcion_producto}
                          </TableCell>
                          <TableCell align="center">
                            {supplie.valor_unitario}
                          </TableCell>
                          <TableCell align="center">{supplie.total}</TableCell>
                          <TableCell align="center">
                            {supplie.activo_baja}
                          </TableCell>
                          <TableCell align="center">
                            {supplie.donacion}
                          </TableCell>
                          <TableCell align="center">
                            {supplie.ubicacion}
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
                                onClick={() =>
                                  handleOpen({
                                    config: resupplyInventory,
                                    idModalData: supplie.id_inventario,
                                  })
                                }
                              />
                              <ButtonAction
                                title="Mantenimiento"
                                variant="contained"
                                color="warning"
                                size="large"
                                IconButton={<WarningAmberIcon />}
                                onClick={() =>
                                  handleOpen({
                                    config: mantenimiento,
                                    idModalData: supplie.id_inventario,
                                  })
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
      </Box>

      <ModalInventory
        toggle={open}
        setOpen={setOpen}
        configModal={configModal}
      />
    </>
  );
};

export default TableInformation;
