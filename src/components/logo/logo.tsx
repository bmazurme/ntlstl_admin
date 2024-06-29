import React from 'react';
import { useNavigate } from 'react-router';

import { Button } from '@mui/material';
import { BlurOn as BlurOnIcon } from '@mui/icons-material';

export default function Logo() {
  const navigate = useNavigate();
  const onHandleMove = (url: string) => navigate(url);

  return (
    <Button
      variant="text"
      startIcon={<BlurOnIcon />}
      onClick={() => onHandleMove('/')}
    >
      [ntlstl.admin]
    </Button>
  );
}
