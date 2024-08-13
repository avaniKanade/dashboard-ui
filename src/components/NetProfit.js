import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const NetProfit = ({ title, value, percentage, isIncrease, goalCompleted }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        borderRadius: 2,
        backgroundColor: '#202028',
        color: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        minHeight: '150px',
      }}
    >
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ color: '#b0b0b0', marginBottom: 1, fontSize: '0.7rem' }}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}
        >
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
          <FontAwesomeIcon
            icon={isIncrease ? faArrowUp : faArrowDown}
            style={{ color: isIncrease ? '#4caf50' : '#f44336', marginRight: 4 }}
          />
          <Typography variant="body2" sx={{ color: isIncrease ? '#4caf50' : '#f44336' }}>
            {percentage}%
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant="determinate"
            value={goalCompleted}
            size={100}
            thickness={6}
            sx={{
              color: goalCompleted >= 100 ? '#4caf50' : '#4a63fa',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              padding: '4px',
            }}
          >
            <Typography variant="h6" component="div" color="white" sx={{ lineHeight: 1, marginBottom: 0.5 }}>
              {goalCompleted}%
            </Typography>
            <Typography variant="caption" component="div" sx={{ lineHeight: 1, fontSize: '9px', color: '#b0b0b0', marginTop: 0.5 }}>
              Goal
            </Typography>
            <Typography variant="caption" component="div" sx={{ lineHeight: 1, fontSize: '9px', color: '#b0b0b0', marginTop: 0.5 }}>
              Completed
            </Typography>
          </Box>
        </Box>

        <Typography variant="caption" sx={{ marginTop: 2, fontSize: '9px', color: '#b0b0b0', textAlign: 'center' }}>
          * The value here has been rounded off.
        </Typography>
      </Box>
    </Box>
  );
};

export default NetProfit;
