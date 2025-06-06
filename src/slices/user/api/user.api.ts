import { User } from '../types';

export async function fetchUser(): Promise<User> {
  // Giả lập API
  return {
    id: '1',
    name: 'Nguyen Van A',
    email: 'vana@example.com',
  };
}