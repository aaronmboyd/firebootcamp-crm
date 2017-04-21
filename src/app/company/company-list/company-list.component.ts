import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;    
  companies: Company[];

  // Using private keyword creates a class-level private variable and assign what is passed in
  // Rather than creating a new private variable and assigning manually
  constructor( private companyService : CompanyService){} 

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    // this.companies$ =this.companyService.getCompanies();
    this.companyService.getCompanies()
    .subscribe(
      companies => this.companies = companies,
      error => console.log('ERROR', error),
      () => console.log('Completed')   );
  }
}
