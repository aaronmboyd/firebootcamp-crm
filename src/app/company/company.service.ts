import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Company } from './company';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class CompanyService {

  constructor(private http: Http) { }
  API_BASE = 'http://firebootcamp-crma-api.azurewebsites.net/api';
 
  getCompanies() : any { //Observable<Company[]>{
    // return Observable.of( [
    //   {id:-1, name: 'company 1', email: 'email1', phone: 123},
    //   {id:-2, name: 'company 2', email: 'email2', phone: 223},
    // ]);
    return this.http.get(`${this.API_BASE}/company/`)
    .map(response => response.json)  }
}
