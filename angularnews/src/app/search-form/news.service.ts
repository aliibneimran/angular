import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://your-news-api-url.com'; // Replace with your actual news API URL

  constructor(private http: HttpClient) {}

  searchNews(keyword: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${keyword}`;
    return this.http.get(url);
  }
}
