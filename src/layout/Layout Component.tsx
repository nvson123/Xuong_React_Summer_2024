import React from 'react';
import { Container, Box } from '@mui/material';
import Footer from '../pages/Footer';
import Header from '../pages/Header';


const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
