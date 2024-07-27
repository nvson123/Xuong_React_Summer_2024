import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'default.main',
        color: 'black',
        mt: 5,
        py: 3,
        boxShadow: '0 -5px 10px -5px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom textAlign="center">
              Store
            </Typography>
            <Typography variant="body2" textAlign="center">
              About Us
            </Typography>
            <Typography variant="body2" textAlign="center">
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom textAlign="center">
              Help
            </Typography>
            <Typography variant="body2" textAlign="center">
              Support
            </Typography>
            <Typography variant="body2" textAlign="center">
              FAQ
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom textAlign="center">
              Follow Us
            </Typography>
            <Box textAlign="center">
              <Link href="#" color="inherit" underline="none">
                Facebook
              </Link>
              <br />
              <Link href="#" color="inherit" underline="none">
                Twitter
              </Link>
              <br />
              <Link href="#" color="inherit" underline="none">
                Instagram
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={5}>
          <Typography variant="body2">
            © {new Date().getFullYear()} S-KEEB. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
