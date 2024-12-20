import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface TableTitleProps {
  titulo:string;
}
export default function MyTableTitle({ titulo }:TableTitleProps) {
  return (
    <Toolbar
      sx={[{pl: { sm: 2 },pr: { xs: 1, sm: 1 },},]}
    ><Typography
      sx={{ flex: '1 1 100%' }}
      variant="h6"
      id="tableTitle"
      component="div"
    >
      {titulo}
    </Typography>
    
    </Toolbar>
  )
}