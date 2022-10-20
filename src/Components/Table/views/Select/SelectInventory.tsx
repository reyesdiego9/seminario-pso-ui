import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { isMuiElement } from '@mui/material';

const SelectInventory = (props: any) => {
  const { api, label, name } = props;
  const [data, setData] = useState('');
  const [selects, setSelects] = useState<any[] | any>([]);
  useEffect(() => {
    (async () => {
      const response = await fetchData();
      console.log(response);
    })();
  }, []);

  const fetchData = async () => {
    const res = axios
      .get(`http://localhost:8080/${api}`)
      .then((response) => {
        const dataSelect = response.data.body;
        dataSelect.forEach((data) => {
          Object.keys(data).forEach(function (key, index: any) {
            if (index === 0) {
              data['id'] = data[key];
              delete data[key];
            } else if (index === 1) {
              data['value'] = data[key];
              delete data[key];
            }
          });
        });

        console.log(dataSelect);
        setSelects(dataSelect);
        return setSelects;
      })
      .catch(console.error);
    return JSON.stringify(res);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value as string);
    console.log(data);
  };

  return (
    <>
      <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-select-small">{label}</InputLabel>
        <Select
          required
          labelId="demo-select-small"
          id="demo-select-small"
          value={data}
          label={label}
          name={name}
          onChange={handleChange}
        >
          {selects.map((select) => (
            <MenuItem key={select.id} value={select.id.toString()}>
              {select.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectInventory;
