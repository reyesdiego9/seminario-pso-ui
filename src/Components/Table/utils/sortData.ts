export interface Data {
  idSuministro: number;
  catSuministro: {
    descripcionCatSum: string;
    idCatSum: number;
  };
  cantidadSuministro: string;
  descripcionSuministro: string;
  valorUnitarioSuminstro: string;
  total: number;
  activo: {
    descripcionEstado: string;
    idEstado: number;
  };
  donacionSuministro: string;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'idSuministro',
    numeric: true,
    disablePadding: true,
    label: 'Id',
  },
  {
    id: 'catSuministro',
    numeric: false,
    disablePadding: false,
    label: 'Categoria',
  },
  {
    id: 'cantidadSuministro',
    numeric: false,
    disablePadding: false,
    label: 'Cantidad',
  },
  {
    id: 'descripcionSuministro',
    numeric: false,
    disablePadding: false,
    label: 'Descripción',
  },
  {
    id: 'valorUnitarioSuminstro',
    numeric: false,
    disablePadding: false,
    label: 'Valor Unitario',
  },
  {
    id: 'total',
    numeric: true,
    disablePadding: false,
    label: 'Total',
  },
  {
    id: 'activo',
    numeric: false,
    disablePadding: false,
    label: 'Activo/Baja',
  },
  {
    id: 'donacionSuministro',
    numeric: false,
    disablePadding: false,
    label: 'Donacion',
  },
];

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export type Order = 'asc' | 'desc';

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
