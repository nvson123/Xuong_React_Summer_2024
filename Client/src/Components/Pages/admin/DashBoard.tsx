// src/components/Admin/AdminDashboard.tsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ProductList from './ProductList';
import Sidebar from 'src/Components/Layout/SideBar';


const AdminDashboard: React.FC = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} p={3}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Product Management
          </Typography>
          <ProductList />
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
