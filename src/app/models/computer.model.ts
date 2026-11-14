import { Workspace } from './workspace.model';

export interface Computer {
    id: string;
    workspace: Workspace;
    name: string;
}