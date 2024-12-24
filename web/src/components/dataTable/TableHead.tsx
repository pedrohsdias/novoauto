import * as React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import {visuallyHidden} from '@mui/utils';
import {headerCell, order} from '@/components/dataTable/table.types';

interface TableHeadProps {
  orderAsc: (fieldToOrder: string) => void;
  orderDesc: (fieldToOrder: string) => void;
  order: order;
  orderBy: string;
  headerCells: headerCell[];
  hasOptions: boolean;
}

export default function MyTableHead({orderAsc, orderDesc, order, orderBy, headerCells,hasOptions}: TableHeadProps) {

  return (
    <TableHead>
      <TableRow>
        {headerCells.map((cell:headerCell) => (
          <TableCell
            key={cell.id}
            align={cell.numeric ? 'right' : 'left'}
            padding={cell.disablePadding ? 'none' : 'normal'}
            sortDirection={order === cell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === cell.id}
              direction={orderBy === cell.id ? order : 'asc'}
              onClick={() => order === 'desc' ? orderDesc(cell.id) : orderAsc(cell.id)}
            >
              <strong>{cell.label}</strong>
              {orderBy === cell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'Ordem Decrescente' : 'Ordem Crescente'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {hasOptions &&  <TableCell
          padding={'normal'}
          align="center"
        > <strong>Opções</strong> </TableCell>}
      </TableRow>
    </TableHead>
  );
}