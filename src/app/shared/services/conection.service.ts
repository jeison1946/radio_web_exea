import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {


  constructor(private http: HttpClient) { }

  getMp3StreamTitle(streamingUrl:any, interval:any, offset = 0) {
    let url = `${environment.apiUrl}?url=${streamingUrl}`;

    return this.http.get(url);
  }
}
