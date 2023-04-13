import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesProductsComponent } from './pages-products/pages-products.component';

const routes: Routes = [
  {
    path:'',
    component: PagesProductsComponent,
    outlet: 'child', 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
