import React from 'react';
import { Box, Avatar, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';

const orders = [
  { name: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', avatar: 'Wade' },
  { name: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered', avatar: 'Jane' },
  { name: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled', avatar: 'Guy' },
  { name: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending', avatar: 'Kristin' },
  { name: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', avatar: 'Cody' },
  { name: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', avatar: 'Savannah' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return 'rgba(46, 125, 50, 0.3)';
    case 'Pending':
      return 'rgba(237, 108, 2, 0.3)';
    case 'Cancelled':
      return 'rgba(198, 40, 40, 0.3)';
    default:
      return 'rgba(85, 85, 85, 0.3)';
  }
};

const getStatusTextColor = (status) => {
  switch (status) {
    case 'Delivered':
      return '#4CAF50';
    case 'Pending':
      return '#FF9800';
    case 'Cancelled':
      return '#F44336';
    default:
      return '#BDBDBD';
  }
};

const RecentOrders = () => {
  return (
    <Box sx={{ backgroundColor: '#202028', padding: '20px', borderRadius: '12px' }}>
      <Typography variant="h6" sx={{ color: 'white', marginBottom: 2 }}>Recent Orders</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>Customer</TableCell>
              <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>Order No.</TableCell>
              <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>Amount</TableCell>
              <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell sx={{ display: 'flex', alignItems: 'center', color: '#A2A2A4', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <Avatar src={`/${order.avatar}.png`} sx={{ marginRight: 2 }} />
                  {order.name}
                </TableCell>
                <TableCell sx={{ color: '#A2A2A4', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>{order.orderNo}</TableCell>
                <TableCell sx={{ color: '#A2A2A4', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>{order.amount}</TableCell>
                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <Chip 
                    label={order.status} 
                    sx={{ 
                      backgroundColor: getStatusColor(order.status),
                      color: getStatusTextColor(order.status),
                      fontWeight: 'bold',
                      borderRadius: '8px',
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RecentOrders;
