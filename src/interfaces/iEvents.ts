import { iFriends } from './iFriends';
import { iDestination } from './iDestination';

export interface iEvents {
  id: number,
  name: string,
  image: string,
  data: string,
  idDestination: iDestination['id'],
  idFriends: iFriends['id'][],
}