import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunites';

  constructor(private http: HttpClient) { }

  addAdUnit(fname, lname, email,subject, message) {
    const obj = {
      fname: fname,
       lname: lname,
       email: email,
      
       subject: subject,
       message: message
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(() => console.log('Done'));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
}



}