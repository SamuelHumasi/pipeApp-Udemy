import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ProductsModule } from './products/products.module';

import localesEsPE from '@angular/common/locales/es-PE' //importando para user en una pipe especifica
import { registerLocaleData } from '@angular/common';

registerLocaleData(localesEsPE)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductsModule
  ],
  providers: [
   // {provide:LOCALE_ID, useValue:'es-PE'} // formato global
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
