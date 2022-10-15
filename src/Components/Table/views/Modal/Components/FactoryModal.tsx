import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../../Redux';
import InputInventory from '../../Input/InputInventory';

const FactoryModal = (props: any) => {
  const { data, dataInfo } = props;
  const { dataSelected } = useAppSelector((state) => state.dataSupplies);

  switch (data.type) {
    case 'text':
      return (
        <InputInventory
          name={data.name}
          description={data.description}
          type="text"
          dataInfo={dataSelected[data.value]}
        />
      );
    case 'number':
      return (
        <InputInventory
          name={data.name}
          description={data.description}
          type="number"
          dataInfo={dataSelected[data.value]}
        />
      );
    case 'checkbox':
      return <p>Holas</p>;
    default:
      return <div>Reload...</div>;
  }
};

export default FactoryModal;
