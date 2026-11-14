import { Computer } from './computer.model';
import { User } from './user.model';

export interface Booking {
    id: string;
    computer: Computer;
    user: User;
    startAt: string;
    endAt: string;
    status: string;
    createdAt: string;
}