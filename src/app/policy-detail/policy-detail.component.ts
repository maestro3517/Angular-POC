import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.scss']
})
export class PolicyDetailComponent implements OnInit {

  PolicyNumber = '';

  CompanyCode = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  search() {
    this.router.navigate(['/Policy']);
  }

}
