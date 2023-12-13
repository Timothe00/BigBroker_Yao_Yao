import { Broker } from './../../model/broker.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = "http://localhost:3000/broker";

  constructor(private http: HttpClient) { }

  getAllBrokersOnServer(): Observable<Broker[]> {
    
    return this.http.get<Broker[]>(this.apiUrl);
  }

}

