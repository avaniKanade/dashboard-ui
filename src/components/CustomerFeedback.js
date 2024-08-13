import React from 'react';
import { Paper, Box, Typography, List, ListItem, Avatar, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      avatar: 'Jenny',
      name: 'Jenny Wilson',
      feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      rating: 4,
    },
    {
      avatar: 'Dianne',
      name: 'Dianne Russell',
      feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
      rating: 5,
    },
    {
      avatar: 'Devon',
      name: 'Devon Lane',
      feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and very generous portions. Loved it!',
      rating: 4,
    },
  ];

  const nameFontSize = '16px'; 
  const feedbackFontSize = '12px'; 

  return (
    <Paper style={{ padding: 20, backgroundColor: '#1a1a1a', color: 'white', borderRadius: 10 }}>
      <Typography variant="h6" gutterBottom>
        Customer Feedback
      </Typography>
      <List>
        {feedbacks.map((feedback, index) => (
          <React.Fragment key={index}>
            <ListItem disableGutters>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                  <Avatar src={`/${feedback.avatar}.png`} sx={{ marginRight: '8px' }} />
                  <Typography variant="h6" sx={{ lineHeight: '1.2', fontSize: nameFontSize }}>
                    {feedback.name}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ marginTop: '4px' }}>
                  {Array(feedback.rating).fill().map((_, i) => (
                    <StarIcon key={i} style={{ color: "#ffc107" }} />
                  ))}
                </Box>
                <Typography style={{ color: '#B0B0B0', marginTop: '8px', fontSize: feedbackFontSize }}>
                  {feedback.feedback}
                </Typography>
              </Box>
            </ListItem>
            {index < feedbacks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default CustomerFeedback;
