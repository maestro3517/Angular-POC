import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyDetailComponent } from './policy-detail/policy-detail.component';


const routes: Routes = [
  {
    path:'',
    component:PolicyDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
