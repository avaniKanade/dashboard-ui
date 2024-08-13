import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { icons } from './icons';

const SummaryCard = ({ title, value, percentage, isIncrease, iconId }) => {
  const IconComponent = icons[iconId] || icons.basket;

  return (
    <Paper style={{ 
      padding: 15, 
      backgroundColor: '#202028', 
      color: 'white', 
      borderRadius: 10 
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', minHeight: '134px' }}>
        <Box
          sx={{
            position: 'relative',
            backgroundColor: '#3b3b56',
            borderRadius: 2,
            padding: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            marginBottom: 1,
          }}
        >
          <IconComponent />
        </Box>
        <Typography
          variant="body2"
          style={{ color: '#a0aec0', marginBottom: 8, fontSize: '0.7rem' }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="h4" style={{ fontWeight: 'bold', fontSize: '1.6rem', lineHeight: 1.2 }}>
            {value}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={isIncrease ? faCaretUp : faCaretDown}
              style={{
                fontSize: 14,
                color: isIncrease ? '#10b981' : '#ef4444',
                marginRight: 4,
              }}
            />
            <Typography variant="body2" style={{ color: isIncrease ? '#10b981' : '#ef4444' }}>
              {percentage}%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default SummaryCard;
