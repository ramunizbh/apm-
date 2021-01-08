import { ProducListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProducListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProducListComponent},
      {path: 'products/:id',
        canActivate: [ProductsDetailGuard],
        component: ProductDetailComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
