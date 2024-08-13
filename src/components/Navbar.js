import React from 'react';
import { Box, Avatar, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const searchBoxWidth = '600px';

  const haloAndIconColor = '#555';
  const offWhiteStrokeColor = '#d1d1d1';

  const haloStyle = {
    backgroundColor: haloAndIconColor,
    borderRadius: '50%',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const iconStyle = {
    color: haloAndIconColor,
    fontSize: '24px',
    stroke: offWhiteStrokeColor,
    strokeWidth: '1px',
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: '#7289da',
    borderRadius: '50%',
    position: 'absolute',
    top: '10px',
    right: '10px',
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#333', borderRadius: 2, paddingX: 2, marginLeft: 2, width: searchBoxWidth }}>
        <IoSearchOutline style={{ color: '#aaa' }} />
        <InputBase
          placeholder="Search"
          sx={{ marginLeft: 1, color: 'white', width: '100%' }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={haloStyle}>
          <MailIcon sx={iconStyle} />
        </Box>
        <Box sx={haloStyle}>
          <SettingsIcon sx={iconStyle} />
        </Box>
        <Box sx={haloStyle} position="relative">
          <NotificationsIcon sx={iconStyle} />
          <Box sx={dotStyle} />
        </Box>
        <Avatar alt="User Avatar" src="/userface.png" sx={{ width: 40, height: 40 }} />
      </Box>
    </Box>
  );
};

export default Navbar;
