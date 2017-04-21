import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Company } from './company';
import {Http, RequestOptions, Headers} from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CompanyService {

  constructor(private http: Http) { }

 
  getCompanies() : any { //Observable<Company[]>{
    // return Observable.of( [
    //   {id:-1, name: 'company 1', email: 'email1', phone: 123},
    //   {id:-2, name: 'company 2', email: 'email2', phone: 223},
    // ]);
    return this.http.get(`${environment.API_BASE}/company`)
    .map(response => response.json())
    .catch(this.errorHandler);
  }

private errorHandler(error){
  console.error('Error : ', error);
  return Observable.throw(error);
}

}
