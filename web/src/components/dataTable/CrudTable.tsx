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
import {headerCell, order, RowData} from '@/components/dataTable/table.types';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {Search} from "@mui/icons-material";
import {getPropertyByPath} from "@/services/utilService";

interface DataTableProps {
  titulo: string;
  listar: (
    page: number,
    rowsPerPage: number,
    orderBy: string,
    order: order,
    filter: string | null
  ) => Promise<RowData[]>;
  addTextButton: string;
  headCells: headerCell[];
  pathToEdit:string | null;
  pathToCreate:string | null;
  handleDelete:(id: string) => void | null;
}

export default function CrudDataTable({titulo,listar,headCells,pathToEdit, pathToCreate, handleDelete, addTextButton = 'Adicionar'}: DataTableProps) {
  const [order, setOrder] = useState<order>('asc');
  const [orderBy, setOrderBy] = useState<string>('');
  const [rows, setRows] = useState<RowData[]>([])
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [filter, setFilter] = useState<string|null>(null);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const hasOptions = pathToEdit !== null && handleDelete !==null;
  const tableSize: "small" | "medium" = dense ? "small" : "medium";

  const fetchData = async () => {
    try {
      const response = await listar(page,rowsPerPage,orderBy,order,filter)
      setRows(response);
    } catch (error) {
      console.error("Erro ao buscar os dados", error);
    } finally {
    }
  };

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

  useEffect(() => {
    fetchData();
  }, [rowsPerPage, page]);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2,}}>
        <Grid container spacing={2} >
          <Grid size={6}  >
            <MyTableTitle titulo={titulo} pathToCreate={pathToCreate} addTextButton={addTextButton}/>
          </Grid>
          <Grid  size={6} >
            <FormControl variant="filled" fullWidth sx={{pt:1,pr:1}} >
              <InputLabel htmlFor="outlined-filter">Filtrar</InputLabel>
              <FilledInput
                fullWidth
                size="small"
                id="outlined-filter"
                label="Filtrar"
                value={filter || ''}
                onChange={(e) => setFilter(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Pesquisar"
                      onClick={fetchData}
                      edge="end"
                    >
                      <Search />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={tableSize}
          >
            <MyTableHead
              order={order}
              headerCells={headCells}
              orderAsc={()=>{}}
              orderDesc={()=>{}}
              orderBy={orderBy}
              hasOptions ={hasOptions}
            />
            <TableBody>
              {rows.length > 0 ? (
                rows.map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.id || index}
                      sx={{ ml: 5, mr: 2 }}
                    >
                      {headCells.map((head) => (
                        <TableCell
                          component="td"
                          id={labelId}
                          scope="row"
                          key={`${row.id || index}_${head.id}`}
                        >
                          {getPropertyByPath(row,head.id)}
                        </TableCell>
                      ))}
                      <TableCell
                        id={labelId}
                        scope="row"
                        align={"center"}
                        key={`${row.id || index}_options`}
                        >
                      {hasOptions && (
                        <IconButton aria-label="Example">
                          <FontAwesomeIcon icon={faEdit} />
                        </IconButton>
                      )}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={headCells.length+hasOptions}
                    align="center"
                    key={`emptytable`} // Está estático, pode ser alterado para algo mais único
                  >
                    Nenhum dado encontrado.
                  </TableCell>
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
        label="Exibição Compacta"
      />
    </Box>
  );
}