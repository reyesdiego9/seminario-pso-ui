import { FormControl, TextField } from '@mui/material';
import React from 'react';

interface inputInventoryInterface {
  name: string;
  description: string;
  type: 'text' | 'number' | 'hidden';
  dataInfo: any;
  readonly: true | false | null;
}

const InputInventory = (props: inputInventoryInterface) => {
  const { name, description = '', type, dataInfo = '', readonly } = props;

  if (type === 'hidden') {
    return <input name={name} type={type} value={dataInfo} required />;
  } else {
    return (
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          color="secondary"
          name={name}
          label={description}
          type={type}
          defaultValue={dataInfo}
          InputProps={{
            readOnly: readonly,
          }}
          required
        />
      </FormControl>
    );
  }
};

export default InputInventory;
