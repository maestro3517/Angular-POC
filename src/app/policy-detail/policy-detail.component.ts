import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from '../Services/policy.service';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.scss']
})
export class PolicyDetailComponent implements OnInit {

  Search = {} as any;

  constructor(private router: Router, private policy: PolicyService) { }

  ngOnInit(): void {
  }


  search() {
    console.log(this.Search);

    this.policy.getPolicy()
      .subscribe(data => {
        console.log(data);
      });

    this.router.navigate(['/Policy']);
  }

}
