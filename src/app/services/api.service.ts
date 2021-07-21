import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postData(body, url): Observable<any> {
    return this.http.post(url, body.params, body.Options);
  }

  getData(url, options){
    return this.http.get(url, options);
  }

}
