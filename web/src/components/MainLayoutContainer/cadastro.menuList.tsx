import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';


export default function CadastroMenuList() {
  
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton href="/franquias">
          <ListItemIcon>
            <ApartmentIcon />
          </ListItemIcon>
          <ListItemText primary={'Franquia'} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton href="/unidades">
          <ListItemIcon>
            <HomeWorkIcon />
          </ListItemIcon>
          <ListItemText primary={'Unidades'} />
        </ListItemButton>
      </ListItem>
    </>
  );
}