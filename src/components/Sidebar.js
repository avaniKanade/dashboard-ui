import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon } from '@mui/material';
import { MdHome, MdInsertChartOutlined } from "react-icons/md";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { AiOutlineWallet } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";

const Sidebar = () => {
  const iconSize = '32px';
  const selectedColor = '#7289da';
  const unselectedColor = '#a2a2a2';
  const unselectedOpacity = 0.8;

  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const iconStyle = (item) => ({
    color: selectedItem === item ? selectedColor : unselectedColor,
    fontSize: iconSize,
    opacity: selectedItem === item ? 1 : unselectedOpacity,
  });

  const listItemStyle = {
    marginTop: '20px',
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#202028',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        paddingTop: 2,
      }}
    >
      <div
        className="sidebar-avatar"
        style={{
          width: '50px',
          height: '50px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src="/logo.png" alt="Sidebar Avatar" style={{ width: '100%', height: '100%' }} />
      </div>

      <List>
        <ListItem button sx={{ justifyContent: 'center', ...listItemStyle }} onClick={() => handleItemClick('home')}>
          <ListItemIcon sx={{ minWidth: 'unset' }}>
            <MdHome style={iconStyle('home')} />
          </ListItemIcon>
        </ListItem>
        <ListItem button sx={{ justifyContent: 'center', ...listItemStyle }} onClick={() => handleItemClick('chart')}>
          <ListItemIcon sx={{ minWidth: 'unset' }}>
            <MdInsertChartOutlined style={iconStyle('chart')} />
          </ListItemIcon>
        </ListItem>
        <ListItem button sx={{ justifyContent: 'center', ...listItemStyle }} onClick={() => handleItemClick('clipboard')}>
          <ListItemIcon sx={{ minWidth: 'unset' }}>
            <HiOutlineClipboardCheck style={iconStyle('clipboard')} />
          </ListItemIcon>
        </ListItem>
        <ListItem button sx={{ justifyContent: 'center', ...listItemStyle }} onClick={() => handleItemClick('wallet')}>
          <ListItemIcon sx={{ minWidth: 'unset' }}>
            <AiOutlineWallet style={iconStyle('wallet')} />
          </ListItemIcon>
        </ListItem>
        <ListItem button sx={{ justifyContent: 'center', ...listItemStyle }} onClick={() => handleItemClick('bag')}>
          <ListItemIcon sx={{ minWidth: 'unset' }}>
            <BsBagCheck style={iconStyle('bag')} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
