import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-summary',
  templateUrl: './policy-summary.component.html',
  styleUrls: ['./policy-summary.component.scss']
})
export class PolicySummaryComponent implements OnInit {

  links = ['Policy Summary', 'Billing Details'];
  activeLink = this.links[0];
  blue = "#9CC3D5FF";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
