import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';

import { TogleCase } from './pipe/toogle-case.pipe';
import { CanFlyPipe } from './pipe/can-fly.pipe';
import { SortByPipe } from './pipe/sort-by.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //Pipes
    TogleCase,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ],
  exports:[
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent
  ]
})
export class ProductsModule { }
