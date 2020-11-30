import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomepageModule} from './homepage/homepage.module';
import {ManageProductModule} from './manage-product/manage-product.module';
import {TransactionManagementModule} from './transaction-management/transaction-management.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    ManageProductModule,
    TransactionManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
