'use client';

import React from 'react';
import { useUser } from '../hooks/useUser';
import { Card, Typography } from '@mui/material';

export default function UserProfile() {
  const user = useUser();

  if (!user) return <div>Loading...</div>;

  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6">{user.name}</Typography>
      <Typography variant="body2">{user.email}</Typography>
    </Card>
  );
}