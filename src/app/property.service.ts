import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private url = 'localhost:3001/api/propiedades';

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<any> {
    return this.http.get(this.url);
  }

  getAllApartments(): Observable<any> {
    return this.http.get(this.url + '/aptos');
  }

  getAllHouses(): Observable<any> {
    return this.http.get(this.url + '/casas');
  }

  getPropertyById(propertyId): Observable<any> {
    return this.http.get(this.url + '/' + propertyId);
  }


}
