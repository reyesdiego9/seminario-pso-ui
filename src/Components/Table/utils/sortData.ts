export interface Data {
  id_inventario: number;
  categoria: string;
  cantidad: number;
  nombre_producto: string;
  descripcion_producto: string;
  valor_unitario: number;
  total: number;
  activo_baja: string;
  donacion: string;
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
    id: 'id_inventario',
    numeric: true,
    disablePadding: true,
    label: 'Id',
  },
  {
    id: 'categoria',
    numeric: false,
    disablePadding: false,
    label: 'Categoria',
  },
  {
    id: 'cantidad',
    numeric: false,
    disablePadding: false,
    label: 'Cantidad',
  },
  {
    id: 'nombre_producto',
    numeric: false,
    disablePadding: false,
    label: 'Nombre',
  },
  {
    id: 'descripcion_producto',
    numeric: false,
    disablePadding: false,
    label: 'Descripción',
  },
  {
    id: 'valor_unitario',
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
    id: 'activo_baja',
    numeric: false,
    disablePadding: false,
    label: 'Activo/Baja',
  },
  {
    id: 'donacion',
    numeric: false,
    disablePadding: false,
    label: 'Donacion',
  },
  {
    id: 'ubicacion',
    numeric: false,
    disablePadding: false,
    label: 'Ubicacion',
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
