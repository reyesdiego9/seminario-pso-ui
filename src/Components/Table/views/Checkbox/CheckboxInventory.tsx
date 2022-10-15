import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import React from 'react';

const CheckboxInventory = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
    </FormGroup>
  );
};

export default CheckboxInventory;
