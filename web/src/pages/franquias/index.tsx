import React, { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContextType';
import DataTable from '@/components/dataTable';
import { headerCell } from '@/components/dataTable/table.types';

export default function Franquias() {
  const { accessToken } = useContext(AuthContext);
  const headerCell:headerCell[] =[
    {
      id: 'apelido',
      numeric: false, //default false
      disablePadding: false, //default true
      label: 'Nome',
  },
    {
      id: 'tipo',
      numeric: false, //default false
      disablePadding: false, //default true
      label: 'Tipo',
    },
    {
      id: 'termoDtAceite',
      numeric: false, //default false
      disablePadding: false, //default true
      label: 'Termo de Aceite',
    }
    ]
  return (
    <>
    <DataTable urlPath={'/franquiadores'} headCells={headerCell} actionEdit={true} actionDelete={true}/>
    </>
  );
}