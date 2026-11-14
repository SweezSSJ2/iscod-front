import { Office } from './office.model';
import { Computer } from './computer.model';

export interface Workspace {
    id: string;
    office: Office;
    code: string;
    name: string;
    capacity: number;
    computers: Computer[];
}