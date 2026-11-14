import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Office } from '../models/office.model';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/offices';

  private headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa('admin:admin123')
  });

  createOffice(office: { name: string; address: string }): Observable<string> {
    return this.http.post<string>(this.apiUrl, office, {
      headers: this.headers
    });
  }
  
  getAllOffices(): Observable<Office[]> {
    return this.http.get<Office[]>(this.apiUrl, {
      headers: this.headers
    });
  }

}