import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.companies$ =this.companyService.getCompanies().delay(2000);

    // this.companyService.get
    // this.companyService.getCompanies()
    // .do(
    //   value=>console.log('value ', value)
    // )
    // .subscribe(
    //   companies => this.companies = companies,
    //   error => console.log('ERROR : ', error),
    //   () => console.log('Completed')   );
  }
}
