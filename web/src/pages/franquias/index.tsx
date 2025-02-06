import React, {useEffect} from 'react';
import CrudDataTable from '@/components/dataTable/CrudTable';
import {headerCell} from '@/components/dataTable/table.types';
import useFranquiadores from "@/hooks/Services/FranquiadorService.hook";

export default function Franquias() {
  const {listar} = useFranquiadores()
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

  useEffect(() => {

  }, []);
  return (
    <>
    <CrudDataTable
      titulo={'Franquiadores'}
      addTextButton = {'Adicionar Franquiador'}
      listar={listar}
      headCells={headerCell}
      pathToEdit={''}
      pathToCreate={'/franquias/create'}
      handleDelete={()=>{}}/>
    </>
  );
}