import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1a1a1a', marginBottom: 20 }}>
      <Toolbar sx={{ alignItems: 'flex-start', paddingY: 1 }}>
        <Typography variant="h5" noWrap component="div">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
