import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PolicyComponent implements OnInit {

  links = ['Policy Summary', 'Billing Details'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
