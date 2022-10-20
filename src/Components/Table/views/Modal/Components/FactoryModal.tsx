import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../../Redux';
import InputInventory from '../../Input/InputInventory';
import SelectInventory from '../../Select/SelectInventory';

const FactoryModal = (props: any) => {
  const { data, dataInfo } = props;
  const { dataSelected } = useAppSelector((state) => state.dataSupplies);
  console.log('dataInfo', dataInfo);
  switch (data.type) {
    case 'text':
      return (
        <InputInventory
          name={data.name}
          description={data.description}
          type="text"
          dataInfo={dataSelected[data.value]}
          readonly={data.readonly}
        />
      );
    case 'number':
      return (
        <InputInventory
          name={data.name}
          description={data.description}
          type="number"
          dataInfo={dataSelected[data.value]}
          readonly={data.readonly}
        />
      );
    case 'hidden':
      return (
        <InputInventory
          name={data.name}
          description={data.description}
          type="hidden"
          dataInfo={dataSelected[data.value]}
          readonly={data.readonly}
        />
      );
    case 'select':
      return (
        <SelectInventory
          api={data.api}
          label={data.description}
          name={data.name}
        />
      );
    case 'checkbox':
      return <p>Holas</p>;
    default:
      return <div>Reload...</div>;
  }
};

export default FactoryModal;
