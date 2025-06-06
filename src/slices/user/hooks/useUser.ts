import { useState, useEffect } from 'react';
import { fetchUser } from '../api/user.api';
import { User } from '../types';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return user;
}