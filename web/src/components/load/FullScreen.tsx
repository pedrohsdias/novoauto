import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {ReactNode} from "react";

interface LoadFullScreenProps {
  isOpen: boolean;
  message?: ReactNode
}

export default function LoadFullScreen({isOpen=false,message}:LoadFullScreenProps) {

  return (
    <div>
      <Backdrop
        sx={(theme) => ({
          color: '#fff',
          zIndex: theme.zIndex.drawer + 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'left',
        })}
        open={isOpen}
      >
        <CircularProgress color="inherit" />
        {message}
      </Backdrop>
    </div>
  );
}