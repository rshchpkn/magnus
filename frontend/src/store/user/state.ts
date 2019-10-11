import { User } from '../../shared/interfaces/user';

export interface UserState {
  entities: { [key: string]: User };
  currentUserId: string | null;
}