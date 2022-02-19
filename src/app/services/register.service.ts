import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  url = 'http://restapi.adequateshop.com/api/authaccount/registration';

  register(data: any) {
    return this.http.post(this.url, data);
  }
}
