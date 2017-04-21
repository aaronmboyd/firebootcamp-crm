import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from './company';
import {Http, RequestOptions, Headers} from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CompanyService {

  constructor(private http: Http) { }
 
  getCompanies() : any {
    return this.http.get(`${environment.API_BASE}/company`)
    .map(response => response.json())
    .catch(this.errorHandler);
  }

  addCompany(company: Company){

    const headers = new Headers({'content-type' : 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(`${environment.API_BASE}/company`, JSON.stringify(company), options)
    .map(response => response.json())
    .catch(this.errorHandler);
  }

private errorHandler(error){
  console.error('Error : ', error);
  return Observable.throw(error);
}

}
