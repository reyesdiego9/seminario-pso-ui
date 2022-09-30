export interface Data {
  id: number;
  codigo: string;
  categoria: string;
  cantidad: number;
  descripcion: string;
  unitValue: number;
  total: number;
  activo: string;
  donacion: number;
  ubicacion: string;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: true,
    label: 'Id',
  },
  {
    id: 'codigo',
    numeric: false,
    disablePadding: false,
    label: 'Codigo',
  },

  {
    id: 'categoria',
    numeric: false,
    disablePadding: false,
    label: 'Categoria',
  },
  {
    id: 'cantidad',
    numeric: true,
    disablePadding: false,
    label: 'Cantidad',
  },
  {
    id: 'descripcion',
    numeric: false,
    disablePadding: false,
    label: 'Descripción',
  },
  {
    id: 'unitValue',
    numeric: true,
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
    id: 'donacion',
    numeric: true,
    disablePadding: false,
    label: 'Donacion',
  },
  {
    id: 'ubicacion',
    numeric: false,
    disablePadding: false,
    label: 'Ubicación',
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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
