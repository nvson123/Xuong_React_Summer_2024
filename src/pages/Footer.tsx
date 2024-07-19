import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto', backgroundColor: '#f0f0f0' }}>
    <Typography variant="body2" color="textSecondary">
      &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
    </Typography>
    <Typography variant="body2" color="textSecondary" mt={1}>
      <Link href="/terms" color="inherit" sx={{ textDecoration: 'none', mr: 2 }}>Terms of Use</Link>
      <Link href="/privacy" color="inherit" sx={{ textDecoration: 'none' }}>Privacy Policy</Link>
    </Typography>
  </Box>
);

export default Footer;
