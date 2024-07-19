import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = ({ onMenuClick }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          E-commerce
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{ backgroundColor: 'white', borderRadius: 1, mr: 2 }}
        />
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/login" color="inherit">Login</Button>
        <Button component={Link} to="/register" color="inherit">Register</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
