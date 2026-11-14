import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workspace } from '../models/workspace.model';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080';

  private headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa('admin:admin123')
  });

  getAllWorkspacesByOffice(officeId: string): Observable<Workspace[]> {
    return this.http.get<Workspace[]>(
      `${this.apiUrl}/offices/${officeId}/workspaces`,
      { headers: this.headers }
    );
  }
}