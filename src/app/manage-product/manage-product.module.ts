import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListManageProductComponent } from './list-manage-product/list-manage-product.component';



@NgModule({
    declarations: [DetailProductComponent, CreateProductComponent, EditProductComponent, ListManageProductComponent],
  exports: [
    DetailProductComponent,
    CreateProductComponent,
    EditProductComponent,
    ListManageProductComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ]
})
export class ManageProductModule { }
