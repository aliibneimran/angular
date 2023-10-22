import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Car } from './car';

@Injectable({
  
  providedIn: 'root'
})
export class CarService {
  baseUrl = 'http://localhost/wdpf55_angular/cars/api';
  constructor(private http: HttpClient) { }

                  
getAll() {
  return this.http.get(`${this.baseUrl}/list`).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}
store(car: Car) {
  return this.http.post(`${this.baseUrl}/store`, { data: car }).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}
update(car: Car) {
  return this.http.put(`${this.baseUrl}/update`, { data: car });
}
}