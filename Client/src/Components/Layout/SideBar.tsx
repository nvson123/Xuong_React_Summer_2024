// src/components/Admin/Sidebar.tsx
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { ListAlt, AddCircle, Dashboard } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: 240, backgroundColor: '#f4f4f4', height: '100vh', padding: 20 }}>
      <List>
        <ListItem button component={Link} to="/admin">
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/products">
          <ListItemIcon><ListAlt /></ListItemIcon>
          <ListItemText primary="Product List" />
        </ListItem>
        <ListItem button component={Link} to="/admin/product-add">
          <ListItemIcon><AddCircle /></ListItemIcon>
          <ListItemText primary="Add Product" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
