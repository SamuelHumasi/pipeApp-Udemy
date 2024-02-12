import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
