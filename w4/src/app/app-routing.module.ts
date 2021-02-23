import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductListComponent} from './product-list/product-list.component';
const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  // { path: '', component: CategoryComponent},
  { path: '', component: ProductListComponent},
  { path: 'category/:id/product-id/:id', component: ProductItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
