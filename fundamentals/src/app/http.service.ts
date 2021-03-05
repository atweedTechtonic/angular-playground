import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Injectable?
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  //create instance (dependency injection)
  constructor(private http: HttpClient) {}

  // api request
  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
