import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsRoutingModule } from './products/products-routing.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./products/products-routing.module').then(m=>ProductsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
