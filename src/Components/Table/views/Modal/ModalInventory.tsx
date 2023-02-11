import { Button } from '@mui/material';
import { Modal, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../../Redux';
import FactoryModal from './Components/FactoryModal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalInventory = (props: any) => {
  const { toggle, setOpen, configModal } = props;
  const handleClose = () => setOpen(!toggle);
  let addInventory: any = {};

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const data = e.target;
    for (let i = 0; i < data.length; i++) {
      if (typeof e.target[i].value !== 'undefined') {
        let name = e.target[i].name;
        console.log(name, e.target[i].value);
        addInventory = {
          ...addInventory,
          [name]: e.target[i].value,
        };
      }
    }
    switch (configModal.name) {
      case 'ADD_INVENTORY_DATA':
        axios
          .post('http://192.168.194.95:8080/suministros/save', addInventory, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json',
            },
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case 'RESUPPLY_INVENTORY_DATA':
        const { idsuministro } = addInventory;
        console.log(addInventory);
        await axios
          .post(
            `http://192.168.194.95:8080/inventario/add/${idsuministro}/${addInventory.cantidad}/1`,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case 'ADD_INVENTORY_SUPPLY':
        const { idCategorias } = addInventory;
        console.log(addInventory);
        await axios.post(
          `http://192.168.194.95:8080/inventario/add/${idCategorias}/${addInventory.cantidad}/1`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        break;
      case 'MANTENIMIENTO':
        console.log(addInventory);
        await axios.post(
          `http://192.168.194.95:8080/inventario/update/${addInventory.id_inventario}/${addInventory.cantidad}/${addInventory.idCategorias}`
        );

        break;
    }
  };

  return (
    <Modal
      open={toggle}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2 id="parent-modal-title">{configModal?.title}</h2>
        <p>{configModal?.subtitle}</p>
        <form action="" onSubmit={handleSubmit}>
          {configModal?.fields &&
            configModal?.fields.map((field: any, index: number) => (
              <FactoryModal key={`${field.name}-${index}`} data={field} />
            ))}
          <Button type="submit">Agregar</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalInventory;
