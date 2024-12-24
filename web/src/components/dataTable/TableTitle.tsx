import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Link from '@mui/material/Link';
import {Button} from '@mui/material';

interface TableTitleProps {
  titulo: string;
  addTextButton: string;
  pathToCreate?: string | null;
}

export default function MyTableTitle({ titulo, pathToCreate = null,addTextButton = 'Adicionar' }: TableTitleProps) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        gap: 2,
        alignItems: 'center'
      }}
    >
      <Typography
        variant="h5"
        id="tableTitle"
        component="div"
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {titulo}
      </Typography>

      {pathToCreate !== null && (
        <Link underline="none" href={pathToCreate} sx={{ alignItems: 'center' }}>
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              textTransform: 'none',
              backgroundColor: 'primary.main',
              ':hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            {addTextButton}
          </Button>
        </Link>
      )}
    </Toolbar>
  );
}
