import { Workspace } from './workspace.model';

export interface Office {
    id: string;
    name: string;
    address: string;
    workspaces: Workspace[];
}