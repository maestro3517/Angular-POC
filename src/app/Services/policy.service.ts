import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  userURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getPolicy(): Observable<any> {
    return this.http.get(this.userURL);
  }
}
