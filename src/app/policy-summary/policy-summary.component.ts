import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'policy-summary',
  templateUrl: './policy-summary.component.html',
  styleUrls: ['./policy-summary.component.scss']
})
export class PolicySummaryComponent implements OnInit {

  
  blue = "#9CC3D5FF";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
