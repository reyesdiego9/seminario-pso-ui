import { FormControl, TextField } from '@mui/material';
import React from 'react';

interface inputInventoryInterface {
  name: string;
  description: string;
  type: 'text' | 'number';
  dataInfo: any;
}

const InputInventory = (props: inputInventoryInterface) => {
  const { name, description, type, dataInfo = '' } = props;
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <TextField
        color="secondary"
        name={name}
        id="outlined-input"
        label={description}
        type={type}
        defaultValue={dataInfo}
      />
    </FormControl>
  );
};

export default InputInventory;
