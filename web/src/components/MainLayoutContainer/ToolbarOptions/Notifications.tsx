import * as React from 'react';
import {Badge} from "@mui/material";
import {NotificationsActive} from "@mui/icons-material";

export default function Notifications() {

  return (
    <>
      <Badge badgeContent={4} color="secondary">
        <NotificationsActive color="action" />
      </Badge>
    </>
  );
}
