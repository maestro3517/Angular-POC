import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicyDetailComponent } from './policy-detail/policy-detail.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolicySummaryComponent } from './policy-summary/policy-summary.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PolicyComponent } from './policy/policy.component';
import { BillingDetailComponent } from './billing-detail/billing-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    PolicyDetailComponent,
    PolicySummaryComponent,
    PolicyComponent,
    BillingDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    FormsModule,
    MatButtonModule,
    MatTabsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
