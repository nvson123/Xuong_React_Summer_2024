import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface FlashErrorProps {
  open: boolean;
  message: string;
  onClose: () => void;
  severity?: 'success' | 'error';
}

const FlashError: React.FC<FlashErrorProps> = ({ open, message, onClose, severity = 'error' }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default FlashError;
