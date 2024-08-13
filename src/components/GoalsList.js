import React from 'react';
import { Box, List, ListItem, ListItemAvatar, Avatar, Typography, ListItemSecondaryAction, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MdOutlineRoomService } from "react-icons/md";
import { CiBurger } from "react-icons/ci";
import { BiTargetLock } from "react-icons/bi";

const GoalsList = () => {
  const haloStyle = {
    backgroundColor: '#555',  
    borderRadius: '50%',      
    padding: '5px',           
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box sx={{ backgroundColor: '#202028', padding: '20px', borderRadius: '12px' }}>
      <List>
        <ListItem sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#7A2B2B', width: 56, height: 56 }}> 
              <BiTargetLock style={{ color: '#FFA500', fontSize: '32px' }} />
            </Avatar>
          </ListItemAvatar>
          <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 'bold', marginLeft: 2 }}>
            Goals
          </Typography>
          <ListItemSecondaryAction>
            <Box sx={haloStyle}>
              <ChevronRightIcon style={{ color: 'white', fontSize: '24px' }} />
            </Box>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#2D3A9D', width: 56, height: 56 }}>
              <CiBurger style={{ color: '#4FAFFF', fontSize: '32px' }} />
            </Avatar>
          </ListItemAvatar>
          <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 'bold', marginLeft: 2 }}>
            Popular Dishes
          </Typography>
          <ListItemSecondaryAction>
            <Box sx={haloStyle}>
              <ChevronRightIcon style={{ color: 'white', fontSize: '24px' }} />
            </Box>
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: '#145151', width: 56, height: 56 }}>
              <MdOutlineRoomService style={{ color: '#2EC4B6', fontSize: '32px' }} />
            </Avatar>
          </ListItemAvatar>
          <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: 'bold', marginLeft: 2 }}>
            Menus
          </Typography>
          <ListItemSecondaryAction>
            <Box sx={haloStyle}>
              <ChevronRightIcon style={{ color: 'white', fontSize: '24px' }} />
            </Box>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Box>
  );
};

export default GoalsList;
