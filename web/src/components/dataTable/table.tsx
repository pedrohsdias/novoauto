import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import MyTableHead from '@/components/dataTable/TableHead';
import MyTableTitle from '@/components/dataTable/TableTitle';
import { headerCell, order, RowData } from '@/components/dataTable/table.types';
import { useEffect, useState } from 'react';
import { useAxios } from '@/hooks/useAxios.hook';



interface DataTableProps {
  urlPath: string;
  headCells: headerCell[]
  actionEdit: boolean;
  actionDelete: boolean;
}
export default function DataTable({urlPath,headCells,actionEdit,actionDelete }: DataTableProps) {
  const [order, setOrder] = useState<order>('asc');
  const [orderBy, setOrderBy] = useState<string>('');
  const [rows, setRows] = useState<RowData[]>([])
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const api = useAxios()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(urlPath, {params:{
          rowsPerPage:rowsPerPage,
          page:page,
            }
        });
        setRows(response.data)
        console.log(response)
        // Lógica adicional com a resposta, se necessário
      } catch (error) {
        console.error("Erro ao buscar os dados", error);
      }
    };
    
    fetchData();
  }, [rowsPerPage, page]);
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };
  
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2,}}>
        <MyTableTitle titulo={'Titulo'}/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <MyTableHead
              order={order}
              headerCells={headCells}
              orderAsc={()=>{}}
              orderDesc={()=>{}}
              orderBy={orderBy}
              hasOptions={actionEdit || actionDelete}/>
            <TableBody>
              {rows.length>0 ? rows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.index}
                    sx={{ ml:5, mr:2 }}
                  >
                    {headCells.map((head)=>{
                      return (
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          key={`${row.index}_${head.id}`}
                        >
                          {row[head.id]}
                        </TableCell>
                      )
                    })}
                    
                    <TableCell align="center">
                      Nenhum dado encontrado.
                    </TableCell>
                  </TableRow>
                );
              }) : (
                <TableRow>
                  {(actionEdit || actionDelete) &&
                    <TableCell colSpan={headCells.length} align="center">
                      {actionEdit && <></>}
                      {actionDelete && <></>}
                    </TableCell>
                  }
          </TableRow>
          )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[20, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}