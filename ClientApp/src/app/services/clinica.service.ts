import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type NewType = Observable<Object>;

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private baseUrl = 'https://localhost:5001/api/clinicas'

  constructor(private httpClient: HttpClient) { }

  getClinicas(){
    return this.httpClient.get('/api/clinicas');
  }

  createClinica(clinica: Object): Observable<Object> {
    return this.httpClient.post('/api/clinicas', clinica);
  }
}
