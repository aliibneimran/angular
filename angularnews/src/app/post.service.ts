import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'http://localhost/wdpf55_angular/angularnews/api';
  constructor(private http: HttpClient) { }

                  
getAll() {
  return this.http.get(`${this.baseUrl}/newslist.php`).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}


}