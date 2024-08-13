import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FormControl, MenuItem, Select, Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const [period, setPeriod] = useState('Weekly');

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const chartHeight = '300px';  

  const data = {
    labels: ['5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [5000, 8000, 6000, 7000, 4000, 9000, 12000, 15000, 11000, 8000, 6000, 7000],
        backgroundColor: '#7289da',
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 20,      
        bottom: 40,   
        left: 0,
        right: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#A2A2A4',
        },
      },
      y: {
        grid: {
          color: '#333',
        },
        ticks: {
          color: '#A2A2A4',
          beginAtZero: true,
          stepSize: 5000,
          callback: function (value) {
            return value >= 1000 ? `${value / 1000}k` : value;
          },
        },
        max: 15000,
      },
    },
  };

  return (
    <div style={{ backgroundColor: '#202028', padding: '20px', borderRadius: '12px', height: chartHeight }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: 'white', fontSize: '18px' }}> {/* Adjust fontSize */}
          Activity
        </h2>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <Select
            value={period}
            onChange={handlePeriodChange}
            sx={{
              color: '#a0aec0',
              backgroundColor: '#444',
              borderRadius: '20px',
              paddingX: '10px',
              paddingY: '2px',
              '.MuiOutlinedInput-notchedOutline': { border: 'none' },
              '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
              fontSize: '14px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            inputProps={{ 'aria-label': 'Select period' }}
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div style={{ height: `calc(${chartHeight} - 80px)` }}> 
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;
