import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.scss']
})
export class PolicyDetailComponent implements OnInit {

PolicyNumber=""

CompanyCode=""

  constructor() { }

  ngOnInit(): void {
  }

}
