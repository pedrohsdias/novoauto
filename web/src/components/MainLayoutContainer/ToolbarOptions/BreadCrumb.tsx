import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

export default function MainBreadcrumb() {
  const router = useRouter();
  const { pathname } = router;
  
  // Divide a rota atual em segmentos para criar os breadcrumbs
  const pathnames = pathname.split('/').filter((x) => x); // Remove partes vazias do caminho
  
  return (
    <Breadcrumbs aria-label="breadcrumb"  sx={{ color: 'white' }}>
      <Link underline="hover" color="inherit" href="/">
        <HomeIcon/>
      </Link>
      
      {/* Gera links para cada parte da rota */}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1; // Verifica se é o último breadcrumb
        const to = `/${pathnames.slice(0, index + 1).join('/')}`; // Constrói a URL até o ponto atual
        
        return last ? (
          <Typography key={to} color="text.primary"  sx={{ color: 'white' }}>
            {value.charAt(0).toUpperCase() + value.slice(1)} {/* Capitaliza a primeira letra */}
          </Typography>
        ) : (
          <Link underline="hover" color="inherit" href={to} key={to}  sx={{ color: 'white' }}>
            {value.charAt(0).toUpperCase() + value.slice(1)} {/* Capitaliza a primeira letra */}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
