import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Textos y Flechas',
            icon: 'pi pi-fw pi-bolt',
            routerLink: 'basic',
          },
          { 
            label: 'Numeros',
            icon: 'pi pi-fw pi-bolt',
            routerLink: 'numbers' },
          {
            label: 'No Comunes',
            icon: 'pi pi-fw pi-bolt',
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: 'Pipes de Personalisados',
        icon: 'pi pi-fw pi-sun',
        items: [
          { 
            label: 'Otro documento',
            icon: 'pi pi-fw pi-sun',
            routerLink: 'order',
          }
        ],
      },
    ];
  }
}
