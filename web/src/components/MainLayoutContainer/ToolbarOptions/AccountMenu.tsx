import {Avatar, Chip, Menu, MenuItem, Tooltip} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import Divider from "@mui/material/Divider";
import {AuthContext} from "@/contexts/AuthContextType";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { tokenData, logout } = useContext(AuthContext)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    // console.info(tokenData)//todo - primeira tela o token esta bugado
  },[])
  return (<>
    <Tooltip title="Opções do usuario">
      <Chip
        onClick={handleClick}
        sx={{
          m: 2,
          color: "#fff",
          backgroundColor: "#928b8b"
        }}
        label={tokenData?.username}
      />
    </Tooltip>
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 0, sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32, height: 32, ml: -0.5, mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
    >
      <MenuItem onClick={handleClose}>
        <Avatar/> Profile
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Avatar/> My account
      </MenuItem>
      <Divider/>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small"/>
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small"/>
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={logout}>
        <ListItemIcon>
          <Logout fontSize="small"/>
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  </>)
}