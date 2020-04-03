import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyDetailComponent } from './policy-detail/policy-detail.component';
import { PolicySummaryComponent } from './policy-summary/policy-summary.component';
import { PolicyComponent } from './policy/policy.component';
import { BillingDetailComponent } from './billing-detail/billing-detail.component';


const routes: Routes = [
  {
    path: '',
    component: PolicyDetailComponent
  },
  {
    path: 'PolicySummary',
    component: PolicySummaryComponent
  },
  {
    path: 'Policy',
    component: PolicyComponent
  },
  {
    path:'billingDetail',
    component:BillingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
