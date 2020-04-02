import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyDetailComponent } from './policy-detail/policy-detail.component';
import { PolicySummaryComponent } from './policy-summary/policy-summary.component';


const routes: Routes = [
  {
    path: '',
    component: PolicyDetailComponent
  },
  {
    path: 'PolicySummary',
    component: PolicySummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
