import React from 'react';
import { Box, Typography } from '@mui/material';

interface BannerProps {
  image: string;
  title: string;
  subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ image, title, subtitle }) => {
  return (
    <Box
      sx={{ 
        height: '350px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h4">{subtitle}</Typography>
      </Box>
    </Box>
  );
};

export default Banner;
