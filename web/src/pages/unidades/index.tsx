import React, {useEffect} from 'react';
import CrudDataTable from '@/components/dataTable/CrudTable';
import {headerCell} from '@/components/dataTable/table.types';
import useUnidades from "@/hooks/Services/UnidadeService.hook";

export default function Franquias() {
  const {listar} = useUnidades()
  const headerCell:headerCell[] =[
    {
      id: 'apelido',
      numeric: false, //default false
      disablePadding: false, //default true
      label: 'Nome',
    },
    {
      id: 'franquiador.apelido',
      numeric: false, //default false
      disablePadding: false, //default true
      label: 'Franquiador',
    },
    // {
    //   id: 'termoDtAceite',
    //   numeric: false, //default false
    //   disablePadding: false, //default true
    //   label: 'Termo de Aceite',
    // }
  ]

  useEffect(() => {

  }, []);
  return (
    <>
      <CrudDataTable
        titulo={'Unidades'}
        addTextButton = {'Adicionar Unidade'}
        listar={listar}
        headCells={headerCell}
        pathToEdit={''}
        pathToCreate={''}
        handleDelete={()=>{}}/>
    </>
  );
}