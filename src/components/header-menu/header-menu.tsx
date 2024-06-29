import React from 'react';
import { useNavigate } from 'react-router';

import { Button } from '@mui/material';

export default function HeaderMenu() {
  const navigate = useNavigate();
  const onHandleMove = (url: string) => navigate(url);

  return (
    <>
      <Button
        onClick={() => onHandleMove('/')}
      >
        Home
      </Button>
      <Button
        onClick={() => onHandleMove('/kit')}
      >
        Kit
      </Button>
    </>
  );
}
