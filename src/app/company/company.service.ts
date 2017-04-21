import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Company } from './company';

@Injectable()
export class CompanyService {

  constructor() { }

  getCompanies() : Observable<Company[]>{
    return Observable.of( [
      {id:-1, name: 'company 1', email: 'email1', phone: 123},
      {id:-2, name: 'company 2', email: 'email2', phone: 223},
    ]);
  }
}
