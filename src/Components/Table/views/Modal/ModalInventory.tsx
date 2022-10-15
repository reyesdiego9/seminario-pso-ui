import { Modal, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
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

  return (
    <Modal
      open={toggle}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {configModal?.fields &&
          configModal?.fields.map((field: any, index: number) => (
            <FactoryModal key={`${field.name}-${index}`} data={field} />
          ))}
      </Box>
    </Modal>
  );
};

export default ModalInventory;
