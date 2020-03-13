import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProperty } from './models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
   // private url = 'assets/data/properties.json';
  private url = 'localhost:3001/api/propiedades';

  constructor(private http: HttpClient) { }

  getProperties(): Observable<IProperty[]> {
    return this.http.get<IProperty[]>(this.url);
  }
}
