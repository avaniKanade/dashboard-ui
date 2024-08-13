import React from 'react';
import { Grid, Box, CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import ActivityChart from './components/ActivityChart';
import RecentOrders from './components/RecentOrders';
import CustomerFeedback from './components/CustomerFeedback';
import NetProfit from './components/NetProfit';
import Navbar from './components/Navbar';
import GoalsList from './components/GoalsList';

function App() {
  const sidebarWidth = 72;

  return (
    <Box sx={{ backgroundColor: '#1a1a1a', padding: 0, minHeight: '100vh', display: 'flex' }}>
      <CssBaseline />
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
          borderRadius: 0,
          backgroundColor: '#1a1a1a',
        }}
      >
        <Box sx={{ 
          width: sidebarWidth, 
          position: 'fixed', 
          top: 0,
          left: 0,
          height: '100vh',
          backgroundColor: '#202028',
        }}>
          <Sidebar />
        </Box>
        
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            padding: 3,
            display: 'flex', 
            flexDirection: 'column', 
            marginLeft: `${sidebarWidth}px`,
          }}
        >
          <Box sx={{ 
            position: 'fixed', 
            top: 0, 
            left: `${sidebarWidth}px`, 
            right: 0, 
            zIndex: 1000, 
            backgroundColor: '#202028', 
            padding: 2, 
            borderBottom: '1px solid #333',
          }}>
            <Navbar />
          </Box>

          <Box sx={{ paddingTop: '60px', width: '100%' }}>
            <Header />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} lg={2}>
                <SummaryCard
                  title="Total Orders"
                  value="75"
                  iconId="basket2"
                  percentage={3}
                  isIncrease={true}
                />
              </Grid>
              <Grid item xs={12} sm={4} lg={2}>
                <SummaryCard
                  title="Total Delivered"
                  value="70"
                  iconId="shoppingBag"
                  percentage={3}
                  isIncrease={false}
                />
              </Grid>
              <Grid item xs={12} sm={4} lg={2}>
                <SummaryCard
                  title="Total Cancelled"
                  value="05"
                  iconId="shoppingBagCanceled"
                  percentage={3}
                  isIncrease={true}
                />
              </Grid>
              <Grid item xs={12} sm={4} lg={2}>
                <SummaryCard
                  title="Total Revenue"
                  value="$12k"
                  iconId="revenue"
                  percentage={3}
                  isIncrease={false}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <NetProfit
                  title="Net Profit"
                  value="$6759.25"
                  percentage={3}
                  isIncrease={true}
                  goalCompleted={70}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={8}>
                <ActivityChart />
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <GoalsList />
              </Grid>
              <Grid item xs={12} sm={6} lg={8}>
                <RecentOrders />
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <CustomerFeedback />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
