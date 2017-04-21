import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyId : any;
  isNewCompany: boolean;

  companyForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = this.companyId == 'new';

    if(!this.isNewCompany){
      // load from database

    }

    this.buildForm();
  }

  buildForm(){
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['']
    });
  }

  saveCompany(){
    if(this.isNewCompany){
      this.companyService.addCompany(this.companyForm.value)
      .subscribe(() => this.router.navigateByUrl('/company/list'));
    }
  }

}
